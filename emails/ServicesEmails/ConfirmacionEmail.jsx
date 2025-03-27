import React from 'react';
import { Html,Text,Head, Body,Container,Tailwind,Img, Section } from '@react-email/components';

export default function ConfirmacionEmail(props) {
  return (
    <Html>
        <Head/>
        <Body style={{fontFamily: 'sans-serif'}}>
            <Tailwind>
                <Section className=' text-center w-[40%] min-w-80 shadow-2xl' style={{border: '1px solid #ced4da', borderRadius: '20px'}}>
                    <img className='h-20 w-20 rounded-2xl'  src='https://www.urpiriodev.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoPortafolio.11f8eaae.png&w=1920&q=75'/>
                    <Container className='text-center'>
                        <Text className='font-black text-2xl m-0'>Urpirio<span className='text-green-500'>Dev</span></Text>
                    </Container>
                    <Container className='text-center'>
                        <Text className=' text-xl'>Verification code</Text>
                        <Text className='font-bold text-2xl'><span>{props.CodeV}</span></Text>
                    </Container>
                </Section>
                
            </Tailwind>
        </Body>
    </Html>
  )
}
