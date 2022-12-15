import React from 'react'
import Navbar from './navbarcontent'
import Programing from '../../img/certificates/programing.png'
import HTML from '../../img/certificates/html.png'
import CSS from '../../img/certificates/css.png'
import ReactC from '../../img/certificates/react.png'
import '../../styles/components/certificates.sass'


const Certificate = () => {
  return (

    <div className="container">
      <Navbar />
      <h1 className='text'>CERTIFICATES</h1>

      <div className="cardscert">
        <div className="cardcert">
        <a href="https://www.devmedia.com.br/certificado/tecnologia/programacao/gustavo-da-costa-ferreira" target='_blank'>
        <h2 className='h2'>PROGRAMMING</h2>
        <img className="img" src={Programing} alt="certificate programing" />
        </a>
        </div>
        <div className="cardcert">
        <a href="https://www.devmedia.com.br/certificado/tecnologia/html/gustavo-da-costa-ferreira" target='_blank'>
        <h2 className='h2'>HTML</h2>
        <img className="img" src={HTML} alt="certificate html5" />
        </a>
        </div>
        <div className="cardcert">
        <a href="https://www.devmedia.com.br/certificado/tecnologia/css/gustavo-da-costa-ferreira" target='_blank'>
        <h2 className='h2'>CSS</h2>
        <img className="img" src={CSS} alt="certificate css" />
        </a>
        </div>
        <div className="cardcert">
        <a href="https://www.devmedia.com.br/certificado/tecnologia/react/gustavo-da-costa-ferreira" target='_blank'>
        <h2 className='h2'>REACT</h2>
        <img className="img" src={ReactC} alt="certificate react" />
        </a>
        </div>
      </div>
    </div>
  )
}

export default Certificate