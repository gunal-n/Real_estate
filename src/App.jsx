import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Bounce, ToastContainer } from 'react-toastify'
import Abbout from './components/Abbout'

const App = () => {
  return (
    <div>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}/>
       <Header />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
      <Abbout />
    </div>
  )
}

export default App