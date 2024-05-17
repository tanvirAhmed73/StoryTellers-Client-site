import React from "react";
import { NavLink } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
const SharedNAvbar = () => {
  const navlink = <></>;
  return (
    <div>
      <div className="lg:flex lg:justify-between mt-11 mb-11">
        <div>
          <NavLink
            to={"/"}
            className="flex lg:justify-center items-center ml-5  text-gray-500 text-xl gap-4"
          >
            <IoArrowBackCircleOutline className="text-4xl" />
            <p>Back to category</p>
          </NavLink>
        </div>
        <div className="flex gap-2 ml-6 lg:ml-0 text-xs lg:text-xl lg:justify-center text-gray-500 items-center mr-5">
          <NavLink to={'/'}><IoMdHome /></NavLink>/
          <NavLink to={'/healthAllBooks'}>Health</NavLink>/
          <NavLink to={'/computerAllBooks'}>Computer</NavLink>/
          <NavLink to={'/bussinessAllBooks'}> Business</NavLink>/
          <NavLink to={'/scienceAllBooks'}> Science</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SharedNAvbar;
