import styles from "./Modules.module.css";
import IcoConfig from "../assets/IcoConfig.svg";

function Modules() {
  return (
    <div className={styles.module}>
      <div className={styles.headerModule}>
        <img src={IcoConfig} alt="" />
        <h2 className={styles.moduleTitle}>Configuración</h2>
      </div>
      <div className={styles.moduleText}>
        <p><a href="#" target="_blank" rel="noopener noreferrer">
        Ajustar datos de cuenta y contraseña</a></p>  
        <p><a href="#" target="_blank" rel="noopener noreferrer">
        Configuración de notificaciones</a></p>
        <p><a href="#" target="_blank" rel="noopener noreferrer">
        Configuración de roles de usuario</a></p>
        <p><a href="#" target="_blank" rel="noopener noreferrer">
        Configuración de subscripción</a></p>
        <p><a href="#" target="_blank" rel="noopener noreferrer">
        Configuración de usuarios y permisos</a></p>
        <p><a href="#" target="_blank" rel="noopener noreferrer">
        Configuración del Módulo de viajes</a></p>
        <p><a href="#" target="_blank" rel="noopener noreferrer">
        Configurar y Agregar alertas</a></p>      
      </div>
    </div>
  );
}

export default Modules;
