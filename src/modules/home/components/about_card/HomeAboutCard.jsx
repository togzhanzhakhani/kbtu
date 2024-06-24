import styles from "./home_about_card.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HomeAboutCard = ({card, isImageLeft, onPrevClick, onNextClick, isMobile}) => {
	const [isActive, setIsActive] = useState(false);

    const toggleParagraph = () => {
        setIsActive(!isActive);
    };

	if(card == null) {
		return;
	}

	return (
        <div className={`${styles.card} ${isImageLeft ? styles.row : styles.rowReverse}`}>
			<div className={styles.imgcon}>
            {isMobile && (
                    <>
                    <button className={styles.prev} onClick={onPrevClick}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div><img 
                        className={styles.card_image}
                        src={card.imageUrl} 
                        alt=""
                    /></div>
                    <button className={styles.next} onClick={onNextClick}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    </>
                )}
                {!isMobile && (
                     <div>
                        <img className={styles.card_image} src={card.imageUrl} alt="" />
                    </div>
                )}
			</div>
			<div className={styles.card_content}>
				<div className={styles.card_title_wrapper}>
					<h3 className={styles.card_title}>{card.title}</h3>
                    {isMobile && (
                        <FontAwesomeIcon
                        icon={faChevronDown}
                        className={styles.arrowIcon}
                        onClick={toggleParagraph}
                    />
                    )}
				</div>

				{!card.isBodyBullettedList ? (
                    <div className={`${styles.card_paragraphs} ${isMobile && !isActive ? styles.hidden : styles.visible}`}>
                        {card.body.map((p, i) => (
                            <div className={styles.cardp} key={i}>{p}</div>
                        ))}
                    </div>
                ) : (
                    <ul className={`${styles.card_list} ${isMobile && !isActive ? styles.hidden : styles.visible}`}>
                        {card.body.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                )}
			</div>
		</div>
	)
};

export default HomeAboutCard;