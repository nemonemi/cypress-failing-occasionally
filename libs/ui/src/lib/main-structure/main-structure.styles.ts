import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('section')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 55px 56px auto;
  grid-template-areas:
    'main-navigation-space-filler  main-navigation-space-filler'
    'sidebar breadcrumbs'
    'sidebar main';
  height: 100vh;
  overflow: hidden;
`;

export const Main = styled('main')`
  grid-area: main;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing(2, 6, 0)};
  position: relative;
  overflow: hidden;
  flex: 1;
`;

export const MainContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

export const MainContainerHeading = styled('div')`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  padding: ${({ theme }) => theme.spacing(0, 3)};
  height: 64px;
  display: flex;
  align-items: center;
`;
