import React from "react";

const Header = () => {
    return (
        <div className="header__container">
            <h1 className="ui header">
                <i className="tasks icon"></i>
                <div className="content">
                    The quiz app!
                    <div className="sub header">
                        Test your knowledge about countries and capitals
                    </div>
                </div>
            </h1>
        </div>
    );
};

export default Header;