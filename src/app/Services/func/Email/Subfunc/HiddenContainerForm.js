
const HiddenContainerForm =() => {
    for(let i = 1; i < 9; i++){
        document.getElementById(`SF${i}`).style.display = 'none';
    };
    if(screen.width < 667){
        document.getElementById('FormGetServices').style.marginBottom = '50px';
        document.getElementById('FormGetServices').style.marginTop = '50px';
    };
};
export default HiddenContainerForm;