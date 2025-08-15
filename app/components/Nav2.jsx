"use client"
import { useEffect } from "react"

export default function Nav2(){

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar')
            console.log(nav);
            if(window.scrollY > 0){
                nav.classList.add('sticky')
            }else{
                nav.classList.remove('sticky')
            }
        })
    },[]) 

    return(
        <nav className="navbar" id="navbar">
            <h1 className="logo text-2xl">SueroTerapia</h1>

            <label htmlFor="menu_hamburguesa" className="labe_hamburguesa">
                <div><span></span>
                <span></span>
                <span></span></div>
            </label>

            <input type="checkbox" name="" id="menu_hamburguesa"/>

            <ul className="ul_links">
                <li className="li_links">
                    <a href="#inicio" className="link" htmlFor="menu_hamburguesa">Inicio</a>
                </li>
                <li className="li_links">
                    <a href="#quees" className="link" htmlFor="menu_hamburguesa">¿Qué es?</a>
                </li>
                <li className="li_links">
                    <a href="#beneficios" className="link" htmlFor="menu_hamburguesa">Beneficios</a>
                </li>
                <li className="li_links">
                    <a href="#faq" className="link" htmlFor="menu_hamburguesa">FAQ</a>
                </li>
            </ul>
        </nav>
    )
}