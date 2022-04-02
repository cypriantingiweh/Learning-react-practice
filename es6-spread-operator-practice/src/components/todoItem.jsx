import React from "react";

function ListItem(props){

    // const [isDone, setIsDone] = useState(false);

    // function handleClick(){
    //     setIsDone(prevValue => !prevValue)
    // }


    return <div onClick={() => props.onChecked(props.id)} >
                <li> {props.text} </li>
            </div>
    // <div onClick={handleClick}>
    //         <li style={{textDecoration:isDone ? "line-through" :"none"}}> {props.text} </li>
    //     </div>

}

export default ListItem;