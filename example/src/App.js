import React from 'react'

import { Modal,useModal } from 'rjs-simple-modal'
import 'rjs-simple-modal/dist/index.css'

function App() {
  const { showModal, Toggle } = useModal();
  return (
    <div className="App">
      <div className="demo">
        <h1>REACT SIMPLE MODAL</h1>
        <button type="button" onClick={()=>{Toggle()}}>
                Simple Modal
        </button>
      </div>
      <Modal show={showModal} close={Toggle} title="My Modal">toto</Modal>
    </div>
  );
}

export default App;
