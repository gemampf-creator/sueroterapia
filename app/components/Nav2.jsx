"use client"
import { useEffect, useState } from "react"

export default function Nav2(){

    const [checked, setChecked] = useState(false)

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

    const handleCheck = ()=> setChecked(false)

    return(
        <nav className="navbar" id="navbar">
            <h1 className="logo text-2xl">SueroTerapia</h1>

            <label htmlFor="menu_hamburguesa" className="labe_hamburguesa">
                <div><span></span>
                <span></span>
                <span></span></div>
            </label>

            <input type="checkbox" name="" id="menu_hamburguesa" checked={checked} onChange={(e)=> setChecked(e.target.checked)}/>

            <ul className="ul_links">
                <li className="li_links">
                    <a href="#inicio" className="link" onClick={handleCheck}>Inicio</a>
                </li>
                <li className="li_links">
                    <a href="#quees" className="link" onClick={handleCheck}>¿Qué es?</a>
                </li>
                <li className="li_links">
                    <a href="#beneficios" className="link" onClick={handleCheck}>Beneficios</a>
                </li>
                <li className="li_links">
                    <a href="#faq" className="link" onClick={handleCheck}>FAQ</a>
                </li>
            </ul>
        </nav>
    )
}