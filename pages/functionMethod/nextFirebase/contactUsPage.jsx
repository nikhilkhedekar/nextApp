import { useRef } from 'react'
import { v4 as postId } from 'uuid'
import axios from 'axios'

import Header from '../../../components/functionMethod/nextFirebase/header'

const ContactUsPage = () => {
    const emailRef = useRef();
    const messageRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const message = messageRef.current.value;
        const contactUs = {
            postId: postId().toString(), 
            email,
            message,
        }
        const response = axios.post('https://react-fetch-req-default-rtdb.firebaseio.com/nextFirebase/contactUs.json', contactUs);
        console.log(response)
        alert('Your details are submitted we\'ll contact you later')
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <form onSubmit={submitHandler} >
                <label htmlFor='email' >Email:
                    <input id='email' ref={emailRef} type='email' placeholder='myemail@gmail.com' />
                </label><br />
                <label htmlFor='message' >Message:<br />
                    <textarea id='message' ref={messageRef} rows='10' cols='20' />
                </label><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactUsPage
