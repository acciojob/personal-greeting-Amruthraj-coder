
import React from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText] =useState("")

  const disp = (event)=> {

      setText(event.target.value)

      console.log(event.target.value);
      // event.preventDefault()
  }


  return (
    <div>
       <input  type="text" id="inputField" placeholder="Press Enter" onKeyUp={disp} />
    <div >
        <p>{text}</p>
    </div>
    </div>
  )
}

export default App
