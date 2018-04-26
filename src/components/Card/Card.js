// IMPORTS
import React from "react";
import "./Card.css";
// PROPS: Card
const Card = props => (
    <div className="click-item neutral" onClick = {() => { props.increment(props.id); props.shuffle(props.id); }}>
        <img src={props.image}/>
    </div>
);
// EXPORT DEFAULT: Card
export default Card;