import { useState } from "react";
import ModalCreateAccount from "./ModalCreateAccount"

function LogIn() {

const [modal, setModal] = useState(false)

  return (
    <div >
      <div>
        <button className=' rounded bg-[#FE2C55] font-bold h-[2.25rem] leading-5 ml-2 text-[#FFFFFF] w-[6.25rem]' onClick={() => setModal(true)}>Entrar</button>
      </div>
      <ModalCreateAccount isOpen={modal} setCloseModal={() => setModal(!modal)} >
        
      </ModalCreateAccount>
    </div>
  );
}

export default LogIn;