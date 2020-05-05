import React from 'react'; //Mesmo nao utilizando a variavel react é necessário importar para usar JSX

function Header(props) {
    return (
      <header>
        <h1>{props.title}</h1>
      </header>
    );
  }

  export default Header;