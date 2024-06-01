import { Profile } from "../../domain/types/Profile";
import { User } from "../../domain/types/User";
import AxiosAdapter from "../http/AxiosAdapter";
import IHttpClient from "../http/IHttpClient";

export default class UserGatewayHttp {
  httpClient: IHttpClient;
  url: string;

  constructor() {
    this.url = "http://localhost:3000";
    this.httpClient = new AxiosAdapter();
  }

  //constructor(readonly httpClient: HttpClient, readonly url: string) {}

  async getUsers(): Promise<User[]> {
    const response = await this.httpClient.get(`${this.url}/users/`);
    return response.data;
  }

  async getProfileByUserId(id: string): Promise<Profile> {
    const response = await this.httpClient.get(`${this.url}/profile/${id}`);
    return response.data;
  }

  async createUser(userData: any): Promise<any> {
    const response = await this.httpClient.post(`${this.url}/users/`, userData);
    return response.data;
  }

  async updateUser(userData: any): Promise<any> {
    const response = await this.httpClient.put(`${this.url}/users/`, userData);
    return response.data;
  }
}