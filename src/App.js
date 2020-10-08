// Import React libraries
import React, { Component } from 'react';

// Import components
import Card from './component/Card';

// Import CSS
import './App.css';

class App extends Component {
  state = {
    jokeData: [],
    title: 'Chuck Jokes'
  };

  loadData = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    return data;
  };

  handleClick = async () => {
    const jokeData = await this.loadData();
    console.log(jokeData);
    this.setState({
      jokeData: jokeData,
    });
  };

  async componentDidMount() {
    const jokeData = await this.loadData();

    this.setState({
      jokeData: jokeData,
    });
  }

  render() {
    const { title, jokeData } = this.state;
    return (
      <div className="Card">
        <h1 className="title">{title}</h1>
        <button className="button" onClick={this.handleClick}>Load New Joke</button>
        <Card jokeData={jokeData.value} />
      </div>
    );
  }
}

export default App;
