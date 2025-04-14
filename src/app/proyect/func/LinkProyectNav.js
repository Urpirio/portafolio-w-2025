'use client';


const LinkProyectNav = (NextPath,Path) => {

    if(Path === NextPath){
        window.location.href = Path;
    }else{
        window.location.href = NextPath;
    }

};
export default LinkProyectNav;