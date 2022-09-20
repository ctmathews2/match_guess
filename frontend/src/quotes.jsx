import React, {useState} from "react";
import axios from "axios";
function Quotes() {

    const [text, setText] = useState("");
    // const [author, setAuthor] = useState("");

    function getQuote() {
        axios.get("http://localhost:5000/",  { params: { answer: 'ysoseriious' } }).then(response => {
            setText(response.data.name);
            // setAuthor(response.data.author);
            console.log(response.data.name);
        });
    }

    return (
        <div>
            <input type="text" id="nameInput"></input>
            <button onClick={getQuote}>
                Generate Level
            </button>
            <h1>{text}</h1>
        </div>
    )
}
export default Quotes;