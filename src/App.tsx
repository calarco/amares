import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
} from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import styled, { css, ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "themes";
import GlobalStyle, { Device } from "components/globalStyle";
import Home from "views/Home/Home";
import Galeria from "views/Galeria/Galeria";
import Propuesta from "views/Propuesta/Propuesta";
import logo from "amares-l.png";
import Cercania from "views/Cercania/Cercania";
import Encuentranos from "views/Encuentranos/Encuentranos";
import Mapa from "views/Mapa/Mapa";

type StateProps = {
    readonly state?: string;
    readonly location?: string;
    readonly to?: string;
};

const Main = styled.div<StateProps>`
    width: 100vw;
    overflow: hidden;

    @media ${Device.laptop} {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        height: 100vh;
        overflow-y: scroll;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-rows: auto auto 1fr;
        max-width: ${(props) =>
            props.location === "/propuesta"
                ? "60vw"
                : props.location === "/encuentranos"
                ? "50vw"
                : "40vw"};
        transition: 0.3s ease-out;
    }
`;

const Header = styled.div<StateProps>`
    width: 100%;
    padding: 40px;
    text-align: center;

    img {
        width: auto;
        max-width: 100%;
        max-height: 200px;
    }
`;

const Fabs = styled.div<StateProps>`
    position: sticky;
    z-index: 3;
    top: 0;
    width: 100%;
    padding: 20px 0;
    text-align: center;
    pointer-events: none;

    @media ${Device.desktop} {
        padding: 40px 0;
    }
`;

const Fab = styled.div<StateProps>`
    display: inline-block;
    pointer-events: all;

    ${(props) =>
        props.to === props.location &&
        css`
            ${Link} {
                visibility: hidden;
                opacity: 0;
                max-width: 0;
                padding: 0;
                margin: 0;
            }
        `};
`;

const Link = styled(NavLink)`
    display: inline-block;
    max-width: 200px;
    overflow: hidden;
    padding: 7px 16px;
    margin: 0 8px;
    border-radius: 4px;
    border: 1px solid var(--secondary);
    background: #29434944;
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow0);
    font: 500 2rem/2.8rem var(--font-family);
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        border: 1px solid var(--secondary-variant);
        color: var(--secondary-variant);
    }

    ${(props) =>
        props.to === "/encuentranos"
            ? css`
                  background: var(--secondary);
                  color: var(--primary);

                  &:hover {
                      background-color: var(--secondary-variant);
                      color: var(--primary);
                  }
              `
            : css`
                  color: var(--secondary);
              `};
`;

const Container = styled.main<StateProps>`
    width: 100%;
    max-width: 800px;
    display: grid;
    align-items: start;
    justify-items: center;
    color: var(--on-secondary);

    ${(props) =>
        props.state === "entering"
            ? css`
                  position: absolute;
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

const Side = styled.div<StateProps>`
    width: 100%;
    border-radius: 40px 40px 0 0;
    background: #29434999;
    border: 4px solid rgba(0, 0, 0, 0);
    border-right: none;
    padding-right: 4px;
    overflow: hidden;
    color: var(--on-secondary);

    @media ${Device.laptop} {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        overflow-y: scroll;
        transition: 0.3s ease-out;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    ${(props) =>
        props.location === "/propuesta"
            ? css`
                  @media ${Device.laptop} {
                      border-radius: 0;
                      max-width: 40%;
                  }
              `
            : props.location === "/encuentranos"
            ? css`
                  @media ${Device.laptop} {
                      max-width: 50%;
                      border-radius: 4px 0 0 4px;
                      border-radius: 0;
                  }

                  @media ${Device.desktop} {
                      border-radius: 20px 0 0 20px;
                  }
              `
            : css`
                  @media ${Device.laptop} {
                      max-width: 60%;
                      border-radius: 20px 0 0 20px;
                  }
              `};
`;

const Snackbar = styled.div<StateProps>`
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 45px;
    background: var(--on-background);
    color: var(--on-secondary);
    padding: 12px 16px;
    border-radius: 5px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.1px;
    letter-spacing: 0.01rem;
    font: 400 1.3rem/2.4rem var(--font-family);
    text-transform: inherit;
    visibility: hidden;
    transform: translateY(100%);
    transition: 0.25s ease-in;

    @media ${Device.laptop} {
        width: auto;
        min-width: 344px;
        margin: 28px;
    }

    ${(props) =>
        props.state === "entered" &&
        css`
            visibility: visible;
            transform: translateY(0%);
            transition: 0.3s ease-out;
        `};
`;

const App = function () {
    const nodeRef = React.useRef(null);
    const [snackbar, setSnackbar] = useState("");
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        setDarkTheme(false);
    }, []);

    useEffect(() => {
        if (snackbar !== "") {
            setTimeout(function () {
                setSnackbar("");
            }, 5500);
        }
    }, [snackbar]);

    return (
        <Router>
            <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
                <GlobalStyle />
            </ThemeProvider>
            <>
                <Route
                    render={({ location }) => (
                        <>
                            <Main location={location.pathname}>
                                <Header location={location.pathname}>
                                    <img src={logo} alt="Logo" />
                                </Header>
                                <Fabs>
                                    <Fab location={location.pathname} to="/">
                                        <Link exact to="/">
                                            Inicio
                                        </Link>
                                    </Fab>
                                    <Fab
                                        location={location.pathname}
                                        to="/propuesta"
                                    >
                                        <Link to="/propuesta">Propuesta</Link>
                                    </Fab>
                                    <Fab
                                        location={location.pathname}
                                        to="/encuentranos"
                                    >
                                        <Link to="/encuentranos">
                                            Encuentranos
                                        </Link>
                                    </Fab>
                                </Fabs>
                                <TransitionGroup component={null}>
                                    <Transition
                                        key={location.key}
                                        timeout={300}
                                    >
                                        {(state) => (
                                            <Container state={state}>
                                                <Switch
                                                    key={location.key}
                                                    location={location}
                                                >
                                                    <Route
                                                        exact
                                                        path="/"
                                                        render={() => <Home />}
                                                    />
                                                    <Route
                                                        path="/propuesta"
                                                        render={() => (
                                                            <Propuesta />
                                                        )}
                                                    />
                                                    <Route
                                                        exact
                                                        path="/encuentranos"
                                                        render={() => (
                                                            <Encuentranos
                                                                setSnackbar={
                                                                    setSnackbar
                                                                }
                                                            />
                                                        )}
                                                    />
                                                </Switch>
                                            </Container>
                                        )}
                                    </Transition>
                                </TransitionGroup>
                            </Main>
                            <Side location={location.pathname}>
                                <TransitionGroup component={null}>
                                    <Transition
                                        key={location.key}
                                        timeout={300}
                                    >
                                        {(state) => (
                                            <Switch
                                                key={location.key}
                                                location={location}
                                            >
                                                <Route
                                                    exact
                                                    path="/"
                                                    render={() => (
                                                        <Galeria
                                                            state={state}
                                                        />
                                                    )}
                                                />
                                                <Route
                                                    path="/propuesta"
                                                    render={() => (
                                                        <Cercania
                                                            state={state}
                                                        />
                                                    )}
                                                />
                                                <Route
                                                    path="/encuentranos"
                                                    render={() => (
                                                        <Mapa state={state} />
                                                    )}
                                                />
                                            </Switch>
                                        )}
                                    </Transition>
                                </TransitionGroup>
                            </Side>
                        </>
                    )}
                />
                <Transition
                    nodeRef={nodeRef}
                    in={snackbar !== ""}
                    addEndListener={(nodeRef, done) => {
                        nodeRef.addEventListener("transitionend", done, false);
                    }}
                >
                    {(state) => <Snackbar state={state}>{snackbar}</Snackbar>}
                </Transition>
            </>
        </Router>
    );
};

export default App;
