import React from "react";
import {cn} from "@bem-react/classname";
import "./styles/description.css";

function Description(props) {
    let food = props.info;
    const description = cn("Description");
    let slogan = () => {
        if (props.style === 3) {
            return <span style={{color: "#e62e7a"}}>Котэ не одобряет?</span>;
        } else {
            return "Сказачное заморское яство";
        }
    };
    return (
        <div className={description({ended: food.isEnded})}>
            <div className="Description-slogan">{slogan()}</div>
            <div className="Description-brandName">Нямушка</div>
            <div className="Description-taste">{food.taste}</div>
            <p className="Description-numberOfServings">
                {`${food.numberOfservings} порций`}
                <br/>
                {`${food.bonus}`}
            </p>
        </div>
    );
}

export default Description;
