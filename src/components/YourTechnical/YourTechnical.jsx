import React, { useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";

export default function YourTechnical(props) {
  const [firstTime, setFirstTime] = useState(false);

  // Destructure props
  const {
    data,
    setData,
    onPrevStep,
    onNextStep,
    skill,
    eduShow,
    setEduShow,
    projShow,
    setProjShow,
    awardsShow,
    setAwardsShow,
    workShow,
    setWorkShow,
  } = props;

  // If data is undefined or not an array, return null or an appropriate message
  if (!Array.isArray(data)) {
    return null; // or return a message indicating that data is not available
  }

  // Function to add skills
  const addSkills = () => {
    const newdata = [...data];
    newdata.push({ title: "", descriptions: [] });
    setData(newdata);
  };

  // Function to set skills
  const setSkills = (event, index) => {
    const newdata = [...data];
    newdata[index].title = event;
    setData(newdata);
  };

  // Function to delete skills
  const deleteSkills = (dIndex) => {
    const newdata = [...data];
    newdata.splice(dIndex, 1);
    setData(newdata);
  };

  // Function to add description
  const addDescription = (index) => {
    const newdata = [...data];
    if (newdata[index] && newdata[index].descriptions) {
      newdata[index].descriptions.push({ desc: "" });
    } else {
      newdata[index] = {
        ...newdata[index],
        descriptions: [{ desc: "" }],
      };
    }
    setData(newdata);
  };

  // Function to set description
  const setDescription = (event, dIndex, descIndex) => {
    const newdata = [...data];
    newdata[dIndex].descriptions[descIndex].desc = event;
    setData(newdata);
  };

  // Function to delete description
  const deleteDescription = (dIndex, descIndex) => {
    const newdata = [...data];
    newdata[dIndex].descriptions.splice(descIndex, 1);
    setData(newdata);
  };

  return (
    <>
      <p className="text-gray-800 font-extrabold text-3xl">Add {skill}</p>
      <div className="flex flex-col py-3 mb-14">
        {/* Button to add skills input */}
        <div className="left-5 bg-slate-800 rounded-t-xl p-5">
          <div className="flex justify-between flex-wrap items-center">
            {onPrevStep && (
              <button
                className="btn-blue bg-white mb-2 md:mb-0"
                onClick={onPrevStep}
              >
                Prev
              </button>
            )}
            {firstTime ? (
              <button
                onClick={() => {
                  addSkills();
                  setFirstTime(true);
                }}
                className="btn-blue text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-xl hover:shadow-emerald-500 hover:scale-105 hover:from-emerald-500 hover:to-green-500 duration-300 mb-2 md:mb-0"
              >
                <div className="flex justify-between items-center gap-x-3">
                  {"Add Another " + skill + " Title"}
                  <BsPlusSquareFill />
                </div>
              </button>
            ) : (
              <button
                onClick={() => {
                  addSkills();
                  setFirstTime(true);
                }}
                className="btn-blue text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl hover:shadow-blue-500 hover:scale-105 hover:from-blue-500 hover:to-cyan-500 duration-300 mb-2 md:mb-0"
              >
                <div className="flex justify-between items-center gap-x-3">
                  {"Add Another " + skill + " Title"}
                  <BsPlusSquareFill />
                </div>
              </button>
            )}

            {onNextStep && (
              <button
                className="btn-blue bg-white mb-2 md:mb-0"
                onClick={onNextStep}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="bg-slate-800 rounded-b-xl flex justify-center items-center gap-x-2">
          <div className="text-white text-md font-bold">Delete the section</div>
          <label className="relative inline-flex items-center cursor-pointer mb-2 md:mb-0">
            <input
              onClick={() => {
                if (skill === "Education") {
                  setEduShow(!eduShow);
                }
                if (skill === "Project") {
                  setProjShow(!projShow);
                }
                if (skill === "Work") {
                  setWorkShow(!workShow);
                }
                if (skill === "Awards") {
                  setAwardsShow(!awardsShow);
                }
              }}
              className="sr-only peer"
              value=""
              type="checkbox"
            />
            <div className="group peer ring-0 bg-gray-50 border-2 border-gray-900 rounded-full outline-none duration-700 after:duration-200 w-24 h-12 shadow-md peer-checked:bg-gradient-to-r peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-gray-900 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 peer-checked:after:translate-x-12 peer-hover:after:scale-95">
              <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="50"
                height="50"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                // height="100"
                className="absolute top-1 left-12 fill-green-600 w-10 h-10"
              >
                <path
                  d="M50,18A19.9,19.9,0,0,0,30,38v8a8,8,0,0,0-8,8V74a8,8,0,0,0,8,8H70a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H38V38a12,12,0,0,1,23.6-3,4,4,0,1,0,7.8-2A20.1,20.1,0,0,0,50,18Z"
                  className="svg-fill-primary"
                ></path>
              </svg>
              <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="50"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                height="50"
                className="absolute top-1 left-1 fill-red-600 w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M30,46V38a20,20,0,0,1,40,0v8a8,8,0,0,1,8,8V74a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V54A8,8,0,0,1,30,46Zm32-8v8H38V38a12,12,0,0,1,24,0Z"
                ></path>
              </svg>
            </div>
          </label>
        </div>
        {/* Skills input and description */}
        {data.map((d, index) => (
          <div className="flex flex-col pt-4" key={index}>
            {/* Input for skills */}
            <p className="text-gray-700 font-bold text-lg">Enter Your Title</p>
            <div className="mb-5">
              <div className="flex pb-1">
                <input
                  type="text"
                  value={d.title}
                  placeholder="Your skills"
                  className="input rounded-e-none p-0 px-2"
                  onChange={(event) => setSkills(event.target.value, index)}
                />
                <button
                  onClick={() => addDescription(index)}
                  className="btn-title p-1 rounded-s-none"
                >
                  Enter Description
                </button>
              </div>
              <button
                onClick={() => deleteSkills(index)}
                className="text-red-600 font-semibold"
              >
                remove both the title and its description.
              </button>
            </div>

            {/* Buttons to add and delete description */}

            {/* Description input */}
            {d.descriptions &&
              d.descriptions.map((eDisc, descIndex) => (
                <div className="mb-2" key={descIndex}>
                  <p className="text-gray-700 font-semibold text-[17px]">
                    Enter Your Description
                  </p>
                  <input
                    type="text"
                    value={eDisc.desc}
                    placeholder="Your description"
                    className="input"
                    onChange={(event) =>
                      setDescription(event.target.value, index, descIndex)
                    }
                  />
                  <button
                    onClick={() => deleteDescription(index, descIndex)}
                    className="text-red-600 font-semibold"
                  >
                    remove this description.
                  </button>
                </div>
              ))}
          </div>
        ))}
        {/* Button for previous step and next step*/}
      </div>
    </>
  );
}
