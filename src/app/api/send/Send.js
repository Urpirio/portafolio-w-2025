import { Resend } from "resend";



const SendEmail = async () => {
    const resend = new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL');
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['urpiriojunior@gmail.com'],
        subject: 'hello world',
        html: '<p>it works!</p>',
    });
};
export default SendEmail;