import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const HomeBttn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); 
  };

  return (

      <button onClick={handleClick}>
        <p className='text-sm font-medium text-blue-700 hover:underline hover:text-blue-800'> {'\u003C'} Regresar </p>
      </button>
  );
};

export default HomeBttn;

// Modificar el boton de home y agregarlo a los articulos.