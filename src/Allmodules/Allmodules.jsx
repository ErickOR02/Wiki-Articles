// import Card from './Card.jsx'
import ModulesA from '../Modules/Alertas-module.jsx'
import ModulesC from '../Modules/Configuracion-module.jsx'
import ModulesU from '../Modules/Unidades-module.jsx'
import ModulesV from '../Modules/Viajes-module.jsx'
import styles from './Allmodule.module.css'


function AllModules() { 
  return (
      <div className={styles.modulesRow}>
        <ModulesV />
        <ModulesC />
        <ModulesA />
        <ModulesU />
      </div>
  );

}



export default AllModules
