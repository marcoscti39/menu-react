import React from 'react'


import './SingleMenu.css'
function SingleMenu({title, category, img, price, desc}) {
    return (
        <article className="menu-item">
            <div className="menu-item-img">
                <img src={img} alt={title} />
            </div>
            <div className="menu-item-info">
                <div className="menu-item-wrapper">
                    <h2 className="menu-item-name">{title}</h2>
                    <span className="menu-item-price">{price}</span>
                </div>
                <p className="menu-item-description">{desc}</p>
            </div>
        </article>
    )
}

export default SingleMenu
