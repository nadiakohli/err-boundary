import { useState, useRef, useMemo } from 'react';

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
  const value = useRef();
  const [username, setUsername] = useState('');

  const item = useMemo(() => localStorage.getItem('value') === 'fail', [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('value', value.current.value);
    if (localStorage.getItem('value') !== '') {
      setUsername(value.current.value);
    };
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUsername(value.current.value = '');
    localStorage.clear();
  };

  return (
    <Wrapper>
      <Container>
        <InputWrap>
          <form>
            <label>Username</label>
            <input 
              placeholder="type 'fail'" 
              type="text"
              name="username"
              ref={value}
            />
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleReset}>Reset</Button>
          </form>
        </InputWrap>
        {username}
        <p>{item ? 'Oh no...' : 'Things are good :)'}</p>
        <div>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <p>{item ? <Bomb /> : ''}</p>
          </ErrorBoundary>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;