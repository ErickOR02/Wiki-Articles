import styles from "./Modules.module.css";
import IcoConfig from "../assets/IcoConfig.svg";
import { useNavigate } from 'react-router-dom';

function Modules() {
  const navigate = useNavigate()
  return (
    <div className={styles.module}>
      <div className={styles.headerModule}>
        <img src={IcoConfig} alt="" />
        <h2 className={styles.moduleTitle}>Configuración</h2>
      </div>
      <div className={styles.moduleText}
      style={{ cursor: 'pointer' }}>

        <p><a className="hover:underline hover:text-blue-800 text-blue-700 " onClick={() => {navigate('/articles/como-ajustar-datos-cuenta-y-contraseña')}}>
        ¿Cómo ajustar tus datos de tu cuenta y cambiar tu contraseña? 
        </a></p>  
        <p><a className="hover:underline hover:text-blue-800 text-blue-700 " onClick={() => {navigate('/articles/como-agregar-y-configurar-alertas')}}>
        ¿Como configurar y agregar alertas?
        </a></p> 
        <p><a className="hover:underline hover:text-blue-800 text-blue-700" onClick={() => {navigate('/articles/como-configurar-mi-suscripción')}} >
        ¿Cómo configurar mi suscripción? 
        </a></p>  
      </div>
    </div>
  );
}
export default Modules;
