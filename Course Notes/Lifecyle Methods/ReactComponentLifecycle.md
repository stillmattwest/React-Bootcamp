## React Component Lifecycle

Every component comes with methods that allow developers to update application state and reflect changes to the UI before and after key "events".

Events in this case don't mean user interaction or DOM events, we're talking about lifecycle events like didMount.

There are three main phases in a React component lifecycle:

- Mounting
- Updating
- Unmounting

The first thing that happens when our code gets to a new React component is that React will run the constructor.

After that, it runs the render method. React then updates the DOM to match the output of render.

<img src="..\Images\react-component-lifecycle-x600.jpg">

### componentDidMount()

This method is run when the component is _mounted_, which is the **first** time the component is rendered by the DOM. It is _not_ run on subsequent renderings.

Something to keep in mind: if you call _this.setState()_ in componentDidMount() it will trigger a re-render. This is beacause by the time componentDidMount() runs, the component has already been rendered once.

That doesn't make it a bad practice, just something to keep in mind.

The constructor is similar. It is only called once when the component first hits the DOM.

If you have a method that needs to start when the app is loaded it is best practice to put it in componentDidMount() rather than in the constructor.

## componentDidUpdate()

componentDidUpdate() is called after something forces a re-render, including:

- Props change (passed down from parent)
- setState()
- forceUpdate

componentDidUpdate() is _not_ called the first time a component is rendererd. This is the opposite of componentDidMount()

## PrevProps and PrevState in ComponentDidUpdate()

componentDidUpdate has access to two arguments, prevProps and prevState (or whatever, but that is the order they come in)

```JavaScript
componentDidUpdate(prevProps,prevState){
    // you can still call setState here if you want
}
```

## componentWillUnmount()

Called before a component is unmounted and destroyed.

Can't set state here, component is going bye-bye.
