import { Component, useEffect, useState } from "react";
import { Word } from "./Word";
import { Significado } from "./Significado";

function App() {
    const [word, setWord] = useState([]);
    const [significado, setSignificado] = useState([]);

    function handleWord() {
        fetch(`https://significado.herokuapp.com/v2/${word}`)
            .then((response) => response.json())
            .then((result) => {
                setSignificado(result[0].meanings[0]);
                console.log(significado);
            })
            .catch((error) => console.log("error", error));
    }

    return (
        <div className="bg-blue-300 h-[100vh] w-full">
            <div className="flex flex-col w-2/3 mx-auto gap-4 justify-center items-center">
                <div className="flex flex-col mt-24 gap-4">
                    <label
                        className="text-xl font-semibold pt-4 mx-auto"
                        htmlFor="inputWord"
                    >
                        Dicionário
                    </label>
                    <input
                        onChange={(e: any) => setWord(e.target.value)}
                        id="inputWord"
                        className="p-4 border rounded-xl"
                        type="text"
                        placeholder="Digite uma palavra..."
                    />
                    <button
                        onClick={handleWord}
                        className="text-lg font-semibold border p-3 rounded-xl bg-rose-400 hover:bg-rose-300 duration-300 "
                    >
                        Buscar
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <Word palavra={word} />
                </div>
                <div className="flex justify-center  items-center">
                    <Significado significado={significado} />
                </div>
            </div>
        </div>
    );
}

export default App;
