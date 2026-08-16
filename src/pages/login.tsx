"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  // loginSchema,
  RegistrationFormData,
  registrationSchema,
  // LoginFormData
} from "@/lib/schemas/schema";

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // const formSchema = isLogin ? loginSchema : registrationSchema;

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData >({
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const switchToLogin = () => {
    setIsLogin(true);
    setSuccessMessage("");
    clearErrors();
    reset({ username: "", email: "", password: "" });
  };

  const switchToRegister = () => {
    setIsLogin(false);
    setSuccessMessage("");
    clearErrors();
    reset({ username: "", email: "", password: "" });
  };

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      // console.log("Validated registration data:", _data);

      // Send the data to your API or server action here.
      // Example:
      // await registerUser(data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage("Registration successful!");
      reset();
    } catch {
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 p-4 md:p-6 gap-8">
        <div className="hidden md:block relative w-full min-h-[550px] rounded-2xl overflow-hidden shadow-inner">
          <Image
            src={isLogin ? "/images/girl-l.png" : "/images/girl-s.png"}
            alt="Student in classroom"
            fill
            sizes="50"
            priority
            className="object-cover transition-opacity duration-500"
          />

        </div>

        <div className="flex flex-col justify-center px-2 sm:px-6 py-4">
          <p className="text-center text-gray-700 font-medium text-sm md:text-base mb-6">
            Welcome to lorem..!
          </p>

          <div className="bg-[#A4DCDB]/40 p-1 rounded-full flex items-center max-w-xs mx-auto w-full mb-8">
            <button
              type="button"
              onClick={switchToLogin}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isLogin
                  ? "bg-[#49BBBD] text-white shadow-md"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={switchToRegister}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isLogin
                  ? "bg-[#49BBBD] text-white shadow-md"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {!isLogin && (
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email Address"
                  {...register("email")}
                  className="w-full px-5 py-3 rounded-full border border-[#49BBBD]/60 focus:border-[#49BBBD] focus:outline-none text-sm text-gray-700 placeholder-gray-300 transition-colors"
                />

                {errors.email && (
                  <p className="text-error text-xs">
                    {errors.email.message}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-1.5">
              <label
                htmlFor="username"
                className="block text-xs md:text-sm font-medium text-gray-700"
              >
                User name
              </label>

              <input
                id="username"
                type="text"
                placeholder="Enter your User name"
                {...register("username")}
                className="w-full px-5 py-3 rounded-full border border-[#49BBBD]/60 focus:border-[#49BBBD] focus:outline-none text-sm text-gray-700 placeholder-gray-300 transition-colors"
              />

              {errors.username && (
                <p className="text-xs text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-xs md:text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  {...register("password")}
                  className="w-full pl-5 pr-12 py-3 rounded-full border border-[#49BBBD]/60 focus:border-[#49BBBD] focus:outline-none text-sm text-gray-700 placeholder-gray-300 transition-colors"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-xs text-gray-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    className="rounded border-gray-300 text-[#49BBBD] focus:ring-[#49BBBD]"
                  />
                  <span>Remember me</span>
                </label>

                <Link
                  href="/forgot-password"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
            )}

            {successMessage && (
              <p className="text-sm text-green-600">{successMessage}</p>
            )}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-3 bg-[#49BBBD] hover:bg-[#3db0b2] disabled:cursor-not-allowed disabled:opacity-60 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isSubmitting
                  ? "Submitting..."
                  : isLogin
                    ? "Login"
                    : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
