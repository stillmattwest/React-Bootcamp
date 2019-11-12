## React State
There are basically two types of state to track: **UI Logic** and **Business Logic**

**UI Logic** can be something like whether an accordion is open or closed, or if a certain option has been set by a user.

**Business Logic** can be a logged-in state or a user's name or other data that can be interacted with.

In the good 'ol days, we tracked state with things like jQuery using the DOM itself as a source of truth. For example, we might check the val attribute of an element to see what the current value was.

With React, it is the opposite.

### The Constructor Function
Stateful React components need to have a constructor function but stateless components do not. This is why the components we've created earlier in this course do not have or need them.
**Constructor Functions** are where state is initially set. 

```JavaScript
class MyComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            myFirstStateProp: 'Foo',
            mySecondStateProp:'Bar'
        }
    }
}
```

### About super(props)

*super()* is just part of using classes in JavaScript. It is a call to the base constructor. If you explicitly declare a constructor in a component, you *must* include a call to super of you'll get an error.

You don't necessarily have to pass in props to super. What that does is to give you access to props *inside the constructor*. Without that being passed in, you can still use props in the component, because those are automatically made available by React, which is why you don't need an explicit constructor in non-stateful componenents.

However, if you are going to use props in the constructor, like say to set initial state from props, then you need to pass it in.

It is never unsafe to pass props to super, and since it is sometimes useful, the default is just to pass it. 

And there you go.

## About setState()

A couple of things to remember: The first is that setState is asynchronous. React determines the best time to setState because when it does the entire component is going to re-render.

The second thing is that there are a bunch of overloads for setState. You can pass callbacks to it, etc. This is covered in the React documentation.
