
import { Box } from '@chakra-ui/react';
import './App.css';
import Home from './pages/Home';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/SideNav";
import { useState} from "react"
import {AiOutlineMenu} from "react-icons/ai"
import ContentArea from "./components/ContentArea/ContentArea";
import MobileSidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import MyTickets from './pages/MyTickets';
import History from './pages/History';
function App() {
  
 
  const [showSidebar, setShowSidebar] = useState(true);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="App">
     <div className="lg:flex max-h-[100vh] lg:overflow-hidden">
      <div className="lg:w-[100px]">
        <Sidebar />
        <div className="lg:hidden ">
          <MobileSidebar
            showSidebar={showSidebar}
            handleShowSidebar={handleShowSidebar}
          />
        </div>{" "}
        <div className="block  fixed top-10 z-[1] left-7 rounded flex py-2  justify-center sm:hidden w-[60px]">
          <Box
            onClick={handleShowSidebar}
            className="lg:hidden p-2 border rounded-md "
          >
            <AiOutlineMenu
              size={28}
              onClick={handleShowSidebar}
              className="text-center"
              color="#000"
            />
          </Box>
        </div>
      </div>
      <div className="lg:w-11/12">
        <ContentArea>
          <Header />
          <Routes>
           
            <Route path="/" element={<Home />} />
          <Route path='/tickets' element={<MyTickets/>}/>
          <Route path='/history' element={<History/>}/>
          </Routes>
        </ContentArea>
      </div>
    </div>
    </div>
  );
}

export default App;
