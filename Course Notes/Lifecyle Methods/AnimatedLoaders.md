## Animated Loaders

These are pretty straightforward to make.

1. Go raid CodePen for an animated loading screen, or make your own.
2. Use conditional logic in your parent app that has an item like "isLoaded" or something in state. Set it to false, initially.
3. In your componentDidMount, have your first call to this.setState flip the "isLoaded" property to true along with whatever else it is doing. This would only happen once the page is loaded and you're getting whatever data you need for the page back, so it works.
4. Animate your loading screen to app transition in whatever manner seems pleasing to you.
