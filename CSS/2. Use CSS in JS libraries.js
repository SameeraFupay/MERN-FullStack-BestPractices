import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Nav = styled.nav`
  background-color: #ddd;
  padding: 20px;
`;

const Main = styled.main`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const App = () => {
  return (
    <Container>
      <Header>Header</Header>
      <Nav>Nav</Nav>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default App;