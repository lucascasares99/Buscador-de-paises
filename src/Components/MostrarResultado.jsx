export const MostrarResultado = ({ resultado, error }) => {
    if (error) {
        return <>
        <h2>no se encontro pais</h2>
        </> 
        
    }

    return (
        <div className="row">
            {resultado.map((element, index) => {
                return <div>

                    <h2>{element.name.common}</h2>
                    <h4></h4>
                </div>

            })}
        </div>
    );
};