"use client"
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import React, { useEffect } from 'react';
import logo3 from "../../public/images/logo6.svg"
import Image from 'next/image'

export default function Header() {

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href')?.substring(1);
    const targetSection = document.getElementById(id || '');

    if (targetSection) {
      const targetOffset = targetSection.offsetTop;
      const initialOffset = window.pageYOffset;
      const distance = Math.abs(targetOffset - initialOffset);
      const duration = Math.min(distance / 3, 800); // Duración máxima de 1000ms

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, initialOffset + distance * progress);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      const startTime = performance.now();
      requestAnimationFrame(scroll);
    }
  };

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block " aria-label="Cruip">
            <Image src={logo3} alt='logo3' width={130} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li><a href="#seccion1" onClick={(e) => handleClick(e)} className='
          font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
          '>Inicio</a></li>

              <li>
                <Link href="#seccion2"  onClick={(e) => handleClick(e)}>
                  <button   className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    Servicios
                  </button>
                </Link>

              </li>

              

              <li><a id="scrollLink" href="#seccion3" onClick={(e) => handleClick(e)} className=' 
          font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
          ' >Productos</a></li>

           

              <li><a href="#seccion4"  onClick={(e) => handleClick(e)} className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Contacto</a></li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
