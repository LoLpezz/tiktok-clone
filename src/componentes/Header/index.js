import Upload from './Upload'
import LogIn from '../LogIn/LogIn';

import Logo from '../../images/tiktok.png'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import { BsTranslate } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { FaRegKeyboard } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";

function Header(){
    return(
        <>
            <div id="HeaderNav" className="bg-white fixed flex z-30 w-full border-b h-[60px]">
                <div className='flex items-center justify-between gap-6 w-full px-4 mx-auto'>
                    <a href="/#">
                        <img src={Logo} className="min-w[120px] w-[120px]" alt='Logo do site'/>
                    </a>
                    
                    <div className='flex items-center bg-[#F1F1F2] rounded-full w-[516px] max-w-[430px]'>
                        <input
                        className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none" 
                        type="text" 
                        placeholder="Procurar"/>
                        <span>
                            <AiOutlineLine className='rotate-90 h-7 w-7'></AiOutlineLine>
                        </span>
                        <button className=' hover:bg-zinc-900/[.05] pl-2 pr-4 py-3 rounded-r-[20px]'>
                            <AiOutlineSearch className='h-6 w-6'></AiOutlineSearch>
                        </button>
                    </div>
                
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <button className='cursor-pointer flex'>
                                    <div className='border-[1px] border-solid border-black flex h-9 hover:bg-zinc-900/[.05] items-center px-4 rounded-sm'>
                                        <AiOutlinePlus className='h-5 mr-2 w-5'></AiOutlinePlus>
                                        <Upload></Upload>
                                    </div>
                                </button>
                            </div>
                            <LogIn></LogIn>
                            
                            { true ? (
                                <i>
                                    <AiOutlineMore className='cursor-pointer h-6 w-6'></AiOutlineMore>
                                </i>
                            ) : (
                                <div className='absolute border bg-white py-1.5 right-6 rounded-lg top-[50px] shadow-xl w-[210px]'>
                                    <div className='cursor-pointer flex font-semibold hover:bg-zinc-900/[.05] items-center leading-[1.313rem] p-[0.5rem]'>
                                        <BsTranslate className='h-5 mr-2 w-5 '></BsTranslate>
                                        <span>Português</span>
                                    </div>
                                    <div className='cursor-pointer flex font-semibold hover:bg-zinc-900/[.05] items-center leading-[1.313rem] p-[0.5rem]'>
                                        <BiHelpCircle className='h-5 mr-2 w-5 '></BiHelpCircle>
                                        <span>Feedback e ajuda</span>
                                    </div>
                                    <div className='cursor-pointer flex font-semibold hover:bg-zinc-900/[.05] items-center leading-[1.313rem] p-[0.5rem]'>
                                        <FaRegKeyboard className='h-5 mr-2 w-5 '></FaRegKeyboard>
                                        <span>Atalhos de teclado</span>
                                    </div>
                                    <div className='cursor-pointer flex font-semibold hover:bg-zinc-900/[.05] items-center leading-[1.313rem] p-[0.5rem]'>
                                        <div className='flex'>
                                            <MdOutlineDarkMode className='h-5 mr-2 w-5 '></MdOutlineDarkMode>
                                            <span >Modo escuro</span>
                                        </div>
                                        <button className='ml-[1rem]'>
                                            <div style={{backgroundColor: "rgba(22, 24, 35, 0.12)"}} className='rounded-[6.25em] h-[24px] w-[44px]'>
                                                <span style={{backgroundColor: "rgba(255, 255, 255)"}} className='flex left-[0.188rem] relative rounded-[6.25em] top-[0.125rem] h-[20px] w-[20px]'></span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default Header