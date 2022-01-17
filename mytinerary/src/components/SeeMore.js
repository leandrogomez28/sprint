import React from "react";
import '../styles/seemore.css'
function SeeMore() {

    return (

        <div className="row citie justify-content-center">

            <div className=" info d-flex  col-9  mt-5">
                <div className="d-flex p-3">
                    <div className="col">
                        <h2 >BUENOS AIRES</h2>
                    </div>
                    <div id="list-example" className="list-group col">

                        <a className="list-group-item list-group-item-action" href="#list-item-1">Historia</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">Ubicacion</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">Turismo</a>

                    </div>
                </div>
                <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example col">
                    <h4 id="list-item-1">Historia</h4>
                    <p>Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX,
                        incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones. Entre otras atracciones importantes, se incluyen el Teatro Colón,
                        un lujoso teatro de ópera de 1908 con cerca de 2,500 asientos, y el moderno museo MALBA, que exhibe arte latinoamericano.</p>
                    <h4 id="list-item-2">Ubicacion</h4>
                    <p> La ciudad de Buenos Aires se encuentra en Sudamérica, a 34° 36' de latitud sur y 58° 26' de longitud oeste, en la margen del Río de la Plata.</p>
                    <p>
                        Frente a sus costas se encuentra, ya en Uruguay, Colonia del Sacramento, y más lejos, Montevideo, la capital de dicho país, a 220 km (25 min en avión o 2 h 30 en barco).
                        A 1065 km (1 h 50 de avión) se encuentra Asunción, la capital del Paraguay; a 1139 km (2 h de avión), Santiago, la capital de Chile; y un poco más lejos, a 1719 km (3 h de avión), se encuentra São Paulo (Brasil), la otra gran metrópolis de América del Sur.
                    </p>
                    <h4 id="list-item-3">Turismo</h4>
                    <p> Argentina se encuentra entre los países más visitados de Sudamérica y a su vez, Buenos Aires cuenta con 5,5 millones de visitas al año.278​Buenos Aires es una ciudad populosa y se encuentra entre los 20 destinos preferidos en todo el mundo.</p>
                    <p>Los lugares turísticos más importantes se encuentran en el casco histórico de la ciudad, sector formado prácticamente por los barrios de Monserrat y San Telmo. La ciudad comenzó a construirse alrededor de la Plaza Mayor (hoy Plaza de Mayo),
                        y las instituciones administrativas de la Colonia estaban instaladas en la zona. Al este de la Plaza puede observarse la Casa Rosada, actual sede del Poder Ejecutivo de la Argentina, en cuyo lugar antiguamente se encontraba el Fuerte.
                        Hacia el norte de la Plaza se encuentra la Catedral Metropolitana, que ocupa el mismo lugar desde la colonia, y el edificio del Banco de la Nación Argentina, cuya parcela era en un principio propiedad de Juan de Garay. Otra importante institución colonial fue el Cabildo,
                        ubicado hacia el oeste, que no se conserva en su forma original ya que parte de su estructura fue demolida para la apertura de la Avenida de Mayo y la diagonal Julio A. Roca.</p>

                </div>

            </div>
        </div>
    )


}
export default SeeMore;