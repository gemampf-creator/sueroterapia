'use client'
import { useState } from "react"

export default function Nav(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=> setIsOpen(!isOpen);

    const closeMenu = ()=> setIsOpen(false)

    return(
        <nav className="flex">
            <p>SueroTerapia</p>
            <div id="menuToggle">
                <input type="checkbox" name="" id="menuCheckbox" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <li>
                        <a href="">
                            <label htmlFor="menuCheckbox" onClick={this.parentNode.click()}>Inicio</label>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <label htmlFor="menuCheckbox" onClick={`this.parentNode.click();`}>¿Qué es?</label>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <label htmlFor="menuCheckbox" onClick={`this.parentNode.click();`}>Beneficios</label>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <label htmlFor="menuCheckbox" onClick={`this.parentNode.click();`}>FAQ</label>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}