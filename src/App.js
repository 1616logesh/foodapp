import './App.css';
import Sample, { Sample1 } from './sample';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';
import TodoList from './todolist/todo';
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
      <TodoList/>
    </div>
    
  );
}

export default App;