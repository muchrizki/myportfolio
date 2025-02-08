// import React from 'react'

function Homepage() {
  return (
    <div className="home max-w-[1280px] mx-auto bg-cyan-0 h-[100vh] flex flex-col mt-0 justify-center md:mt-0 md:justify-evenly md:flex-row items-center pb-10">
        
        <div className="img-profile bg-0 p-4 w-fit" data-aos="fade-right" data-aos-duration="3000">
          <img src="src/assets/home-img/myprofile.png" alt="myprofile-img" className='w-48 md:w-70 drop-shadow-2xl' />
        </div>

        <div className="text-profile bg-white p-4 max-w-[500px] text-center md:text-left" data-aos="fade-down" data-aos-duration="3000">
          <h2 className='text-md sm:text-xl font-bold tracking-wide'>Much Rizki Mubarok</h2>
          <h3 className='text-lg sm:text-2xl font-semibold italic'>Sales Administrator <span className="text-cyan-300"> |  Frontend Enthusiast </span></h3>
          <p className='mt-4 text-xs text-justify md:text-sm md:text-justify leading-5'>Sebagai lulusan D3 Teknik Elektronika dengan pengalaman di bidang IoT, PLC, dan pemrograman Web, menguasai beberapa bahasa pemrograman. Membawa pengalaman sebagai administrator penjualan berbasis proyek, memberikan dukungan dalam membuat struktur folder yang jelas sambil menjaga komunikasi yang efektif dengan pelanggan. Saat ini sedang mencari peluang untuk belajar dan berkembang di bidang teknologi, dengan pola pikir terbuka untuk menjadi freelance sebagai frontend developer guna lebih mengembangkan keterampilan pemrograman. Jika Anda tertarik untuk bekerja sama dengan saya, mari terhubung atau hubungi saya melalui email ini: muchrizkimubarok@gmail.com</p>
        </div>
        
    </div>
  )
}

export default Homepage