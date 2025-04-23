import style from "./Button.module.css"

type ButtonProps = {
    position: string,
    title: string,
    onClick: ()=>void,
    isActive: boolean
}

export const Button=({position, title, onClick, isActive}:ButtonProps)=>{
    return(
        <>
            {position === 'header' &&
                <>
                        <button
                            onClick={onClick}
                            className={`${style.header}`}>
                            <h2>{title}</h2>
                        </button>
                </>
            }

            {position === 'main' &&
                <>
                    <button
                        onClick={onClick}
                        className={`${style.main}`}>
                        <h2>{title}</h2>
                    </button>
                </>
            }
        </>
    )
}