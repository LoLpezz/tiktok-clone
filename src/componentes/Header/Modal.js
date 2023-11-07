import { AiOutlineQrcode, AiOutlineClose} from 'react-icons/ai'
import {BiLogoFacebookCircle, BiUser} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'
import {BsTwitter} from 'react-icons/bs'
import {AiFillApple} from 'react-icons/ai'

function Modal({isOpen, setCloseModal}){
   
   if(isOpen){
    return(
        <div className="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-black/[0.5] z-50">
            <div className="fixed w-[483px] h-[520px] rounded-xl bg-white">
                <div className=' m-auto w-[375px]'>
                    <h2 className=" font-bold my-4 text-center text-[2rem]">Entrar no TikTok</h2>
                    <div className=' border h-11 cursor-pointer font-semibold justify-center items-center mb-4 relative text-[15px] flex'>
                        <div className='flex'>
                            <AiOutlineQrcode className=' absolute h-5 left-3 w-5'></AiOutlineQrcode>
                            <p>Usar código QR</p>
                        </div>
                    </div>
                    <div className=' border h-11 cursor-pointer font-semibold items-center justify-center mb-4 relative text-[15px] flex'>
                        <div className='flex'>
                            <BiUser className=' absolute h-5 left-3 w-5'></BiUser>
                            <p>Usar telefone/e-mail/nome de usúario</p>
                        </div>
                    </div>
                    <div className=' border h-11 cursor-pointer font-semibold items-center justify-center mb-4 relative text-[15px] flex'>
                        <div className='flex'>
                            <BiLogoFacebookCircle className='absolute h-5 left-3 w-5'></BiLogoFacebookCircle>
                            <p>Continuar com Facebook</p>
                        </div>
                    </div>
                    <div className=' border h-11 cursor-pointer font-semibold items-center justify-center mb-4 relative text-[15px] flex'>
                        <div className='flex'>
                            <FcGoogle className='absolute h-5 left-3 w-5'></FcGoogle>
                            <p>Continuar com Google</p>
                        </div>
                    </div>
                    <div className=' border h-11 cursor-pointer font-semibold items-center justify-center mb-4 relative text-[15px] flex'>
                        <div className='flex'>
                            <BsTwitter className='absolute h-5 left-3 w-5'></BsTwitter>
                            <p>Continuar com Twitter</p>
                        </div>
                    </div>
                    <div className=' border h-11 cursor-pointer font-semibold items-center justify-center mb-4 relative text-[15px] flex'>
                        <div className='flex'>
                            <AiFillApple className='absolute h-5 left-3 w-5'></AiFillApple>
                            <p>Continuar com Apple</p>
                        </div>
                    </div>
                    
                </div>
                <div className=' border-t-[1px] flex h-16 items-center justify-center'>
                    <div>Não tem uma conta?</div>
                    <a href="/#" className='font-semibold ml-2 text-[#FE2C55]'>Criar conta</a>
                </div>
                <div className='absolute bg-black/[0.3] flex h-6 items-center justify-center right-[1.5rem] rounded-full scale-150 top-[1.5rem] w-6 '>
                    <AiOutlineClose className="cursor-pointer" onClick={setCloseModal}></AiOutlineClose>
                </div>
            </div>
        </div>
    ) 
        
    
   }
    return null
}

export default Modal