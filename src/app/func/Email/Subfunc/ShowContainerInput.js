
const ShowContainerInput = () => {
    for(let x = 1; x < 8 ; x++){
        document.getElementById(`F${x}`).style.display = 'flex';
    };
};
export default ShowContainerInput;