import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import img2 from "../Assets/img_avatar2.webp";
import { BuilderContext } from "../context/BuilderContext";

const ResumePage = () => {
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
    content: () => contentToPrint.current,
  });
  const {
    image,
    name,
    workProfile,
    yourSummary,
    phone,
    email,
    address,
    edu,
    project,
    work,
    awards,
    skills,
    eduShow,
    projShow,
    awardsShow,
    workShow,
  } = useContext(BuilderContext);

  return (
    <>
      <div className="h-[1000px] max-h-[3000p] overflow-scroll shadow-2xl ">
        <div className="" ref={contentToPrint}>
          <div className=" py-10 px-14 divide-y-2 divide-black text-black">
            <div className="pb-2">
              <div className="flex justify-between items-center pb-5 px-3">
                <div className="flex flex-col space-y-3 max-w-[500px]">
                  <h1 className="font-bold text-3xl break-words capitalize">
                    {name ? name : "Your Name"}
                  </h1>
                  <p className="font-semibold text-lg break-words capitalize">
                    {workProfile ? workProfile : "Work Profile"}
                  </p>
                  <p className="text-sm break-words capitalize">
                    {yourSummary
                      ? yourSummary
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing eli"}
                  </p>
                </div>
                <img
                  src={image ? image : img2}
                  width={130}
                  height={130}
                  alt="personal"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="pb-3">
              <div className="flex divide-x-2 pt-4 divide-black">
                <div className="w-1/3">
                  <div className="space-y-4">
                    <h4 className="font-bold text-xl">Contact</h4>
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="break-words">{phone ? phone : "Phone"}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="break-words">{email ? email : "Email"}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Address</p>
                      <p className="break-words">
                        {address ? address : "Address"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold text-xl">Skills</h4>
                    <div className="py-2 flex flex-wrap gap-y-2">
                      {skills && skills.length > 0 ? (
                        skills.map((s, index) => (
                          <div
                            className="py-2 flex flex-wrap gap-y-2"
                            key={index}
                          >
                            <span className="bg-blue-300 mx-2 text-lg text-white py-1 px-2 rounded-md">
                              {s}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="py-2 flex flex-wrap gap-y-2">
                          <span className="bg-blue-300 mx-2 text-lg text-white py-1 px-2 rounded-md">
                            Html
                          </span>
                          <span className="bg-blue-300 mx-2 text-lg text-white py-1 px-2 rounded-md">
                            css
                          </span>
                          <span className="bg-blue-300 mx-2 text-lg text-white py-1 px-2 rounded-md">
                            java script
                          </span>
                          <span className="bg-blue-300 mx-2 text-lg text-white py-1 px-2 rounded-md">
                            react.js
                          </span>
                          <span className="bg-blue-300 mx-2 text-lg text-white py-1 px-2 rounded-md">
                            redux
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-2/3 py-2 px-8">
                  {eduShow ? (
                    <div className="space-y-4">
                      <h4 className="font-bold text-xl">Education</h4>
                      <div>
                        {edu && edu.length > 0 ? (
                          edu.map((e, outerIndex) => (
                            <div key={outerIndex}>
                              <p className="font-semibold text-lg break-words">
                                {e.title ? e.title : "Education"}
                              </p>
                              {e.descriptions &&
                                e.descriptions.map((edesc, innerIndex) => (
                                  <div key={innerIndex}>
                                    <ul className="list-disc list-inside break-words">
                                      <li>
                                        {edesc.desc
                                          ? edesc.desc
                                          : "Education Description is Shown here with Bullet Points"}
                                      </li>
                                    </ul>
                                  </div>
                                ))}
                            </div>
                          ))
                        ) : (
                          <div>
                            <p className="text-gray-500 italic">Education</p>
                            <p className="text-gray-500 italic">
                              Education Description is Shown here with Bullet
                              Points
                            </p>
                            <p className="text-gray-500 italic">
                              Education Description is Shown here with Bullet
                              Points
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {projShow ? (
                    <div className="space-y-4">
                      <h4 className="font-bold text-xl">Projects</h4>
                      <div>
                        {project && project.length > 0 ? (
                          project &&
                          project.map((p, outerIndex) => (
                            <div key={outerIndex}>
                              <p className="font-semibold text-lg break-words">
                                {p.title ? p.title : "Project"}
                              </p>
                              {p.descriptions &&
                                p.descriptions.map((pdesc, innerIndex) => (
                                  <div key={innerIndex}>
                                    <ul className="list-disc list-inside break-words">
                                      <li>
                                        {pdesc.desc
                                          ? pdesc.desc
                                          : "Project Description is Shown here with Bullet Points"}
                                      </li>
                                    </ul>
                                  </div>
                                ))}
                            </div>
                          ))
                        ) : (
                          <div>
                            <p className="text-gray-500 italic">Project</p>
                            <p className="text-gray-500 italic">
                              Project Description is Shown here with Bullet
                              Points
                            </p>
                            <p className="text-gray-500 italic">
                              Project Description is Shown here with Bullet
                              Points
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {workShow ? (
                    <div className="space-y-4">
                      <h4 className="font-bold text-xl">Work Experience</h4>
                      <div>
                        {work && work.length > 0 ? (
                          work &&
                          work.map((w, outerIndex) => (
                            <div key={outerIndex}>
                              <p className="font-semibold text-lg break-words">
                                {w.title ? w.title : "Work"}
                              </p>
                              {w.descriptions &&
                                w.descriptions.map((wdesc, innerIndex) => (
                                  <div key={innerIndex}>
                                    <ul className="list-disc list-inside break-words">
                                      <li>
                                        {wdesc.desc
                                          ? wdesc.desc
                                          : "Project Description is Shown here with Bullet Points"}
                                      </li>
                                    </ul>
                                  </div>
                                ))}
                            </div>
                          ))
                        ) : (
                          <div>
                            <p className="text-gray-500 italic">Work</p>
                            <p className="text-gray-500 italic">
                              Work Description is Shown here with Bullet Points
                            </p>
                            <p className="text-gray-500 italic">
                              Work Description is Shown here with Bullet Points
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {awardsShow ? (
                    <div className="space-y-4">
                      <h4 className="font-bold text-xl">
                        Awards & Achievement
                      </h4>
                      <div>
                        {awards && awards.length > 0 ? (
                          awards &&
                          awards.map((a, outerIndex) => (
                            <div key={outerIndex}>
                              <p className="font-semibold text-lg break-words">
                                {a.title ? a.title : "Awards"}
                              </p>
                              {a.descriptions &&
                                a.descriptions.map((adesc, innerIndex) => (
                                  <div key={innerIndex}>
                                    <ul className="list-disc list-inside break-words">
                                      <li>
                                        {adesc.desc
                                          ? adesc.desc
                                          : "Project Description is Shown here with Bullet Points"}
                                      </li>
                                    </ul>
                                  </div>
                                ))}
                            </div>
                          ))
                        ) : (
                          <div>
                            <p className="text-gray-500 italic">Work</p>
                            <p className="text-gray-500 italic">
                              Awards Description is Shown here with Bullet
                              Points
                            </p>
                            <p className="text-gray-500 italic">
                              Awards Description is Shown here with Bullet
                              Points
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 rounded-xl mt-5 p-5 w-fit">
        <button
          className="btn-blue text-slate-800  bg-white"
          onClick={() => {
            handlePrint(null, () => contentToPrint.current);
          }}
        >
          PRINT
        </button>
      </div>
    </>
  );
};

export default ResumePage;
