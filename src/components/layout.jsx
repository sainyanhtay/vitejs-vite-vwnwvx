import styled, { css } from 'styled-components';

const NavListContainer = styled.ul`
  overflow: hidden;
  list-style: none;
  display: flex;
  gap: 1.5rem;

  padding: 0 2rem;
`;

const NavButton = styled.button`
  /* reset */
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  
  font-size: 1rem;

  ${(props) =>
    props.active &&
    css`
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 4px;
  `}
`;

const Layout = ({ children, showIns, setShowIns }) => {
  return (
    <main>
      <nav>
        <NavListContainer>
          <li>
            <NavButton active={showIns} onClick={() => setShowIns(true)}>
              Instructions
            </NavButton>
          </li>
          <li>
            <NavButton active={!showIns} onClick={() => setShowIns(false)}>
              Challenge
            </NavButton>
          </li>
        </NavListContainer>
        <hr />
      </nav>

      {children}
    </main>
  );
};

export default Layout;
