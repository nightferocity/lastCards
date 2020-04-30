import React from "react";
import './StartPage.css';

class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "Start Page",
        }
    }
    render() {
        let nav = this.props.navigationElements;
        return (
            <div className="container">
                <form>
                    <button>Войти</button>
                </form>
            </div>
        )
    }
}

export default StartPage;