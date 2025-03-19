'use client';

import DataCardServices from "@/app/Services/Data/DataCardServices";

export let DeployIsCancel;
const OffDeployForm = () => {
    const FormGetServices = document.getElementById('FormGetServices');
    const PageServices = document.getElementById('PageServices');

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

    if(screen.width < 667){
        if(((Filtro && Filtro2) && (Filtro3 && Filtro4)) && Filtro5){
            
            FormGetServices.style.display = 'none';
            FormGetServices.style.position = 'absolute';
            FormGetServices.style.width = '100%';
            FormGetServices.style.borderRadius ='0px';
            DeployIsCancel = true;

            setTimeout(()=>{
                DeployIsCancel = undefined;
            },100);

            for(let x = 0; x < DataCardServices.length; x++){
                document.getElementById(`C${x}`).style.display = 'flex';
            }; 

        }else{
            
        } 
    }else{
        if(((Filtro && Filtro2) && (Filtro3 && Filtro4)) && Filtro5){
        
            if(DeployIsCancel == undefined){
                PageServices.style.padding = '100px';
                FormGetServices.style.display = 'none';
                DeployIsCancel = true;
                setTimeout(()=>{
                    DeployIsCancel = undefined;
                },100);
            }
    
        }else{
            
        }
    }
    
};
export default OffDeployForm;