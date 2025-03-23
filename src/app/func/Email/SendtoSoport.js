import { AboutProyectFormHome, CompanyFormHome, EmailFormHome, NameFormHome, NumberFormHome } from "./ValueInputHome";

const SendtoSoport = async () => {

    const res = await fetch('/api/send',{
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({
            Name: NameFormHome,
            Email: EmailFormHome,
            PhoneNumber: NumberFormHome,
            Company: CompanyFormHome,
            Message: AboutProyectFormHome,
        })
    });

};
export default SendtoSoport;