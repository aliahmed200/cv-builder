import React from "react";
import cvImage from "../../Assets/image.png";
import soon from "../../Assets/soon.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ChooseCv() {
  const navigate = useNavigate();
  return (
    <div className="h-auto py-5">
      <Helmet>
        <title>Choose Cv</title>
      </Helmet>
      <div className="flex flex-col items-center justify-around text-center">
        <div className="py-10 animate-transFromLeft">
          <p className="text-lg text-gray-600 mb-2">
            {" "}
            Let's craft your standout resume together.
          </p>
          <p className="text-6xl lg:text-6xl font-bold mb-3 text-slate-800">
            Pick a template.
          </p>
          <p className="text-2xl font-light text-white bg-slate-800 p-4 rounded">
            New templates are coming soon. Stay tuned!
          </p>
        </div>
        <div
          onClick={() => {
            navigate("/makecv");
          }}
          className="flex flex-wrap bg-slate-800 justify-start gap-x-8 gap-y-8 container py-20 px-40 rounded-xl mb-10 "
        >
          <div>
            <img
              className="rounded-lg cursor-pointer"
              width={280}
              src={cvImage}
              alt="cv"
            />
          </div>
          <div>
            <img className="rounded-lg" width={200} src={soon} alt="cv" />
          </div>
        </div>
      </div>
    </div>
  );
}
