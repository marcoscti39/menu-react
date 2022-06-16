import React,{useState} from 'react'

import './Menu.css'
import SingleMenu from './SingleMenu'

import menuData from './data'
function Menu() {
    const [menu, setMenu] = useState([...menuData])
    const showMenu = (category = "all") =>{
        const newMenu = menuData.filter(item => item.category === category)
        setMenu([...newMenu])
    }
    let categories = menuData.map(findCategories => {
        const {category} = findCategories
        return category
    })
    categories = [...new Set(categories)]



    return (
        <>
            <section className="menu-btns">
                <button onClick={() => setMenu(menuData)} >all</button>
                {categories.map((category,index) => {
                    return (
                        <button key={index} onClick={() => showMenu(category)} >{category}</button>
                    )
                })}
            </section>
            <main>
                <section className="menu-container">
                    {menu.map(item =>{
                        return (
                            <SingleMenu key={item.id} {...item}/>
                        )
                    })}

                </section>
                
            </main>
        </>
        
    )
}

export default Menu
