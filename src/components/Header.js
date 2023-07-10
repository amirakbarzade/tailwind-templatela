import twitter from "../icon/Vector.svg";
import instagram from "../icon/Vector (2).svg";
import figma from "../icon/Vector (1).svg";
import { useState } from "react";


const Header = () => {

  const [open,setOpen]=useState(false);


    return (
        <header>
          <nav className="flex justify-between items-center
                      py-8 px-20 shadow-2xl xsm:max-lg:px-4
                      dark:bg-dark-gray">
            <p className=" text-center text-xl font-bold leading-none lg:hidden" href="#">
              kevin Bennite
            </p>
            <div onClick={() => setOpen(!open)} className="lg:hidden ">
              <div>
                <button className="navbar-burger flex items-center text-blue-600 ">
                  <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between text-center 
                        xsm:max-lg:hidden ">
              <div className="pe-12">
                <p className="text-xl font-bold">kevin Bennite</p>
              </div>
              <div>
                <a href="#" className="pe-5 text-blue section-style dark:text-white">section two</a>
                <a href="#" className="pe-5 text-blue section-style dark:text-white">section three</a>
                <a href="#" className="pe-5 text-blue section-style dark:text-white">section four</a>
              </div>
            </div>
            <div className="flex  text-center 
                        xsm:max-lg:hidden ">
              <div className="flex items-center">
                <a href="#" className="pe-5 xsm:max-sm:pe-1 ">
                  <img src={instagram} alt=""/>
                </a>
                <a href="#" className="pe-5 xsm:max-sm:pe-1 ">
                  <img src={figma} alt=""/>
                </a>
                <a href="#" className="pe-5  xsm:max-sm:pe-1 ">
                  <img src={twitter} alt=""/>
                </a>
              </div>        
              <button onClick={() => document.body.classList.toggle('dark')}
                     className="border rounded-full p-1 w-auto me-12
                            xsm:max-lg:mb-3 xsm:max-sm:w-24" 
                > 
                    dark mode
              </button>
            </div>
          </nav>
          <div className={`${open ? "block" : "hidden"} navbar-menu relative z-50`}>
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col 
                        w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto
                        dark:bg-dark-gray">
              <div className="flex items-center mb-8">
                  <button className="border rounded-full p-1 w-auto me-12
                                mr-auto leading-none xsm:max-sm:w-24" 
                                onClick={() => document.body.classList.toggle('dark')}> 
                  dark mode
                </button>
                <button onClick={() => setOpen(!open)} className="navbar-close">
                  <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <a className="block p-4 text-sm font-semibold text-blue rounded dark:text-white" href="#">kevin Bennite</a>
                  </li>
                  <li className="mb-1">
                    <a className="block p-4 text-sm font-semibold text-blue rounded dark:text-white" href="#">section two</a>
                  </li>
                  <li className="mb-1">
                    <a className="block p-4 text-sm font-semibold text-blue rounded dark:text-white" href="#">section three</a>
                  </li>
                  <li className="mb-1">
                    <a className="block p-4 text-sm font-semibold text-blue rounded dark:text-white" href="#">section four</a>
                  </li>
                  <li className="mb-1">
                    <div 
                    className="text-center block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded
                          xsm:max-lg:flex-col-reverse">
                          <div className="flex items-center">
                            <a href="#" className="pe-5 xsm:max-sm:inline-block xsm:max-sm:pe-3 ">
                              <img src={instagram} alt=""/>
                            </a>
                            <a href="#" className="pe-5 xsm:max-sm:inline-block xsm:max-sm:pe-3 ">
                              <img src={figma} alt=""/>
                            </a>
                            <a href="#" className="pe-5 xsm:max-sm:inline-block  xsm:max-sm:pe-3 ">
                              <img src={twitter} alt=""/>
                            </a>
                          </div>        
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
    )
}

export default Header;