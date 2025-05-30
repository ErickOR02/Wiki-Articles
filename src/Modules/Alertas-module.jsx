import styles from "./Modules.module.css";
import IcoAlertas from "../assets/IcoAlertas.svg";
import { useNavigate } from "react-router-dom";  

function Modules() {
  const navigate = useNavigate()
  return (
    <div className={styles.module}>
      <div className={styles.headerModule}>
        <img src={IcoAlertas} alt="" />
        <h2 className={styles.moduleTitle}>Alertas</h2>
      </div>
      <div className={styles.moduleText}
      style={{ cursor: 'pointer' }}>

        <p><a className="hover:underline hover:text-blue-800 text-blue-700" onClick={() => {navigate('/articles/como-ver-una-alerta-atenderla-y-agregar-un-comentario')}} >
          ¿Cómo ver una alerta, atenderla y agregar un comentario?
        </a></p>  
      </div>
    </div>
  );
}

export default Modules;
