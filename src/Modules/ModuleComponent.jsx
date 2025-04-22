import React from 'react'
import styles from './Modules.module.css'
import { useNavigate } from 'react-router-dom';

function ModuleComponent(title, icon, sections) {
    console.log(sections)
    const navigate = useNavigate();
    return (
      <div className={styles.module}>
        <div className={styles.headerModule}>
          <img src={icon} alt="" />
          <h2 className={styles.moduleTitle}>{title}</h2>
        </div>
        <div className={styles.moduleText}>
        <p>
            {
                sections.map((section) => {
                    return (
                        <p onClick={() => navigate(section.link)}>{section.name}</p>
                    )
                } )
            }        
        </p>
        </div>
      </div>
    );
}

export default ModuleComponent