import MainContent from '../MainContent'
import Sidebar from '../Sidebar'
import '../../styles/components/app.sass'
import Navbar from './navbarcontent'


<style> @import url('https://fonts.googleapis.com/css2?family=Kenia&display=swap'); </style>


function home() {

  return (
  <div id="portifolio">
      <h1>Gustavo Costa</h1>
      <Navbar />
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default home;