import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  const toggle = useSelector(store=>store.movie.toggle)

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 bg-gradient-to-b from-black text-white h-[80px] pt-[40px]">
      <img
        className="w-40 md:w-56"
        src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
        alt="Netflix logo"
      />
      {user && user.fullName && (
        <div className="flex items-center space-x-4">
          <IoIosArrowDropdown className="text-2xl" />
          <h1 className="text-lg font-medium whitespace-nowrap">{user.fullName}</h1>
          <div className="flex space-x-2 items-center">
            <button
              onClick={logoutHandler}
              className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
            <button
              onClick={toggleHandler}
              className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
             {toggle ? "Home":"Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
