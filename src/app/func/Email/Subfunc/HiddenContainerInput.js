const HiddenContainerInput = () => {
    for(let x = 1; x < 8 ; x++){
            document.getElementById(`F${x}`).style.display = 'none';
    };
    
};
export default HiddenContainerInput;