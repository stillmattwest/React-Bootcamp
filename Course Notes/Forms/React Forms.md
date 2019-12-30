## Forms in React

Forms in React are handled by something called _controlled components_. Controlled components can both handle the submission of the form and have access to the data that the user entered.

The problem with normal HTML forms in React is that they manage their own state (for example, user input.) This is no bueno in React because we want React state to be the one source of truth for the application.

So, React is going to controll what is shown in the value of the component and it is also going to update state whenever the user types anything. The goal is to have React 100% in sync with user input, all the time.

Here's an example:

```javascript
class NameForm extends Component {
  constructor(props) {
    super(props);
    // default fullName is an empty string
    this.state = { fullName: '' };
  }

  handleSubmit(e) => {
    // do something with form data
    // note, since their is no knowledge gap between state and form, we don't need to reference the DOM, we just go right to state.
    e.preventDefault();
    alert(`Your name is ${this.state.fullName}`)
  }
  handleChange(e) => {
    // runs on every keystroke event
    this.setState({ fullName: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for='fullName'>Full Name:</label>
        <input
          name='fullName'
          value={this.state.fullName}
          onChange={this.handleChange}
        />
        <button>Add!</button>
      </form>
    );
  }
}
```
