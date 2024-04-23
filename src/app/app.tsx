import { Main, Wrapper } from '@ui';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <Wrapper>
      Test
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}
