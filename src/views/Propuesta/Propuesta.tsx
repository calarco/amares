import React, { useEffect } from "react";
import styled from "styled-components";
import { Device } from "components/globalStyle";
import cerveza from "./img/cerveza.gif";
import santaclara from "./img/santaclara.jpg";

const Section = styled.section`
    display: grid;
    gap: 40px;
    padding: 20px 40px;

    @media ${Device.desktop} {
        max-width: 60vw;
        padding: 20px 80px;
    }
`;

const Article = styled.article`
    padding-bottom: 40px;
    border-bottom: 1px solid var(--primary-variant);
    display: grid;
    gap: 20px;

    img {
        width: 100%;
        max-width: 700px;
        border-radius: 6px;
        box-shadow: var(--shadow0);
        overflow: hidden;
    }
`;

const Propuesta = function () {
    useEffect(() => {}, []);

    return (
        <>
            <Section>
                <Article>
                    <h2>Santa Clara del Mar</h2>
                    <p>
                        Un lugar apacible en las costas de la provincia de
                        Buenos Aires, donde el contacto con la naturaleza y la
                        ausencia de ruidos urbanos, hacen de esta localidad, una
                        singular y atractiva opción a la hora de veranear en
                        marcos de mar y serenidad. Pertenece al Partido de Mar
                        Chiquita, se encuentra ubicada a 390 Kms. de la Capital
                        Federal y a 17 km de la ciudad de Mar del Plata. La
                        población actual es de aproximadamente de 9.000
                        Habitantes.
                    </p>
                    <img src={santaclara} alt="" />
                    <p>
                        Playas divididas por espigones de piedra se encuentran
                        las siete playas de la ciudad. El acceso es libre y
                        cuenta con servicio de guardavidas durante todo el
                        verano. La geografía es bastante particular ya que en
                        sólo algo más de un kilómetro el relieve cambia de
                        playas cortas de arena compacta con barrancos a playas
                        extensas con médanos bajos. Además de la diversidad y
                        riqueza natural, la falta de edificios altos en la línea
                        de la costa hace que la experiencia de vivir a pleno sol
                        y aire puro se prolongue mucho más.
                    </p>
                </Article>
                <Article>
                    <h3>Fiesta Cerveza Artesanal</h3>
                    <p>
                        Periodo de celebración: tercera semana de febrero.
                        Celebrado desde 1972. En esta fiesta el visitante puede
                        disfrutar de la degustación de diferentes estilos de
                        cervezas artesanales elaboradas en la región. Cuenta con
                        un patio de comidas, la elección de la reina, shows
                        musicales y feria de artesanos. Organiza la Secretaria
                        de Turismo del Municipio. Santa Clara del Mar fue
                        declarada Capital Marítima de la Cerveza Artesanal por
                        la Legislatura provincial.
                    </p>
                    <img src={cerveza} alt="" />
                </Article>
                <Article>
                    <h3>Pesca Deportiva</h3>
                </Article>
                <Article>
                    <h3>Surf Kitesurt y Kayak</h3>
                </Article>
                <Article>
                    <h3>Andar en bicicleta y juntar caracoles</h3>
                </Article>
            </Section>
        </>
    );
};

export default Propuesta;
