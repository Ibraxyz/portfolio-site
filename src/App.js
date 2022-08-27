import './App.css';
import './styles/grid.css';

import Container from "./components/Container";
import Group from './components/Group';

function App() {
  return (
    <div>
      <Group top left bottom right>
        <div className='col-12 no-gutter'>
          <div style={{ boxSizing: 'border-box', paddingLeft: '15px', paddingRight: '15px' }}>
            <h3>MYZ</h3>
          </div>
        </div>
      </Group>

      <Group left bottom right>
        <div className='col-2 no-gutter'>
          <Group>
            <Group bottom>
              <div style={{ boxSizing: 'border-box', padding: '15px' }}>
                <p>About</p>
              </div>
            </Group>
            <Group bottom>
              <div style={{ boxSizing: 'border-box', padding: '15px' }}>
                <p>Projects</p>
              </div>
            </Group>
            <Group bottom>
              <div style={{ boxSizing: 'border-box', padding: '15px' }}>
                <p>Resume</p>
              </div>
            </Group>
            <Group bottom>
              <div style={{ boxSizing: 'border-box', padding: '15px' }}>
                <p>Contact</p>
              </div>
            </Group>
          </Group>
        </div>
        <div className='col-10 no-gutter'>
          <Group left>
            <Container>
              <div style={{ boxSizing: 'border-box', padding: '40px 60px 40px 60px', height: '720px' }}>
                <img src={{}} alt="" />
              </div>
            </Container>
          </Group>
        </div>
      </Group>

      <Group left bottom right>
        <div className='col-12 no-gutter'>
          <Group>
            <div style={{ boxSizing: 'border-box', padding: '15px' }}>
              <p>Social Media</p>
            </div>
          </Group>
        </div>
      </Group>
    </div>
  );
}

export default App;
