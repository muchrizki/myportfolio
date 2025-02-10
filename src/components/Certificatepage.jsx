// import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { certificateData } from '../data/certificate';

function Certificatepage() {
    let certificate = certificateData()
    // console.log(certificate)
    
 
  return (
    <div className="certificate bg-cyan-0 max-w-[1280x] mx-auto p-2 flex flex-col justify-center items-center ">
        
        <Carousel className='bg-white p-1 mt-10 w-[375px] sm:w-[600px]'>
          <div className=''  data-aos="fade-up" data-aos-duration="3000">
            <img src="src/assets/certificate/react.png" alt="react-certificate" data-aos="fade-right" data-aos-duration="3000" />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <img src="src/assets/certificate/frontend.png" alt="frontend-certificate" data-aos="fade-right" data-aos-duration="3000"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <img src="src/assets/certificate/dasar-js.png" alt="dasar-js-certificate" data-aos="fade-right" data-aos-duration="3000"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <img src="src/assets/certificate/dasar-web.png" alt="dasar-web-certificate" data-aos="fade-right" data-aos-duration="3000"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <img src="src/assets/certificate/digital-marketing.png" alt="digital-marketing-certificate" data-aos="fade-right" data-aos-duration="3000"/>
          </div>
        </Carousel>

        <div className="desc-certificate p-2 bg-gray-0 pb-20 lg:grid lg:grid-cols-2 lg:gap-5">

            {certificate.map((item, index) => (
            <div key={index} className="react max-w-[600px] p-2 bg-0 border-r-[0.7px] border-cyan-300 shadow-sm mt-4 lg:max-w-[500px]" data-aos="fade-right" data-aos-duration="3000">
                <h3 className='text-md font-semibold tracking-wide text-cyan-500'>{item.title}</h3>
                <p className='text-justify text-sm mt-4'>{item.desc}</p>
              </div>
            ))}
        
        </div>

      </div>
  )
}

export default Certificatepage