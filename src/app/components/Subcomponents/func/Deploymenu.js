'use client';

import DataNav from "../Data/DataNav";

const Deploymenu = (State) => {
    

    if(State == false){
        const Header = document.getElementById('Header');
        // Header.style.height = '100px';
        const Nav = document.createElement('nav');
        Nav.id = 'MovileNav';
        Nav.style.position = 'absolute';
        Nav.style.display = 'flex';
        Nav.style.justifyContent = 'space-around';
        Nav.style.alignItems = 'center';
        Nav.style.marginTop = '110px';
        Nav.style.height = '50px';
        Nav.style.border = '1px solid gray';
        Nav.style.borderRadius = '20px';
        Nav.style.boxShadow = '1px 1px 20px 1px #f8f9fa';
        Nav.style.width = '96%'
        Nav.style.background = 'white';

        
        for(let x = 0; x < DataNav.length; x++){
            
            const Span = document.createElement('span');
            Span.innerText = `${DataNav[x].Nav}`;
            Span.style.fontWeight = '500';

            Span.addEventListener('click',()=>{
                
                DataNav[x].Link();
                document.getElementById('MovileNav').remove();
            });
            Span.addEventListener('mouseover',()=>{
                Span.style.color = '#00C951';
            });
            Span.addEventListener('mouseleave',()=>{
                Span.style.color = 'black';
            });
            Nav.append(Span);

            
        };
        document.getElementById('Header').append(Nav)
    }else{
       document.getElementById('MovileNav').remove();
    }

};
export default Deploymenu;