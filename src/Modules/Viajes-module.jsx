  import styles from './Modules.module.css'
  import IcoViajes from '../assets/IcoViajes.svg'
  import { useNavigate } from 'react-router-dom';
  

function Modules() {
  const navigate = useNavigate()
  return (
    <div className={styles.module}>
      <div className={styles.headerModule}>
        <img src={IcoViajes} alt="" />
        <h2 className={styles.moduleTitle}>Módulo de Viajes</h2>
      </div>
      <div className={styles.moduleText}
      style={{ cursor: 'pointer' }}>

        <p><a onClick={() => {navigate('CEOLI')}}>
          ¿Como está organizada la información?
        </a></p>  
        <p><a onClick={() => {navigate('CDVM')}}>
        Creación de viaje manual
        </a></p> 
        <p><a onClick={() => {navigate('CRTV')}} >
        Cancelar, Reprogramar y Terminar viaje
        </a></p>  
      </div>
    </div>
  );
}

export default Modules;

