// import React from 'react'

function Homepage() {
  return (
    <div className="home max-w-[1280px] mx-auto bg-cyan-0 h-[100vh] flex flex-col mt-0 justify-center md:mt-0 md:justify-evenly md:flex-row items-center pb-10">
        
        <div className="img-profile mt-20 bg-0 p-4 w-fit flex flex-col items-center" data-aos="fade-right" data-aos-duration="3000">
          <img src="src/assets/home-img/myprofile.png" alt="myprofile-img" className='w-48 md:w-70 drop-shadow-2xl' />

          <div className="skill mt-8 flex md:grid md:grid-cols-3 lg:flex justify-evenly gap-4 items-center">
            
            <div className="react relative group">
              <img src="src/assets/icons/react.png" alt="react-icon" className="w-12 cursor-pointer ease-in-out transition-all duration-200 hover:-translate-y-2" />
              <h3 className="tracking-wide text-sm mt-2 border-[0.7px] w-20 flex justify-center  absolute opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 -left-4 border-cyan-300  px-2 py-1 rounded-xl text-cyan-400 shadow-sm">React JS</h3>
            </div>

            <div className="tailwind relative group">
              <img src="src/assets/icons/tailwind.png" alt="tailwind-icon" className="w-12 h-8 cursor-pointer ease-in-out transition-all duration-200 hover:-translate-y-2" />
              <h3 className="tracking-wide text-sm mt-2 border-[0.7px] w-28 flex justify-center  absolute opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 -bottom-10 -left-5 border-cyan-300  px-2 py-1 rounded-xl text-cyan-400 shadow-sm">Tailwind CSS</h3>

            </div>

            <div className="figma relative group">
              <img src="src/assets/icons/figma.png" alt="figma-icon" className="w-10 cursor-pointer ease-in-out transition-all duration-200 hover:-translate-y-2" />
              <h3 className="tracking-wide text-sm mt-2 border-[0.7px] w-28 flex justify-center  absolute opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 -bottom-10 -left-5 border-cyan-300  px-2 py-1 rounded-xl text-cyan-400 shadow-sm">Figma</h3>
            </div>

            <div className="communication relative group">
              <img src="src/assets/icons/communication.png" alt="communication-icon" className="w-12 cursor-pointer ease-in-out transition-all duration-200 hover:-translate-y-2" />
              <h3 className="tracking-wide text-sm mt-2 border-[0.7px] w-32 flex justify-center  absolute opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 -bottom-10 -left-5 border-cyan-300  px-2 py-1 rounded-xl text-cyan-400 shadow-sm">Communication</h3>
            </div>
            
            
            <div className="administration relative group">
              <img src="src/assets/icons/administration.png" alt="administration-icon" className="w-12 cursor-pointer ease-in-out transition-all duration-200 hover:-translate-y-2" />
              <h3 className="tracking-wide text-sm mt-2 border-[0.7px] w-32 flex justify-center  absolute opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 -bottom-10 -left-5 border-cyan-300  px-2 py-1 rounded-xl text-cyan-400 shadow-sm">Administration</h3>
            </div>
          </div>
          
        </div>

        <div className="text-profile mt-10 bg-white p-4 max-w-[500px] pb-20 text-center md:mt-50 md:text-left" data-aos="fade-down" data-aos-duration="3000">
          <h2 className='text-md sm:text-xl font-bold tracking-wide'>Much Rizki Mubarok</h2>
          <h3 className='text-lg sm:text-2xl font-semibold italic'>Sales Administrator <span className="text-cyan-300"> |  Frontend Enthusiast </span></h3>
          <p className='mt-4 text-xs text-justify md:text-sm md:text-justify leading-5'>Sebagai lulusan D3 Teknik Elektronika dengan pengalaman di bidang IoT, PLC, dan pemrograman Web, menguasai beberapa bahasa pemrograman. Membawa pengalaman sebagai administrator penjualan berbasis proyek, memberikan dukungan dalam membuat struktur folder yang jelas sambil menjaga komunikasi yang efektif dengan pelanggan. Saat ini sedang mencari peluang untuk belajar dan berkembang di bidang teknologi, dengan pola pikir terbuka untuk menjadi freelance sebagai frontend developer guna lebih mengembangkan keterampilan pemrograman. Jika Anda tertarik untuk bekerja sama dengan saya, mari terhubung atau hubungi saya melalui email ini: muchrizkimubarok@gmail.com</p>
        </div>
        
        
    </div>
  )
}

export default Homepage