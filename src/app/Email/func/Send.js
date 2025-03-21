import { Resend } from "resend";

const resend = new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL')

export  const Send = async () => {
    try{
        const Data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'urpiriojunior@gmail.com',
            subject: 'Prueba',
            react: <div>
                Estoy es una prueba para verificar la funcionalidad
            </div>
        });
        console.log('mensaje enviado correctamente 🫂🔥');
    } catch (error){
        alert(error, 'tenemos un error grabe')
    }
}