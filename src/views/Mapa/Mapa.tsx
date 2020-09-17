import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Device } from "components/globalStyle";
import map from "./img/map.png";

type StateProps = {
    readonly state?: string;
};

const Img = styled.img<StateProps>`
    width: 100%;
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;

    @media ${Device.laptop} {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 4px;
        width: auto;
        height: 100%;
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

const Mapa = function ({ state }) {
    useEffect(() => {}, []);

    return (
        <>
            <Img src={map} alt="" state={state} />
        </>
    );
};

export default Mapa;
