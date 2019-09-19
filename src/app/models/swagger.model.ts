export interface Api{
    swagger:Number,
    info: Object,
    host:String,
    basePath:String,
    tags:[Object],
    schemes:[String],
    paths:Object,
    securityDefinitions:Object,
    'x-customAuth':{ 
        name:String,
        url:String,
        encodingType:String,
        description:String,
        details:[
          {
            grantType:String,
            methord:String,
            description:String,
            parameters:[
              {
                name :String,
                in:String,
                required:Boolean,
                type:String,
                description:String,
            }]
          }]
        }
}