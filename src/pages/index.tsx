import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Inter } from "next/font/google";
import { Feature } from "@/components/Feature";
import { ImageSection } from "@/components/ImageSection";
import { PriceSection } from "@/components/PriceSection";
import { useEffect, useRef, useState } from "react";
import Div100vh from "react-div-100vh";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const navbarRef = useRef<HTMLElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<null | number>(null);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    window.onscroll = () => {
      var currentScrollPos = window.scrollY;
      if (!navbarRef.current) return;
      if (prevScrollPos > currentScrollPos) {
        navbarRef.current.style.top = "0";
      } else {
        navbarRef.current.style.top = `-${navbarHeight}px`;
      }
      prevScrollPos = currentScrollPos;
    };
  }, [navbarHeight]);

  return (
    <>
      <Head>
        <title>Fitsoft</title>
        <meta name="description" content="O app para seguir com seus treinos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`flex flex-col mb-10 ${inter.className} ${
          isMenuActive && "overflow-y-hidden"
        }`}
      >
        <Div100vh>
          <div className="background-effect"></div>
          <Navbar
            setIsMenuActive={setIsMenuActive}
            isMenuActive={isMenuActive}
            ref={navbarRef}
          />
          <div
            className={`flex flex-col w-full justify-start`}
            style={{
              height: `calc(100% - ${navbarHeight}px)`,
              marginTop: navbarHeight ? navbarHeight : 0,
            }}
          >
            <Hero />
          </div>
        </Div100vh>
        <Feature />
        <ImageSection />
        <PriceSection />
      </div>
    </>
  );
}
