import React from 'react';
import Container from './Container';
import InputBox from './InputBox';
import Button from './Button';

const ContactPage = () => {
    return (
        <Container>
            <div className='my-16'>
                <h2 className='font-dm font-bold text-secondary text-4xl'>Fill up a Form</h2>
                <InputBox as="input" placeholder='Your name here' title='Name' />
                <InputBox as="input" placeholder='Your email here' title='Email' />
                <InputBox as="textarea" placeholder='Your message here' title='Message' />
                <Button title='Post'/>
            </div>
        </Container>
    )
}

export default ContactPage;