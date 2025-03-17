'use client';


let HoverAbout;
const HoverNav2 = () => {
    const Hoverabout = document.getElementById('HoverAbout')
    if( HoverAbout== undefined){
        
        Hoverabout.style.background = '#05DF72';
        Hoverabout.style.animation = 'Charge1 300ms';
        setTimeout(()=>{
            Hoverabout.style.width = '100%';
        },300);
        HoverAbout = true;
    }else{
        Hoverabout.style.background = '#05DF72';
        Hoverabout.style.animation = 'Charge2 300ms';
        setTimeout(()=>{
            Hoverabout.style.width = '0%';
        },300);
        HoverAbout = undefined;
    }
};
export default HoverNav2;