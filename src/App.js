import Box from '@mui/material/Box'
import './App.css';

// components
import Navbar from './components/layout/Navbar'
import MainSection from './components/layout/MainSection'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <Box>
      <Navbar />
      <MainSection />
      <Footer />
    </Box>
  )
}

export default App;
