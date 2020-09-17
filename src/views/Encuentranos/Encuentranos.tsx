import React, { useEffect } from "react";
import styled from "styled-components";
import { Device } from "components/globalStyle";
import { Button, FormItem } from "components/components";

const Section = styled.section`
    display: grid;
    gap: 40px;
    padding: 20px 40px;

    @media ${Device.desktop} {
        max-width: 50vw;
        padding: 20px 80px;
    }
`;

const Card = styled.form`
    position: relative;
    padding: 12px;
    border-radius: 6px;
    background: var(--surface);
    color: var(--on-background);
    box-shadow: var(--shadow0);

    @media ${Device.laptop} {
    }
`;

const Send = styled(Button)`
    position: absolute;
    bottom: -32px;
    right: 20px;
    background: var(--secondary);
    color: var(--primary);

    &:hover {
        background-color: var(--secondary-variant);
        color: var(--primary);
    }
`;

const Encuentranos = function ({ setSnackbar }) {
    useEffect(() => {}, []);

    const submit = (event) => {
        event.preventDefault();
        setSnackbar("Consulta enviada");
    };

    return (
        <>
            <Section>
                <p>
                    Encuéntranos en primera línea de playa y a dos cuadras del
                    centro de la ciudad • Muelle 1 Parador Cabo frio.
                </p>
                <Card onSubmit={submit} noValidate>
                    <FormItem half>
                        <p>Nombre</p>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="-"
                            autoComplete="off"
                            required
                        />
                    </FormItem>
                    <FormItem half>
                        <p>Email</p>
                        <input
                            type="email"
                            name="nombre"
                            placeholder="-"
                            autoComplete="off"
                            required
                        />
                    </FormItem>
                    <FormItem>
                        <p>Consulta</p>
                        <textarea
                            name="nombre"
                            placeholder="-"
                            autoComplete="off"
                            required
                        />
                    </FormItem>
                    <Send type="submit" icon>
                        <i className="material-icons md-24">send</i>
                    </Send>
                </Card>
            </Section>
        </>
    );
};

export default Encuentranos;
