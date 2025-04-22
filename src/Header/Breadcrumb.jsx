import { Box, Breadcrumbs, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

function BreadcrumbNav() {
  const { articleName } = useParams(); 



  const articleNameMapping = {
    "como-ver-una-alerta-atenderla-y-agregar-un-comentario": "¿Como ver una alerta, atenderla y agregar un comentario?",
    // Módulo de Alertas ⬆️
    "como-agregar-y-configurar-alertas": "¿Como configurar y agregar alertas?",
    "como-ajustar-datos-cuenta-y-contraseña": "¿Como ajustar los datos de tu cuenta y contraseña?",
    "como-configurar-mi-suscripción": "¿Cómo configurar mi suscripción?",
    // Módulo de Configuración ⬆️
    "como-importar-unidades": "¿Cómo importar unidades?",
    // Módulo de Unidades ⬆️
    "CRT-viaje":  "Cancelar, reprogramar y terminar un viaje",
    "creacion-viaje-manual": "Creación de viaje manual",
    "como-esta-organizada-la-info": "¿Como está organizada la información?",
    // Módulo de viajes ⬆️

  };

  const readableArticleName = articleNameMapping[articleName] || "Artículo";

  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb">

        <MuiLink
          className="text-gray-600 text-base"
          underline="hover"
          component={RouterLink}
          to="/"
        >
          Inicio
        </MuiLink>


        <MuiLink
          className="text-gray-600 text-base"
          underline="hover"
          component={RouterLink}
          to="/"
        >
          Todos los artículos
        </MuiLink>


        <Typography className="text-gray-600 text-base" color="text.primary">
          {readableArticleName}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default BreadcrumbNav;