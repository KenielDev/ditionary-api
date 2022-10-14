import React from "react";

export function Significado(props: any) {
    return (
        <div className="flex gap-2">
            <div className="font-bold">Significado: </div>
            <div>{props.significado} </div>
        </div>
    );
}
