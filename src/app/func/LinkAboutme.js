'use client';


const LinkAboutMe = (Path) => {
    if(Path === '/'){
        window.location.href = '#Aboutme';
    }else{
        window.location.href = '/#Aboutme';
    };
};
export default LinkAboutMe;