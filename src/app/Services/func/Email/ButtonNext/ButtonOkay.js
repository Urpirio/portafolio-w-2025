import ShowContainerForm from "../Subfunc/ShowContainerForm";
import OffDeployForm from "@/app/Services/components/Subcomponents/func/OffDeployForm";

export const ButtonOkay_Click = () =>{
    document.getElementById('FormGetServices').style.marginBottom = '0px';
    document.getElementById('FormGetServices').style.marginTop = '0px';
    document.getElementById('divSend').remove();
    ShowContainerForm();
    window.location.href = '/Services';
    for(let x = 1; x < 6 ; x++){
        document.querySelector(`.InputHome${x}`).value = '';
    };
    OffDeployForm();
};

export const ButtonOkay_MouseEnter = () =>{
    document.getElementById('BtnOKay').style.opacity = '0.8';
};

export const ButtonOkay_MouseLeave = () =>{
    document.getElementById('BtnOKay').style.opacity = '1';
};

