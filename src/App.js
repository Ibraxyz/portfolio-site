import './App.css';
import './styles/grid.css';

//components
import Container from "./components/Container";
import Group from './components/Group';
import SidemenuButton from './components/SidemenuButton';

//pages
import About from './pages/About';

import React, { useState } from 'react';

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
  const [activeUrl, setActiveUrl] = useState('#');

  return (
    <div>
      {/** Header */}
      <Group top left bottom right>
        <div className='col-12 no-gutter'>
          <div style={{ boxSizing: 'border-box', paddingLeft: '15px', paddingRight: '15px' }}>
            <h3>MYZ</h3>
          </div>
        </div>
      </Group>

      {/** Sidebar */}
      <Group left bottom right>
        <div className='col-1 no-gutter'>
          <Group>
            {
              sideMenus.map(({ title, url }) => <SidemenuButton title={title} url={url} active={title==='About'}/>)
            }
          </Group>
        </div>
        <div className='col-11 no-gutter'>
          <Group left>

            {/** navigation history */}
            <Group bottom>
              <div style={{ boxSizing: 'border-box', padding: '5px 15px' }}>
                About
              </div>
            </Group>

            {/** Main content */}
            <Container>
              <div style={{ boxSizing: 'border-box', padding: '40px 60px 40px 60px', height: '720px' , overflow:'scroll'}}>
                <About />
              </div>
            </Container>
          </Group>
        </div>
      </Group>

      {/** footer */}
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
