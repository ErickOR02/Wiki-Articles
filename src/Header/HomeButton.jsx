import React from 'react';
import styled from 'styled-components';
import  HomeIcon from '../assets/square-arrow-up.svg'

const HomeBttn = () => {
  return (
    <StyledWrapper>
      <button>
        <img src={HomeIcon} alt='Home Icon' className='Icon'  />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    background: none;
    border: none;
    padding: 15px 15px;
    border-radius: 10px;
    cursor: pointer;
    background-color:rgb(0, 69, 118);
  }

  button:hover {
    background: #0077cc;
    transition: 0.5s;
  }

  button svg {
    color: #0077cc;
  }`;

export default HomeBttn;


// Ajustar icono de boton y agregarlo a los articulos.