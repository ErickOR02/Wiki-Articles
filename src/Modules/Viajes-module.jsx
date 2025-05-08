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
      <div className={styles.moduleText}
      style={{ cursor: 'pointer' }}>

        <p><a className="hover:underline hover:text-blue-800 text-blue-700" onClick={() => {navigate('/articles/como-esta-organizada-la-info')}}>
          ¿Como está organizada la información?
        </a></p>  
        <p><a className="hover:underline hover:text-blue-800 text-blue-700" onClick={() => {navigate('/articles/creacion-viaje-manual')}}>
        Creación de viaje manual
        </a></p> 
        <p><a className="hover:underline hover:text-blue-800 text-blue-700" onClick={() => {navigate('/articles/CRT-viaje')}} >
        Cancelar, Reprogramar y Terminar viaje
        </a></p>  
      </div>
    </div>
  );
}

export default Modules;

