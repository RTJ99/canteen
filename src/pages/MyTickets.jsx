import React from "react";
import Card from "../components/Card/StatsCard";
import { useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";

function MyTickets() {
  const count = useSelector((state) => state.counter.value);
  const title = useSelector((state) => state.counter.title);
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-left font-bold mr-2">My Tickets Summary</h1>
        <hr className=" grow" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title={"Sadza and Chicken"}
          icon={
            <p className=" text-sm font-bold rounded-full p-1 text-blue-500 ">
              Topup
            </p>
          }
          purchased={"86"}
          left={"68"}
          action={"Generate Ticket"}
        />
        <Card
          title={"Sadza and Beef"}
          icon={
            <p className=" text-sm font-bold rounded-full p-1 text-blue-500 ">
              Topup
            </p>
          }
          purchased={"12"}
          left={"5"}
          action={"Generate Ticket"}
        />
        <Card
          title={"Rice and Chicken"}
          icon={
            <p className=" text-sm font-bold rounded-full p-1 text-blue-500 ">
              Topup
            </p>
          }
          purchased={"18"}
          left={"10"}
          action={"Generate Ticket"}
        />
        <Card
          title={"Rice and beef"}
          icon={
            <p className=" text-sm font-bold rounded-full p-1 text-blue-500 ">
              Topup
            </p>
          }
          purchased={"22"}
          left={"1"}
          action={"Generate Ticket"}
        />
      </div>
      <div className="flex items-center my-5">
        <h1 className="text-left font-bold mr-2">Generated Tickets</h1>
        <hr className=" grow" />
      </div>
      {count > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-5">
            <QRCodeCanvas
              size={250}
              value={`${title} x ${count}`}
              className="m-auto"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold mt-2 text-center">
                {title} x {count}
              </p>
              <button className="bg-blue-500 p-2 px-8 font-bold text-white rounded-lg cursor-pointer mt-3">
                Download
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-gray-400 font-bold text-lg">
            No Tickets Generated
          </p>
        </div>
      )}
    </div>
  );
}

export default MyTickets;
