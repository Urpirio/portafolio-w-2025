
const HiddenContainerForm =() => {
    for(let i = 1; i < 9; i++){
        document.getElementById(`SF${i}`).style.display = 'none';
    }
};
export default HiddenContainerForm;