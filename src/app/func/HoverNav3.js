'use client';


let Hoverproyects;
const HoverNav3 = () => {
    const HoverProyects = document.getElementById('HoverProyects')
    if( Hoverproyects== undefined){
        
        HoverProyects.style.background = '#05DF72';
        HoverProyects.style.animation = 'Charge1 300ms';
        setTimeout(()=>{
            HoverProyects.style.width = '100%';
        },300);
        Hoverproyects = true;
    }else{
        HoverProyects.style.background = '#05DF72';
        HoverProyects.style.animation = 'Charge2 300ms';
        setTimeout(()=>{
            HoverProyects.style.width = '0%';
        },300);
        Hoverproyects = undefined;
    }
};
export default HoverNav3;