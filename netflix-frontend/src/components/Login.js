import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setisLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      //Login
      const user = { Email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/Login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log("🧪 FULL API response:", res.data);

        if (res.data.success) {
          toast.success(res.data.message);
        }
        console.log("✅ user from API:", res.data.user);
        dispatch(setUser(res.data.user));

        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //register
      dispatch(setLoading(true));

      const user = { fullName, Email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setisLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }finally{
                dispatch(setLoading(false));

      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
          alt=""
        />
      </div>

      <form
        onSubmit={getInputData}
        className="flex flex-col w-3/12 p-10 my-36 mx-auto items-center justify-center absolute left-0 right-0 rounded-md bg-black bg-opacity-80 text-white space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {!isLogin && (
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-red-700"
          />
        )}

        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-red-700"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-red-700"
        />

        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 transition-colors px-4 py-2 rounded font-semibold"
        >
          {`${isLoading ? "loading..." : isLogin ? "Login" : "Register"}`}
        </button>
        <p>
          {isLogin ? "New to Netflix?" : "Already have an account"}{" "}
          <span
            onClick={loginHandler}
            className="ml-1 text-blue-700 font-medium cursor-pointer"
          >
            {isLogin ? "SignUp" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
