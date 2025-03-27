'use client';

import { DeployIsCancel } from "../components/Subcomponents/func/OffDeployForm";

import { MouseOverForm } from "./MouseOverSelectServices";

const OffSelectServices = () => {

    const NameF = document.getElementById('NameF');
    const EmailF = document.getElementById('EmailF');
    const PnumberF = document.getElementById('PnumberF');
    const CompanyF = document.getElementById('CompanyF');
    const AboutProyect = document.getElementById('AboutProyect');

    const Filtro = NameF.value == '';
    const Filtro2 = EmailF.value == '';
    const Filtro3 = PnumberF.value == '';
    const Filtro4 = CompanyF.value == '';
    const Filtro5 =  AboutProyect.value == '';

    if(MouseOverForm === true){
        
        if(DeployIsCancel == true){
            document.getElementById('FormGetServices').style.display = 'none';
        }else{
            document.getElementById('FormGetServices').style.display = 'flex';
        }
    }else if(MouseOverForm === undefined){
        
        if(((Filtro && Filtro2) && (Filtro3 && Filtro4)) && Filtro5){
            document.getElementById('FormGetServices').style.display = 'none';
        }else{
        }
    }else{
        
    };
};
export default OffSelectServices;