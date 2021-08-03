# Using the Effect Hook

## The *Effect Hook* lets you perform side effects in function components.

Functional components do not have access to React lifecycle methods. 

useEffect works as a combination of the various lifecycle methods. It runs after every render.

## useEffect Example
*NOTE: see starwars project for working example*
```js
  // useEffect is triggered whenever there is a re-render
    useEffect(() => {
        // to make an async hook, create an async function inside the useEffect hook
        const getMovieData = async () => {
            const response = await axios.get(`https://swapi.dev/api/films/${number}`, { crossdomain: true });
            return response;
        }
        async function fetchData() {
            await getMovieData()
                .then(response => {
                    var data = response.data;
                    setMovieData({
                        title: data.title,
                        opening_crawl: data.opening_crawl
                    })
                })

        }
        fetchData();
    }, [number]) // the second param to useEffect indicates what state to watch. useEffect will only be triggered when that specific state is changed. Can take muliple state variables
```

So, this is pretty powerful. The second argument to useEffect, which tracks only the specified state variables, is especially cool.



