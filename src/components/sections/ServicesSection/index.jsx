import React, { useState } from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';

export default function Index() {
    const [hoveredService, setHoveredService] = useState(null);

    const servicesList = [
        { id: "01", title: "Branding Design", text: "I break down complex user experience problems to create integrity-focused solutions that connect billions of people" },
        { id: "02", title: "Web Design", text: "I break down complex user experience problems to create integrity-focused solutions that connect billions of people" },
        { id: "03", title: "UI/UX Design", text: "I break down complex user experience problems to create integrity-focused solutions that connect billions of people" },
        { id: "04", title: "Graphics Design", text: "I break down complex user experience problems to create integrity-focused solutions that connect billions of people" }
    ];

    return (
        <section id='services' className='px-[8%] py-[10rem] bg-[#050709]'>
            <div className='w-full flex items-center text-center flex-col gap-4'>
                <h2 className='text-transparent bg-gradient-to-r from-[#8750F7] to-white bg-clip-text font-bold text-5xl'>My Quality Services</h2>
                <p className='text-xl w-1/2'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
            <div className='w-full flex flex-col mt-8'>
                {servicesList.map((service) => (
                    <div
                        key={service.id}
                        className={`flex justify-between items-center gap-4 transition duration-500 ease-in-out px-4 py-6 border-b border-[#8750F7] ${hoveredService === service.id ? 'bg-[#8750F7]' : ''} text-white`}
                        onMouseEnter={() => setHoveredService(service.id)}
                        onMouseLeave={() => setHoveredService(null)}
                    >
                        <span className=' text-2xl font-semibold'>{service.id}</span>
                        <h3 className='w-3/12 text-3xl font-semibold'>{service.title}</h3>
                        <p className='w-5/12 text-lg'>{service.text}</p>
                        <div>
                            {hoveredService === service.id ? <NorthEastIcon fontSize='large' color='inherit' /> : <SouthEastIcon fontSize='large' color='inherit' />}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}