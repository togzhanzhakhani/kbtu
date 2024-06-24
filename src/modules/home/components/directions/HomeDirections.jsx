import HomeDirectionsCard from '../directions_card/HomeDirectionsCard';
import Container from '@common/components/container/Container';
import directionsData from '@modules/home/utils/directionsData';
import styles from './home_directions.module.css';
import React, { useState } from 'react';

const HomeDirections = () => {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
        touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    };

    const handleSwipe = () => {
        if (touchStartX - touchEndX > 50) {
            // Свайп влево
            setCurrentCardIndex((prevIndex) => (prevIndex === directionsData.length - 1 ? 0 : prevIndex + 1));
        }
        if (touchEndX - touchStartX > 50) {
            // Свайп вправо
            setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? directionsData.length - 1 : prevIndex - 1));
        }
    };


	return (
		<Container 
			type='section'
			
			className={styles.directions}
		>
			<h2 className={styles.directions_heading}>Направления</h2>

			<div className={styles.directions_cards}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}>
				
							<HomeDirectionsCard
							key={directionsData[currentCardIndex].id}
							card={directionsData[currentCardIndex]}
								isBlue={currentCardIndex % 2 !== 0}
							/>
			</div>
		</Container>
	);
};

export default HomeDirections;