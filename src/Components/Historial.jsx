import { useEffect, useState } from "react"


export const Historial = ({ resultado }) => {
    const [historial, sethistorial] = useState([])
    useEffect(() => {
        if (resultado.length == 1) {
            sethistorial([...historial, resultado[0]])
        }

    }, [resultado])
    return (
        <>
            <h2>historial de Busqueda</h2>
            <ul>

                {historial.map((element, index) => {
                    return <li key={index}>{element}</li>;
                })}
            </ul>
        </>
    );
};