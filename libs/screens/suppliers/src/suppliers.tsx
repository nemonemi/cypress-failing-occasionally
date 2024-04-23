import { MainContainer, MainContainerHeading } from '@ui';

export type Env = {
  BACKEND_API_URL: string;
  LOGGING_API_URL: string;
  SPON_PLATFORM_URL: string;
  START_PAGE_EXTERNAL_URL: string;
};

export function Suppliers() {
  return (
    <MainContainer>
      <MainContainerHeading>
        <h1>Test</h1>
      </MainContainerHeading>
    </MainContainer>
  );
}
