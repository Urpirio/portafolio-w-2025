import SendtoSoport from "./SendtoSoport";
import SendtoUser from "./SendtoUser";
import { EmailFormHome } from "./ValueInputHome";

const SendtoVerifyEmail = async () => {

   


    const CodigotoVerify = Math.floor(Math.random() * (999999 - 100000  + 1) + 100000);
    const res = await fetch('/api/sendVerify',{
        method: 'POST',
        body: JSON.stringify({
            Email: EmailFormHome,
            CodeV: CodigotoVerify,

        })
    }).then(()=>{
        for(let x = 1; x < 8 ; x++){
            document.getElementById(`F${x}`).style.display = 'none';
        };
        
    
        const divtitle = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.style.fontSize = '20px';
        h3.style.color = '#0d542b ';
        h3.style.fontWeight = '600';
        h3.innerText = 'Enter the code sent to your email';
        divtitle.append(h3);
    
        const divInput = document.createElement('div');
        divInput.style.width = '100%';
    
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
    
        const btn1 = document.createElement('button');
        btn1.innerText = 'Confirm email';
        btn1.style.color = 'white';
        btn1.style.padding = '6px';
        btn1.style.borderRadius = '6px';
        btn1.style.background = 'oklch(0.723 0.219 149.579)';
        btn1.style.cursor = 'pointer';
        btn1.style.fontWeight = '600';
        btn1.addEventListener('mouseenter',()=>{
            btn1.style.opacity = '0.8';
        });
        btn1.addEventListener('mouseleave',()=>{
            btn1.style.opacity = '1';
        });
        btn1.addEventListener('click',()=>{
    
            if(InputCode.value == CodigotoVerify){
                SendtoUser()
                SendtoSoport()
                divbtns.remove();
                divInput.remove();
                divtitle.remove();
                const divSend = document.createElement('div');
                divSend.style.display = 'flex';
                divSend.style.flexDirection = 'column';
                divSend.style.alignItems = 'center';
                divSend.style.gap = '20px';
    
                const Send = document.createElement('span');
                Send.style.fontSize = '25px';
                Send.style.color = '#0d542b ';
                Send.style.fontWeight = '600';
                Send.innerText = 'Information sent';
    
                const BtnSend = document.createElement('button');
                BtnSend.style.color = 'white';
                BtnSend.style.padding = '6px';
                BtnSend.style.borderRadius = '6px';
                BtnSend.style.background = 'oklch(0.723 0.219 149.579)';
                BtnSend.style.cursor = 'pointer';
                BtnSend.style.fontWeight = '600';
                BtnSend.innerText = 'Okay';
                BtnSend.style.width = '120px';
    
                BtnSend.addEventListener('mouseenter',()=>{
                    BtnSend.style.opacity = '0.8';
                });
                BtnSend.addEventListener('mouseleave',()=>{
                    BtnSend.style.opacity = '1';
                });
                BtnSend.addEventListener('click',()=>{
                    divSend.remove();
                    for(let x = 1; x < 8 ; x++){
                        document.getElementById(`F${x}`).style.display = 'flex';
    
                    };
                    for(let x = 1; x < 6 ; x++){
                        document.querySelector(`.InputHome${x}`).value = '';
                    };
                });
                divSend.append(Send,BtnSend);
                document.getElementById('FormHome').append(divSend);
    
    
    
            }else{
    
            }
        });
    
        const btn2 = document.createElement('button');
        btn2.innerText = 'Cancel';
        btn2.style.color = 'white';
        btn2.style.padding = '6px';
        btn2.style.border = '1px solid #d1d5dc';
        btn2.style.borderRadius = '6px';
        btn2.style.background = '#e5e7eb ';
        btn2.style.cursor = 'pointer';
        btn2.style.color = 'gray';
        btn2.style.fontWeight = '600';
        btn2.addEventListener('mouseenter',()=>{
            btn2.style.opacity = '0.8'
        });
        btn2.addEventListener('mouseleave',()=>{
            btn2.style.opacity = '1'
        });
        btn2.addEventListener('click',()=>{
            divInput.remove();
            divbtns.remove();
            divtitle.remove();
            for(let x = 1; x < 8 ; x++){
                document.getElementById(`F${x}`).style.display = 'flex';
            };
        });
        
    
        divbtns.append(btn1,btn2);
    
        document.getElementById('FormHome').append(divtitle,divInput,divbtns)
    }
    ).catch(
        (error)=>{

        }
    )
    

    




};
export default SendtoVerifyEmail;