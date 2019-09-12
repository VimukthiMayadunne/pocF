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
        type: [string],
    },
    paths: {
        type: Object,
    },
    'x-customAuth': {
        name:{
            type:String
        } ,// "WSO2 APIM getway Acsess gearator"
        grantType:{
            type:String
        }, // client_credentias
        parameters:{
            type :Object
        },
        url:{
            type: String
        }, //http://172.17.0.2:8280/token
        description:{
            type: String 
        }// "Genarates Accses token from client credentials to acsess data"
    }
}