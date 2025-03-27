
const ShowContainerForm = () => {
    for(let i = 1; i < 9; i++){
        document.getElementById(`SF${i}`).style.display = 'flex';
    }
};
export default ShowContainerForm;