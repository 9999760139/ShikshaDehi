    import React from 'react'
import './Description.css'
import Button from '@mui/material/Button';


export default function Description(props) {
    // console.log(props);      

    const handle_show_more_description = () => {
        document.getElementById("show_more_description").className = "show_more_class_show";
        document.getElementById("show_more_btn").className = "show_more_btn_hide";

    }
    const handle_hide_more_description = () => {
        document.getElementById("show_more_description").className = "show_more_class";
        document.getElementById("show_more_btn").className = "show_more_btn_show";
    }

    return (
        <div className="description_main">
            {props.description.map((step,index) => (
            <div className="main_box">
                <h2>{step.heading}</h2>
                <br/>   <br/>
                <strong>Become a Python Programmer and learn one of employer's most requested skills of 2022!</strong>
                <p>{step.show}</p>
                <Button size="small" id="show_more_btn" className="show_more_btn_show" onClick={handle_show_more_description}>{step.show_btn} </Button>
                <div id="show_more_description" className="show_more_class" >
                    <p>{step.hide}</p>
                    <Button size="small" onClick={handle_hide_more_description}>{step.hide_btn}</Button>
                </div>  
            </div>
            ))}
        </div>
    )
}
