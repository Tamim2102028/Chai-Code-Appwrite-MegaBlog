import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as loginReducer } from "../store/slice/auth.Slice";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth.service";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const login = async (data) => {
    setError(null);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(loginReducer({ userData }));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">Logo</span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)}>
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) => {
                    const pattern =
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    return pattern.test(value) || "Invalid email address";
                  },
                },
              })}
            />
            <Input
              label="Password:"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
            <Button type="submit" className="w-full mt-4">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
