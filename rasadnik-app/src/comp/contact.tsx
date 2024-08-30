import React, { useState, FC, ChangeEvent, FormEvent } from 'react';
import './contact.css';

interface User {
    Name: string;
    Email: string;
    Subject: string;
    Message: string;
}

const Contact: FC = () => {
    const [user, setUser] = useState<User>({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    });

    const data = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const values: string = e.target.value;
        const names: string = e.target.name;
        setUser({ ...user, [names]: values });
    };

    const send = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        const { Name, Email, Subject, Message } = user;
        e.preventDefault();
        const option: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name,
                Email,
                Subject,
                Message
            })
        };

        const response: Response = await fetch(
            'https://rasadnik-app-default-rtdb.firebaseio.com/Message.json',
            option
        );

        if (response.ok) {
            alert("Message Sent");
        } else {
            alert("Error Occurred: Message Sent failed");
        }
    };

    return (
        <>
            <div className='contact'>
                <div className='container'>
                    <div className='form'>
                        <h2>Contact us</h2>
                        <form method='POST' onSubmit={send}>
                            <div className='box'>
                                <div className='label'>
                                    <h4>Name</h4>
                                </div>
                                <div className='input'>
                                    <input type='text' placeholder='Name' value={user.Name} name='Name' onChange={data} />
                                </div>
                            </div>
                            <div className='box'>
                                <div className='label'>
                                    <h4>E-mail</h4>
                                </div>
                                <div className='input'>
                                    <input type='email' placeholder='Email' value={user.Email} name='Email' onChange={data} />
                                </div>
                            </div>
                            <div className='box'>
                                <div className='label'>
                                    <h4>Subject</h4>
                                </div>
                                <div className='input'>
                                    <input type='text' placeholder='Subject' value={user.Subject} name='Subject' onChange={data} />
                                </div>
                            </div>
                            <div className='box'>
                                <div className='label'>
                                    <h4>Message</h4>
                                </div>
                                <div className='input'>
                                    <textarea placeholder='Message!' value={user.Message} name='Message' onChange={data}></textarea>
                                </div>
                            </div>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;