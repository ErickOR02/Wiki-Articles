import styles from "./Modules.module.css";
import IcoUnidades from "../assets/IcoUnidades.svg";
import { useNavigate } from 'react-router-dom';

function Modules() {
  const navigate = useNavigate()
  return (
    <div className={styles.module}>
      <div className={styles.headerModule}>
        <img src={IcoUnidades} alt="" />
        <h2 className={styles.moduleTitle}>Módulo de Unidades</h2>
      </div>
      <div className={styles.moduleText}
      style={{ cursor: 'pointer' }}>

        <p><a className="hover:underline hover:text-blue-500" onClick={() => {navigate('/articles/como-importar-unidades')}} >
        ¿Como importar unidades?
        </a></p>  
      </div>
    </div>
  );
}

export default Modules;
