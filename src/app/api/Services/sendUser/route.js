import { Resend } from "resend";

import MessageClient from "../../../../../emails/ServicesEmails/MessageClient";

const resend = new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL');

export const POST = async (request) => {
    const {Email,Name} = await request.json();
    await resend.emails.send({
        from: 'Udev <urpiriodev@urpiriodev.online>',
        to: Email,
        subject: 'Confirmation of receipt of your information',
        react: <MessageClient
        name = {Name}
        />,
        text: '',
    })
};