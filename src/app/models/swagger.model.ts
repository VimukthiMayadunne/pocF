export interface Api{
    swagger: {
        type: Number,
    },
    info: {
        type: Object,
    },
    host:{
        type: String,
    },
    basePath: {
        type: String,
    },
    tags: {
        type: Object[],
    },
    schemes:{
        type: String[],
    },
    paths: {
        type: Object,
    },
    'x-customAuth':{
        name:{
            type:String
        },
        grantType:{
            type:String
        }, 
        parameters:[{
            name:{
                type:String
            }, // clientKey
            in:{
                type:String
            }, // body
            required:{
                type:Boolean
            }, //true
            type:{
                type:String
            }, 
        }],
        url:{
            type: String
        },
        description:{
            type: String 
        },
    },
}