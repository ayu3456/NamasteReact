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

# Now we are going to study More about children routes. 

- header should always be on our app. in each component. (it will stay intact).
* one way is that you import header in about page and render it. 
* we are going to learn about `Outlet Method`. 

Yaha par children routes ki need padegi. '/' path me. 

children routes banaye. 
outlet import kiya. 

* whenever there is change in the path , this outlet will be filled with the children routes autometically. 

Linking different pages 
1: use anchor tag. it will work but never use it.  It will refresh the whole page. 

We can navigate to new page without refeshing the whole page !!! 
we will use Link component to do this . My page wont be reload. it is just changing the components.  THIS IS REASON WHY REACT WEBSITE ARE KNOWN AS SINGLE PAGE APPLICATION. 

* There are 2 types of Routing are there in our Web Apps.

1: Client Side routing 
2: Server Side routing 

# Now we are going to implement dynamic routes for each resturant. 

* wrapper create karna -> dynamic id pass karna -> check karo ki kuch dikh raha hai ya nahi 
use /id me fir Resturant menu wala page banana 

data fetch kiya on the basis on dynamic id and display on the ui

























































