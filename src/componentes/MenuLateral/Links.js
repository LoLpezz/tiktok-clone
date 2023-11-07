import imgSrc from "../../images/bgTiktokEfeito.png"

import {AiFillFire} from "react-icons/ai"

function Links(){
    return(
        <>
        <div className=" pt-4 pl-2">
            <div className=" mb-8 pr-2">
                <a className="items-center justify-center flex cursor-pointer">
                    <img className="h-[3.125rem] rounded-lg" src={imgSrc} alt="Imagem de fundo do texto"/>
                    <div className="items-center flex absolute hover:scale-110 transition">
                        <AiFillFire className="h-[1.188rem] mr-[0.563rem] w-[1.188rem]"></AiFillFire>
                        <h4 className="text-[#161823]/[1] font-semibold leading-[1.313rem]">Criar efeitos</h4>
                    </div>
                </a>
            </div>
            <div className=" mb-2">
                <a className=" font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Sobre</a>
                <a className=" font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Sala de Imprensa</a>
                <a className=" font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Contato</a>
                <a className=" font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Carreira</a>
            </div>
            <div className=" mb-2">
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">TikTok for Good</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Anunciar</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Developers</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Transparência</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Recompensas TikTok</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">TikTok Embeds</a>
            </div>
            <div className=" mb-2">
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Ajuda</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Segurança</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Termos</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Privacidade</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Portal do criador</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Diretrizes da Comunidade</a>
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem] hover:underline" href="#">Direitos autorias</a>
            </div>
            <div className=" mb-2">
                <a className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem]" href="#">Mais</a>
            </div>

            <span className="font-semibold inline-block leading-4 mr-[0.375rem] mt-[0.313rem] text-[#161823]/[.5] text-[0.75rem]">© 2023 TikTok</span>
        </div>
        </>
    )
}

export default Links