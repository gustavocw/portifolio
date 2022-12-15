import '../../styles/components/projects.sass'
import Navbar from './navbarcontent'
import Icell from '../../img/icell.png'
import Tempo from '../../img/tempo.png'
import Movies from '../../img/mpvies.png'
import Dash from '../../img/dash.png'
import Financial from '../../img/financial.png'



const projectspage = () => {
  return (
    <div className="container">
      <Navbar />
      <h1 className='text'>PROJECTS</h1>

    <div className="cards">
    <div className="card">
        <a href="https://financialcontrolsystem.netlify.app/" target='_blank'>
        <h2>Financial System</h2>
        <img src={Financial} alt="Financial" />
        <p>Created with React, CSS and JavaScript. <br /> This project is an entry and exit control system for business or everyday use. I intend to use a database to further advance this project.</p>
        </a>
      </div>
      <div className="card">
        <a href="https://icellcelulares.netlify.app/" target='_blank'>
        <h2>Phone Store iCell</h2>
        <img src={Icell} alt="ICELL" />
        <p>Created with HTML, CSS and Bootstrap and JavaScript. <br /> This project was created for a fictional mobile phone store.</p>
        </a>
      </div>
      <div className="card">
        <a href="https://previsaodotempoproject.netlify.app/" target='_blank'>
        <h2>Weather forecast</h2>
        <img src={Tempo} alt="Wearth" />
        <p>Created with HTML, CSS and JavaScript. <br /> In this project an Open Weather API was used, the application returns information about the weather of the place typed in the text box.</p>
        </a>
      </div>
      <div className="card">
        <a href="https://jsmovieshd.netlify.app/" target='_blank'>
        <h2>JS Movies</h2>
        <img src={Movies} alt="Movies" />
        <p>Created with HTML, CSS and Bootstrap and JavaScript. <br /> In this project two API's were used, TMDB and OMDB, one for movie search listing and the other for the main content.</p>
        </a>
      </div>
      <div className="card">
        <a href="https://dashboardprojectjs.netlify.app/" target='_blank'>
        <h2>Dashboard</h2>
        <img src={Dash} alt="DashBoard" />
        <p>Created with HTML, CSS and Bootstrap and JavaScript. <br /> This project is just a dashboard i made to train my html and css skills. The project also has the function of darkmode.</p>
        </a>
      </div>
    </div>
  </div>
  )
}

export default projectspage