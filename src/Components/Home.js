import React from 'react';
import '../Styles/Home.css'
import img1 from '../Assets/Images/img1.png'
import img2 from '../Assets/Images/programing1.jpg'
import { Carousel } from 'primereact/carousel';
import { ProgressSpinner } from 'primereact/progressspinner';
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';

import Header from './Header'
import Footer from './Footer'


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[]
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <Header/>
                    <scroll-container>
                        <scroll-page id="page-1">
                            <div className={"contenedor_1"}>
                                <div className={"row div_present"}>
                                    <div className={"col-md-4 div_img_perfil"}>
                                        <img src={img1} className={"img_perfil"}/>
                                        <p className={"text_nombre"}>
                                            <span> Javier Hernandez </span>
                                            <br/>
                                            Desarrollador Full-Stack
                                        </p>
                                        <p className={"text_position"}>

                                        </p>
                                    </div>
                                    <div className={"col-md-8"}>
                                        <p className={"text_present"}>
                                            <span> Hola.! </span>
                                        </p>

                                        <p className={"text_present line anim-typewriter"}>Bienvenido a mi sitio.</p>
                                    </div>

                                </div>
                            </div>
                        </scroll-page>
                        <scroll-page id="page-2">
                            <div className={"contenedor_2"}>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <p className={"title_sobremi"}>Sobre mi</p>
                                    </div>
                                    <div className={"col-md-12"}>
                                        <p className={"text_sobremi"}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged. It was popularised in the
                                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktop publishing software like Aldus PageMaker including versions
                                            of Lorem Ipsum
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </scroll-page>
                        <scroll-page id="page-3">
                            <div className={"contenedor_2"}>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <p className={"title_sobremi"}>Skills</p>
                                    </div>
                                    <div className={"col-md-12"}>
                                        <p className={"text_sobremi"}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged. It was popularised in the
                                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktop publishing software like Aldus PageMaker including versions
                                            of Lorem Ipsum
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </scroll-page>
                        <scroll-page id="page-4">
                            <div className={"contenedor_2"}>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <p className={"title_sobremi"}>Proyectos</p>
                                    </div>
                                    <div className={"col-md-12"}>
                                        <p className={"text_sobremi"}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged. It was popularised in the
                                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktop publishing software like Aldus PageMaker including versions
                                            of Lorem Ipsum
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </scroll-page>
                        <scroll-page id="page-5">
                            <div className={"contenedor_2"}>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <p className={"title_sobremi"}>Hobbit</p>
                                    </div>
                                    <div className={"col-md-12"}>
                                        <p className={"text_sobremi"}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged. It was popularised in the
                                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktop publishing software like Aldus PageMaker including versions
                                            of Lorem Ipsum
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </scroll-page>
                        <scroll-page id="page-6">
                            <div className={"contenedor_6"}>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <p className={"title_sobremi"}>Contacto</p>
                                    </div>
                                    <div className={"col-md-12"}>
                                        <div className={"row row_contacto"}>
                                            <div className={"col-md-6 div_contacto"}>
                                                <p className={"tel text_contactame"}>
                                                    Tienes algun proyecto en mente?
                                                    <br/>
                                                    Contactame y lo charlamos.
                                                </p>
                                                <p className={"tel"}> <i className="pi pi-map-marker"></i> Edo. Mèxico, Mèxico</p>
                                                <p className={"tel"}> <i className="pi pi-phone"></i> 555-185-2695</p>
                                                <p className={"tel"}> <i className="pi pi-at"></i> javier_9509@hotmail.com</p>
                                                <div className={"div_icon"}>
                                                     <i className="pi pi-linkedin" onClick={()=>{window.open('https://www.linkedin.com/in/javierhernandezmtz/','_blank')}}></i>
                                                     <i className="pi pi-github" onClick={()=>{window.open('https://github.com/javierhernandezmartinez/','_blank')}}></i>
                                                    <ReactWhatsapp number="555-185-2695"
                                                                   message="Hola que tengas un lindo dia! en breve me pondre en contacto muchas gracias!"
                                                                   className={"button_whats"}
                                                                   >
                                                        <i className="pi pi-whatsapp"></i>
                                                    </ReactWhatsapp>
                                                </div>
                                            </div>
                                            <div className={"col-md-6 div_form"}>
                                                <div>
                                                    <input className={"input_contacto"} placeholder={"Nombre"}/>
                                                    <input className={"input_contacto"} placeholder={"Correo"}/>
                                                    <input className={"input_contacto"} placeholder={"Asunto"}/>
                                                    <input className={"input_contacto message"} placeholder={"Mensage"}/>
                                                    <button className={"button_contacto"}>Enviar</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            </scroll-page>
                        <scroll-page id="page-7">
                            <Footer/>
                        </scroll-page>
                    </scroll-container>
                </div>
            </div>
        )
    }


}

export default Home