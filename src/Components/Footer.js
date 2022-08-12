import React from 'react';
import '../Styles/Footer.css'
import ReactWhatsapp from 'react-whatsapp';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className={"footer"}>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <p>
                            © Copyright Derechos Reservados 2022
                        </p>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"div_icon"}>
                            <i className="pi pi-linkedin" onClick={()=>{window.open('https://www.linkedin.com/in/javierhernandezmtz/','_blank')}}></i>
                            <i className="pi pi-facebook" onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100081291889422','_blank')}}></i>
                            <ReactWhatsapp number="555-185-2695"
                                           message="Hola que tengas un lindo dia! en breve me pondre en contacto muchas gracias!"
                                           className={"button_whats"}
                            >
                                <i className="pi pi-whatsapp"></i>
                            </ReactWhatsapp>
                        </div>
                    </div>
                </div>


            </div>


        )
    }
}

export default Footer