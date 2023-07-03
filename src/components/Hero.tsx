import Image from "next/image";
import { GiRunningShoe } from "react-icons/gi";
import { AiFillPlayCircle } from "react-icons/ai";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const poppins = Poppins({ weight: ["600"], subsets: ["latin"] });

export const Hero = () => {
  const powerWords = useMemo(
    () => ["EVOLUA", "TREINE", "SUPERE", "AVANCE", "APRENDA", "ALCANCE"],
    []
  );
  const bigestTitle = useMemo(() => {
    let biggerTitle = "";
    powerWords.forEach((word) => {
      if (biggerTitle.length < word.length) biggerTitle = word;
    });
    return biggerTitle;
  }, [powerWords]);

  const companies = [
    "nike",
    "buzzfeed",
    "esprit",
    "national-geographic",
    "dw",
    "huffpost",
  ];
  const [currentTitle, setCurrentTitle] = useState(powerWords[0]);
  const fixedTitleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitle((prevTitle) => {
        let newTitle;
        do {
          newTitle = powerWords[Math.floor(Math.random() * powerWords.length)];
        } while (newTitle === prevTitle);
        return newTitle;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [powerWords]);

  return (
    <section className="h-full w-full grow flex pt-12 pl-10 lg:pl-36 md:pl-24 sm:pt-12 2xl:pt-24 max-w-screen-2xl mx-auto pr-10">
      <div className="w-full grow h-full">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`mx-auto overflow-hidden font-extrabold xxsm:text-6xl xsm:text-7xl text-5xl sm:text-6xl mb-6 md:text-7xl lg:text-8xl lg:mb-10 md:leading-[70px] xl:text-[130px] lg:leading-[90px] xl:leading-[110px] 2xl:text-[172px] 2xl:leading-[150px]`}
          style={{ width: `${bigestTitle.length}ch` }}
        >
          <span ref={fixedTitleRef}>SEMPRE</span>
          <br />
          <span key={currentTitle} className="typing-effect">
            {currentTitle.toUpperCase()}
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-text-gray max-w-lg mb-8"
        >
          Transforme seu corpo e alcance seus objetivos com treinos
          personalizados e acompanhamento especializado de personal trainers
          qualificados.
        </motion.p>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className={`p-3 md:p-6 bg-primary rounded-lg ${poppins.className}`}
        >
          Comece a treinar!
        </motion.button>
        <motion.div className="max-w-[600px]  mt-16">
          <h4 className="font-semibold text-text-gray text-sm mb-4 lg:mb-8">
            AS MARCAS APOIAM
          </h4>
          <motion.ul className="flex items-center justify-between flex-wrap gap-2 lg:gap-4">
            {companies.map((company, index) => (
              <motion.li key={index}>
                <Image
                  src={`/${company}.svg`}
                  width={50}
                  height={50}
                  alt={`${company} icon`}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative w-full h-full max-h-[600px] hidden sm:block shrink max-w-xl"
      >
        <div className="absolute right-0 top-0 w-full xl:w-[150%] h-full z-20">
          <Image
            src={"/hero-img.png"}
            className="max-w-[360px] min-w-full object-contain z-30"
            fill
            alt="homem amarrando cadarço"
          />
        </div>
        <ul className="hidden sm:block">
          <li className="z-40 absolute right-[18%] xl:right-[35%] top-0 flex items-center gap-2 rounded-xl lg:p-4 p-2 text-lg bg-primary/90 lg:text-2xl">
            <span className="bg-primary rounded-full p-1">
              <GiRunningShoe />
            </span>
            <p className="font-extrabold">4,95km</p>
          </li>
          <li className="z-40 absolute -left-[15%] xl:-left-[20%] bottom-[15%] sm:bottom-[28%] flex items-center gap-3 rounded-xl lg:p-3 p-2 bg-pale-black/90 lg:text-lg">
            <span className="bg-white rounded-full">
              <AiFillPlayCircle className="fill-primary h-9 w-9 lg:w-10 lg:h-10" />
            </span>
            <div>
              <p className="font-semibold">+100</p>
              <small className="text-text-gray">Personal trainers</small>
            </div>
          </li>
          <li className="z-40 absolute xl:right-[20%] right-0 bottom-[3%] lg:bottom-[6%] flex items-center gap-2 rounded-xl lg:p-4 md:p-3 p-2 bg-purple/90 lg:text-lg">
            <div>
              <p className="font-semibold text-2xl">+1.000</p>
              <small>Alunos treinando</small>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};
