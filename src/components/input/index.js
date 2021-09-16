function Input({text,placeholder,change ,onClick}){
    return (
<input onChange={change} type={text } placeholder={placeholder} />
    );
}
export default Input;