import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Device } from "components/globalStyle";
import marchiquita from "./img/marchiquita.jpg";
import mdp from "./img/mdp.gif";

type StateProps = {
    readonly state?: string;
};

const Section = styled.section<StateProps>`
    display: grid;
    gap: 40px;
    padding: 20px 40px;

    @media ${Device.laptop} {
        max-width: 40vw;
        padding: 40px 40px;
    }

    @media ${Device.desktop} {
        padding: 40px 80px;
    }

    ${(props) =>
        props.state === "entering"
            ? css`
                  visibility: hidden;
                  opacity: 0;
                  transform: scale(1.1);
                  transition: 0.15s ease-in;
              `
            : props.state === "exiting"
            ? css`
                  visibility: hidden;
                  opacity: 0;
                  transition: 0.15s ease-in;
              `
            : css`
                  visibility: visible;
                  opacity: 1;
                  transform: initial;
                  transition: 0.3s ease-out;
              `};
`;

const Article = styled.article`
    max-width: 700px;
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

const Cercania = function ({ state }) {
    useEffect(() => {}, []);

    return (
        <>
            <Section state={state}>
                <h2>Cercanía</h2>
                <Article>
                    <h3>Albufera de Mar Chiquita</h3>
                    <p>
                        Laguna litoral costera paralela al mar, con aguas
                        saladas y salabres, separada por una cadena de médanos y
                        unida al mar por un aboca. Reserva de biosfera, en 1996
                        declarada por la UNESCO.
                    </p>
                    <img src={marchiquita} alt="" />
                </Article>
                <Article>
                    <h3>Mar del Plata</h3>
                    <p>
                        Distancia a Santa Clara del Mar: 15 kmts por autopista
                        bordeando el mar. La ciudad es uno de los más
                        importantes centros turísticos de Argentina. La llamada
                        «Perla del Atlántico» o la «Biarritz argentina» -por la
                        marcada similitud con esa ciudad francesa- cuenta con
                        una variada oferta de temporada baja: turismo deportivo,
                        ecológico, aventura, pesca y eventos culturales son sólo
                        algunas de las alternativas que esta ciudad ofrece a sus
                        visitantes como también un interesante patrimonio
                        histórico y natural.
                    </p>
                    <img src={mdp} alt="" />
                </Article>
                <Article>
                    <h3>Mar de Cobo</h3>
                </Article>
            </Section>
        </>
    );
};

export default Cercania;
