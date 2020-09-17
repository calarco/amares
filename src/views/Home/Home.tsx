import React, { useEffect } from "react";
import styled from "styled-components";
import { Device } from "components/globalStyle";

const Section = styled.section`
    display: grid;
    gap: 40px;
    padding: 20px 40px;

    @media ${Device.desktop} {
        max-width: 40vw;
        padding: 20px 80px;
    }
`;

const Home = function () {
    useEffect(() => {}, []);

    return (
        <>
            <Section>
                <p>
                    Apart con vista al mar y balcones terrazas con parrilla
                    individual a gas. Equipado con todos los utensilios para
                    cocinar, heladera con freezer, calefacción central, cable y
                    wifi. Parrillas en patio, SUM .
                </p>
            </Section>
        </>
    );
};

export default Home;
