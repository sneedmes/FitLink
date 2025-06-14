import React from 'react';

type TitleProp = {
    title: string
}

const Title = ({title}: TitleProp) => {
    return (
        <section className='title'>
            <h1>{title}</h1>
        </section>
    );
};

export default Title;