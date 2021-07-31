class App extends React.Component {
  render() {
    return (
      <div>
        <Count nums={[2, 4, 6, 8]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
