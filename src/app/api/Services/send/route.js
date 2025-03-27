import { Resend } from "resend";
import EmailUdev from "../../../../../emails/ServicesEmails/EmailUdev";
const resend = new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL');

export async function POST(request) {
    const {Name,Email,PhoneNumber,Company,Message,Service} = await request.json();
    await resend.emails.send({
        from: 'Udev <urpiriodev@urpiriodev.online>',
        to: ['urpiriojunior@gmail.com','udev@urpiriodev.online'],
        subject: `Nuevo Cliente `,
        react: <EmailUdev
        name = {Name}
        email = {Email}
        number = {PhoneNumber}
        company = {Company}
        service = {Service}
        message = {Message}
        />,
        text: '',

    })
};


