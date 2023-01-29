import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SidebarLink(props) {
  const { pathname } = useLocation();
  return (
    <div
      className={`flex flex-col text-center  p-2 justify-between items-center active:bg-[#f3f2f1] rounded-md ${
        pathname === props.link ? "bg-[#f3f2f1]" : ""
      }`}
      // className={`flex p-3 justify-between items-center active:bg-[#f3f2f1] rounded-md `}
    >
      {" "}
      <div className=" text-[#363A53]">{props.icon}</div>
      <div className="w-full">
        <Link className="text-[#363A53] font-semibold text-xs" to={props.link}>
          {props.title}
        </Link>
      </div>
    </div>
  );
}

export default SidebarLink;
