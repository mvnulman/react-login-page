import './App.css';
import styled from 'styled-components';
import bgImg from '../src/assets/bg-img.png';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  return (
    <Container >
      <Wrapper >
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
background-color: #EEFCFF;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
`

const Wrapper = styled.div`
background-image: url(${bgImg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
widht: 100%;
height: 100%;

`
export default App;
