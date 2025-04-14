'use client';
import DataCardServices from "@/app/Services/Data/DataCardServices";


const DeployForm = () => {
    const FormGetServices = document.getElementById('FormGetServices');
    const PageServices = document.getElementById('PageServices');
    if(screen.width < 667 ){
        FormGetServices.style.display = 'flex';
        FormGetServices.style.position = 'relative';
        FormGetServices.style.width = '80px';
        FormGetServices.style.borderRadius ='20px';
        FormGetServices.style.marginTop = '60px';
        FormGetServices.style.marginBottom = '60px';
        for(let x = 0; x < DataCardServices.length; x++){
            document.getElementById(`CardServices${x}`).style.display = 'none';
        };
    }else{
        PageServices.style.padding = '200px'
        FormGetServices.style.display = 'flex';
    };
};
export default DeployForm;