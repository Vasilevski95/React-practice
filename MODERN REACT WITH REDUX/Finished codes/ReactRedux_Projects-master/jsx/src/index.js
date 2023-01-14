// Importando bibliotecas React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom'; 
// Criando um componente React
function getButtonText() {
    return "Click on me!";
}
const App = () => {
    const buttonText = {text: "click me"};
    const style = { backgroundColor: 'blue', color: 'white'};
    return (
    <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={style}>{buttonText.text}</button>
    </div>
    );
};
// Mostrar o componente na tela
ReactDOM.render(
    <App />,
    document.querySelector('#root')  
);