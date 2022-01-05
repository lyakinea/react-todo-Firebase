import { Button } from 'react-bootstrap';
import "./index.css";



const CustomButton = (props) => {

    return (
        <>
            <Button style={{backgroundColor: props.color, border:props.border}} variant={props.variant} className={props.class} onClick={props.onClick}>{props.content}</Button>{' '}
        </>
    )
}
export default CustomButton;