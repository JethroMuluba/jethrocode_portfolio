import React from 'react'
import { useForm } from 'react-hook-form';

function ContactForm() {

        const { register, handleSubmit, formState : {errors}, reset} = useForm();

          const onSubmitForm = (data) => {
            alert(`Client name is ${data.name}, phone number is ${data.phone}, email is ${data.email} and message is ${data.message}`);
            reset();
          }
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className=' flex flex-col gap-[28px]'>
      <div className=' flex flex-col items-start  gap-2'>
        <label htmlFor="name" className=' text-base text-[#8D9092]'>NAME</label>
        <input {...register("name", {required:true, minLength: 3, maxLength:60})} type="text" className=' bg-[#303131] h-[55px] rounded-[5px] px-5 w-[100%] text-[#fff] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#fff] ' placeholder='Tape your name' />
        {errors.name && <span style={{color: '#DA5643', fontSize: '14px'}}>Name must have at least 3 letters</span>}
      </div>

      <div className=' flex flex-col gap-[28px] md:flex-row'>
        <div className=' flex flex-col items-start  gap-2'>
          <label htmlFor="phone" className=' text-base text-[#8D9092]'>PHONE NUMBER</label>
          <input {...register("phone", {required:true})} type="number" className=' bg-[#303131] h-[55px] rounded-[5px] px-5 w-[100%] text-[#fff] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#fff] ' placeholder='Tape your phone number' />
          {errors.phone && <span style={{color: '#DA5643', fontSize: '14px'}}>Phone is required</span>}
        </div>

        <div className=' flex flex-col items-start  gap-2'>
          <label htmlFor="email" className=' text-base text-[#8D9092]'>EMAIL</label>
          <input {...register("email", {required:true, minLength: 5, maxLength:60})} type="email" className=' bg-[#303131] h-[55px] rounded-[5px] px-5 w-[100%] text-[#fff] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#fff] ' placeholder='Tape your name' />
          {errors.email && <span style={{color: '#DA5643', fontSize: '14px'}}>Email must have at least 5 letters</span>}
        </div>
      </div>

      <div className=' flex flex-col items-start  gap-2'>
          <label htmlFor="message" className=' text-base text-[#8D9092]'>MESSAGE</label>
          <textarea {...register("message", {required:true, minLength: 10, maxLength:500})} name="message" id="" className=' bg-[#303131] h-[186px] rounded-[5px] p-5 w-[100%] text-[#fff] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#fff] ' placeholder='Tape your message here'></textarea>
          {errors.message && <span style={{color: '#DA5643', fontSize: '14px'}}>You must message me to get more informations</span>}  
      </div>

      <button type='submit' className=' bg-[#FEB633] md:w-[213px] hover:bg-[#303131] text-sm font-semibold hover:border hover:border-[#FEB633] text-white hover:text-[#FEB633] py-[14px] px-[50px] md:ml-0   rounded-md active:border-2 active:border-[#fff]'>Send Message </button>

    </form>
  )
}

export default ContactForm;