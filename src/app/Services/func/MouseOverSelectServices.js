'use client';

import { DeployIsCancel } from "../components/Subcomponents/func/OffDeployForm";

export let MouseOverForm;
const MouseOverSelectServices = () => {
    if(MouseOverForm === undefined){
        MouseOverForm = true;
    }else if(DeployIsCancel === true){
        MouseOverForm = undefined;
    }else if(DeployIsCancel == undefined){
        // alert(DeployIsCancel)
        MouseOverForm = true;
        setTimeout(()=>{
            MouseOverForm = undefined;
        },100);
    }else{
        
    };
    
};
export default MouseOverSelectServices;