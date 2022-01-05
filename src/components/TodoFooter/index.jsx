
import CustomButton from "../CustomButton";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
const TodoFooter = (props) => {
    return (
        <div className='my-2 d-flex justify-content-between align-items-center'>
            <div className="m-0 p-2 fs-4 text-dark">
                You have {props.len} pending tasks
            </div>
            <div>
            <CustomButton color='#8f4be8' border = '0' class = 'fs-3 px-3' content = 'Clear All' onClick = {props.onClick}/>
            </div>
        </div>
        )
}

export default TodoFooter;
