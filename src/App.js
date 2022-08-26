import './App.css';
import './styles/grid.css';

import Button from "./components/Button";
import Container from "./components/Container";
import Group from './components/Group';

function App() {
  return (
    <div className="App">
      <Container>
        <div className='col-3'>
          <Group top left bottom right={false}>
              <p>Lorem ipsum dolor sit amet this text only used as a placeholder to demonstrate an element taking space on a website.</p>
          </Group>
        </div>
      </Container>
    </div>
  );
}

export default App;
