# Custom Hooks Single responsibilty principle 

each component should have single responsiblity. 
eg: The resturant menu should have a responsiblity to only display resturant menu. 


Testing karni aasan ho jati jab code modular hota hai. reusablity ka feature bhi milta hai.
maintainable. 

keep your code more readable and maintainable.

# Now we are going to build ONLINE / OFFLINE Feature in our app. 

we have made a custom hook that is going to check whether u are online/offline 
window.addeventlistener("online,()=>{
    setOnlineStatus("true")
}")  


# Optimizing the app. 

we will make smaller bundles of the files of large apps/webpage. 
chunking 
code splitting 
dynamic loading 
on demand loading 
lazy loading  

there should be logical separation of code so that. eg: usme flights/ hotels/ train. 
eg we are going to create a grocery business so that subjiya bik jaye apni. 

we are going to create a separate bundle for grocery component. 

pahle error aayega kyu react fast hai aur grocery wala bundle load hone me samay lag raha hai. isliye suspense ka use kiya jata hai. 












