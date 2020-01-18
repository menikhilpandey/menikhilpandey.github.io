import React from 'react';
import './App.css';

class App extends React.Component {
  renderDesk() {
    return (
      <div>
        Hello! I am a Desk!
      </div>
    )
  }

  renderDrawer() {
    return (
      <div>
        Hello! I am a Drawer!
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderDesk()}
        {this.renderDrawer()}
      </div>
    )
  }
}

export default App;
