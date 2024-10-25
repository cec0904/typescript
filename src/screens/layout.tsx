import {Outlet} from "react-router-dom";
import styled from "styled-components";


const Container = styled.div``;
const Title = styled.h1``;

export default () => {
    return(
        <Container>
            <Title>--- Navigator ---</Title>
            <Outlet />
        </Container>
    );
};