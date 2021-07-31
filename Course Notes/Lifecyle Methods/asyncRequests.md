## Async requests

componentDidMount can be made async like any other function.

```javascript
async componentDidMount(){
    ... stuff
    let response = await axios.get(url);
    this.setState({data: response.data });
}
```
