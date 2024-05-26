import HomeAbout from "./components/about/HomeAbout";
import HomeHero from "./components/hero/HomeHero";
import styles from "./home.module.css";

const Home = () => {

	return (
		<div className={styles.home}>
			<HomeHero />

			<HomeAbout />
		</div>
	);
};

export default Home;