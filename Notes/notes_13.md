# Testing  our App.
we are only concern about developer testing. 

Types of Testing (developer)
* Manual Testing -> Check kar lo component shi se kam kar raha hai ya nahi.
agar code me fir se change kiya to firse sare test karne padh sakte hai. 

- Whenever we write a single line of code that can introduce bug anywhere.
- Code to test the project.(writing testing) 

# What type of test cases can a developer write ? 

* Unit Testing (Test your React component in Isolation).
* Integration Testing. (code to test the flow of a particular feature)

* End to End Testing. (e2e Testing)(User land karne se user leave karne tak pura test.)

# SetUp. 
1: React Testing Library. (built on Dom testing library)
CRA(create react app) me testing Library already exist hoti hai
JEST KA use hota hai.

* Install React testing library ,jest , babel dependencies. 
* Configure Babel. 
* configure parcel config file to use disable babel transpilation. 

* SUCCESSFULLY SETUP TESTING LIBRARY. 

# START WRITING TEST CASES. 

WRITING JEST CONFIG. 

JSDOM -> Test cases are not running in browser, they need a environment to run. 
JSdom is library which parses and interact with html just like browser.(testing code run here) 

* jest configuration Jest  
npx jest --init. 
Install JSDOM Library. 

# Lets test the js first. 

* Where do i write test cases ? 
Jest will track all the files present in the __tests__ folder. any js or ts file will be considered as a test file. 

* if your file name is Header.test.js etc this will be treated as test file  and jest will track them. 
Pattern -> test.js , test.ts, spec.ts, spec.js 

__ -> dunder 































