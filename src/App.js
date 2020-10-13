import React, { useState, Fragment} from 'react';
import './App.css';
import * as api from "./services";

function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [token, setToken] = useState('');
  const [model, setModel] = useState('null');

  const src = require('./assets/303LO.glb');

  const getProduct = async () => {
    if(!token) return setError("please enter a token");
    setLoading(true);
    // get product details
    const { token_number, image } = await api.fetchData(token);
    setLoading(false);
    if(token_number) {
      const images = image.split("/")
      const src = "../../dashboard/storage/items/" + images[0];
      setModel(src);
    } else {
      setError('no model found');
      document.getElementById("token").value = '';
      setTimeout(() => hideError(), 3000);
    }
  }

  const changeValue = (e) => {
    setToken(e.target.value);
  }

  const hideError = () => {
    setError();
  }

  return (
        <model-viewer src={src} alt="A 3D model" auto-rotate camera-controls></model-viewer>
  );
}

export default App;
