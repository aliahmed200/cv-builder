import React, { useContext, useState } from "react";
import Skills from "../YourTechnical/YourTechnical";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { BuilderContext } from "../../context/BuilderContext";
import YourSkills from "../YourSkills/YourSkills";

export default function RoutingCVData() {
  const {
    edu,
    setEdu,
    project,
    setProject,
    work,
    setWork,
    awards,
    setAwards,
    eduShow,
    setEduShow,
    projShow,
    setProjShow,
    awardsShow,
    setAwardsShow,
    workShow,
    setWorkShow,
  } = useContext(BuilderContext);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  console.log(step);
  return (
    <div className="p-7">
      {step === 1 && <PersonalDetails onNextStep={nextStep} />}
      {step === 2 && <YourSkills onPrevStep={prevStep} onNextStep={nextStep} />}
      {step === 3 && (
        <>
          <Skills
            data={edu}
            setData={setEdu}
            eduShow={eduShow}
            setEduShow={setEduShow}
            projShow={projShow}
            setProjShow={setProjShow}
            awardsShow={awardsShow}
            setAwardsShow={setAwardsShow}
            workShow={workShow}
            setWorkShow={setWorkShow}
            skill={"Education"}
            onPrevStep={prevStep}
            onNextStep={nextStep}
          />
        </>
      )}
      {step === 4 && (
        <>
          <Skills
            data={project}
            setData={setProject}
            eduShow={eduShow}
            setEduShow={setEduShow}
            projShow={projShow}
            setProjShow={setProjShow}
            awardsShow={awardsShow}
            setAwardsShow={setAwardsShow}
            workShow={workShow}
            setWorkShow={setWorkShow}
            skill={"Project"}
            onPrevStep={prevStep}
            onNextStep={nextStep}
          />
        </>
      )}
      {step === 5 && (
        <>
          <Skills
            data={work}
            setData={setWork}
            eduShow={eduShow}
            setEduShow={setEduShow}
            projShow={projShow}
            setProjShow={setProjShow}
            awardsShow={awardsShow}
            setAwardsShow={setAwardsShow}
            workShow={workShow}
            setWorkShow={setWorkShow}
            skill={"Work"}
            onPrevStep={prevStep}
            onNextStep={nextStep}
          />
        </>
      )}
      {step === 6 && (
        <>
          <Skills
            data={awards}
            setData={setAwards}
            eduShow={eduShow}
            setEduShow={setEduShow}
            projShow={projShow}
            setProjShow={setProjShow}
            awardsShow={awardsShow}
            setAwardsShow={setAwardsShow}
            workShow={workShow}
            setWorkShow={setWorkShow}
            skill={"Awards"}
            onPrevStep={prevStep}
          />
        </>
      )}
    </div>
  );
}
