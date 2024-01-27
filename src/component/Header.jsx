import { Component } from "react";

class Header extends Component {
 

  state = {
    count: 0,
  };

  handleClick=() => {
    console.log(`clicked: ${this.props.title}`);
  }
  render() {
    return (
      <h1 onClick={this.handleClick}>
        {this.props.title} {this.state.count}
      </h1>
    );
  }
}

export default Header;




// Archivo Header.jsx
// Importación de la clase Component de React:
// import { Component } from "react";
// Estás importando la clase Component desde la biblioteca React. Esto te permite crear componentes de clase en lugar de componentes funcionales.

// Definición de la clase Header:
// class Header extends Component {
// Estás creando una clase llamada Header que extiende (hereda) la clase Component de React. Esto te permite definir componentes con estado y métodos específicos.

// Inicialización del estado:
// state = {
//   count: 0,
// };
// Aquí estás inicializando el estado de tu componente Header. En este caso, solo tienes un estado llamado count con un valor inicial de 0.

// Definición del método handleClick:
// handleClick = () => {
//   console.log(`clicked: ${this.props.title}`);
// }
// Este es un método de clase llamado handleClick que se ejecutará cuando se haga clic en el <h1> dentro del componente Header. Imprime un mensaje en la consola que incluye el título pasado como una prop al componente Header.

// Renderizado del componente:
// render() {
//   return (
//     <h1 onClick={this.handleClick}>
//       {this.props.title} {this.state.count}
//     </h1>
//   );
// }
// Este método render() es obligatorio en los componentes de clase de React. Devuelve JSX que representa cómo se verá el componente en la interfaz de usuario. En este caso, devuelve un <h1> que muestra el título pasado como prop (this.props.title) y el estado count.

// Exportación del componente Header:
// export default Header;
// Exporta el componente Header para que pueda ser importado y utilizado en otros archivos.