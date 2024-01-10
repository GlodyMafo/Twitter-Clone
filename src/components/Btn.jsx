

export default function Button (props){
    return (
        <>
         <button type={props.type || "button"} className={props.type || "btn"}> {props.name} </button>
        </>
    )
   
}