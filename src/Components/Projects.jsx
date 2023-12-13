import React from 'react'
import ProjectItem from './ProjectItem'
import CryptoImg from '../assets/Crypto.jpg'
import PropertyImg from '../assets/Property.jpg'
import NetflixImg from '../assets/Netflix.jpg'
import TwitchImg from '../assets/Twitch.jpg'
import User from '../assets/User.jpg'

const Projects = () => {
    return (
        <div id='Projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] bg-stone-100 '>Projects</h1>
            <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius exercitationem accusamus voluptates harum? Commodi eaque tempore error ad provident iste, non voluptatem optio aut? Accusamus cupiditate libero officiis necessitatibus ab doloremque vel quia?</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={CryptoImg} title='Crypto app' />
                <ProjectItem img={PropertyImg} title='Property app' />
                <ProjectItem img={NetflixImg} title='Netflix app' />
                <ProjectItem img={TwitchImg} title='Twitch app' />
            </div>
        </div>
    )
}

export default Projects