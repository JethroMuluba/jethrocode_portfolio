import React from 'react'
import { useForm } from 'react-hook-form';
import data from '../data/data.json'
import emailjs from 'emailjs-com'


function ContactForm() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmitForm = (data) => {

    const SERVICE_ID = 'outlook_mail_service';
    const TEMPLATE_ID = 'contact_formId';
    const USER_ID = 'yZVMH1wXdomQsAwds';

    emailjs.send(
      SERVICE_ID,TEMPLATE_ID, data, USER_ID
    )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again.");
      });
          };

          const formData = data.contactForm;
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className=' flex flex-col gap-[28px]'>
      <div className=' flex flex-col items-start  gap-2'>
        <label htmlFor="name" className=' text-base text-[#8D9092]'> {formData[0].label} </label>
        <input {...register("name", {required:true, minLength: 3, maxLength:60})} type="text" className=' bg-[#303131] h-[55px] rounded-[5px] px-5 w-[100%] text-[#fff] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#fff] ' placeholder='Tape your name' />
        {errors.name && <span style={{color: '#DA5643', fontSize: '14px'}}>{formData[0].errorMessage}</span>}
      </div>

      <div className=' flex flex-col gap-[28px] md:flex-row'>
        <div className=' flex flex-col items-start  gap-2'>
          <label htmlFor="phone" className=' text-base text-[#8D9092]'>{formData[1].label}</label>
          <input {...register("phone", {required:true})} type="number" className=' bg-[#303131] h-[55px] rounded-[5px] px-5 w-[100%] text-[#fff] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#fff] ' placeholder='Tape your phone number' />
          {errors.phone && <span style={{color: '#DA5643', fontSize: '14px'}}>{formData[1].errorMessage}</span>}
        </div>

        <div className=' flex flex-col items-start  gap-2'>
          <label htmlFor="email" className=' text-base text-[#8D9092]'>{formData[2].label}</label>
          <input {...register("email", {required:true, minLength: 5, maxLength:60})} type="email" className=' bg-[#303131] h-[55px] rounded-[5px] px-5 w-[100%] text-[#fff] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#fff] ' placeholder='Tape your name' />
          {errors.email && <span style={{color: '#DA5643', fontSize: '14px'}}>{formData[2].errorMessage}</span>}
        </div>
      </div>

      <div className=' flex flex-col items-start  gap-2'>
          <label htmlFor="message" className=' text-base text-[#8D9092]'>{formData[3].label}</label>
          <textarea {...register("message", {required:true, minLength: 10, maxLength:500})} name="message" id="" className=' bg-[#303131] h-[186px] rounded-[5px] p-5 w-[100%] text-[#fff] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#fff] ' placeholder='Tape your message here'></textarea>
          {errors.message && <span style={{color: '#DA5643', fontSize: '14px'}}>{formData[3].errorMessage}</span>}  
      </div>

      <button type='submit' className=' bg-[#FEB633] md:w-[213px] hover:bg-[#303131] text-sm font-semibold hover:border hover:border-[#FEB633] text-white hover:text-[#FEB633] py-[14px] px-[50px] md:ml-0   rounded-md active:border-2 active:border-[#fff]'>{formData[4].buttonName}</button>

    </form>
  )
}

export default ContactForm;