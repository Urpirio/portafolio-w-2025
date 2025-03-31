import { ServicesEmailF } from "../FormInputValueServices";
import { ButtonCancel_Click, ButtonCancel_MouseEnter, ButtonCancel_MouseLeave } from "./ButtonNext/ButtonCancel";
import { ButtonConfirm_Click, ButtonConfirm_MouseEnter, ButtonConfirm_MouseLeave } from "./ButtonNext/ButtonConfirm";
import HiddenContainerForm from "./Subfunc/HiddenContainerForm";
import LoadinFormServices from "./Subfunc/LoadingFormServices";


const SendtoConfirmEmail = async () => {

    HiddenContainerForm();
    LoadinFormServices();
    


    const CodeVerify = Math.floor(Math.random() * (999999 - 100000  + 1) + 100000);
    
     fetch('api/Services/sendVerify',{
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body:  JSON.stringify({
            Email: ServicesEmailF,
            CodeV: CodeVerify,
        })
    }).then(()=>{
        LoadinFormServices(false);

        const divtitle = document.createElement('div');
        divtitle.id = 'divtitle';
        const h3 = document.createElement('h3');
        h3.style.fontSize = '20px';
        h3.style.color = '#0d542b ';
        h3.style.fontWeight = '600';
        h3.innerText = 'Enter the code sent to your email';
        divtitle.append(h3);
    
        const divInput = document.createElement('div');
        divInput.style.width = '100%';
        divInput.id = 'divInput';
    
        const InputCode = document.createElement('input');
        InputCode.style.height = '40px';
        InputCode.style.width = '100%'
        InputCode.style.padding = '4px';
        InputCode.style.outline = 'none';
        InputCode.type = 'number';
        InputCode.style.border = '1px solid #99a1af';
        InputCode.style.borderRadius = '6px';
        InputCode.placeholder = 'Insert code';
        divInput.append(InputCode);
    
        const divbtns = document.createElement('div');
        divbtns.style.width = '100%';
        divbtns.style.display = 'flex';
        divbtns.style.gap = '10px';
        divbtns.id = 'divbtns';
    
        const ConfirmBtn = document.createElement('button');
        ConfirmBtn.innerText = 'Confirm email';
        ConfirmBtn.id = 'ConfirmBtn';
        ConfirmBtn.style.color = 'white';
        ConfirmBtn.style.padding = '6px';
        ConfirmBtn.style.borderRadius = '6px';
        ConfirmBtn.style.background = 'oklch(0.723 0.219 149.579)';
        ConfirmBtn.style.cursor = 'pointer';
        ConfirmBtn.style.fontWeight = '600';

        /*Funcione= del boton confirmar*/ 
        ConfirmBtn.addEventListener('mouseenter',ButtonConfirm_MouseEnter);
        ConfirmBtn.addEventListener('mouseleave',ButtonConfirm_MouseLeave);
        ConfirmBtn.addEventListener('click',()=>{ButtonConfirm_Click(InputCode.value,CodeVerify)});
    
        const CancelBtn = document.createElement('button');
        CancelBtn.innerText = 'Cancel';
        CancelBtn.id = 'CancelBtn';
        CancelBtn.style.color = 'white';
        CancelBtn.style.padding = '6px';
        CancelBtn.style.border = '1px solid #d1d5dc';
        CancelBtn.style.borderRadius = '6px';
        CancelBtn.style.background = '#e5e7eb ';
        CancelBtn.style.cursor = 'pointer';
        CancelBtn.style.color = 'gray';
        CancelBtn.style.fontWeight = '600';

        CancelBtn.addEventListener('mouseenter',ButtonCancel_MouseEnter);
        CancelBtn.addEventListener('mouseleave',ButtonCancel_MouseLeave);
        CancelBtn.addEventListener('click',ButtonCancel_Click);
        
    
        divbtns.append(ConfirmBtn,CancelBtn);
    
        document.getElementById('ServicesForm').append(divtitle,divInput,divbtns)
        


    }).catch((error)=>{
        console.error(error);
    })


};
export default SendtoConfirmEmail;