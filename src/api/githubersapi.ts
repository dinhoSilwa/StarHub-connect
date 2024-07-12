
import axios from "axios";

export const fetchGitHubers = async <T> (url: string) : Promise<T> => {
  try {
    const response = await axios.get<T>(url);
    return response.data
  } catch (error) {
    throw new Error("Falha na comunicação com github")
  }
}