import { useEffect, useRef } from 'react';
import containerTypes from '@common/utils/containerTypes';

const Clickaway = ({ 
	type = 'div', onClickAway, children,
}) => {

  const wrapperRef = useRef(null);
	const ContainerElement = containerTypes[type] || <div />;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClickAway(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickAway]);

  return <ContainerElement ref={wrapperRef}>{children}</ContainerElement>;
};

export default Clickaway;