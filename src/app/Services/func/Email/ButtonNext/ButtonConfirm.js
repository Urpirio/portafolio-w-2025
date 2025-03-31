import SendtoSoport from "../SendtoSoport";
import SendtoUser from "../SendtoUser";
import { ButtonOkay_Click, ButtonOkay_MouseEnter, ButtonOkay_MouseLeave } from "./ButtonOkay";

export const ButtonConfirm_Click = (InputValue,CodeVerify) => {
    alert('jj')
    if(InputValue == CodeVerify){
        SendtoSoport();
        SendtoUser();
        document.getElementById('divtitle').remove();
        document.getElementById('divInput').remove();
        document.getElementById('divbtns').remove();

        const divSend = document.createElement('div');
        divSend.id = 'divSend'; 
        divSend.style.display = 'flex';
        divSend.style.flexDirection = 'column';
        divSend.style.alignItems = 'center';
        divSend.style.gap = '20px';

        const Send = document.createElement('span');
        Send.style.fontSize = '25px';
        Send.style.color = '#0d542b ';
        Send.style.fontWeight = '600';
        Send.innerText = 'Information sent';

        const BtnOKay = document.createElement('button');
        BtnOKay.id = 'BtnOKay';
        BtnOKay.style.color = 'white';
        BtnOKay.style.padding = '6px';
        BtnOKay.style.borderRadius = '6px';
        BtnOKay.style.background = 'oklch(0.723 0.219 149.579)';
        BtnOKay.style.cursor = 'pointer';
        BtnOKay.style.fontWeight = '600';
        BtnOKay.innerText = 'Okay';
        BtnOKay.style.width = '120px';

        BtnOKay.addEventListener('mouseenter',ButtonOkay_MouseEnter);
        BtnOKay.addEventListener('mouseleave',ButtonOkay_MouseLeave);
        BtnOKay.addEventListener('click', ButtonOkay_Click);

        divSend.append(Send,BtnOKay);
        document.getElementById('ServicesForm').append(divSend);



    }else{

    }
};

export const ButtonConfirm_MouseEnter = () => {
    document.getElementById('ConfirmBtn').style.opacity = '0.8';
};

export const ButtonConfirm_MouseLeave = () => {
    document.getElementById('ConfirmBtn').style.opacity = '1';
};