import React, { Component } from 'react';
import './styles.css';

import ImageGallery from './components/ImageGallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageGallery />
      </div>
    );
  }
}

export default App;
