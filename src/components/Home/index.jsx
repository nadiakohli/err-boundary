import { useState, useMemo } from 'react';

// Components
import Bomb from 'components/Bomb';
import ErrorFallback from 'components/ErrorFallback';
import ErrorBoundary from 'components/ErrorBoundary';

// Styles
import { 
  Wrapper,
  Container,
  InputWrap,
  Button
} from './styled';

const Home = () => {
  const [username, setUsername] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const isFail = useMemo(() => submittedValue === 'fail', [submittedValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(username);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUsername('');
    setSubmittedValue('');
  };

  return (
    <Wrapper>
      <Container>
        <InputWrap>
          <form>
            <label>Username</label>
            <input 
              value={username}
              placeholder="type 'fail'" 
              type="text"
              name="username"
              onChange={({ target: { value } }) => setUsername(value)}
            />
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleReset}>Reset</Button>
          </form>
        </InputWrap>
        {username}
        <p>{isFail ? 'Oh no...' : 'Things are good :)'}</p>
        <div>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <p>{isFail ? <Bomb /> : ''}</p>
          </ErrorBoundary>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;