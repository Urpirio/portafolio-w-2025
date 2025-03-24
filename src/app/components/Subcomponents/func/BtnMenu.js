import Deploymenu from "./Deploymenu";

export let ShowMenu = {
    Open: false,
};
const BtnMenu = () => {
     if( ShowMenu.Open === false){
        Deploymenu(ShowMenu.Open);
        ShowMenu.Open = true;
     }else{
        Deploymenu(ShowMenu.Open);
        ShowMenu.Open = false;
     }
};
export default BtnMenu;