'use client';
const Linkproyect = (Pro,Path) => {
    if(Pro == false){
        window.location.href = '#TopProyect';
    }else{
        if(Path === '/proyect/page2'){
            window.location.href = Path;
        }else{
            window.location.href = '/proyect';
        };
    }
};
export default Linkproyect;