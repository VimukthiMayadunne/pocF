export interface Api{
    swagger: {
        type: Number
    },
    info: {
        type: Object
    },
    host:{
        type: String
    },
    basePath: {
        type: String
    },
    tags: {
        type: [Object]
    },
    schemes:{
        type: [String]
    },
    paths: {
        type: Object
    },
    securityDefinitions:{
        type:Object
    },
    'x-customAuth': {
        name:{
            type:String
        },
        details : [
          {
            grantType:{
                type:String
            },
            methord: {
                type:String
            },
            parameters: [
              {
                name :{
                    type:String
                } ,
                in:{
                    type:String
                } ,
                required :{
                    type:Boolean
                } ,
                type:{
                    type : String    
                },
                description:{
                    type : String
                } 
              }],
            url:{
                type:String
            },
            encodingType:{
                type:String
            },
            description:{
                type:String
            }
    }]}
}