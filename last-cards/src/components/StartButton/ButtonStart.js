//Это самый блин нужный компонент! Что только не сделаешь ради идеи.
import React from "react";
import style from "./StyleButton.css"

class ButtonStart extends React.Component {



    render() {
        return (
            <div style={style} className="Button" onClick={this.buttonClick}>Sign with us</div>
        );
    }
}

export default ButtonStart;