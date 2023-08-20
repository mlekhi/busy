import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Opportunities</title>
      </Head>
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
            className={`w-full bg-red-100 text-cyan-700 max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}>
              <h1 className="text-3xl font-bold">Opportunities</h1>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">First of all, what is EDI?</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.what.one}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.what.two}
                  </h3>
                  <h3 className="text-sm opacity-75">
                    {resume.what.three}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mt-5 w-1/2">
                  <h1 className="text-2xl font-bold">Programs & Initiatives</h1>

                  {resume.programs.map(
                    ({ id, dates, type, position }) => (
                      <ProjectResume
                        key={id}
                        dates={dates}
                        type={type}
                        position={position}
                      ></ProjectResume>
                    )
                  )}
                </div>
                <div className="mt-5 w-1/2">
                  <h1 className="text-2xl font-bold">Scholarships & Awards</h1>

                  {resume.scholarships.map(
                    ({ id, dates, type, position }) => (
                      <ProjectResume
                        key={id}
                        dates={dates}
                        type={type}
                        position={position}
                      ></ProjectResume>
                    )
                  )}
                </div>
              </div>

            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Resume;
