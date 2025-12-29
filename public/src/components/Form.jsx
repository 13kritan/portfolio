import React, { useState } from 'react'
import ButtonDisplay from './ButtonDisplay'
import { sendEmailRoute } from '../utils/APIRoutes'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

export default function Form() {

    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        draggable: true,
        theme: "dark"
    }
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        setData(prev => ({
          ...prev,
          [name]: value
        }));
      };

    const validateForm = () => {
        if (!data.firstname.trim()) {
            toast.warn("First name is required", toastOptions);
            return false;
        }
        if (!data.lastname.trim()) {
            toast.warn("Last name is required", toastOptions);
            return false;
        }
        if (!data.email.trim()) {
            toast.warn("Email is required", toastOptions);
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            toast.warn("Please enter a valid email address", toastOptions);
            return false;
        }
        if (!data.subject.trim()) {
            toast.warn("Subject is required", toastOptions);
            return false;
        }
        if (!data.message.trim()) {
            toast.warn("Message is required", toastOptions);
            return false;
        }
        if (data.message.trim().length < 10) {
            toast.warn("Message must be at least 10 characters", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return; // stop if invalid

        setLoading(true);

        try {
            await axios.post(sendEmailRoute, {
                firstname: data.firstname.trim(),
                lastname: data.lastname.trim(),
                email: data.email.trim(),
                subject: data.subject.trim(),
                message: data.message.trim(),
            });

            toast.success("Message sent successfully!", toastOptions);
            setData({
                firstname: "",
                lastname: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
            toast.error("Failed to send message. Please try again.", toastOptions);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="w-full px-4 py-2 flex flex-col gap-5 bg-zinc-800 rounded-md">
                <div className="flex flex-col gap-4">
                    <h3 className="text-slate-300 text-xl vsm:text-md">
                        GET IN TOUCH
                    </h3>
                    <h2 className="text-white text-3xl text-bold vsm:text-lg">
                        Let's Discuss Projects
                    </h2>
                    <p className="text-slate-200 vsm:text-sm text:md">
                        Get in touch with us for any kind of help. We are here to give you the best and also here to help you to find your projects.
                    </p>
                </div>
                <form action="" className="text-white flex flex-col gap-5 items-center">
                    <div className="name flex justify-between w-full gap-4 vsm:flex-col vsm:gap-5">
                        <div className='flex flex-col w-1/2 vsm:w-full gap-2'>
                            <label className='px-4 text-sm vsm:text-xs text-slate-400 tracking-wide'>First Name</label>
                            <input className='bg-inherit text-md vsm:text-sm px-4 py-2 rounded-md outline-none border-2 border-zinc-600' onChange={handleChange} value={data.firstname} type="text" name='firstname' placeholder='First Name' />
                        </div>
                        <div className='flex flex-col w-1/2 vsm:w-full gap-2'>
                            <label className='px-4 text-sm vsm:text-xs text-slate-400 tracking-wide'>Last Name</label>
                            <input className='bg-inherit text-md vsm:text-sm px-4 py-2 rounded-md outline-none border-2 border-zinc-600' onChange={handleChange} value={data.lastname} type="text" name='lastname' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className='px-4 text-sm vsm:text-xs text-slate-400 tracking-wide'>Email</label>
                        <input className='bg-inherit text-md vsm:text-sm px-4 py-2 rounded-md outline-none border-2 border-zinc-600' onChange={handleChange} value={data.email} type="email" name='email' placeholder='Email address' />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label className='px-4 text-sm vsm:text-xs text-slate-400 tracking-wide'>Subject</label>
                        <input className='bg-inherit text-md vsm:text-sm px-4 py-2 rounded-md outline-none border-2 border-zinc-600' onChange={handleChange} value={data.subject} type="text" name='subject' placeholder='Subject' />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label className='px-4 text-sm vsm:text-xs text-slate-400 tracking-wide'>Message</label>
                        <textarea className='bg-inherit text-md vsm:text-sm px-4 py-2 rounded-md outline-none border-2 border-zinc-600 resize-none' value={data.message} onChange={handleChange} type="text" name='message' placeholder='Your Message' />
                    </div>
                    <div>{
                        loading ?
                            <motion.div
                                className="w-5 h-5 border-2 border-t-white border-gray-300 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            /> :
                            <ButtonDisplay buttonName={"Send Message"} handleSubmit={handleSubmit} />
                    }
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}
