import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Device } from "components/globalStyle";
import img00 from "./img/00.jpg";
import img02 from "./img/02.jpg";
import img03 from "./img/03.jpg";
import img04 from "./img/04.jpg";
import img05 from "./img/05.jpg";
import img06 from "./img/06.jpg";
import img07 from "./img/07.jpg";
import img08 from "./img/08.jpg";
import img09 from "./img/09.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";

type StateProps = {
    readonly state?: string;
};

const Container = styled.div<StateProps>`
    @media ${Device.laptop} {
        width: 60vw;
        border-radius: 20px;
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

const Tabs = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    background: #29434999;
`;

const Tab = styled.button`
    display: inline-block;
`;

const Grid = styled.div`
    width: 100%;
    display: grid;
    gap: 4px;
    grid-template-columns: 1fr 1fr;
`;

type ImgProps = {
    readonly wide?: boolean;
    readonly tall?: boolean;
};

const Img = styled.img<ImgProps>`
    width: 100%;

    ${(props) =>
        props.wide &&
        css`
            grid-column-end: span 2;
        `};

    ${(props) =>
        props.tall &&
        css`
            height: 100%;
            grid-row-end: span 2;
        `};
`;

const Galeria = function ({ state }) {
    useEffect(() => {}, []);

    return (
        <>
            <Container state={state}>
                <Tabs>
                    <Tab>Entrada</Tab>
                    <Tab>SUM</Tab>
                    <Tab>Habitación 1</Tab>
                    <Tab>Habitación 2</Tab>
                    <Tab>Habitación 3</Tab>
                    <Tab>Habitación 4</Tab>
                    <Tab>Habitación 5</Tab>
                    <Tab>Habitación 6</Tab>
                    <Tab>Habitación 7</Tab>
                    <Tab>Habitación 8</Tab>
                </Tabs>
                <Grid>
                    <Img src={img00} alt="" wide />
                    <Img src={img02} alt="" />
                    <Img src={img03} alt="" />
                    <Img src={img04} alt="" />
                    <Img src={img05} alt="" tall />
                    <Img src={img06} alt="" />
                    <Img src={img07} alt="" tall />
                    <Img src={img08} alt="" />
                    <Img src={img09} alt="" />
                    <Img src={img10} alt="" />
                    <Img src={img11} alt="" />
                </Grid>
            </Container>
        </>
    );
};

export default Galeria;
