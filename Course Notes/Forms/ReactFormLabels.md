## React Forms and HtmlFor

In HTML when we make a form we use the **for** keyword to connect a label to an input ID. We can't do that in JSX however because for is a JavaScript reserved keyword. So instead, we use the JSX version, which is **htmlFor**. Here's an example:

```JavaScript
<form>
    <label htmlFor='username'>Username</label>
    <input type='text' id='username' value={this.state.username} />
</form>
```
