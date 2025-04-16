import React from 'react';
import { useParams } from 'react-router-dom';
// import BreadcrumbNav from '../Header/Breadcrumb.jsx';
import ArticuloCIU from '../Articles/Articulos-unidades/Importar-unidades';
import ArticuloCVUA from '../Articles/Articulos-alertas/como-ver-una-alerta-atenderla-y-agregar-un-comentario';
import ArticuloCCMS from '../Articles/Articulos-configuracion/como-configurar-mi-suscripción.jsx';
import ArticuloCAYCA from '../Articles/Articulos-configuracion/como-agregar-y-configurar-alertas';
import ArticuloCADCC from '../Articles/Articulos-configuracion/como-ajustar-datos-cuenta-y-contraseña';

function ArticleDetails() {
  const { articleName } = useParams(); // Extract the article name from the URL

  // Mapping of article names to components
  const articleComponents = {
    "como-importar-unidades": <ArticuloCIU />,
    "como-ver-una-alerta-atenderla-y-agregar-un-comentario": <ArticuloCVUA />,
    "como-configurar-mi-suscripción": <ArticuloCCMS />,
    "como-agregar-y-configurar-alertas": <ArticuloCAYCA />,
    "como-ajustar-datos-cuenta-y-contraseña": <ArticuloCADCC />,
  };

  // Get the component for the current article or show a default message
  const articleContent = articleComponents[articleName] || <p>Artículo no encontrado.</p>;

  return (
    <div>
      {/* <BreadcrumbNav /> */}
      {articleContent}
    </div>
  );
}

export default ArticleDetails;