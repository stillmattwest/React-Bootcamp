## Loading Data Via AJAX

Axios is a good library for accessing data.

Something to remember is that componentDidMount is called _after_ the first render. This is where you get in trouble if your method is trying to access a state object that does not exist. Good idea: give your state a default value for any state objects.

On setting state in the constructor: This is against convention more than anything else. Setting state in the constructor _will_ work but there is apparently future functionality planned in React that will cause problems for that pattern. So, the React community says "don't do it," and that's basically just the way it is. Use componentDidMount().
