import style from "./Header.module.css"
import {Button} from "../../Button/Button";

type HeaderProps = {
    handleClick: (tab: string)=>void
}

const Header = ({handleClick}:HeaderProps) => {
    return (
        <header>
            <section className={`${style.container}`}>
                <div>
                    <img src="logo.png" alt=""/>
                </div>
                <div className={`${style.nav}`}>
                    <Button position={'header'} title={"Главная"} onClick={() => handleClick('Main')} isActive={false}/>
                    <Button position={'header'} title={"Войти"} onClick={() => handleClick('LogIn')} isActive={false}/>
                    <Button position={'header'} title={"Регистрация"} onClick={() => handleClick('SignUp')}
                            isActive={false}/>
                </div>
            </section>
        </header>
    );
};

export default Header;