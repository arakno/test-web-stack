
type Props = {
    text: string,
    className: string,
    onClick: () => void
}

const Button  = ({text, ...props}: Props)=>{
    return <button {...props}>{text}</button>
}

export default Button 