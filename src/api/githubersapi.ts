
import axios from "axios";
import { githubersType } from "../@types/githubusers";

export const fetchGitHubers = async (url: string) => {
  try {
    const response = await axios.get<githubersType>(url);
    return response.data
  } catch (error) {
    throw new Error("Falha na comunicação com github")
  }
}