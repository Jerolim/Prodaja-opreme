import React from "react"

function formatName(user) {
  return user.firstName + ' a' + user.lastName;
}
function tick(user) {
  return  user.firstName + 'kasik'
}

const user ={
  firstName: 'Jere',
  lastName: 'Marcic'
};


const element = () =>(
  
  <div>
  <h1>
    hello {tick(user)} 
  </h1>
  <h1>
    Hello, {formatName(user)}
  </h1>
  </div>

);
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function tick1() {
  return (<div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>)
  }
  setInterval(tick1,1000)
  const element2 = () =>(
    
    <h1>hello</h1>
  );
  

  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    
    componentDidMount() {
      this.timerID = setInterval(
      () => this.tick(),
      1000
      );
    }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    tick() {
      this.setState({
      date: new Date()
      });
    }
    
    render() {
      return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
      );
    }
  }
  function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
  export default App