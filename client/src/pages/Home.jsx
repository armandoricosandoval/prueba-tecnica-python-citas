import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="text-gray-700 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">"¡Bienvenido/a! 
        <br className="hidden lg:inline-block"/>Te invitamos a explorar nuestra nueva aplicación de gestión de citas para peluquería.
      </h1>
      <p className="mb-8 leading-relaxed"> Desarrollada como parte de nuestra prueba para Candidato Backend Semisenior, esta API en Python ofrece una solución sencilla pero funcional para la gestión eficiente de reservas de citas. ¿Por qué no te sumerges en la experiencia y exploras cómo esta API puede simplificar la administración de citas en una peluquería? ¡Adelante y descubre cómo esta aplicación puede facilitar el flujo de reservas y optimizar la gestión de tu peluquería!"</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/lista-citas">Lista de Citas</Link></button>        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://picsum.photos/id/26/367/267"/>
    </div>
  </div>
</section>
  )
}

export default Home
