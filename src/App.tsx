import { Component, useEffect, useState } from "react";
import { render } from "react-dom";

function App() {
    const [word, setWord] = useState("");

    function getSignificados(palavra: any) {
        fetch(`https://significado.herokuapp.com/v2/${palavra}`)
            .then((response) => response.json())
            .then((result) => {})
            .catch((error) => console.log("error", error));
    }

    return (
        <div>
            <p>Significados</p>
            <input
                type="text"
                placeholder="buscar"
                onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
            <button>dale</button>
            <p>palavra: {word}</p>
        </div>
    );
}

export default App;
