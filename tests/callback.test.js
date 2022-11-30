

//Asynchronous Code
function fetchData(callback){
    setTimeout( ()=>{
        callback("Saketh")
    },2000)
}

//To Test: Whether the Callback function was actually called or not.

//Jest -> Synchronous Code

//when writing javascript cods, most of the times we write code 
//asynchronously.
//in the case where you have code that runs asynchronously
// Jest will need to know

//Don't do this 

//test('callback code', ()=>{

//      function callback(data){
//         expect(data).toBe("Saketh")
//        }
//   fetchdata(callback)
// })

//done()

test('callback code', done=>{
 
    function callback(data){
      expect(data).toBe("Saketh")
      done();
    }

   
 fetchData(callback)

});


function addAsync(a , b , callback){
  setTimeout(()=>{
    const result = a+b;
    callback(result);
  },4000)
}
 
test('add numbers async', done=>{

    function callback(result){
        expect(result).toBe(15)
        done();
    }

    addAsync(10 , 5 , callback)  
 
})