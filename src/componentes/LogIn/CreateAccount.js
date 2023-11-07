import { useState } from "react";
import Create from "./ModalCreateAccount"

function CreateAccount() {

const [modal, setModal] = useState(false)

  return (
    <div >
      <div>
        <button className='font-semibold ml-2 text-[#FE2C55]' onClick={() => setModal(true)}>Criar conta</button>
      </div>
      <Create isOpen={modal} setCloseModal={() => setModal(!modal)} >
        
      </Create>
    </div>
  );
}

export default CreateAccount;
