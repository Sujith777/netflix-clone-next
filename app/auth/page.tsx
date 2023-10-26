"use client";
import Input from "@/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        username,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, username, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/assets/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black lg:bg-black/50 w-full h-full">
        <nav className="px-12 py-5">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black/70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-3xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(e: any) => {
                    setUsername(e.target.value);
                  }}
                  id="username"
                  type="text"
                  value={username}
                />
              )}
              <Input
                label="Email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
              <button
                onClick={variant === "login" ? login : register}
                className="bg-red-600 mt-8 hover:bg-red-700 transition text-white text-lg font-bold rounded-md p-3"
              >
                {variant === "login" ? "Login" : "Sign Up"}
              </button>
              <div className="flex justify-center items-center gap-8">
                <button
                  className="h-10 w-10 rounded-full bg-white flex justify-center items-center transition hover:opacity-70"
                  onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                >
                  <FcGoogle size={25} />
                </button>
                <button
                  className="h-10 w-10 rounded-full bg-white flex justify-center items-center transition hover:opacity-70"
                  onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                >
                  <FaGithub size={25} />
                </button>
              </div>
              <p className="text-neutral-500 ">
                Already have an account?{" "}
                <span
                  className="text-white hover:underline cursor-pointer"
                  onClick={toggleVariant}
                >
                  {variant === "login" ? "Create an account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
