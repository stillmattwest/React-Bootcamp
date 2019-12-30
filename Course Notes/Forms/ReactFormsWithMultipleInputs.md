## React Forms with Multiple Inputs

Forms often have multiple inputs and React needs to maintain a zero-knowledge gap state for each one of them. Writing multiple onChange handlers isn't DRY, so instead the pattern is to give each input a name property that exactly matches the corresponding property in state. Then, we use computed properties to set state.

Here's an example:

```JavaScript
class example extends Component{
    // blah blah blah
    this.state = {
        name = '',
        email = '',
    }

    handleChange(e) => {
        // if the name matches the state property, no problemo
        this.setState({[e.target.name]:e.target.value});
    }

    <form>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
    </form>
}

```
