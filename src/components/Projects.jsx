// import React from 'react'
import { useState } from "react"
import { projects } from "../data/projects"

function Projects() {
    const projectData = projects()
    // console.log(projectData)
    const [searchKey, setSearchKey] = useState("");
    console.log(searchKey)
    
    let projectFilter 
    if(searchKey == "") {
        projectFilter = projectData
    } else if(searchKey != "") {
        projectFilter = projectData.filter(project => project.body.toLowerCase().includes(searchKey))
    }
    
    


  return (
    <div className="projects max-w-[1280px] mx-auto p-4 pt-10 pb-32 flex flex-col justify-center items-center lg:pt-32">

        <div className="search flex items-center p-2 w-full max-w-[900px] mb-8 gap-4">
            <input type="text" className="bg-white text-slate-600 outline-none border-cyan-300 border-[0.9px] w-64 px-2 py-2 text-xs rounded-lg" placeholder="search project" onChange={(e) => setSearchKey(e.target.value)}/>
            <div className="img bg-cyan-300 p-1 rounded-sm cursor-pointer hover:shadow-2xl hover:scale-105 active:scale-95">
                <img src="src/assets/icons/search.png" alt="search-project" className="w-5" />
            </div>
        </div>

        {projectFilter.length != 0 ? projectFilter.map((project) => (
            <div key={project.id} className="card-portfolio mb-4 hover:border-[0.6px] hover:border-slate-300 hover:rounded-sm hover:shadow-lg border-b-[1px] gap-4 max-w-[470px] border-cyan-400 p-1 pb-4 shadow-sm mt-2 flex flex-col md:flex-row md:max-w-[900px]" data-aos="fade-up" data-aos-duration="3000">
            <div className="img max-w-[480px]">
                <img src={`${project.img}`} className="bg-cover w-[470px] max-h-[400px]"/>
            </div>
            
            <div className="text-portfolio p-2 max-w-[470px] relative">
                <h3 className="mt-2 font-medium text-lg">{project.title}</h3>
                <small className="tech tracking-wider  text-cyan-700">{project.techStack}</small>
                <p className="mt-2 text-justify pr-2 mb-10">{project.body}</p>

                <div className="container-link mt-4 bg-cyan-0 w-full flex justify-between p-1 pr-6 items-center lg:absolute bottom-0">
                 
                    <div className="source-code flex items-center justify-start gap-4  ">
                        <img src="src/assets/icons/github.png" alt="github-code" className="w-8" />
                        <a href={`${project.linkCode}`} target="_blank" className="text-sm md:text-base tracking-wide text-cyan-300 hover:underline">Lihat Source Code</a>
                    </div>
                 
                    <div className="demo flex items-center justify-start gap-4 ">
                        <img src="src/assets/icons/demo.png" alt="demo-img" className="w-8" />
                        <a href={project.linkDemo} target="_blank" className="text-sm md:text-base tracking-wide text-cyan-300 hover:underline">Lihat Demo project</a>
                    </div>
                
                </div>
            </div>
        </div>
        )) : <h3 className="text-xl mt-20 font-semibold tracking-wider text-orange-500 italic">Not Found</h3>}
        

    </div>
  )
}

export default Projects