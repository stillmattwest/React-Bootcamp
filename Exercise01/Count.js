class Count extends React.Component {
  render() {
    return (
      <div>
        {this.props.nums.map((num, index) => (
          <p key={index}>{num}</p>
        ))}
      </div>
    );
  }
}
