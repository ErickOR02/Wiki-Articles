import React from 'react';
import { useParams } from 'react-router-dom';
import ArticuloCIU from '../Articles/Articulos-unidades/Importar-unidades';
// Módulo de Unidades ⬆️
import ArticuloCVUA from '../Articles/Articulos-alertas/como-ver-una-alerta-atenderla-y-agregar-un-comentario';
// Módulo de Alertas ⬆️
import ArticuloCCMS from '../Articles/Articulos-configuracion/como-configurar-mi-suscripción.jsx';
import ArticuloCAYCA from '../Articles/Articulos-configuracion/como-agregar-y-configurar-alertas';
import ArticuloCADCC from '../Articles/Articulos-configuracion/como-ajustar-datos-cuenta-y-contraseña';
// Módulo de Configuración ⬆️
import ArticuloCRTV from '../Articles/Articulos-viajes/CRT-viaje.jsx'
import ArticuloCEOLI from '../Articles/Articulos-viajes/como-esta-organizada-la-info.jsx'
import ArticuloCVM from '../Articles/Articulos-viajes/creacion-viaje-manual.jsx'
// Módulo de Viajes ⬆️


function ArticleDetails() {
  const { articleName } = useParams();

  const articleComponents = {
      "como-ver-una-alerta-atenderla-y-agregar-un-comentario": <ArticuloCVUA />,
      // Módulo de Alertas ⬆️
      "como-configurar-mi-suscripción": <ArticuloCCMS />,
      "como-agregar-y-configurar-alertas": <ArticuloCAYCA />,
      "como-ajustar-datos-cuenta-y-contraseña": <ArticuloCADCC />,
      // Módulo de Configuración ⬆️
      "como-importar-unidades": <ArticuloCIU />,
      // Módulo de Unidades ⬆️
      "CRT-viaje": <ArticuloCRTV />,
      "como-esta-organizada-la-info": <ArticuloCEOLI />,
      "creacion-viaje-manual": <ArticuloCVM />,
    // Módulo de Viajes ⬆️


};

    const articleContent = articleComponents[articleName] || <p>Artículo no encontrado.</p>;

  return (
    <div>

      {articleContent}
    </div>
  );
}

export default ArticleDetails;