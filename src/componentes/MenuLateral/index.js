import LogIn from "./Login"
import Links from "./Links"

import {AiFillHome} from "react-icons/ai"
import {BsPeople} from "react-icons/bs"
import {MdOutlineExplore} from "react-icons/md"
import {RiLiveLine} from "react-icons/ri"

function SideMenu(){
    return(
        <>
            <div id="sideMenu" className="fixed z-20 bg-whiite h-[90%] lg:border-r-0 w-[240px] mt-14 overflow-auto">
                <div className="min-h-full pl-2 pt-5">
                    <nav className="mb-2">
                        <ul>
                            <li>
                                <div>
                                    <a href="/" className=" cursor-pointer flex hover:bg-zinc-900/[.05] items-center p-2 text-[2rem]">
                                        <AiFillHome fill="rgba(254, 44, 85, 1)"></AiFillHome>
                                        <span className="font-bold leading-6 ml-2 text-[1.125rem] text-[#FE2C55]">Para você</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="/" className=" cursor-pointer flex hover:bg-zinc-900/[.05] items-center p-2 text-[2rem]">
                                        <BsPeople></BsPeople>
                                        <span className="font-bold leading-6 ml-2 text-[1.125rem]">Seguindo</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="/" className=" cursor-pointer flex hover:bg-zinc-900/[.05] items-center p-2 text-[2rem]">
                                        <MdOutlineExplore></MdOutlineExplore>
                                        <span className="font-bold leading-6 ml-2 text-[1.125rem]">Explorar</span>
                                        <div className="bg-[#FE2C55] font-semibold leading-5 ml-2 px-2 rounded-[0.625rem] text-white text-[0.813rem]">Novo</div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="/" className=" cursor-pointer flex hover:bg-zinc-900/[.05] items-center p-2 text-[2rem]">
                                        <RiLiveLine></RiLiveLine>
                                        <span className="font-bold leading-6 ml-2 text-[1.125rem] uppercase">Live</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <LogIn></LogIn>
                    <Links></Links>
                </div>
            </div>
        </>
    )
}

export default SideMenu