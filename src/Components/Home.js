import React from 'react';

import '../Styles/Home.css'

import img1 from '../Assets/Images/img1.png'

import { TabMenu } from 'primereact/tabmenu';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[]
        }
    }

    componentDidMount() {
        this.setState({
            items : [
                {label: 'Home', icon: 'pi pi-fw pi-home'},
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
                {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
                {label: 'Documentation', icon: 'pi pi-fw pi-file'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog'}
            ]
        })
    }

    render() {
        return (
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <div className={"contenedor_1"}>
                        <div className={"row"}>
                            <div className={"col-md-4 div_img_perfil"}>
                                <img src={img1} className={"img_perfil"}/>
                            </div>
                            <div className={"col-md-8"}>
                                <p className={"text_present"}>Hola bienvenido a mi portafolio.!</p>
                            </div>

                        </div>
                        <div className={"row"}>
                            <div className={"col-md-12"}>
                                <TabMenu model={this.state.items} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }


}

export default Home