import React from "react";
import BuildCv from "../RoutingCVData/RoutingCvData";
import ResumePage from "../../Theme/Resume1";
import { Helmet } from "react-helmet";

export default function MakeCv() {
  return (
    <div>
      <Helmet>
        <title>Make Cv</title>
      </Helmet>
      <div className="flex flex-wrap justify-around mb-32 mt-10">
        <div className=" lg:w-[50%] w-[100%]">
          <BuildCv />
        </div>
        <div className=" px-2 lg:w-[50%] w-[100%]">
          <div>
            <ResumePage />
          </div>
        </div>
      </div>
    </div>
  );
}
