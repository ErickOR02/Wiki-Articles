import styles from "./Modules.module.css";
import IcoViajes from "../assets/IcoAlertas.svg";
import { useNavigate } from "react-router-dom";



function Modules() {
  const navigate = useNavigate();

  return (
    <div className={styles.module}>
      <div className={styles.headerModule}>
        <img src={IcoViajes} alt="" />
        <h2 className={styles.moduleTitle}>Alertas</h2>
      </div>
      <div className={styles.moduleText}>       
        <p
        style={{cursor: 'pointer'}}
        onClick={() => navigate('/mi-otro-componente-de-articulo')} //20 veces
        >
        ¿Como ver una alerta, atenderla y agregar comentario?</p>  
        <p><a href="#" target="_blank" rel="noopener noreferrer">
        Tab de alertas por eventos, ¿Como atenderlo y agregar comentarios?</a></p>
        <p><a href="#" target="_blank" rel="noopener noreferrer">
        Tabs Módulo de alertas</a></p>    
      </div>
    </div>
  );
}

export default Modules;
