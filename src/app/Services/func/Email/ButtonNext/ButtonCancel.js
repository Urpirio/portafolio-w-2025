import ShowContainerForm from "../Subfunc/ShowContainerForm";

export const ButtonCancel_Click = () => {
    document.getElementById('FormGetServices').style.marginBottom = '0px';
    document.getElementById('FormGetServices').style.marginTop = '0px';
    document.getElementById('divtitle').remove();
    document.getElementById('divInput').remove();
    document.getElementById('divbtns').remove();
    ShowContainerForm();
};

export const ButtonCancel_MouseEnter = () => {
    document.getElementById('CancelBtn').style.opacity = '0.8';
};

export const ButtonCancel_MouseLeave = () => {
    document.getElementById('CancelBtn').style.opacity = '1';
};

