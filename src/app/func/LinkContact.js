'use client';

const LinkContact = (Path) => {
    if(Path === '/'){
        window.location.href = '#Contact';
    }else{
        window.location.href = '/#Contact';
    };
};
export default LinkContact;