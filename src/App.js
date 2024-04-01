import './App.css';
import Sample, { Sample1 } from './sample';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';

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
      <Body/>
      <Footer/>
    </div>
    
  );
}

export default App;