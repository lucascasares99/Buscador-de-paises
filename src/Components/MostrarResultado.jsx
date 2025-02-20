export const MostrarResultado = ({ resultado }) => {
    return (
        <div className="row">

            {resultado.map((element, index) => {

                console.log(element);
                return <div>

                    <h2>{element.name.common}</h2>
                    <h4></h4>
                </div>


            })}
        </div>
    );
};