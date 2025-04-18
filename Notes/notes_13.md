# Testing our App.

we are only concern about developer testing.

Types of Testing (developer)

- Manual Testing -> Check kar lo component shi se kam kar raha hai ya nahi.
  agar code me fir se change kiya to firse sare test karne padh sakte hai.

* Whenever we write a single line of code that can introduce bug anywhere.
* Code to test the project.(writing testing)

# What type of test cases can a developer write ?

- Unit Testing (Test your React component in Isolation).
- Integration Testing. (code to test the flow of a particular feature)

- End to End Testing. (e2e Testing)(User land karne se user leave karne tak pura test.)

# SetUp.

1: React Testing Library. (built on Dom testing library)
CRA(create react app) me testing Library already exist hoti hai
JEST KA use hota hai.

- Install React testing library ,jest , babel dependencies.
- Configure Babel.
- configure parcel config file to use disable babel transpilation.

- SUCCESSFULLY SETUP TESTING LIBRARY.

# START WRITING TEST CASES.

WRITING JEST CONFIG.

JSDOM -> Test cases are not running in browser, they need a environment to run.
JSdom is library which parses and interact with html just like browser.(testing code run here)

- jest configuration Jest  
  npx jest --init.
  Install JSDOM Library.
  Install @babel/preset-react to make jsx work in test cases.
  include @babel/preset-react inside my babel config.
  Install @testing - library/jest-dom for `toBeInTheDocument()` works .  
  npm i -D @testing-library/jest-dom
  import this and test this.

# Lets test the js first.

- Where do i write test cases ?
  Jest will track all the files present in the **tests** folder. any js or ts file will be considered as a test file.

- if your file name is Header.test.js etc this will be treated as test file and jest will track them.
  Pattern -> test.js , test.ts, spec.ts, spec.js

__-> dunder 

sum.test.js me test ka code likha hai.

# Now we can going to write the test cases for React.

1: Unit testing (only one component at a time)
test whether the component is loaded or not. (contact component)

Sometime we create the group of test cases into a single block.
using describe method

* test() function name also have `it` name alias of test. 

# Unit-Testing of Header Component. 

done

# Writing test cases in Resturant Card component. 
Learn how to test props to component of it.  

# Integration Testing. (when multiple component work together)
Flow Testing  

1: Search Feature Testing, Suppose if we write pizza in the search box , it should filter out pizza resturant from the body. We have to write a test case for that. 

When u are doing any state updates,then u have to wrap your component inside the act function.  























