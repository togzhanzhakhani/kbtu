import aboutCardsData from '@modules/home/utils/aboutCardsData';
import styles from './home_about.module.css';
import HomeAboutCard from '../about_card/HomeAboutCard';
import Container from '@common/components/container/Container';
import React, { useState } from 'react';

const HomeAbout = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? aboutCardsData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNextClick = () => {
        const isLastSlide = currentIndex === aboutCardsData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

	return (
		<Container type='section' maxWidth='110rem' className={styles.about}>
			<h2 className={styles.about_header}>
				О нас
			</h2>

			<div className={styles.slider}>
				<HomeAboutCard 
                        card={aboutCardsData[currentIndex]} 
                        isImageLeft={currentIndex % 2 === 0}
						onPrevClick={handlePrevClick}
						onNextClick={handleNextClick}
				/>
            </div>

		</Container>
	);
};

export default HomeAbout;