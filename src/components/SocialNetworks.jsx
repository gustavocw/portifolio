import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/gustavocw/", target: '_blank' },
    { name: "github", icon: <FaGithub />, link: "https://github.com/gustavocw/", target: '_blank'  },
    { name: "instagram", icon: <FaInstagram />, link: "https://instagram.com/frontendcosta/", target: '_blank'  },
]

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network) => (
            <a href={network.link} target={network.target} className='social-btn' id={network.name} key={network.name} >
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks