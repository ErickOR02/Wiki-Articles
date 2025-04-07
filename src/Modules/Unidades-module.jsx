import styles from "./Modules.module.css";
import IcoViajes from "../assets/IcoUnidades.svg";

function Modules() {
  return (
    <div className={styles.module}>
      <div className={styles.headerModule}>
        <img src={IcoViajes} alt="" />
        <h2 className={styles.moduleTitle}>Unidades</h2>
      </div>
      <div className={styles.moduleText}>
      <p><a href="#" rel="noopener noreferrer">
        Crear unidades</a></p>  
        <p><a href="#" rel="noopener noreferrer">
        Describir vista</a></p>
        <p><a href="#" rel="noopener noreferrer">
        Detalle de las unidades</a></p>
        <p><a href="#" rel="noopener noreferrer">
        Importar unidades</a></p> 
      </div> 
    </div>
  );
}

export default Modules;
