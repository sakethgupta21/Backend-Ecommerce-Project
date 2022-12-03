//Interceptor.js file for request and response mock
//while testing the controller , we need to make sure that the request object
//contains all the desired paramters and the body object and the response
//object contains the desired body or message or status code

module.exports={

    mockRequest: ()=>{

        const req ={}
        req.body=jest.fn().mockReturnValue(req),  //{}
        req.params = jest.fn().mockReturnValue(req)  //{}


    },

    mockRequest:()=>{

        const res= {}
        res.status = jest.fn().mockReturnValue(res),
        res.send = jest.fn().mockReturnValue(res)
        return res;

    }
}

