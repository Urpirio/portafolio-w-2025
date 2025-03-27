import { Resend } from "resend";
import ConfirmacionEmail from "../../../../../emails/ServicesEmails/ConfirmacionEmail";
const resend =  new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL');

export async function POST(request) {
    const {Email,CodeV} = await request.json();
    await resend.emails.send({
        from: 'Udev <urpiriodev@urpiriodev.online>',
        to: Email,
        subject: 'Email confirmation code',
        react: <ConfirmacionEmail
        CodeV = {CodeV}
        />,
        text: '',
    })
};