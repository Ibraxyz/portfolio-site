import './App.css';
import './styles/grid.css';

import Container from "./components/Container";
import Group from './components/Group';
import SidemenuButton from './components/SidemenuButton';

const sideMenus = [{
  "title": "About",
  "url": "#"
},
{
  "title": "Projects",
  "url": "#"
},
{
  "title": "Resume",
  "url": "#"
},
{
  "title": "Contact",
  "url": "#"
}]

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
        <div className='col-1 no-gutter'>
          <Group>
            {
              sideMenus.map(({ title, url }) => <SidemenuButton title={title} url={url} />)
            }
          </Group>
        </div>
        <div className='col-11 no-gutter'>
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
