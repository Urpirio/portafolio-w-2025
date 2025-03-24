'use client';

const LinkProyectNav = (Page,NextPage,path) => {
    if(path == Page){
        window.location.href = NextPage;
        
    }else if(path == NextPage){
        window.location.href = Page;
    };
};
export default LinkProyectNav;