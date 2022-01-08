# rjs-simple-modal

> create-react-library

[![NPM](https://img.shields.io/npm/v/rjs-simple-modal.svg)](https://www.npmjs.com/package/rjs-simple-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rjs-simple-modal
```

## Usage

```jsx
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
      <Modal show={showModal} close={Toggle} title="My Modal">je suis une modal</Modal>
    </div>
  );
}

export default App;
```

## Usage Public directory
Add modal in the index.html
```html
    <div id="modal"></div>
    <div id="root"></div>
```

### Props
| Props | Type | Required | Default | Description |
| :--------------- |:---------------:| :---------------:| :---------------:| -----:|
| showModal | Bool | Required | False | State allows you to display the modal |
| Close | Function | Required | - | Function allows you to remove the modal |
| title | String | Required | - | Add title modal |
| children | String | Required | - | Add content modal |

## License

MIT © [Mkiera972](https://github.com/Mkiera972)
