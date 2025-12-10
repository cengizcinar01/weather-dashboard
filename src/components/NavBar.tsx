import {NavLink} from "react-router-dom";
import s from './styles/NavBar.module.scss';

const links = [
    {to: "/", label: "Home"},
    {to: "/favorites", label: "Favorites"},
    {to: "/info", label: "Info"},
    {to: "/about", label: "About"}
]

export const NavBar = () => {
    const activeClass = ({isActive}: { isActive: boolean }) => isActive ? s.active : undefined;
    return (
        <nav className={s.Wrapper}>
            {links.map(({to, label}) => (
                <NavLink key={to} to={to} className={activeClass}>
                    {label}
                </NavLink>
            ))}
        </nav>
    )
}