// este es el lugar donde la app se renderisa y aparece como principal en vh.

import React from "react";
import reactDom from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import './styles.css';
import { AppCustomHook } from "./prueba de api uando custon hook/AppCustomHook";
import { AppReact } from "./pruebas de react/AppReact";
import { ApiComplete } from "./pruebas de react/ApiComplete";













reactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
         <  AppReact/>
    </React.StrictMode>
)

