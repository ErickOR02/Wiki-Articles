import headerImg from '../assets/Mesa-de-trabajo.png'
import headerDark from '../assets/Header-Dark.png'
import styles from './Header.module.css'
import CustomSearchBar from "../searchBar";
import React, { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  return (
    
    <div className={styles.header}>
      <img className={styles.headerDark} src={headerDark} alt="" />
      <img className={styles.Logo} src={headerImg} alt="" />
      <h1 className="titleText">Base de conocimiento de Tramo</h1>
      <p>Encuentra información de ayuda relacionada con nuestra plataforma</p>
     <div className={styles.searchBar}> <CustomSearchBar search={search} setSearch={setSearch}/> </div>
      <h2>Todos los articulos</h2>
    </div>
  );
}

export default Header