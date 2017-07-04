import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListElement from './components/ListElement';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            date: []
        };
        this.increase = this.increase.bind(this);
        this.saveClickDate = this.saveClickDate.bind(this);
    }

    increase() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    saveClickDate() {
        this.setState({
            date: [...this.state.date, new Date().toISOString()]
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.saveClickDate}>Click me!</button>
                <ListElement element={5}/>
                <ListElement />
                <ul>
                    {this.state.date.map((val) => {
                        return <ListElement key={val} element={val} />
                    })}
                </ul>
            </div>
        )
    }



  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
