import { createContext, useState } from "react";

export const BuilderContext = createContext();

export default function BuilderContextProvider(props) {
  // ------------------------------------- personal details
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [workProfile, setWorkProfile] = useState("");
  const [yourSummary, setYourSummary] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // ------------------------------------- skills details
  const [edu, setEdu] = useState([]);
  const [project, setProject] = useState([]);
  const [work, setWork] = useState([]);
  const [awards, setAwards] = useState([]);
  const [skills, setSkills] = useState([]);
  const [eduShow, setEduShow] = useState(true);
  const [projShow, setProjShow] = useState(true);
  const [awardsShow, setAwardsShow] = useState(true);
  const [workShow, setWorkShow] = useState(true);

  return (
    <BuilderContext.Provider
      value={{
        image,
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
        edu,
        setEdu,
        project,
        setProject,
        work,
        setWork,
        awards,
        setAwards,
        skills,
        setSkills,
        eduShow,
        setEduShow,
        projShow,
        setProjShow,
        awardsShow,
        setAwardsShow,
        workShow,
        setWorkShow,
      }}
    >
      {props.children}
    </BuilderContext.Provider>
  );
}
