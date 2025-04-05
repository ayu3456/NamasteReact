# More about useState and useEffect hooks 
`UseEffect hook`
* useEffect is called every time our component render. 
but dependency array changes the behavior of useEffect hook.

* if u use useEffect without any dependency array. useEffect is called every time our component renders.

* if dependency array is empty = [] useEffect is called only on initial render.
(just once)

* when we put something inside the dependency array. The useEffect is called everytime my dependency changes. 

`UseState`
* Never use useState outside the component. (error aayega). It is used for creating local state variable inside the component. 

* Call the hook on the top. 

# ROUTING IN OUR APP 

* we are going to use the library `react-router-dom`.
-create the about us page.

* sabse pahle root level (app.js) me routing configuration likhni padegi. 
* import create browser router.
* we have to provide this configuration to render on the page. 
* to do this we have router provide component . This provide routing configuration to our app.  

- Creating our own Error page. 
in the '/' route u can add error element. 

React router dom gives u a hook named `useRouteError` which will helps in getting more info about the errors 





























