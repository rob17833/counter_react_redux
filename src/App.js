import React from 'react';

class App extends React.Component {
  onAddOne = () => {
    this.props.addOne();
  };

    onRemoveOne = () => {
    this.props.removeOne();
  };

  render(){
    return (
      <div>
        <p>{this.props.counter}</p>
        <button onClick={()=>this.onAddOne()}>AddOne</button>
        <button onClick={()=>this.onRemoveOne()}>RemoveOne</button>
      </div>
    );
  }

};

export default App;
