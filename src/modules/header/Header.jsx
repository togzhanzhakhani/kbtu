import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from "./header.module.css";

const Header = () => {
	return (
		<nav>
			<div className={styles.main}>
				<Link to="/">
					<div className={styles.kbtu_icon} />
				</Link>

				<div className={styles.navigation_buttons}>
					<button>Проекты</button>
					<button>Направления</button>
					<Link to="/contacts">
						Контакты
					</Link>
					<button>О нас</button>
				</div>

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