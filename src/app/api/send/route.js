import { Resend } from "resend";
import EmailUdev from "../../../../emails/EmailUdev";

const resend = new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL');

export async function POST(request){
        const {Name,Email,PhoneNumber,Company,Message} = await request.json();
        await resend.emails.send({

            from: 'Udev <urpiriodev@urpiriodev.online>',
            to: ['urpiriojunior@gmail.com','udev@urpiriodev.online'],
            subject: 'Nuevo Cliente',
            react: <EmailUdev
            name = {Name}
            email = {Email}
            number = {PhoneNumber}
            company = {Company}
            message = {Message}
            /> ,
            text: '',
        });


};