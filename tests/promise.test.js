function PromiseFunc(){

    return new Promise((resolve , reject)=>{
        resolve("Saketh")
    })
}

test("testing promises" , ()=>{
    return PromiseFunc()
    .then((msg)=>{
        expect(msg).toBe("Saketh")
    })
})