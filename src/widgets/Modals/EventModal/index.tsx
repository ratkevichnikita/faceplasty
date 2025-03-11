import React, {FC, useState} from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import Image from "next/image";
import {useForm} from "react-hook-form";
import Spinner from "@/widgets/Spinner";
import {registerToWebinar} from "@/shared/api";
import {nanosecondsToTime} from "@/shared/helpers";

interface ComponentProps {
  isActive: string | null
  onClose: () => void
  name: string
  image: string | null
  description: string | null
  date: string
  duration: number
  webinarId: string
}

type FormValues = {
  email: string;
  name: string;
};

const EventModal:FC<ComponentProps> = ({isActive,onClose,name, image, description, date,duration, webinarId}) => {
  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log('data',data)
    setLoading(true)
    try {
      const response = await registerToWebinar(data.email,data.name,webinarId);
      console.log('response',response)
      if(response) {
        // setAuthModal({ modalType: null, active: false })
        return
      }
      return setError('Incorrect email or password')
    } catch (error) {
      console.log('error',error)
    }
    finally {
      setLoading(false)
    }
  };

  const durationTonano = duration + '00';

  return (
    <Dialog open={!!isActive} as="div" className="relative z-10 focus:outline-none" onClose={() => onClose()}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-lato">
        <div className="flex min-h-full items-center justify-center bg-[rgba(0,0,0,0.3)]">
          <DialogPanel
            transition
            className="w-[46.88vw] rounded-[2.08vw] overflow-hidden bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <button onClick={() => onClose()} className="absolute right-[2vw] top-[2vw]">
              close
            </button>
            <div className="w-full ">
              <div className="relative w-full h-[19.48vw]">
                <Image
                  src={image ?? ''}
                  fill
                  alt="webinar cover"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-[2.08vw]">
                <div className="flex justify-between items-center">
                   <span className="block w-fit bg-purple mb-[1.04vw] text-white rounded-[2.08vw] font-medium text-[0.83vw] text-center px-[1.04vw] py-[0.31vw]">
                    {date}
                  </span>
                  <div>
                    <p className="text-[0.53vw]">Duration</p>
                    <p className="text-[0.83vw]">{nanosecondsToTime(+durationTonano)} Hour</p>
                  </div>
                </div>
                <div className="space-y-[0.52vw]">
                  <p className="text-[2.08vw] font-semibold leading-[1.2em]">{name}</p>
                  <p dangerouslySetInnerHTML={{__html: description ?? ''}} className="text-[0.83vw] leading-[1.2em]" />
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col items-center space-y-[0.63vw] w-full pt-[2.08vw]"
                >
                  {/* Email */}
                  <div className="w-full">
                    <label className="font-semibold text-[0.78vw] block mb-[0.31vw]">Your email</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email format",
                        },
                      })}
                      type="email"
                      className="w-full p-[0.83vw] text-[0.83vw] placeholder:text-[0.83vw] bg-[#E5E5E5] bg-opacity-50 rounded-[0.52vw] focus:outline-none"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-1 text-[0.78vw]">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="w-full">
                    <label className="font-semibold text-[0.78vw] block mb-[0.31vw]">Your name</label>
                    <input
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 3,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      type="password"
                      className="w-full p-[0.83vw] text-[0.83vw] placeholder:text-[0.83vw] bg-[#E5E5E5] bg-opacity-50 rounded-[0.52vw] focus:outline-none"
                      placeholder="Enter your password"
                    />
                    {errors.name && (
                      <p className="text-red-500 mt-1 text-[0.78vw]">{errors.name.message}</p>
                    )}
                  </div>
                  {error && <p className="text-red-500 mt-1 text-[0.78vw]">{error}</p>}
                  <div className="w-full text-center pt-[1.04vw]">
                    {/* Login Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-[14.84vw] flex items-center justify-center gap-[0.5vw] bg-orange text-white font-bold h-[4.17vw] rounded-full text-[0.83vw] disabled:opacity-50"
                    >
                      Register for Event
                      {loading && <Spinner variant="small" color="black" />}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default EventModal;