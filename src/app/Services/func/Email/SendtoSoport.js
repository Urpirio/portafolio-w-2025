
import { ServicesNameF,ServicesEmailF,ServicesPnumberF,
ServicesCompanyF,ServicesAboutProyect } from "../FormInputValueServices";
import { ServicesSelected } from "../SelectionServiceForm";

const SendtoSoport = async () => {
    fetch('api/Services/send',{
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({
            Service: ServicesSelected,
            Name: ServicesNameF,
            Email: ServicesEmailF,
            PhoneNumber: ServicesPnumberF,
            Company: ServicesCompanyF,
            Message: ServicesAboutProyect,
        })
    });
};
export default SendtoSoport;