'use client'

import Image from 'next/image'
//Libreria de carrusel
import '../app/css/carousel.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bootstrap from "../public/images/Tecnologias/Boostrap.svg";
import css from "../public/images/Tecnologias/Css.svg";
import docker from "../public/images/Tecnologias/Docker.svg";

import html from "../public/images/Tecnologias/Html.svg";
import java from "../public/images/Tecnologias/Java.svg";
import javascript from "../public/images/Tecnologias/Javascript.svg";
import kubernetes from "../public/images/Tecnologias/Kubernetes.svg";
import mariadb from "../public/images/Tecnologias/MariaDb.svg";

import mysql from "../public/images/Tecnologias/MySql.svg";

import postman from "../public/images/Tecnologias/Postman.svg";

import react from "../public/images/Tecnologias/React.svg";

import spring from "../public/images/Tecnologias/Spring.svg";
import springboot from "../public/images/Tecnologias/SpringBoot.svg";

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import TestimonialImage04 from '@/public/images/pag1.png';
import Producto4 from '@/public/images/producto2.png'
import Producto5 from '@/public/images/producto3.png'
import Slider from 'react-slick';

export default function Testimonials() {

  const settings5 = {
    infinite: true,
    autoplay: true,
    speed: 3750,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    cssEase: "linear",
    pauseOnHover: true,
   
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          speed: 1750,
          autoplay: true,
          autoplaySpeed: 1500, // Ajusta la velocidad de inicio en pantallas más pequeñas
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          speed: 1750,
          autoplay: true,
          autoplaySpeed: 1500, // Ajusta la velocidad de inicio en pantallas más grandes
        },
      },
    ],
  };
  return (
    <section id='seccion3'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Productos</h2>
            <p className="text-xl text-gray-400">Genera la confianza que necesitas.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage04} width={250} height={48} alt="Testimonial 01" />
                 
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
              Landing Page para clientes, realizada de manera independiente. 
              ¡Descubre cómo nuestra página de destino puede ayudar a convertir visitantes en clientes potenciales!
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://wa.link/k7u0ip">Quiero saber mas..</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={Producto4} width={310} height={48} alt="Testimonial 02" />
                 
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Landing Page realizada para impulsar tu marca profesional. ¡Descubre cómo nuestra página puede ayudarte 
              a destacarte y atraer a nuevos clientes hacia tu negocio!" </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://wa.link/k7u0ip">Quiero impulsar mi imagen..</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={Producto5} width={270} height={48} alt="Testimonial 03" />
                 
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Aplicación web realizada para clientes, 
              en este caso con funcionalidades específicas para satisfacer tus necesidades. 
              Descubre cómo puedo simplificar procesos, 
              mejorar la interacción con tus clientes y potenciar el crecimiento de tu negocio</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://wa.link/k7u0ip">Quiero mejorar mi marca..</a>
              </div>
            </div>

          </div>

        </div>

  
      </div>
      <div className="imgStyles mb-5">
       <Slider {...settings5}>


      
          <div className="certificado">
            <a ><Image src={java} alt="java" className='IconoSvg'/></a>
          </div>

          <div className="certificado">
            <a ><Image src={bootstrap} alt="bootstrap" width={28} /></a>
          </div>
          <div className="certificado">
            <a ><Image src={docker} alt="docker" width={28} /></a>
          </div>
          <div className="certificado">
            <a ><Image src={kubernetes} alt="kubernetes" width={28} /></a>
          </div>
          <div className="certificado">
            <a ><Image src={css} alt="css" width={28} className='javascript'/></a>
          </div>
          <div className="certificado">
            <a><Image src={bootstrap} width={28} alt='bootstrap'/></a>
          </div>

          <div className="certificado">
            <a ><Image src={javascript} alt="javascript" width={28} className='javascript'  /></a>
          </div>

          <div className="certificado">
            <a ><Image src={mariadb} alt="mariadb" width={28}  /></a>
          </div>
          <div className="certificado">
            <a ><Image src={mysql} alt="mysql" width={28} /></a>
          </div>
          <div className="certificado">
            <a ><Image src={postman} alt="postman" width={28} /></a>
          </div>
         
          <div className="certificado">
            <a ><Image src={react} alt="react" width={28}  className='javascript'/></a>
          </div>

          <div className="certificado">
            <a ><Image src={spring} alt="spring" width={28} /></a>
          </div>
          <div className="certificado">
            <a ><Image src={springboot} alt="springboot" width={28} height={26}/></a>
          </div>
          </Slider>
      </div>

    </section>
  )
}
