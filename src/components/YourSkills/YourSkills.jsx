import React, { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";

export default function YourSkills(props) {
  const { skills, setSkills } = useContext(BuilderContext);
  // Destructure props
  const { onPrevStep, onNextStep } = props;

  const addSkills = (index) => {
    const newdata = [...skills];
    newdata.push("");
    setSkills(newdata);
    console.log(skills);
  };

  const setSkill = (event, index) => {
    const newdata = [...skills];
    newdata[index] = event;
    setSkills(newdata);
  };

  const deleteSkill = (index, descIndex) => {
    const newdata = [...skills];
    newdata.splice(index, 1);
    setSkills(newdata);
  };

  return (
    <>
      <p className="text-gray-800 font-extrabold text-3xl">Add your skills</p>
      <div className="flex flex-col py-3 mb-2">
        <div className=" left-5 bg-slate-800 rounded-xl p-5">
          <div className="flex justify-between">
            {onPrevStep && (
              <button className="btn-blue bg-white" onClick={onPrevStep}>
                Prev
              </button>
            )}
            <button
              onClick={() => {
                addSkills();
              }}
              className="btn-blue text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl hover:shadow-blue-500 hover:scale-105 hover:from-blue-500 hover:to-cyan-500 duration-300"
            >
              {"Add Your skills"}
            </button>
            {onNextStep && (
              <button className="btn-blue bg-white" onClick={onNextStep}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-700 font-bold text-lg pb-5">
          Enter Your Skills
        </p>

        {skills.map((s, index) => (
          <div className="py-2" key={index}>
            <input
              type="text"
              value={s}
              placeholder="Your skills"
              className="input rounded p-5s px-2"
              onChange={(event) => setSkill(event.target.value, index)}
            />
            <button
              onClick={() => deleteSkill(index)}
              className="text-red-600 font-semibold"
            >
              remove both the title and its description.
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
