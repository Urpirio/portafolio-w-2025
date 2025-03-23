import React from 'react';
import { Html,Text,Head, Body,Container,Tailwind,Img, Section } from '@react-email/components';


export default function EmailUdev(props) {
  return (
    <Html>
          <Head/>
          <Body style={{fontFamily:'sans-serif'}}>
          <Tailwind>
            <Section className='text-center rounded-2xl w-[40%] min-w-80 p-10' style={{
                border: '1px solid #ced4da',
            }}>
                <img className='h-[50px] w-[50px] rounded-2xl ' src='https://www.urpiriodev.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoPortafolio.11f8eaae.png&w=1920&q=75'/>
                <Container className='font-black text-2xl text-center'>Urpirio<span className='text-green-500'>Dev</span></Container>
              <Container className='text-center'>
               <Text className='font-bold text-xl'> Nombre </Text>
               <Text className='text-[16px]'>{props.name}</Text>
              </Container>
              <Container className='text-center'>
                <Text className='font-bold text-xl'>Email</Text> 
                <Text className='text-[16px]'>{props.email}</Text>
              </Container>
              <Container className=' text-center' >
                <Text className='font-bold text-xl'>Celular</Text> 
                <Text className='text-[16px]'>{props.number}</Text>
              </Container>
              <Container className=' text-center' >
                <Text className='font-bold text-xl'>Compañia</Text>
                <Text className='text-[16px]'>{props.company}</Text>
              </Container>
              <Container className='text-center'>
                <Text className='font-bold text-xl'>Proyecto</Text>
                <Text className='text-[15px]'>{props.message}</Text>
              </Container>
            </Section>
              
          </Tailwind>
          </Body>
        </Html>
  )
}