import { HiArrowNarrowLeft } from "react-icons/hi";
import { BiImageAdd } from "react-icons/bi";
import React, { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";
import { useNavigate } from "react-router-dom";

export default function PersonalDetails({ onNextStep }) {
  // ------------------------------------- data from BuilderContext
  const {
    setImage,
    name,
    setName,
    workProfile,
    setWorkProfile,
    yourSummary,
    setYourSummary,
    phone,
    setPhone,
    email,
    setEmail,
    address,
    setAddress,
  } = useContext(BuilderContext);
  // ------------------------------------- handle input set value in name using setName
  const handleChangeInput1 = (event) => {
    setName(event.target.value);
  };
  // ------------------------------------- handle input set value in WorkProfile using setWorkProfile
  const handleChangeInput2 = (event) => {
    setWorkProfile(event.target.value);
  };
  // ------------------------------------- handle input set value in YourSummary using setYourSummary
  const handleChangeInput3 = (event) => {
    setYourSummary(event.target.value);
  };
  // ------------------------------------- handle input set value in Phone using setPhone
  const handleChangeInput4 = (event) => {
    setPhone(event.target.value);
  };
  // ------------------------------------- handle input set value in Email using setEmail
  const handleChangeInput5 = (event) => {
    setEmail(event.target.value);
  };
  // ------------------------------------- handle input set value in Address using setAddress
  const handleChangeInput6 = (event) => {
    setAddress(event.target.value);
  };
  // ------------------------------------- handle input set value in Image using setImage
  const handleChangeInput7 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const navigate = useNavigate();
  return (
    <>
      {/* ------------------------------------- All personl information input */}
      <div className=" rounded flex flex-col gap-3">
        <p className="font-bold text-3xl text-slate-800">Personal Details</p>

        {/* ------------------------------------- input for your image*/}
        <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Image
          </label>
          <div className="relative w-full h-full flex justify-center">
            <input
              type="file"
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleChangeInput7}
            />
            <label className="bg-slate-800 text-white px-4 py-2 rounded-lg cursor-pointer w-full  block">
              <div className="flex justify-center items-center gap-5">
                <BiImageAdd className="text-5xl " />
                <p className="text-xl">Enter Your Image</p>
              </div>
            </label>
          </div>
        </div>

        {/* ------------------------------------- input for your name*/}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your name
          </label>

          <input
            type="text"
            value={name}
            placeholder="Ali."
            className="input"
            onChange={handleChangeInput1}
          />
        </div>

        {/* ------------------------------------- input for your workProfile*/}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Work Profile
          </label>
          <input
            type="text"
            value={workProfile}
            placeholder="Data Analyst"
            className="input"
            onChange={handleChangeInput2}
          />
        </div>

        {/* ------------------------------------- input for your yourSummary*/}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your summary
          </label>
          <input
            type="text"
            value={yourSummary}
            placeholder="Passionate data analyst skilled from complex datasets."
            className="input"
            onChange={handleChangeInput3}
          />
        </div>

        {/* ------------------------------------- input for your phone*/}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Phone
          </label>
          <input
            type="text"
            value={phone}
            placeholder="01029384766"
            className="input"
            onChange={handleChangeInput4}
          />
        </div>

        {/* ------------------------------------- input for your email*/}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <input
            type="text"
            value={email}
            placeholder="ali200@gmail.com"
            className="input"
            onChange={handleChangeInput5}
          />
        </div>

        {/* ------------------------------------- input for your address*/}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your address
          </label>
          <input
            type="text"
            value={address}
            placeholder="Egypt ,Cairo"
            className="input"
            onChange={handleChangeInput6}
          />
        </div>
        <div className=" bg-slate-800 rounded-xl mt-5 p-5 flex justify-between">
          <button
            onClick={() => {
              navigate("/choosecv");
            }}
            className=" flex justify-between items-center btn-blue text-slate-800  bg-white hover:bg-slate-800 hover:text-white"
          >
            <HiArrowNarrowLeft className="pe-1 text-xl" />
            Select another CV template.
          </button>
          <button className="btn-blue bg-white " onClick={onNextStep}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
