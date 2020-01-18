import React from 'react';
import './App.css';
import ProfilePhoto from './components/ProfilePhoto';
import MenuOptions from './components/MenuOptions';
import Description from './components/Description';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavbar: false
    }
  }
  renderProfilePhoto() {
    return (
      <ProfilePhoto
        isNavbar={this.state.isNavbar}
      />
    )
  }

  renderDescription() {
    return (
      <Description/>
    )
  }

  renderMenuOptions() {
    return (
      <MenuOptions
        isNavbar={this.state.isNavbar}
      />
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderProfilePhoto()}
        {this.renderDescription()}
        {this.renderMenuOptions()}
      </div>
    )
  }
}

export default App;
