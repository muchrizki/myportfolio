// import React from 'react'

function Education() {
  return (
    <div className="education max-w-[1280px] p-6 lg:px-24 flex flex-col justify-center items-center md:items-center bg-cyan-0 pt-16 lg:pt-36 pb-20">
        
        <div className="bootcamp max-w-[540px] lg:self-start bg-white p-2 border-[0.7px] border-cyan-400 rounded-sm shadow-sm cursor-pointer hover:shadow-md" data-aos="flip-left" data-aos-duration="3000">

            <h2 className="years text-right font-semibold tracking-wide text-md italic text-cyan-400"> Dec 2024 - Present</h2>
            <div className="head-educ mt-2 flex justify-start gap-4">
                <img src="src/assets/icons/bootcampp.png" alt="bootcamp" className="h-fit" />
                <h3 className="max-w-[270px] text-base font-bold tracking-wider">Dibimbing Bootcamp Front-End Web Development</h3>
            </div>
            <p className="desc px-4 mt-5">Learning about Front-End Web Development tools and skills</p>
            <ul className="learning mt-2 px-8  py-0 list-disc bg-gray-0">

                <li>Exploring React Component Styling and Interaction</li>
                <li>React Fundamentals: Variables, Properties, and Event Handling</li>
                <li>React Fundamentals: Building Interactive User Interfaces</li>
                <li>TypeScript Fundamentals and Data Structures</li>
                <li>Classes, Generics, and Integration in Typescript</li>
                <li>Tailwind CSS: Building Dynamic and User-Engaging Web Interfaces</li>  
                <li>JavaScript Fundametals </li>
                <li>Javascript Control Flow</li>
                <li>Mastering Arrays and Objects in JavaScript</li>
                <li>Empowering JavaScript Development with Functions and Lodash</li>
                <li>Navigating the World of Variables, Spread, and Rest in JavaScript</li>
                <li>Object Oriented Programming with Classes in JavaScript</li>
                
            </ul>
        </div>

        <div className="college max-w-[540px] lg:self-end mt-4 bg-white p-2 border-[0.7px] border-cyan-400 rounded-sm shadow-sm cursor-pointer hover:shadow-md" data-aos="fade-right" data-aos-duration="3000">

            <h2 className="years text-right font-semibold tracking-wide text-md italic text-cyan-400"> 2019 - 2022</h2>
            <div className="head-educ mt-2 flex justify-start items-center gap-4">
                <img src="src/assets/icons/student.png" alt="bootcamp" className="h-fit" />
                <h3 className="max-w-[270px] md:max-w-[400px] text-base font-bold tracking-wider">Teknik Elektronika | Politeknik Gajah Tunggal</h3>
            </div>
            <p className="desc px-4 mt-5 w-full">Enjoyed the experience of learning programming concepts such as Arduino for IoT, PLC, and web programming, which helped train my analytical thinking and problem-solving skills (grade 3.41 of 4.0)</p>
            <ul className="learning mt-2 px-8  py-0 list-disc bg-gray-0">
                <li>Listrik Arus Kuat dan Arus Lemah</li>
                <li>IoT atau Internet of Things</li>
                <li>Progammable Logic Controller</li>
                <li>Pemrograman Komputer</li>
            </ul>
        </div>
    </div>
  )
}

export default Education