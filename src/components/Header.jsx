import React, { useState } from "react";
//import icons
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { MdAdd, MdLogout } from "react-icons/md";
import Avatar from "../assets/img/usericon.png";
//import { CgProfile } from "react-icons/cg";

//import link
import { Link } from "react-router-dom";
//import logo
import Logo from "../assets/img/logo.png";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../utils/firebaseConfig.jsx";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = async () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  }

  return (
    <header className="fixed z-50 min-w-full p-3 px-4 md:p-2 md:px-16">
      <div className="hidden md:flex flex-wrap w-full h-full items-center justify-between pt-4">
        <Link to={"/"} className="flex items-center gap-2">
          <p className="font-bold text-headText">SunCaribbeanRealty.com</p>
          {/* <img src={Logo} className=" object-cover w-30" alt="logo" / > */}
        </Link>

        {/* navbar links */}
        <div className="flex items-center gap-6  ">
          <motion.ul
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            className="flex items-center gap-20 "
          >
            <li className="text-base text-headText hover:text-hColor duration-100 transition-all ease-in-out cursor-pointer">
              For Sale
            </li>
            <li className="text-base text-headText hover:text-hColor duration-100 transition-all ease-in-out cursor-pointer">
              For Rent
            </li>
            <li className="text-base text-headText hover:text-hColor duration-100 transition-all ease-in-out cursor-pointer">
              Residences
            </li>
            <li className="text-base text-headText hover:text-hColor duration-100 transition-all ease-in-out cursor-pointer">
              Property Management
            </li>
            <li className="text-base text-headText hover:text-hColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
          </motion.ul>
          {/*<Link to="forsale">
            <a href="*"> FOR SALE </a>
          </Link>
          <Link to="forrent">
            <a href="*"> FOR RENT </a>
          </Link>
          <Link to="residences">
            <a href="*"> RESIDENCES </a>
          </Link>
          <Link to="property-management">
            <a href="*"> PROPERTY MANAGEMENT </a>
          </Link>
          <Link to="about-us">
            <a href="*"> ABOUT US </a>
          </Link>*/}
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-6 text-xl">
          <Link className="" to="">
            {" "}
            <BsInstagram className="text-headText" />{" "}
          </Link>

          <Link to="">
            <ImFacebook2 className="text-headText"/>
          </Link>
          {/* Social Media */}
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              onClick={login}
              src={user ? user.photoURL : Avatar }
              className="text-xs shadow-2xl w-7 cursor-pointer rounded-full stroke-cyan-500"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className=" text-sm w-32 bg-slate-100 shadow-xl rounded-lg flex flex-col absolute top-8 right-0 "
              >
                {user && user.email === "tito.cubanito@gmail.com" && (
                  <Link to={"createContainer"}>
                    <p className="py-1 flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-300 rounded-lg"
                    onClick={() => setIsMenu(false)}
                    >
                      Add Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p className="py-1 flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-100 rounded-lg"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-24" />
        </Link>

        {/* Social Media */}
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            onClick={login}
            src={user ? user.photoURL : Avatar}
            className="shadow-2xl w-10 cursor-pointer rounded-full mr-3 border-2 border-blue-400"
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className=" text-sm w-32 bg-slate-100 shadow-xl rounded-lg flex flex-col absolute top-10 right-3 "
            >
              {user && user.email === "tito.cubanito@gmail.com" && (
                <Link to={"createContainer"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-blue-300 ">
                    Add Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-blue-300  px-4 py-2"
                onClick={() => setIsMenu(false)}
                >
                  For Sale
                </li>
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-blue-300  px-4 py-2"
                onClick={() => setIsMenu(false)}
                >
                  For Rent
                </li>
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-blue-300  px-4 py-2"
                onClick={() => setIsMenu(false)}
                >
                  Residences
                </li>
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-blue-300  px-4 py-2"
                onClick={() => setIsMenu(false)}
                >
                  Property M.
                </li>
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-blue-300  px-4 py-2"
                onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
              </ul>

              <p className="m-2 p-2 rounded-md shadow-lg flex items-center gap-3 bg-gray-200 cursor-pointer hover:bg-blue-500  justify-center"
              onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
