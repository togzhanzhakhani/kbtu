import React, { useState } from 'react';
import DirectionsList from './components/DirectionsList';
import DirectionDetails from './components/DirectionDetails';
import "./Directions.css"
import pic from "./Geolog1.png"
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';

const baseDirection = {
    image: pic,
    description: `
        Химическая интенсификация нефтеотдачи один из основных методов повышения нефтеотдачи, который снижает остаточную нефтенасыщенность за счет снижения межфазного натяжения вода-нефть (ПАВ/щелочной раствор) и увеличивает объемную эффективность вытеснения за счет снижения коэффициента подвижности вода-нефть (полимер).
    `
};

const directionNames = [
    'Бизнес обучение',
    'Химические разработки',
    'ИТ/Цифровизация',
    'Экология и ESG',
    'Оптимизация и энергоэффективность',
    'Геология и сейсмология',
    'Водородная энергетика',
    'Повышение нефтеотдачи',
    'Промышленная безопасность',
    'Технологии и моделирование',
    'Материаловедение',
    'Проблемы каррозии'
];

const fakeDirections = directionNames.map((name, index) => ({
    ...baseDirection,
    id: index + 1,
    name
}));

const DirectionsPage = () => {
  const [selectedDirection, setSelectedDirection] = useState(fakeDirections[0]);

  const handleDirectionSelect = (direction) => {
    setSelectedDirection(direction);
  };

  const handleNextDirection = () => {
    const currentIndex = fakeDirections.findIndex(dir => dir.id === selectedDirection.id);
    const nextIndex = (currentIndex + 1) % fakeDirections.length;
    setSelectedDirection(fakeDirections[nextIndex]);
  };

  const handlePreviousDirection = () => {
    const currentIndex = fakeDirections.findIndex(dir => dir.id === selectedDirection.id);
    const prevIndex = (currentIndex - 1 + fakeDirections.length) % fakeDirections.length;
    setSelectedDirection(fakeDirections[prevIndex]);
  };


  return (
    <div>
        <Header />
        <div className="directions-page">
        <DirectionsList directions={fakeDirections} onSelectDirection={handleDirectionSelect} />
        {selectedDirection && <DirectionDetails direction={selectedDirection} 
            onPreviousDirection={handlePreviousDirection}
            onNextDirection={handleNextDirection} />}
        
        </div>
        <Footer />
    </div>
  );
};

export default DirectionsPage;
