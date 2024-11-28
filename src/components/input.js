const Input = ({id,text, value,handler}) =>{

    return (<>
        <label htmlFor={id}>{text}</label>
        <input type="text" id={id} value={value} onChange={handler} />
    
    </>)
}

export default Input;