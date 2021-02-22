import React from 'react';

const Project = ({ item, i }) => {
    return (
        <article className='mt-4 mb-8' key={`${item.name}-${i}`}>
            <h2 className='font-bold text-xl'>{item.name}</h2>
            <h3 className='font-semibold text-lg pb-4'>{item.company}</h3>

            <p className='pb-2'>{item.description}</p>
        </article>
    );
};

export default Project;
