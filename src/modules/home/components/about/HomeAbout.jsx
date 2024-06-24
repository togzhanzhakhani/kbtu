import aboutCardsData from '@modules/home/utils/aboutCardsData';
import styles from './home_about.module.css';
import HomeAboutCard from '../about_card/HomeAboutCard';
import Container from '@common/components/container/Container';
import React, { useState, useEffect } from 'react';

const HomeAbout = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


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

			{isMobile ? (
                <div className={styles.slider}>
                    <HomeAboutCard 
                        card={aboutCardsData[currentIndex]} 
                        isImageLeft={currentIndex % 2 === 0}
                        onPrevClick={handlePrevClick}
                        onNextClick={handleNextClick}
						isMobile={isMobile}
                    />
                </div>
            ) : (
                <div className={styles.about_cards}>
                    {aboutCardsData.map((card, i) => (
                        <HomeAboutCard
                            key={card.id == null ? i : card.id}
                            card={card}
                            isImageLeft={i % 2 === 0}
							isMobile={isMobile}
                        />
                    ))}
                </div>
            )}

		</Container>
	);
};

export default HomeAbout;