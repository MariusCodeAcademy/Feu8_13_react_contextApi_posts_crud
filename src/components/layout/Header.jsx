import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useAuth } from '../../store/AuthProvider';
import Container from '../UI/container/Container';
import config from '../../config';

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

  // const logoName = import.meta.env.VITE_SITE_NAME;
  const logoName = config.siteName;

  // console.log('ctx Header ===', ctx);

  return (
    <header className={css.wrap}>
      <Container className={css.flex}>
        <Link href='/' className={css.logo}>
          {logoName}
        </Link>
        <nav>
          <NavLink className={css.navLink} to={'/'}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink className={css.navLink} to={'/posts'}>
              Posts
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink className={css.navLink} to={'/add-post'}>
              Add Post
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink className={css.navLink} to={'/login'}>
              Login
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink onClick={logout} className={css.navLink} to={'/login'}>
              Logout
            </NavLink>
          )}
        </nav>
      </Container>
    </header>
  );
}
