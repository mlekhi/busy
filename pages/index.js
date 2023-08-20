import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

        </div>

        <div className="pt-4">
          <h1 className="tablet:m-10 text-3xl text-bold">About.</h1>
        </div>

        <div className="flex flex-row">
          <div className="w-2/3 laptop:p-2 m-0" ref={aboutRef}>
            <p className="tablet:ml-10 mr-10 mb-10 text-xl laptop:text-2xl w-full laptop:w-3/5">
              {data.aboutpara1}
            </p>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-2xl w-full laptop:w-3/5">
              {data.aboutpara2}
            </p>
            <p className="tablet:ml-10 mr-10 mb-10 text-xl laptop:text-2xl w-full laptop:w-3/5">
              {data.aboutpara3}
            </p>
          </div>
          <div className="w-1/3">
            <img className="object-cover" src="doggo.jpg"/>
            <div className="mt-6">
              <p className="text-center text-l laptop:text-xl w-full">
                {data.dogpara}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0 text-center" ref={workRef}>
            <h1 className="text-2xl text-bold">{data.aboutpara4}</h1>
        </div>

        <div className="mt-20 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-3xl text-bold">Stories.</h1>

          <div className="flex-none overflow-x-auto">
            <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
              {data.projects.map((project) => (
                <WorkCard
                  key={project.id}
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
