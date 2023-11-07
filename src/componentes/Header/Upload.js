import { useState } from "react";
import Modal from "./Modal"

function Upload() {

const [modal, setModal] = useState(false)

  return (
    <div >
      <div>
        <button className='text-[18px] font-semibold leading-6' onClick={() => setModal(true)}>Carregar</button>
      </div>
      <Modal isOpen={modal} setCloseModal={() => setModal(!modal)} >
        
      </Modal>
    </div>
  );
}

export default Upload;
