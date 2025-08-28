'use client'
import { useState, useEffect } from "react"

export default function Nav(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=> setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar')
            if(window.scrollY > 0){
                nav.classList.add('sticky')
            }else{
                nav.classList.remove('sticky')
            }
        })
    },[])    

    return(
        <nav id="navbar" className="fixed top-0 left-0 flex justify-between lg:justify-start px-4 py-4 w-full lg:pt-10 lg:pl-10 z-50">
            <p className="z-40 font-bold text-2xl lg:mr-56">SueroTerapia</p>
            <div className="hidden lg:block z-40">
                <ul className="flex">
                    <li className="mr-20 cursor-pointer">
                        <a href="#inicio" className="text-2xl">Inicio</a>
                    </li>
                    <li className="mr-20 cursor-pointer">
                        <a href="#quees" className="text-2xl">¿Qué es?</a>
                    </li>
                    <li className="mr-20 cursor-pointer">
                        <a href="#beneficios" className="text-2xl">Beneficios</a>
                    </li>
                    <li className="mr-20 cursor-pointer">
                        <a href="#faq" className="text-2xl">FAQ</a>
                    </li>
                </ul>
            </div>
            <div id="menuToggle" className="md:hidden">
                <input type="checkbox" name="" id="menuCheckbox" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu" className="text-center">
                    <li className="my-10">
                        <a href="#inicio">
                            <label htmlFor="inicio" onClick={toggleMenu} className="text-2xl font-bold">Inicio</label>
                        </a>
                    </li>
                    <li className="my-10">
                        <a href="#quees">
                            <label htmlFor="quees" onClick={toggleMenu} className="text-2xl font-bold">¿Qué es?</label>
                        </a>
                    </li>
                    <li className="my-10">
                        <a href="#beneficios">
                            <label htmlFor="beneficios" onClick={toggleMenu} className="text-2xl font-bold">Beneficios</label>
                        </a>
                    </li>
                    <li className="my-10">
                        <a href="#faq">
                            <label htmlFor="faq" onClick={toggleMenu} className="text-2xl font-bold">FAQ</label>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}