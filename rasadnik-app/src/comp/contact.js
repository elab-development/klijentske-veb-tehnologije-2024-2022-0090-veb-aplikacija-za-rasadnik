import React from 'react'
import './contact.css'

const Contact = () => {
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
                            <intput type='text' placeholder='Name' value='' name=''></intput>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='label'>
                            <h4>                         
                               E-mail
                            </h4>
                        </div>
                        <div className='input'>
                            <intput type='email' placeholder='E-mail' value='' name=''></intput>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='label'>
                            <h4>                         
                               Subject
                            </h4>
                        </div>
                        <div className='input'>
                            <intput type='text' placeholder='Subject' value='' name=''></intput>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='label'>
                            <h4>                         
                               Message
                            </h4>
                        </div>
                        <div className='input'>
                            <textarea placeholder='Message !' value='' name=''></textarea>
                        </div>
                    </div>
                    <button type='sublit'>Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
