import './App.css';
import { NavBar } from './components/nav/NavBar';
import { Card } from './components/cards/Card';
import PostContextProvider from './context/postContext';

function App() {
  return (
    <PostContextProvider>
      <div className="App">
          <NavBar />
          <Card />
      </div>
    </PostContextProvider>
  );
}

export default App;
