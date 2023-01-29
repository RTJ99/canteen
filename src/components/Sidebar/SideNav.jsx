import React from "react";
import SidebarLink from "./SidebarLink";

import { HiOutlineDocumentReport } from "react-icons/hi";
import {
  AiOutlineUser,
  AiOutlineHistory,
  AiOutlineProject,
} from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

// import logo from "../../assets/logo.png";
function Sidebar() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="m-5 rounded-lg  bg-white text-[#1E2875] lg:flex lg:flex-col hidden drop-shadow-sm  w-8/12 lg:w-full h-[85vh] mt-12  p-3">
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-between hover:cursor-pointer mb-5 mt-2"
        >
          {/* <div className="w-full flex items-center">
            <p className="font-bold text-[#1E2875] text-3xl">Tickets</p>
          </div> */}
        </div>

        <SidebarLink
          icon={<HiOutlineHome size={30} className="m-auto" />}
          title={"Home"}
          link={"/"}
        />
        {/* <SidebarLink icon={<AiOutlineShoppingCart size={30} className="m-auto" />} title={"Purchase"} link={"/buy"} /> */}
        <SidebarLink
          icon={<AiOutlineProject size={30} className="m-auto" />}
          title={"My Tickets"}
          link={"/tickets"}
        />
        <SidebarLink
          icon={<AiOutlineHistory size={30} className="m-auto" />}
          title={"History"}
          link={"/history"}
        />
        <SidebarLink
          icon={<HiOutlineDocumentReport size={30} className="m-auto" />}
          title={"Statement"}
          link={"/statement"}
        />
        <SidebarLink
          icon={<FiSettings size={30} className="m-auto" />}
          title={"Settings"}
          link={"/settings"}
        />
        <SidebarLink
          icon={<AiOutlineUser size={30} className="m-auto" />}
          title={"Profile"}
          link={"/profile"}
        />

        <SidebarLink
          icon={<BiHelpCircle size={30} />}
          title={"Help"}
          link={"/help"}
        />
      </div>
    </div>
  );
}

export default Sidebar;
