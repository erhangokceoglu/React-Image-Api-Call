import "./SearchHeader.css"
import {useState} from "react";


function SearchHeader
({search}) {
    const [valueInput, setValue] = useState("");
    const HandleFormSubmit =(e)=>{
        e.preventDefault();
        debugger;
        search(valueInput);
    }

    const handleChange = (e) =>{
       setValue(e.target.value);
    }
    return (
         <div className="searchDiv">
         <form onSubmit={HandleFormSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input value={valueInput} onChange={handleChange}/>
         </form>
         </div> 
    );
}

export default SearchHeader;