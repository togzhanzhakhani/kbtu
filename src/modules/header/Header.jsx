import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import headerLinks from '@common/utils/headerLinks';
import styles from "./header.module.css";

const Header = () => {

	const {pathname: currentUrl} = useLocation();

	return (
		<nav>
			<div className={styles.main}>
				<Link to="/">
					<div className={styles.kbtu_icon} />
				</Link>

				<nav className={styles.navigation_buttons}>
					{
						headerLinks.map(l => {
							const isActive = currentUrl === l.url;

							return (
								<Link 
									key={l.id}
									to={l.url} 
									className={isActive ? styles.active_link : ''}
								>
									{l.name}
								</Link>
							)
					})
					}
				</nav>

				<div className={styles.right_side_elements}>
					<Link to="/login">
						<button>
							<FontAwesomeIcon icon={faUser} size="2x" />
						</button>
					</Link>

					<button>
						<FontAwesomeIcon icon={faGlobe} size="2x" />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;