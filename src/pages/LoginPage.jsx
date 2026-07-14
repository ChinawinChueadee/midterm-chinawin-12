import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useUserStore } from "../stores/userStore";
import axios from "axios";
import { toast } from "react-toastify";
import { loginSchema } from "../schemas/loginSchema";
import api from "../api/mainApi";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);

  const hdlChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hdlLogin = async (evt) => {
    evt.preventDefault();

    const validateResult = loginSchema.safeParse(formData);
    if (!validateResult.success) {
      if ("username" in validateResult.error.flatten().fieldErrors) {
        toast.error(validateResult.error.flatten().fieldErrors.username[0]);
      }
      if ("password" in validateResult.error.flatten().fieldErrors)
        [toast.error(validateResult.error.flatten().fieldErrors.password[0])];
      return;
    }

    try {
      const res = await api.post("/auth/login", formData);
      console.log("res", res);
      const { token, username } = res.data.user;
      setUser(username);
      setToken(token);
      navigate("/post");
      toast.success("Login ❤️");
    } catch (error) {
      console.log("error", error);
      toast.error("Login Failed 😨");
    }
  };

  return (
    <div className="bg-gray-300 h-[100vh]">
      <div className="p-30">
        <div className="flex flex-col justify-cente rounded-3xl  p-4 items-center mx-auto w-120 h-130 bg-white shadow-2xl">
          <div className="mt-10 ">
            <p className="border-1 border-cyan-300 bg-blue-100 rounded-2xl p-4">
              <FontAwesomeIcon
                className="text-3xl text-cyan-500"
                icon={faLaptopCode}
              />
            </p>
          </div>

          <h1 className="text-3xl mt-4 font-bold">Welcome</h1>
          <p className=" text-gray-500 mt-2 text-sm">
            ล็อกอินเพื่อเข้าสู่ระบบทดสอบ Frontend Dev
          </p>
          <form
            onSubmit={hdlLogin}
            className="mt-5 flex flex-col justify-center items-center gap-6"
          >
            <div className="border-1 border-gray-400 rounded-2xl">
              <FontAwesomeIcon
                icon={faUser}
                className="text-lg pl-3 text-gray-400"
              />
              <input
                type="text"
                name="username"
                value={formData.username}
                placeholder="username"
                className=" p-3 w-85 outline-none"
                onChange={hdlChange}
              />
            </div>

            <div className="border-1 border-gray-400 rounded-2xl">
              <FontAwesomeIcon
                icon={faLock}
                className="text-lg pl-3 text-gray-400"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="password"
                className=" p-3 w-85 outline-none"
                onChange={hdlChange}
              />
            </div>
            <button className="bg-cyan-500 text-white mt-8 p-3 w-95 rounded-2xl">
              LOG IN
            </button>
          </form>
          <div className="flex mt-6">
            <p className="text-gray-400">Don't have an account? </p>
            &nbsp;
            <p className="text-cyan-700 hover:underline hover:text-cyan-500">
              Register
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
