'use client';

let HoverHome;
const HoverNav = () => {

    const Hoverhome = document.getElementById('HoverHome');
    if( HoverHome == undefined){
        
        Hoverhome.style.background = '#05DF72';
        Hoverhome.style.animation = 'Charge1 300ms';
        setTimeout(()=>{
            Hoverhome.style.width = '100%';
        },300);
        HoverHome = true;
    }else{
        Hoverhome.style.background = '#05DF72';
        Hoverhome.style.animation = 'Charge2 300ms';
        setTimeout(()=>{
            Hoverhome.style.width = '0%';
        },300);

        HoverHome = undefined;
    }

};
export default HoverNav;
