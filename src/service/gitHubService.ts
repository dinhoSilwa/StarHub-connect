import type { AxiosInstance } from "axios";
import { getGithubUser } from "./methods/get";

export class GithubService {
   gitGubUser =  async (api : AxiosInstance,user : string   ) : Promise<any> => await getGithubUser(api, user)
}