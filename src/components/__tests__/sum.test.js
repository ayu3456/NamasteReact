import { sum } from "../sum"


// test your sum function 

//import { test } from "picomatch";

test("Sum function should calculate the sum of two numbers ",() => {
    const result = sum(3,4) 
    expect(result).toBe(7)
})



