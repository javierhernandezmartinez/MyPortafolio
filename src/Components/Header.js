import React from 'react';
import '../Styles/Header.css'
import { TabMenu } from 'primereact/tabmenu';
import { Menubar } from 'primereact/menubar';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        window.location.hash="/"
        this.setState({
            items : [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    command:()=>{ window.location.hash="#page-1" }
                },
                {
                    label: 'Sobre mi',
                    icon: 'pi pi-fw pi-home',
                    command:()=>{ window.location.hash="#page-2" }
                },
                {
                    label: 'Skills',
                    icon: 'pi pi-fw pi-calendar',
                    command:()=>{ window.location.hash="#page-3" }
                },
                {
                    label: 'Proyectos',
                    icon: 'pi pi-fw pi-file',
                    command:()=>{ window.location.hash="#page-4" }
                },
                {
                    label: 'Hobit',
                    icon: 'pi pi-fw pi-file',
                    command:()=>{ window.location.hash="#page-5" }
                },
                {
                    label: 'Contacto',
                    icon: 'pi pi-fw pi-cog',
                    command:()=>{ window.location.hash="#page-6" }
                }
            ]
        })
    }

    render() {
        return(
            <div className={"div_header"}>
                <Menubar
                    model={this.state.items}
                />
            </div>


        )
    }
}

export default Header