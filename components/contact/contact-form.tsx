import { useEffect, useState } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [status, setStatus] = useState('');
    const [err, setErr] = useState('');

    useEffect(() => {
        console.log('useEffect status', status);
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => {
                setStatus('');
                setErr('');
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    },[status]);
    
    const sendData = async (contacts:any) => {
        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(contacts),
            headers:{
                'Content-Type' : 'application/json',
            },
        });
        const data = await res.json();

        if (!res.ok) {
            throw new Error (data.message || 'Somthing Wong');
        }
    };

    const sendMsgHandler = async(event:any) => {
        console.log('ContactForm event', event);
        event.preventDefault();

        setStatus('pending');
        try {
            await sendData({
                    email: email,
                    name: name,
                    msg: msg
            });
        } catch (e:any) {
            setErr(e.message);
            setStatus('error');
        };
        setStatus('success');
        console.log('status1', status);
    };

    console.log('status2', status);

    let notify;
    if (status === 'pending') {
        notify = {
            status: 'pending',
            title: 'sending',
            msg: 'otw ',
        };
    }
    if (status === 'success') {
        notify = {
            status: 'success',
            title: 'SUCCESS',
            msg: 'saved ',
        };
    }
    if (status === 'error') { 
            notify = {
            status: 'error',
            title: 'ERROR',
            msg: err,
        };
    };
/*     switch (status) {
        case 'pending' : notify = {
            status: 'pending',
            title: 'sending',
            msg: 'otw ',
        };
        case 'success' : notify = {
            status: 'success',
            title: 'SUCCESS',
            msg: 'saved ',
        }
        case 'error' : notify = {
            status: 'error',
            title: 'ERROR',
            msg: err,
        }
    }; */
        console.log('notify', notify);

    return (
        <section className={classes.contact}>
            <h2>Help</h2>
            <form className={classes.form} onSubmit={sendMsgHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' 
                                id='email' 
                                required 
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Name</label>
                        <input type='name' 
                                id='name' 
                                required 
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='msg'>Msg</label>
                    <textarea 
                            id='msg' 
                            rows={5}
                            value={msg}
                            onChange={event => setMsg(event.target.value)}
                        ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Send</button>
                </div>
            </form>
            {notify && <Notification 
                status={notify.status}
                title={notify.title}
                message={notify.msg}
            />}
        </section>
    );
};
export default ContactForm;
