

export default function Button (props){
    return (
        <>
         <button type={props.type || "button"} className={props.class}> {props.name} </button>
        </>
    )
   
}