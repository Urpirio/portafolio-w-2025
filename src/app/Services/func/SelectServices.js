'use client';

import DataCardServices from "../Data/DataCardServices";
import FormInputValueServices from "./FormInputValueServices";

let Show;
let valueSelect;
const SelectServices = () => {
    
    if(Show == undefined){
        document.getElementById('selectServices').style.display = 'flex';
        document.getElementById('selectServices').style.animation ='select1 300ms';
        document.getElementById('ArrowSelect').style.rotate = '90deg';
        Show = false;
        for(let x = 0; x < DataCardServices.length; x++){
            const Span = document.createElement('span');
            Span.innerText = DataCardServices[x].ServiceName;
            Span.style.cursor = 'pointer';
            Span.style.padding = '5px';
            Span.style.borderRadius = '5px';
            Span.id = `S${x}`;
            Span.addEventListener('mouseenter',()=>{
                Span.style.background = '#e9ecef';
            });
            Span.addEventListener('mouseleave',()=>{
                Span.style.background = 'white';
            });
            Span.addEventListener('click',()=>{
                document.getElementById('selectServices').innerHTML = '';
                document.getElementById('selectServices').style.display = 'none';
                document.getElementById('ArrowSelect').style.rotate = '0deg';
                document.getElementById('selection').innerText = DataCardServices[x].ServiceName;
                FormInputValueServices(DataCardServices[x].ServiceName);
                valueSelect = x;
                Show = true;
                // document.getElementById(`S${x}`).remove();
                // for( let i = 0; i < DataCardServices.length; i++){
                //     if( x === i){
                //         document.getElementById(`S${i}`).style.display = 'none';
                //     }else{
                //         document.getElementById(`S${i}`).style.display = 'flex';
                //     };
                // };
            });
            document.getElementById('selectServices').append(Span);
            
            if(valueSelect === x){
                document.getElementById(`S${valueSelect}`).remove();
            }else{

            };

        };
        


        
    }else if(Show == true){
        document.getElementById('selectServices').style.display = 'flex';
        document.getElementById('selectServices').style.animation ='select1 300ms';
        document.getElementById('ArrowSelect').style.rotate = '90deg';
        Show = false;

        for(let x = 0; x < DataCardServices.length; x++){
            const Span = document.createElement('span');
            Span.innerText = DataCardServices[x].ServiceName;
            Span.style.cursor = 'pointer';
            Span.style.padding = '5px';
            Span.style.borderRadius = '5px';
            Span.id = `S${x}`;
            Span.addEventListener('mouseenter',()=>{
                Span.style.background = '#e9ecef';
            });
            Span.addEventListener('mouseleave',()=>{
                Span.style.background = 'white';
            });
            Span.addEventListener('click',()=>{
                document.getElementById('selectServices').style.display = 'none';
                document.getElementById('selectServices').innerHTML = '';
                document.getElementById('ArrowSelect').style.rotate = '0deg';
                document.getElementById('selection').innerText = DataCardServices[x].ServiceName;
                FormInputValueServices(DataCardServices[x].ServiceName);
                valueSelect = x;
                Show = true;
                // document.getElementById(`S${x}`).remove();
                // for( let i = 0; i < DataCardServices.length; i++){
                //     if( x === i){
                //         document.getElementById(`S${i}`).style.display = 'none';
                //     }else{
                //         document.getElementById(`S${i}`).style.display = 'flex';
                //     };
                // };
            });
            document.getElementById('selectServices').append(Span);


           if(valueSelect === x){
                document.getElementById(`S${valueSelect}`).remove();
           }else{

           };

        };
        
    }else{
        document.getElementById('selectServices').style.display = 'none';
        document.getElementById('selectServices').innerHTML = '';
        document.getElementById('ArrowSelect').style.rotate = '0deg';
        Show = true;
    }
   
    
};
export default SelectServices;