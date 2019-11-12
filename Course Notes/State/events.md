## React Events

In JSX, every element has built-in attributes for every kind of browser event. They are camel-cased, like **onClick()**, and take a callback as an event handlers.

**Event handlers must be bound to the specific instance of the component we are using**. This is done in the constructor using the **bind()** method.

```JavaScript
import React,{Component} from 'react';

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateThing01: 'Foo',
            StateThing02: 'Bar'
        };
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(e){
        console.log('You clicked. I\'m dealing with it.');
    }
}
```
### What if you hate constructors?

Great news, you don't need them! We can use *class proposals* and Babel to get rid of them. 

```JavaScript
import React,{Component} from 'react'

class MyComponent extends Component{
    // set initial state without *this* or an explicit constructor
    state = {
        MyStateThing01:'Foo',
        MyStateThing02:'Bar'
    }
    // automatically bind our event handler with the magic of arrow functions.
    handleClick = e => {
        this.setState({MyStateThing01:'Fizz'});
    }
}
```
It's worth noting here that in reality there is *still a constructor here* it's just that Babel is adding it for us behind the scenes. Witchcraft!