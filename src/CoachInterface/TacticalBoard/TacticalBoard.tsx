import React from 'react';
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

const TacticalBoard = () => {

    return (
        <>
            <Header position="coach"/>
            <Title title={'Тактическая доска'}/>
            <div className='content'>
                <iframe
                    src="/Board/Board.html"
                    title="Тактическая доска"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                />
            </div>
        </>
    );
};

export default TacticalBoard;