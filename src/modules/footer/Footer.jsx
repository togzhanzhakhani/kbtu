import { FaInstagram, FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa';
import styles from "./footer.module.css";

const Footer = () => {

	const curYear = new Date().getFullYear();

	return (
		<footer className={styles.main}>
			<div className={styles.main_content}>
				<div className={styles.contact_icons}>
					<div className={styles.kbtu_icon} />

					<div className={styles.mini_icons}>
						<button><FaInstagram /></button>
						<button><FaFacebook /></button>
						<button><FaTwitter /></button>
						<button><FaTelegram /></button>
					</div>
				</div>

				<div className={styles.navigation_buttons}>
					<button>Проекты</button>
					<button>Направления</button>
					<button>О нас</button>
					<button>Наши партнеры</button>
				</div>

				<div className={styles.contacts}>
					<p>Контакты</p>
					<p>Офис по управлению проектами</p>
					<p>Номер: +7-707-561-32-28</p>
					<p>Почта: esglab@kbtu.kz</p>
				</div>
			</div>

			<div className={styles.last_content}>
				<p>Казахстанско-Британский Технический Университет {curYear}</p>
				<p>Все права защищены</p>
			</div>
		</footer>
	);
};

export default Footer;