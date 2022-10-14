import React from "react";

export function Word(props: any) {
    return (
        <div className="flex gap-2">
            <div className="font-bold">Palavra: </div>
            <div>{props.palavra} </div>
        </div>
    );
}
