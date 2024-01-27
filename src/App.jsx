
import './App.css'
import Header from './component/Header';

function App() {
 
  return (
    <div
      style={{
        display: "flex",
        width: "50%",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap:"15px",
      }}   
    >
      <Header title="Halo Jhon "/>
    </div>
  );
}

export default App

// Archivo App.js
// Importación de archivos CSS:
// import './App.css';
// Aquí estás importando un archivo CSS para aplicar estilos a tu aplicación React.

// Importación del componente Header:
// import Header from './component/Header';
// Estás importando el componente Header desde el archivo Header.js (o Header.jsx) ubicado en la carpeta component en el mismo directorio que App.js.

// Función del componente App:
// function App() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         width: "50%",
//         margin: "0 auto",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         gap:"15px",
//       }}   
//     >
//       <Header title="Halo Jhon "/>
//     </div>
//   );
// }
// Este es el componente funcional App. Devuelve una estructura JSX que contiene un <div> que envuelve al componente Header. También aplica estilos en línea al <div> usando el objeto de estilo en JavaScript.

// Exportación del componente App:
// export default App;
// Exporta el componente App para que pueda ser importado y utilizado en otros archivos.



