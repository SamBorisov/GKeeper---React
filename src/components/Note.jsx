import { BsFillArchiveFill } from "react-icons/bs";

export default function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
      }

    return(
        <div className="note">
         <h2>{props.title}</h2>
         <p>{props.text}</p>
         <button onClick={handleClick}> <BsFillArchiveFill /> </button>
        </div>
    )
}