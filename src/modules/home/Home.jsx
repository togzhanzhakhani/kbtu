import HomeAbout from "./components/about/HomeAbout";
import HomeDirections from "./components/directions/HomeDirections";
import HomeHero from "./components/hero/HomeHero";
import styles from "./home.module.css";

const Home = () => {

	return (
		<div className={styles.home}>
			<HomeHero />

			<HomeAbout />

			<HomeDirections />
		</div>
	);
};

export default Home;