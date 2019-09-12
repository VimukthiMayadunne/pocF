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
  }
}