import logo from './logo.svg';
import './App.css';
import Home from './components/basics/Home';
import CountersHome from './components/counters/CountersHome';
import AsynchronousHome from './components/asynchronous/AsynchronousHome';
import FormsHome from './components/forms/FormsHome';


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <CountersHome /> */}
      {/* <AsynchronousHome /> */}
      <FormsHome />
    </div>
  );
}

export default App;
