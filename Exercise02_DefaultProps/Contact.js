class Contact extends React.Component {
  // default props are super cool, in case your JSON doesn't show up
  static defaultProps = {
    contactInfo: {
      name: 'Joe',
      email: 'jblow@gmail.com'
    }
  };
  render() {
    const props = this.props;
    return (
      <div>
        <p>Name: {props.contactInfo.name}</p>
        <p>Email: {props.contactInfo.email}</p>
      </div>
    );
  }
}
