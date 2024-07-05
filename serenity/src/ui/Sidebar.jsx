
import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import { useDarkMode } from '../context/DarkModeContext';

const StyledSidebar = styled.aside`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? '#111827' : 'aliceblue'};
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledSidebar isDarkMode={isDarkMode}>
      <Logo />
      <MainNav />
    
    </StyledSidebar>
  );
}

export default Sidebar;
