import React, {FC, useState} from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import Image from "next/image";
import {useForm} from "react-hook-form";
import Spinner from "@/widgets/Spinner";
import {registerToWebinar} from "@/shared/api";
import {nanosecondsToTime} from "@/shared/helpers";
import notification from "@/widgets/Notification";

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
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(true)
    try {
      const response = await registerToWebinar(data.email,data.name,webinarId);
      if(response.success) {
        notification.open({
          title: 'Success!',
          description: 'You have successfully registered for the webinar.',
        });
        reset()
        return onClose()
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
        <div className="flex min-h-full py-[3vw] items-center justify-center bg-[rgba(0,0,0,0.3)]">
          <DialogPanel
            transition
            className="rounded-[2.08vw] bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 sm:rounded-[10.26vw]"
          >
            <div className="w-[36.88vw] relative sm:w-[88vw]">
              <button
                onClick={() => onClose()}
                className="absolute right-[-2.5vw] top-[-1.5vw] z-[10] flex items-center justify-center rounded-full bg-white size-[2.08vw] hover:bg-gray-100 transition-colors sm:right-0 sm:top-[-12.5vw] sm:size-[10.26vw] sm:rounded-[10.26vw]"
              >
                <span className="block w-[0.83vw] h-[1px] bg-black transform rotate-45 absolute sm:w-[3.83vw]" />
                <span className="block w-[0.83vw] h-[1px] bg-black transform -rotate-45 absolute sm:w-[3.83vw]" />
              </button>
              <div className="relative w-full h-[15.48vw] rounded-t-[2.08vw] overflow-hidden sm:rounded-t-[10.26vw] sm:h-[38.46vw]">
                {image && (
                  <Image
                    src={image ?? ''}
                    fill
                    alt="webinar cover"
                    className="object-cover object-top rounded-t-[2.08vw] overflow-hidden sm:rounded-t-[10.26vw]"
                  />
                )}
              </div>
              <div className="p-[1.08vw] sm:p-[3.08vw]">
                <div className="flex justify-between items-center mb-[1.04vw] sm:mb-[5.13vw]">
                   <span className="block w-fit bg-purple  text-white rounded-[2.08vw] font-medium text-[0.83vw] text-center px-[1.04vw] py-[0.31vw] sm:rounded-[10.26vw] sm:py-[1.54vw] sm:px-[5.13vw] sm:text-[3.08vw]">
                    {date}
                  </span>
                  <div>
                    <p className="text-[0.53vw] sm:text-[3.08vw]">Duration</p>
                    <p className="text-[0.83vw]  sm:text-[3.08vw]">{nanosecondsToTime(+durationTonano)} Hour</p>
                  </div>
                </div>
                <div className="space-y-[0.52vw] sm:space-y-[2.55vw]">
                  <p className="text-[1.25vw] font-semibold leading-[1.2em] sm:text-[4.10vw]">{name}</p>
                  <p dangerouslySetInnerHTML={{__html: description ?? ''}} className="text-[0.83vw] leading-[1.2em] sm:text-[3.59vw]" />
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col items-center space-y-[0.63vw] w-full pt-[1.08vw] sm:space-y-[2.56vw]"
                >
                  {/* Email */}
                  <div className="w-full relative">
                    <label className="font-semibold text-[0.78vw] block mb-[0.31vw] sm:text-[3.59vw] sm:mb-[1.54vw]">Your email</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email format",
                        },
                      })}
                      type="email"
                      className="w-full p-[0.83vw] text-[0.83vw] placeholder:text-[0.83vw] bg-[#E5E5E5] bg-opacity-50 rounded-[0.52vw] focus:outline-none sm:px-[5.13vw] sm:text-[4.10vw] sm:placeholder:text-[4.10vw] sm:rounded-[2.56vw] sm:h-[13.33vw]"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-error mt-1 text-[0.78vw] absolute right-[0.5vw] top-[-0.5vw] sm:text-[2.56vw]">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Name */}
                  <div className="w-full relative">
                    <label className="font-semibold text-[0.78vw] block mb-[0.31vw] sm:text-[3.59vw] sm:mb-[1.54vw]">Your name</label>
                    <input
                      {...register("name", {
                        required: "Name is required"
                      })}
                      type="text"
                      className="w-full p-[0.83vw] text-[0.83vw] placeholder:text-[0.83vw] bg-[#E5E5E5] bg-opacity-50 rounded-[0.52vw] focus:outline-none sm:px-[5.13vw] sm:text-[4.10vw] sm:placeholder:text-[4.10vw] sm:rounded-[2.56vw] sm:h-[13.33vw]"
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="text-error mt-1 text-[0.78vw] absolute right-[0.5vw] top-[-0.5vw] sm:text-[2.56vw]">{errors.name.message}</p>
                    )}
                  </div>
                  {error && <p className="text-error mt-1 text-[0.78vw]">{error}</p>}
                  <div className="w-full text-center pt-[1.04vw]">
                    {/* Login Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-[12.84vw] flex items-center justify-center gap-[0.5vw] transition-all duration-300 hover:bg-black hover:text-white bg-orange text-white font-bold h-[2.87vw] rounded-full text-[0.83vw] disabled:opacity-50 sm:w-[47.44vw] sm:h-[14.62vw] sm:text-[3.59vw]"
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