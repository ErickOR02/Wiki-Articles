import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import headerImg from '../assets/Mesa-de-trabajo.png';
import styles from './Header.module.css';
import CustomSearchBar from "../searchBar";
import { articles } from '../Modules/RoutToArticles.jsx';

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredLinks = articles.filter((link) =>
    link.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.header}>
      
      <img className={styles.Logo} src={headerImg} alt="Tramo Logo" />
      <h1 className="titleText">Biblioteca de artículos.</h1>
      <p>Encuentra información de ayuda relacionada con nuestra plataforma</p>
      
      <div className={styles.searchBar}> 
        <CustomSearchBar search={search} setSearch={setSearch} /> 
      </div>
      
      {search && (
        <div>
          {filteredLinks.length > 0 ? (
            filteredLinks.map((link) => (
              <div
                key={link.name}  
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  navigate(link.url); 
                }}
              >
                <p className="mb-2">{link.name}</p> 
              </div>
            ))
          ) : (
            <p>No se encontraron artículos de ayuda</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
