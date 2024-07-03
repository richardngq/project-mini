import { useState } from 'react'
import Logo from '../assets/img/img-logo.png'
import './header.scss'

const Navs = [
  {
    name: 'Indie Game',
    link: './',
  },
  {
    name: 'Entry Game',
    link: './',
  },
  {
    name: 'Community',
    link: './',
  }
]

export const Header = () => {
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => {
    setCollapse(!collapse);

    console.log('---> collapse', collapse);
  }

  return (
    <div id='header'>
      <div className="flex container">
        <div className="logo" href='#'>
          <img src={Logo} alt="" />
          <span>Title</span>
        </div>
        <div className={`burger ${collapse}`} onClick={handleCollapse}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`${handleCollapse && collapse}`}>
          {Navs.map((o, i) => (
            <div key={i}>{o.name}</div>
          ))}
        </nav>
      </div>
    </div>
  )
}