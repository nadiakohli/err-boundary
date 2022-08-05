import styled from 'styled-components';

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p, pre {
    font-size: 16px;
  }
`;

const ErrorFallback = ({ error: { message } }) => (
  <Wrapper>
    <p>Something went wrong</p>
    <pre>{message}</pre>
  </Wrapper>
);

export default ErrorFallback;
