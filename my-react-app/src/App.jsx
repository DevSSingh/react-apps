import './App.css'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Sidebar from './component/Sidebar.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <section id="home">
            <h1>Welcome to My App</h1>
            <p>Explore our website using the navigation above or the sidebar.</p>
          </section>
          <section id="about">
            <h2>About</h2>
            <p>This is a React app with reusable header, sidebar, and footer components.</p>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <p>Add your contact details here so visitors can get in touch.</p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
