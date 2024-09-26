import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Router from './Router';
import { useUserContext } from './contexts/userStore';

function App() {
  const { setText } = useUserContext();

  useEffect(() => {
    getText();
  }, [])


  async function getText() {
    const text = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/text`)
    // console.log(text.data)

    setText(text.data)

  }


  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
