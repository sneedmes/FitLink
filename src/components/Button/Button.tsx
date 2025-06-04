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
                        <button
                            onClick={onClick}
                            className={`${style.header}`}>
                            <h2>{title}</h2>
                        </button>
            }
            {position === 'main' &&
                    <button
                        onClick={onClick}
                        className={`${style.main}`}>
                        <h2>{title}</h2>
                    </button>
            }
            {['signup', 'team', 'login'].includes(position) &&
                <button
                    onClick={onClick}
                    className={`${style.signup}`}>
                    <h4>{title}</h4>
                </button>
            }
            {position === 'role' &&
                <button
                    onClick={onClick}
                    className={isActive ? `${style.signup_role} ${style.signup_role_active}` : `${style.signup_role}`}>
                    <h4>{title}</h4>
                </button>
            }
        </>
    )
}