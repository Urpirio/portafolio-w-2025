'use client';

import { DeployIsCancel } from "../components/Subcomponents/func/OffDeployForm";

export let MouseOverForm;
const MouseOverSelectServices = () => {
    if(MouseOverForm === undefined){
        // console.log('funciona 1')
        MouseOverForm = true;
    }else if(DeployIsCancel === true){
        // console.log('funciona 2')
        MouseOverForm = undefined;
    }else if(DeployIsCancel == undefined){
        MouseOverForm = true;
        setTimeout(()=>{
            MouseOverForm = undefined;
        },100);
    }else{
        
    };
    
};
export default MouseOverSelectServices;