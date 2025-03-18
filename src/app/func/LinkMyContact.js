'use client';

const LinkMyContact = (Click) => {
    if(Click === false){
        window.location.href = 'https://wa.me/+1(829)-586-2316';
    }else{
        window.location.href = 'mailto:urpiriojunior@gmail.com';
    };
};
export default LinkMyContact;