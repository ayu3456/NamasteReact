# Class Based Components

- Interview me pucha jata hai.
- Understanding of react become more strong.

Q: What is class based component ?
A: It is normal class based component.

what is React.component?
Class which is given to us by react. which is inheriting some properties to it.

- How to receive props in class based components?

A: constructor(props) {
super(props);
console.log(props);
}

- Why Super props ??
  H.W : To access this everywhere in the class component. to properly initialise the constructor.

- When u make a instance of the class this constuctor is called , this props is extracted
  and u can use this.props.name anywhere in the code.

# How can we make local State variable inside class based components?

Functional component me to useState se kar lete hai yaha kaise karenge ?

Hooks are very new in React, earlier there is old way of creating local state variable

# What are the lifeCycle Methods of that React component ?

- How this component is put up (mounted) in this webpage ?
  Sabse pahle parent ka constuctor call hoga fir parent ka render call hoga . Phir child ka constuctor call hoaga phir child ka render call hoga.

It alse have method name `component did mount`
A: This is called when the component is completely mounted on the webpage.

why it is here ?? 
A: It is used when the componnent is mounted . Therefore is used in making API calls. 


child contructor -> child render -> child component did mount

- If we put console.log everywhere (render,constuctor,component did mount me) then order of execution would be ??

A:
parent constructor
parent render
child constructor
child render
child component did mount 
parent component did mount 


* IMPORTANT 
Q: When there are multiple child components React will optimises the website by merging the render of the child into single render and batching together the component did mount into a separate group . that's reason why these parts 

if there are 3 child are there so the output would be 

parent constructor
parent render

child1 constructor
child1 render

child2 constructor
child2 render

child3 constructor
child3 render 

child1 component did mount 
child2 component did mount 
child3 component did mount 

parent component did mount 


In the updating phase react trigger the render once again.
It update the dom with the new value. 

then it calls the `component did update`.  

# Life Cycle of a React component 

Mounting 

Contructor(Dummy data)
Render (Dummy Data)
    HTML (Dummy) 

component did mount
Api call 
this.setState -> State Variable is Updated  

Update 

render(Api data)
HTML with Api data 

component did update is called 
`Component will unmount` this is called just before the component will unmount. 
when u go to different page 
















