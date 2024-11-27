// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import './index.css'
import { createRoot } from "react-dom/client";
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const root = createRoot(document.getElementById("root"));

root.render(
  <Page/>
);

function Page(){
  return(
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};




