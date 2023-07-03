import { forwardRef, useEffect, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

interface NavbarProps {
  setIsMenuActive: (value: boolean) => void;
  isMenuActive: boolean;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(function Navbar(
  props,
  ref
) {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // makes the menu appear from the right
    if (props.isMenuActive)
      // has to have a timeout, even if is small
      setTimeout(() => {
        if (menuRef.current === null) return;
        menuRef.current.style.translate = "-100%";
        return;
      }, 10);
    if (menuRef.current === null) return;
    menuRef.current.style.translate = "0";
  }, [props.isMenuActive]);

  return (
    <>
      <nav
        ref={ref}
        className="flex z-50 justify-between items-center transition-all duration-300 px-8 py-6 fixed w-full top-0 backdrop-blur"
      >
        <div>
          <motion.h2
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold"
          >
            <button>FITSOFT</button>
          </motion.h2>
        </div>
        <ul className="sm:flex hidden items-center justify-between sm:gap-3 md:gap-4">
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pointer"
          >
            <span className="flex flex-col group overflow-hidden">
              SOBRE
              <span className="w-full h-0.5 group-hover:bg-white transform translate-x-full bg-dark group-hover:translate-x-0 transition-all ease-in-out duration-150"></span>
            </span>
          </motion.li>
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pointer"
          >
            <span className="flex flex-col group overflow-hidden">
              APP
              <span className="w-full h-0.5 group-hover:bg-white transform translate-x-full bg-dark group-hover:translate-x-0 transition-all ease-in-out duration-150"></span>
            </span>
          </motion.li>
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pointer"
          >
            <span className="flex flex-col group overflow-hidden">
              APP
              <span className="w-full h-0.5 group-hover:bg-white transform translate-x-full bg-dark group-hover:translate-x-0 transition-all ease-in-out duration-150"></span>
            </span>
          </motion.li>
        </ul>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => props.setIsMenuActive(true)}
          className="flex flex-col w-8 h-5 justify-between items-center sm:hidden text-white cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-0.5 bg-white transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-0.5 bg-white transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-0.5 bg-white transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </motion.div>
      </nav>

      <div
        className={`fixed ${
          props.isMenuActive ? "block" : "hidden"
        } top-0 right-0 bg-black/80 w-full h-full z-50`}
      >
        <div
          ref={menuRef}
          className="w-[80%] translate-x-full h-full fixed text-white top-0 right-0 bg-dark p-10 z-50 transition-all duration-150"
        >
          <span className="w-full">
            <MdOutlineClose
              onClick={() => props.setIsMenuActive(false)}
              className="text-3xl text-white cursor-pointer hover:text-orange-400 transition-colors duration-150 ml-auto"
            />
          </span>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">FITSOFT</h2>
            </div>
            <ul className="flex flex-col items-center justify-between gap-3">
              <li className="pointer">
                <span className="flex flex-col group overflow-hidden">
                  SOBRE
                  <span className="w-full h-[1px] group-hover:bg-white transform translate-x-full bg-dark group-hover:translate-x-0 transition-all ease-in-out duration-150"></span>
                </span>
              </li>
              <li className="pointer">
                <span className="flex flex-col group overflow-hidden">
                  APP
                  <span className="w-full h-[1px] group-hover:bg-white transform translate-x-full bg-dark group-hover:translate-x-0 transition-all ease-in-out duration-150"></span>
                </span>
              </li>
              <li className="pointer">
                <span className="flex flex-col group overflow-hidden">
                  LOGOUT
                  <span className="w-full h-[1px] group-hover:bg-white transform translate-x-full bg-dark group-hover:translate-x-0 transition-all ease-in-out duration-150"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
