import './App.css';
import { useRef, useState } from 'react'

function App() {

  const [name, setName] = useState("")

  const inputRef = useRef()
  const buttonRef = useRef()
  const handleSubmit = () => {
    console.log("Submit", buttonRef)
    inputRef.current.focus()
    buttonRef.current.style.backgroundColor = 'green'
    buttonRef.current.childNodes[0].nodeValue = 'Thank You'
  }
  return (
    <div className="App">
      <h1>App Component</h1>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <h4>Entered Data is : {name}</h4>
      <button ref={buttonRef} style={{ backgroundColor: 'red' }} onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
