import Image from "next/image";
import React from "react";
import Copyright from "./copyright";
import Subscribe from "./subscribe";
import Table from "./table";

const tableData = [
  {title: "Acerca de", items : ["Sobre nosotros", "Tiendas", "Crear Eco-Tienda", "Olambassador"]},
  {title: "Ayuda", items : ["Contáctanos", "Preguntas frecuentes", "Rastreo de pedidos", "Políticas de cookies",
    "Políticas de reembolso", "Trabaja con nosotros "]},
  {title: "Comunidad", items : [{text : "Facebook", icon: require('public/icons/facebook.png')}, 
      {text: "Instagram", icon: require('public/icons/instagram.png')},
      {text: "Linkdln", icon: require('public/icons/linkedin.png') }]},
  {title: "Mi cuenta", items : ["Ingresa", "Vender"]},

]

export default function Footer(){
  return(
    <div className="w-full bg-primary" >
      <Subscribe />
      <div className="lg:px-20 px-4 py-14 w-full flex lg:flex-row flex-col lg:justify-between items-center" >
        <div className="relative lg:w-77 w-max mb-7 flex flex-col" >
          <div className="mb-4 self-center w-50 h-14" >
            <Image width={200} height={56} src={require('public/logo.png')} />
          </div>
          <div className="h-12 flex items-center" >
            <Image width={24} height={24} src={require('public/icons/phone.png')} />
            <p className="text-white text-sm ml-2">Llamenos al: (+1) 954 744 6531</p>
          </div>
          <div className="h-12 flex items-center" >
            <Image width={24} height={24} src={require('public/icons/mail.png')} />
            <p className="text-white text-sm ml-2">Correo electronico: info@aliolam.com</p>
          </div>
          <div className="h-12 flex items-center" >
            <Image width={24} height={24} src={require('public/icons/location-marker.png')} />
            <p className="text-white text-sm ml-2">2741 Taft st Hollywood Florida 33020.</p>
          </div>
        </div>

        <Table items={tableData} />
      </div>
      <Copyright />
    </div>
  )
}