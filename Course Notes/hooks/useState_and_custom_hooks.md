# React Hooks

React hooks provide a more concise and reusable way to write React apps.

## A Basic Functional Component

```js
import React from "react";

function HookTest() {
    return(
        <div>
            <h2>Hi, I'm a component</h2>
            <p>Render is for lizards</p>
        
        </div>
    )
}

export default HookTest;
```

## Adding Hooks

The first hook we'll use is **useState**. 

**useState** gives access to a piece of React state. It is an array with two elements. The first is the piece of state, the second is a function that allows us to set the value of the first element.

```js
import React, {useState} from "react";

function HookTest() {
    const [counter,setCounter] = useState(0);
    // note that we're using destructuring here to assign names to the useState array elements. We're also passing a default value of 0 to "counter". 

    return(
        <div>
            <h1>The Count is {counter}</h1>
            <button onClick={()=> setCount({count +1})}/>
        
        </div>
    )

    // notice that we don't need to use the setState method or anything similar. Instead, we use the built-in state setting method we got when we assigned counter and setCounter to useState().
}

export default HookTest;
```

## Toggle State

It's common in React to want to toggle state from one value to another.

```js
import React, {useState} from "react"

function Toggler(){
    const [switchOn,toggleSwitch] = useState(false);
    const toggleSwitch = () => {
        toggleSwitch(!switchOn);
    }

    return <h1 onClick={toggleSwitch(!switchOn)}>{switchOn ? "Switch is On":"Switch is Off"}</h1>
}

export default Toggler;
```

## Creating a Custom Hook
One of the selling points of Hooks is that they facilitate reusable methods.

In our Toggler component above, we keep all the logic to make it work right inside the component. But a more generalized way of doing this would be to create a **custom hook** 

By convention, these are kept in their own folder (ex: Hooks) and begin with the word **use** as in **useToggle**.

```js
import {useState} from "react";
function useToggle(initialVal = false){
    const[itemState,setItemState] = useState(initialVal);
    const toggle = () => {
        setItemState(!itemState);
    };

    return [itemState,toggle];
    // note: return toggle, not setItemState
}

export default useToggle
```

## Toggle with Custom Hook

Now, we can rewrite Toggler with our custom hook.

```js
import React from "react"
import useToggle from "../hooks/useToggle"

function Toggler(){
    const [switchOn,toggleSwitch] = useToggle(false);

    return <h1 onClick={toggleSwitch(!switchOn)}>{switchOn ? "Switch is On":"Switch is Off"}</h1>
}

export default Toggler;
```
Okay, it's only a little simpler, but this is a very simple example. The cool thing is, we could now have ten different settings in this component that all needed toggles, and we could use just the one hook. That *really* cleans things up. React magic!

## useInputState Example
This is another example of a custom, reusable component.

Here's the hook:

```js
import {useState} from "react";
export default initialValue => {
    const [value,setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue("");
    }

    return [value,handleChange,reset];
};
```

Here's the JSX
```js
import React from "react";
import useInputState from "./hooks";

export default function simpleFormInput(){
    const [email,updateEmail,resetEmail] = useInputState("");
    const [password,updatePassword,resetPassword] = useInputState("");
    return(
        <div>
            <h1>Email: {email}</h1>
            <h1>Password: {password}</h1>
            <input type="text" value={email} onChange={updateEmail} />
            <button onClick={resetEmail}>Reset</button>
            <input type="text" value={password} onChange={updatePassword} />
            <button onClick={resetPasswordl}>Reset</button>
        </div>
    )
}
```

So... pretty clean little component. The useInputState hook allows us to create two stateful input components with very little code (and no additional code for the second input), and that's very cool. 

Why you'd want to display the password as an H1 for everyone to see is a separate question.




