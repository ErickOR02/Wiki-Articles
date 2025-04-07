import { Routes, Route } from "react-router-dom";
import ArticlesEX from "../Articles/Articles";
import RouterComponent from "./RouterComponent"; // Assuming this is a custom component for routing logic


const linkKBs = {
  CEOLI: "articles", 
  AEALC: "/article/AEALC",
  };
  
  export const articles = [
    { name: "¿Como esta organizada la información?", url: linkKBs.CEOLI },
    
    { name: "Agregar elementos a los catalogos", url: linkKBs.AEALC }
  ];

  const RouterArticles = () => {
    return (
      <Routes>
        <Route path={linkKBs.CEOLI} element={<ArticlesEX />} />
        {/* Add more routes here if needed */}
        <Route path={linkKBs.AEALC} element={<RouterComponent />} />
      </Routes>
    );
  };
  //Agregar clases en linkKBs y en Export