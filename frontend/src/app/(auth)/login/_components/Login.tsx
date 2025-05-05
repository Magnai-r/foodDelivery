"use client";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { useRef } from "react";
export const Login = ({}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleOnClick = async () => {
    const response = await axios.post("http://localhost:8000/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    localStorage.setItem("token", response.data.token);
  };
  localStorage.clear();
  return (
    <div className=" flex w-104 flex-col justify-center items-start gap-6">
      <button className="flex items-start border-solid rounded-md size-9 border-[#E4E4E7]">
        <ChevronLeft className="border-[#E4E4E7]" />
      </button>
      <div className="flex flex-col">
        <h3 className="text-[#09090B] text-2xl font-semibold leading-8">
          Create your account
        </h3>
        <p className="text-base text-[#71717A] font-normal leading-6">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      <input
        ref={emailRef}
        className="flex w-full"
        type="text"
        placeholder="Enter your email address"
      />
      <button className="flex h-9 w- w-full justify-center items-center gap-2 border rounded-md bg-gray-400">
        Let's Go
      </button>
      <div className="flex gap-3 justify-center items-center self-stretch">
        <p className="text-base text-[#71717A] font-normal leading-6">
          Already have an account?
        </p>
        <p className="text-base text-[#2563EB] font-normal leading-6">Log in</p>
      </div>
    </div>
  );
};
