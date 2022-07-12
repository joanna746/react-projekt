import Container from "../Container/Container";
import styles from './NavBar.module.scss';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.NavBar}>
                    <a href="/"><span className="fa fa-tasks" /></a>
                    <ul >
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                            to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}  
                        to="/favourite">Favourite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                         to="/about">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}
export default NavBar