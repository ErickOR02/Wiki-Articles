import { Box, Breadcrumbs, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

function BreadcrumbNav() {
  const { articleName } = useParams(); // Get the article name from the URL

  // Mapping of articleName to human-readable names
  const articleNameMapping = {
    "/como-importar-unidades": "¿Cómo importar unidades?",
    "agregar-elementos": "Agregar elementos",
    "/CIU": "Configuración básica",
    // Add more mappings as needed
  };

  // Get the human-readable name or default to "Artículo"
  const readableArticleName = articleNameMapping[articleName] || "Artículo";

  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb">
        {/* Navigate to the Home page */}
        <MuiLink
          className="text-gray-600 text-base"
          underline="hover"
          component={RouterLink}
          to="/"
        >
          Inicio
        </MuiLink>

        {/* Navigate to the Articles page */}
        <MuiLink
          className="text-gray-600 text-base"
          underline="hover"
          component={RouterLink}
          to="/"
        >
          Todos los artículos
        </MuiLink>

        {/* Display the current article name dynamically */}
        <Typography className="text-gray-600 text-base" color="text.primary">
          {readableArticleName}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default BreadcrumbNav;