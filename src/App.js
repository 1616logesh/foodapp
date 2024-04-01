import './App.css';
import Body from './body/body';
import Footer from './footer/footer';
import Header from './header/header';
import { Outlet } from 'react-router-dom';
function App() {
  const name = "Deviprasath";
  return (
    <div className="App">
      {/* <header className="App-header">
        <Sample name={name} age={20} skills={["HTMl","CSS","jaascript"]}>
          <Sample1/>
          </Sample>

      </header> */}
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    
  );
}

export default App;