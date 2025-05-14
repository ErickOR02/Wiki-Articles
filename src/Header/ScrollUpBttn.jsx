import React from 'react';
import styled from 'styled-components';
import  HomeIcon from '../assets/arrow-up.svg'

const ScrollUpBttn = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  };

  return (
    <StyledWrapper>
      <button onClick={handleClick}>
        <img src={HomeIcon} alt="Home Icon" className="Icon" />
      </button>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  button {
    background: none;
    border: none;
    padding: 15px 15px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #0077CC;
  }

  button:hover {
    background:rgb(0, 65, 111);
    transition: 0.5s;
  }

  button svg {
    color: #0077CC;
  }`;

export default ScrollUpBttn;


// Ajustar icono de boton y agregarlo a los articulos.