import { EmailFormHome,NameFormHome } from "./ValueInputHome";

const SendtoUser = async () => {
    const res = await fetch('/api/sendUser',{
        method: 'POST',
        body: JSON.stringify({
            Email: EmailFormHome,
            Name: NameFormHome,

        })
    });
};
export default SendtoUser;