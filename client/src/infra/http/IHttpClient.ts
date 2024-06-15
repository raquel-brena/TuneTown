export default interface IHttpClient {
    get (url: string):Promise <any>;
    post (url: string, data: any):Promise <any>;
    put (url: string, data: any):Promise <any>;
}