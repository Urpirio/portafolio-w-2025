import { Resend } from "resend";
const resend = new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL');

async function SendPrueba() {
    try{
        const {data , error} = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['urpiriojunior@gmail.com']
        })
    }catch(error){
        console.log('tenemos un error', error)
    }
}
export default SendPrueba;