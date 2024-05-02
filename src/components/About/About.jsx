import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="flex justify-center items-center py-20">
        <div className="w-2/3 md:w-1/2 bg-slate-800 p-5 md:p-10  lg:p-20 rounded-lg text-start text-xl text-gray-300">
          <p className="py-2">
            Welcome to our CV builder platform! At JobJunction, we believe in
            empowering individuals to craft standout resumes that truly reflect
            their skills and aspirations. Whether you're a seasoned professional
            or just starting your career journey, our user-friendly tools and
            customizable templates make it easy to create a CV that stands out
            from the crowd.
          </p>
          <p className="py-2">
            Our mission is simple: to help you land your dream job. We
            understand that every person is unique, with their own set of
            skills, experiences, and career goals. That's why we offer a wide
            range of templates and customization options, allowing you to tailor
            your resume to fit your individual needs and preferences.
          </p>
          <p className="py-2">
            With JobJunction, you'll have access to a wealth of resources and
            guidance every step of the way. From expert tips on resume writing
            to personalized feedback on your drafts, we're here to support you
            in showcasing your talents and making a lasting impression on
            potential employers.
          </p>
          <p className="py-2">
            Whether you're aiming for a career change, seeking new
            opportunities, or simply looking to update your resume, we're here
            to help you succeed. Join us on your journey to professional success
            and let's build your future together!
          </p>
        </div>

        <p></p>
      </div>
    </div>
  );
}
