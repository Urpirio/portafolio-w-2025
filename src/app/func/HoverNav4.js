'use client';


let Hovercontact;
const HoverNav4 = () => {
    const HoverContact = document.getElementById('HoverContact')
    if( Hovercontact== undefined){
        
        HoverContact.style.background = '#05DF72';
        HoverContact.style.animation = 'Charge1 300ms';
        setTimeout(()=>{
            HoverContact.style.width = '100%';
        },300);
        Hovercontact = true;
    }else{
        HoverContact.style.background = '#05DF72';
        HoverContact.style.animation = 'Charge2 300ms';
        setTimeout(()=>{
            HoverContact.style.width = '0%';
        },300);
        Hovercontact = undefined;
    }
};
export default HoverNav4;