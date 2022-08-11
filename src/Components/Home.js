import React from 'react';
import '../Styles/Home.css'
import img1 from '../Assets/Images/img1.png'
import img2 from '../Assets/Images/programing1.jpg'
import { Carousel } from 'primereact/carousel';
import Header from './Header'


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
                                <div className={"row"}>
                                    <div className={"col-md-12"}>

                                    </div>
                                </div>
                                <div className={"row div_present"}>
                                    <div>
                                        <div className={"row div_present"}>
                                            <div className={"col-md-4 div_img_perfil"}>
                                                <img src={img1} className={"img_perfil"}/>
                                            </div>
                                            <div className={"col-md-8"}>
                                                <p className={"text_present"}>Hola.! Bienvenido a mi sitio.</p>
                                            </div>
                                            <div className={"col-md-12"}>
                                                <p className={"text_present"}>Javier Hernandez | Desarrollador Full-Stack</p>
                                            </div>
                                        </div>
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
                            <div className={"contenedor_2"}>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <p className={"title_sobremi"}>Contcto</p>
                                    </div>
                                    <div className={"col-md-12"}>
                                        <p className={"text_sobremi"}>
                                           linkedin: lorem-impus door
                                        </p>
                                        <p className={"text_sobremi"}>
                                            tel: 000 000 000 0
                                        </p>
                                    </div>
                                </div>

                            </div>
                            </scroll-page>
                    </scroll-container>
                </div>

            </div>
        )
    }


}

export default Home