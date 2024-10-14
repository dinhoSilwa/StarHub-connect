import { setup } from "./setup"

export const useHTTP = () =>{
  const api = setup('https://api.github.com/')
  return api
}