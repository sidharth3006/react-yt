import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() { 
  const title = 'My App'


  return (
    <>
      <Navbar title={title} />
      <Card name="Sidharth Sharma" age={25} />
      <Card name="Sidharth Sharma" age={25} />
    </>
  );
}

export default App
