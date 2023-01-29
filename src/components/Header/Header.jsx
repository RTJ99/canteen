import React from "react";
import {
  Avatar,
  Box,


} from "@chakra-ui/react";

import {

  MdMailOutline,
 
  MdOutlineNotifications,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

function Header() {
 
 
  const logout = (response) => {
    localStorage.clear();
    window.location = "/";
  };
  return (
    <Box
      d="flex"
      //   flexDirection={"row"}
      justifyContent={"space-between"}
      bgColor="#FFFF"
      borderRadius="md"
    
      p={3}
      alignItems="center"
      className=" flex justify-between h-[80px] my-5 lg:my-10 rounded-lg drop-shadow-sm"
    >
      <Box className="flex ml-16 lg:ml-0 items-center text-[#1E2875] md:block">
        {/* <Sidebar
          showSidebar={showSidebar}
          handleShowSidebar={handleShowSidebar}
        /> */}
        <h1 className="font-bold">Welcome Ryan</h1>
      </Box>
      <Box className="hidden md:flex justify-between w-2/12 items-center">
        <MdOutlineNotifications
          className="text-[#1E2875] text-center"
          size={30}
        />
        <MdMailOutline className="text-[#1E2875] text-center" size={30} />
        <Box>
          <Avatar
          className="h-12 object-cover"
            name="Dan Abrahmov"
            src={require("../../assets/avatar.jpg")}
          />
        </Box>
        <Box>
          <FiLogOut size={25} onClick={logout} className="cursor-pointer"/>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
