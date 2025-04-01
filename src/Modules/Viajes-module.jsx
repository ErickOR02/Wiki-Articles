  import styles from './Modules.module.css'
  import IcoViajes from '../assets/IcoViajes.png'

function Modules() {
  return (
    <div className={styles.module}>
      <div className={styles.headerModule}>
        <img src={IcoViajes} alt="" />
        <h2 className={styles.moduleTitle}>Viajes</h2>
      </div>
      <div className={styles.moduleText}>
        <p>¿Como está organizada la información</p>
        <p>Agregar elementos a los catalogos</p>
        <p>Cancelar, Reprogramar y Terminar viaje</p>
        <p>Creación viaje manual</p>
        <p>Creación viaje por Layout</p>
        <p>Editar asignación</p>
        <p>Editar detalles de viaje</p>
        <p>Editar ruta</p>
        <p>Filtros</p>
        <p>Tabs del Módulo de viajes</p>
      </div>
    </div>
  );
}

export default Modules