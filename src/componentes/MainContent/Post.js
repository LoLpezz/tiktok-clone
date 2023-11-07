import listaVideos from "../../infos"
import { DefaultPlayer as Video } from "react-html5video"
import 'react-html5video/dist/styles.css'

import {BsMusicNoteBeamed, BsFillBookmarkFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {IoArrowRedoSharp} from 'react-icons/io5'
import {HiMiniChatBubbleOvalLeftEllipsis} from 'react-icons/hi2'

function Post(){

    return(
        <>
          <div className=" pt-[59px] right-[-240px] relative w-[calc(100%-240px)]">
            {
              listaVideos.map((lista, index) => {
                return(
                  <div className=" border-b-[1px] flex m-auto pb-5 pt-[20px] w-[43.25rem]">
                    <img className=" cursor-pointer rounded-full w-14 h-14" src={lista.imgSrc} alt="Imagem do usuario"/>
                    <div className=" ml-3">
                      <div className=" mr-[114px]">
                        <p className="cursor-pointer font-bold text-[18px] hover:underline leading-6 mb-2">{lista.userName}</p>
                        <p className="leading-[21px] mb-3">{lista.description}</p>
                        <p className=" cursor-pointer flex font-normal hover:underline items-center leading-[21px] mb-2">
                          <BsMusicNoteBeamed className=" mr-2"/>
                          {lista.music}
                        </p>
                        <button className=" absolute hover:bg-[#FE2C55]/[.06] border-[#FE2C55] border-[1px] cursor-pointer font-semibold left-[770px] leading-6 min-h-[2.25rem] text-[#FE2C55] text-[1.125rem] top-[85px] w-[6rem]">Seguir</button>
                      </div>
                      <div className="flex items-end">
                        <Video autoPlay loop className=" mr-5 w-[19.375rem]" key={index}>
                          <source src={lista.videoSrc} type="video/webm"/>
                        </Video>
                        <div>
                          <div className="flex flex-col items-center mb-[6px] mt-2">
                            <div className="bg-[#161823]/[0.06] rounded-full flex h-[48px] items-center justify-center w-[48px]">
                              <AiFillHeart className=" cursor-pointer  h-[24px] w-[24px]"/>
                            </div>
                            <p>{lista.likes}</p>
                          </div>
                          <div className="flex flex-col items-center mb-[6px] mt-2">
                            <div className="bg-[#161823]/[0.06] rounded-full flex h-[48px] items-center justify-center w-[48px]">
                              <HiMiniChatBubbleOvalLeftEllipsis className=" cursor-pointer h-[24px] w-[24px]" />
                            </div>
                            <p>{lista.coments}</p>
                          </div>
                          <div className="flex flex-col items-center mb-[6px] mt-2">
                            <div className="bg-[#161823]/[0.06] rounded-full flex h-[48px] items-center justify-center w-[48px]">
                              <BsFillBookmarkFill className=" cursor-pointer h-[24px] w-[24px]" />
                            </div>
                            <p>{lista.save}</p>
                          </div>
                          <div className="flex flex-col items-center mb-[6px] mt-2">
                            <div className="bg-[#161823]/[0.06] rounded-full flex h-[48px] items-center justify-center w-[48px]">
                              <IoArrowRedoSharp className=" cursor-pointer h-[24px] w-[24px]" />
                            </div>
                            <p>{lista.share}</p>
                          </div>
                      </div>
                      </div>
                      
                    </div>
                  </div>
                )
              })
            }
          </div>  
        </>
    )
}

export default Post