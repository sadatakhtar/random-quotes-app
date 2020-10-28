import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header_logo">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJL2pyRvdr7gU4n2fgVtznrYGHBw0RKwTkxw&usqp=CAU" alt="" />
            </div>
            <div className="header_title">
                 <h1>Random Quotes</h1>
            </div>
            
        </div>
    )
}

export default Header;
