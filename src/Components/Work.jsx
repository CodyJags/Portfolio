import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        Year: 2020,
        Title: 'Content Creator',
        Duration: '3 years',
        Details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium fuga necessitatibus natus veniam cumque fugit voluptates. Sapiente illo aliquid quasi? Unde autem harum, assumenda enim repudiandae perferendis, iste similique quisquam illum, cumque minima esse',
    },
    {
        Year: 2017,
        Title: 'Google',
        Duration: '2 years',
        Details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium fuga necessitatibus natus veniam cumque fugit voluptates. Sapiente illo aliquid quasi? Unde autem harum, assumenda enim repudiandae perferendis, iste similique quisquam illum, cumque minima esse',
    },
    {
        Year: 2015,
        Title: 'Amazon',
        Duration: '3 years',
        Details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium fuga necessitatibus natus veniam cumque fugit voluptates. Sapiente illo aliquid quasi? Unde autem harum, assumenda enim repudiandae perferendis, iste similique quisquam illum, cumque minima esse',
    },
    {
        Year: 2012,
        Title: 'Facebook',
        Duration: '1 years',
        Details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium fuga necessitatibus natus veniam cumque fugit voluptates. Sapiente illo aliquid quasi? Unde autem harum, assumenda enim repudiandae perferendis, iste similique quisquam illum, cumque minima esse',
    },
]
const Work = () => {
    return (
        <div id='work' className='mwx-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] bg-stone-100'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem 
                key={idx} 
                Year={item.Year} 
                Title={item.Title} 
                Duration={item.Duration} 
                Details={item.Details} 
                />
            ))}
        </div>
    )
}

export default Work