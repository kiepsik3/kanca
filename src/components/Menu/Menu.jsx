import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import cn from 'classnames';

export default function Menu() {
    const { data: menu, isPending, error } = useFetch("http://localhost:8000/menu/")
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className={cn("menu", toggleMenu && "opened")} onClick={() => setToggleMenu(!toggleMenu)}>
            <FaBars size="3.5em" color="white" />
            <ul className="menu-items" >
                {menu?.map(m => (
                    <li><Link to={m.slug} onClick={() => setToggleMenu(!toggleMenu)}>{m.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}
