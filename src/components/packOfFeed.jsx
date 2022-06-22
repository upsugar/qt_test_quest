import React, {useState} from "react";
import "./styles/packOfFeed.css";
import {cn} from "@bem-react/classname";
import Description from "./description";

function PackOfFeed(props) {
    let food = props.info;
    const packOfFeed = cn("PackOfFeed");
    const packOfFeedBall = cn("PackOfFeed-ball");
    const packOfFeedCat = cn("PackOfFeed-cat");

    const [styleOfPack, setStyleOfPack] = useState(0);
    const styles = {
        0: "Default",
        1: "DefaultHover",
        2: "Selected",
        3: "SelectedHover",
    };

    const handleMouseEnter = () => {
        if (styleOfPack === 2) {
            setStyleOfPack(3);
        } else {
            setStyleOfPack(1);
        }
    };

    const handleMouseLeave = () => {
        if (styleOfPack === 3) {
            setStyleOfPack(2);
        } else if (styleOfPack !== 2) {
            setStyleOfPack(0);
        }
    };

    const handleMouseClick = () => {
        if (food.isEnded) return;
        if (styleOfPack === 2) {
            setStyleOfPack(0);
        } else if (styleOfPack === 3) {
            setStyleOfPack(1);
        } else {
            setStyleOfPack(2);
        }
    };

    let caption = () => {
        if (styleOfPack === 2 || styleOfPack === 3) {
            return food.description;
        } else if (food.isEnded) {
            return (
                <span
                    style={{color: "#ffff66"}}
                >{`Печалька, ${food.taste} закончился.`}</span>
            );
        } else {
            return (
                <span>
          Чего сидишь? Порадуй котэ,{" "}
                    <a
                        onClick={handleMouseClick}
                        className="PackOfFeed-caption_link"
                        href="#"
                    >
            купи
          </a>
          <span className="PackOfFeed-caption_link_">.</span>
        </span>
            );
        }
    };

    return (
        <figure>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseClick}
                className={packOfFeed({
                    style: styles[styleOfPack],
                    ended: food.isEnded,
                })}
            >
                <Description info={food} style={styleOfPack}/>
                <img
                    className={packOfFeedCat({ended: food.isEnded})}
                    src="/images/Cat.png"
                    alt="Тут должен быть котик"
                />
                <div
                    className={packOfFeedBall({
                        style: styles[styleOfPack],
                        ended: food.isEnded,
                    })}
                >
                    <div className="PackOfFeed-weight">
                        <span className="PackOfFeed-weight_value">{food.weight}</span>
                        <span className="PackOfFeed-weight_measure">кг</span>
                    </div>
                </div>
            </div>
            <figcaption className="PackOfFeed-caption">{caption()}</figcaption>
        </figure>
    );
}

export default PackOfFeed;
