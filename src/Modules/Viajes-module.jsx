  import styles from './Modules.module.css'
  import IcoViajes from '../assets/IcoViajes.svg'
import { useNavigate } from 'react-router-dom';
  

function Modules() {
  const navigate = useNavigate()
  return (
    <div className={styles.module}>
      <div className={styles.headerModule}>
        <img src={IcoViajes} alt="" />
        <h2 className={styles.moduleTitle}>Viajes</h2>
      </div>
      <div className={styles.moduleText}>
      <p><a 
      onClick={() => {navigate('CEOLI')}}
      >
        ¿Como está organizada la información?</a></p>  
        <p><a 
      onClick={() => {navigate('AEALC')}}
      >
        Agregar elementos a los catalogos</a></p> 
        <p><a href="#" rel="noopener noreferrer">
        Cancelar, Reprogramar y Terminar viaje</a></p>
        <p><a href="#" rel="noopener noreferrer">
        Creación viaje manual</a></p>
        <p><a href="#" rel="noopener noreferrer">
        Creación viaje por Layout</a></p>
        <p><a href="#" rel="noopener noreferrer">
        Editar asignación</a></p>
        <p><a href="#" rel="noopener noreferrer">
        Editar detalles de viaje</a></p>    
        <p><a href="#" rel="noopener noreferrer">
        Editar Ruta</a></p>    
        <p><a href="#" rel="noopener noreferrer">
        Filtros</a></p>    
        <p><a href="#" rel="noopener noreferrer">
        Editar detalles de viaje</a></p>
      </div>
    </div>
  );
}

export default Modules;

