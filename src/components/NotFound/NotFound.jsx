import React from "react";
import notFoundImage from "../../Assets/6373669.jpg";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <img src={notFoundImage} className="h-screen" alt="Not Found" />
    </div>
  );
}
