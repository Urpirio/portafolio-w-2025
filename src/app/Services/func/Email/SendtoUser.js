import { ServicesEmailF, ServicesNameF } from "../FormInputValueServices";


const SendtoUser = async () => {
    fetch('api/Services/sendUser',{
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({
            Email: ServicesEmailF,
            Name: ServicesNameF,
        })
    });
};
export default SendtoUser;