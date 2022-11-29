//const { expect } = require('parser')
const { expect } = require('parser');
const MathOperations = require('./sample')

describe("Calculator tests",()=>{
    
    test('addition' , ()=> { 
    expect(MathOperations.sum(1 , 2)).toBe(3);
    expect(MathOperations.sum(5 , 8)).toBe(13);
    expect(MathOperations.sum(8 , 8)).not.toBe(15);
    })
 /*
    test('addition',()=>{
         expect(MathOperations.sum(10 , 2)).toBe(12);
         expect(MathOperations.sum(5 , 3)).toBe(8) ;
    })
*/
     test('subraction',()=>{
    expect(MathOperations.diff(10 , 2)).toBe(12);
    expect(MathOperations.diff(50 , 8)).toBe(42);
    expect(MathOperations.diff(50 , 78)).not.toBe(40);
     })

    
    test('product',()=>{

    expect(MathOperations.product(1 , 2)).toBe(2);
    expect(MathOperations.product(5 , 8)).not.toBe(45);
    expect(MathOperations.product(5 , 8)).toBe(40);
    })

})
