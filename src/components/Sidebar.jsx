import SocialNetworks from './SocialNetworks'
import InformationContainer from './informationContainer'

import Avatar from '../img/myphoto.jpg'

import '../styles/components/sidebar.sass'



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gustavo Costa" />
      <p className="title">Developer Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1o6tzY6oOjHarJy5bsGd3oAkFdWEg_46d/view" className="btn" target='_blank'>
        Download CV
      </a>
    </aside>
  )
}

export default Sidebar