'use client'
import React, {useState} from 'react';
import Image from "next/image";
import BgLogin from '@/../public/images/bg-login.svg';
import {useAppStore} from "@/shared/store/AppStore";
import { useForm } from "react-hook-form";
import Link from "next/link";
import ImageLogo from "@/../public/icons/icon-logo.svg";
import IconBack from '@/../public/icons/icon-arrow-back.svg';
import IconHidePass from '@/../public/icons/icon-hide-pass.svg';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { setAuthModal } = useAppStore();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Форма отправлена:", data);
  };

  return (
    <div className="flex animate-fadeIn">
      <div className="relative h-[50vw] bg-purple w-[47.92vw] pt-[2.08vw] pl-[6.77vw]">
        <Link href="/" className="relative z-[2] ">
          <Image
            src={ImageLogo.src}
            width={ImageLogo.width}
            height={ImageLogo.height}
            alt="faceplasty logo"
            className=""
          />
        </Link>

      </div>
      <div className="pt-[8.33vw] px-[6.25vw] w-1/2">
        <div className="flex justify-between">
          <button
            className="flex items-center gap-[0.52vw] font-semibold text-[0.83vw]"
            onClick={() => setAuthModal({ modalType: null, active: false })}
          >
            <Image
              src={IconBack.src}
              width={IconBack.width}
              height={IconBack.height}
              alt="back arrow"
              className="size-[1.04vw]"
            />
            Back
          </button>
          <button
            className="text-purple uppercase font-bold text-[0.83vw] p-[0.6vw]"
            onClick={() => setAuthModal({ modalType: 'login', active: true })}
          >
            Log In
          </button>
        </div>
        <div className="pt-[2.60vw] max-w-md mx-auto">
          <p className="uppercase font-bold text-[1.35vw] mb-[1.04vw]">Create account!</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-[0.63vw] w-full "
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
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="w-full relative">
              <label className="font-semibold text-[0.78vw] block mb-[0.31vw]">Your password</label>
              <div className="w-full relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  className="w-full p-[0.83vw] text-[0.83vw] placeholder:text-[0.83vw] bg-[#E5E5E5] bg-opacity-50 rounded-[0.52vw] focus:outline-none"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-[1vw] top-1/2 -translate-y-1/2 h-full">
                  <Image
                    src={IconHidePass.src}
                    width={IconHidePass.width}
                    height={IconHidePass.height}
                    alt="back arrow"
                    className="size-[1.04vw]"
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="w-full text-center pt-[1.04vw]">
              {/* Login Button */}
              <button
                type="submit"
                className="w-full uppercase bg-orange font-bold h-[4.17vw] rounded-full text-[0.83vw]"
              >
                sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;