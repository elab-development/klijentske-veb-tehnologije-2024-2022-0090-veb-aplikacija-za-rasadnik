import React, { useState } from 'react'
import './contact.css'

const Contact = () => {

    const[user, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
        let values, names
    const data = (e) =>
    {
        values = e.target.value 
        names = e.target.name 
        setUser({...user, [names]: values})
    }

    const send = async (e) =>
    {
        const {Name, Email, Subject, Message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }

        const send = await fetch(
            'https://rasadnik-app-default-rtdb.firebaseio.com/Message.json', option
            )

        if (send) {
            alert("Message Sent")
        }
        else
        {
            alert("Error Occoured Message Sent failed")
        }

    }

  return (
    <>
    <div className='contact'>
        <div className='container'>
            <div className='form'>
                <h2>contact us</h2>
                <form method='POST'>
                    <div className='box'>
                        <div className='label'>
                            <h4>                         
                               Name
                            </h4>
                        </div>
                        <div className='input'>
                            <intput type='text' placeholder='Name' value={user.Name} name='Name' onChange={data}></intput>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='label'>
                            <h4>                         
                               E-mail
                            </h4>
                        </div>
                        <div className='input'>
                            <intput type='email' placeholder='Email' value={user.Email} name='Email' onChange={data}></intput>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='label'>
                            <h4>                         
                               Subject
                            </h4>
                        </div>
                        <div className='input'>
                            <intput type='text' placeholder='Subject' value={user.Subject} name='Subject' onChange={data}></intput>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='label'>
                            <h4>                         
                               Message
                            </h4>
                        </div>
                        <div className='input'>
                            <textarea placeholder='Message !' value={user.Message} name='Message' onChange={data}></textarea>
                        </div>
                    </div>
                    <button type='sublit' onClick={send}>Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
