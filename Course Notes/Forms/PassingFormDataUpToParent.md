## Passing data to a parent component

There's really no difference between doing this with a form and doing this with any other sort of child component.

In the parent component, have a method that modifies state. Then pass that method down with props.

In the child component, make an event handler that calls that method from props. Because this is passed by reference, it calls the parent method and the parent state is modified. Bam.
