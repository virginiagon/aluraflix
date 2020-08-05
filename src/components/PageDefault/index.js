import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

//function PageDefault({children}) ao invés de usar {props.children} usa somente {children}
function PageDefault(props) {
    return(
        <>
            <Menu />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </>
    );
}

export default PageDefault;