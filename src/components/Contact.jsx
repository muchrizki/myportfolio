// import React from 'react'

import { useState } from "react"

function Contact() {

    const [email, setEmail] = useState("example@gmail.com")
    const [name, setName] = useState("your name")
    const [message, setMessage] = useState('message')

    const handleSubmit = (e) => {
        e.preventDefault();
        // Format pesan yang akan dikirim
        const text = `Email: ${email}%0ANama: ${name}%0AMessage: ${message}`;
        const phoneNumber = "+62895324867789"; // Ganti dengan nomor WhatsApp tujuan
        const url = `https://wa.me/${phoneNumber}?text=${text}`;
    
        // Membuka URL WhatsApp
        window.open(url, "_blank");
      };

  return (
    <div className="contact max-w-[1280px] bg-cyan-0 p-6 pt-20 lg:pt-28 pb-20 flex flex-col justify-center md:flex-row md:flex-wrap items-center gap-4 md:gap-y-12 lg:gap-24">
        
        <form onSubmit={handleSubmit} className="form-container bg-gray-0 flex flex-col w-fit" data-aos="flip-left" data-aos-duration="3000">
            <h3 className="text-xl text-cyan-600 font-semibold tracking-wide">GET IN TOUCH</h3>
            <input type="text" className="bg-white mt-6 text-slate-600 outline-none border-cyan-300 border-[0.9px] w-80 px-2 py-2 text-xs rounded-lg" placeholder="your email" onChange={(e) => setEmail(e.target.value)} required/>

            <input type="text" className="bg-white mt-3 text-slate-600 outline-none border-cyan-300 border-[0.9px] w-80 px-2 py-2 text-xs rounded-lg" placeholder="your name" onChange={(e) => setName(e.target.value)} required/>

            <textarea type="text" className="bg-white mt-3 text-slate-600 outline-none border-cyan-300 border-[0.9px] w-80 px-2 py-2 text-xs rounded-lg" placeholder="message" onChange={(e) => setMessage(e.target.value)} required/>

            <button type="submit" className="bg-cyan-400 mt-6 py-2 rounded-md w-80 text-white font-semibold tracking-wider cursor-pointer hover:shadow-md active:scale-98">Submit</button>
        </form>

        <div className="maps mt-6 bg-cyan-0 p-2 w-full max-w-100" data-aos="fade-down" data-aos-duration="3000">
            <div className="maps w-full bg-white p-1">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.44372883721!2d106.93789777147632!3d-6.186113386000979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b1645a2d5f3%3A0xc343c6bf8f8c81a9!2sJl.%20Akses%20Tol%20Cakung%20Bar.%20No.140%2C%20RT.7%2FRW.2%2C%20Cakung%20Bar.%2C%20Kec.%20Cakung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013910!5e0!3m2!1sid!2sid!4v1739193855900!5m2!1sid!2sid" className="w-full h-[300px]"  style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
            </div>

           
        </div>

        <div className="socmed border-cyan-200 border-[0px] col-span-2 p-4 md:max-w-[800px] sm:max-w-[500px] w-full sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:-translate-y-20" >
            
            <div className="github flex gap-2 items-center" data-aos="fade-down" data-aos-duration="3000">
                <img src="src/assets/icons/github.png" alt="github" className="w-12" />
                <a href="https://github.com/muchrizki" target="_blank" className="text-xl tracking-wide font-semibold text-cyan-300 hover:underline">muchrizki</a>
            </div>

            <div className="instagram flex gap-2 items-center mt-2 -translate-x-2" data-aos="fade-down" data-aos-duration="3000">
                <img src="src/assets/icons/instagram.png" alt="instagram" className="w-16" />
                <a href="https://www.instagram.com/much_rizki07/" target="_blank" className="text-xl tracking-wide font-semibold text-cyan-300 hover:underline -translate-x-2">much_rizki07</a>
            </div>

            <div className="linkedin flex gap-2 items-center mt-2 translate-x-1 sm:col-span-2 md:col-span-1" data-aos="fade-down" data-aos-duration="3000">
                <img src="src/assets/icons/linkedin.png" alt="linkedin" className="w-10" />
                <a href="https://www.linkedin.com/in/much-rizki-mubarok" target="_blank" className="text-xl tracking-wide font-semibold text-cyan-300 hover:underline translate-x-1">Much Rizki Mubarok</a>
            </div>
        </div>


    </div>
  )
}

export default Contact