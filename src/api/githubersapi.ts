
import axios from "axios";
export const fetcherGithubeers = (url : string) => axios.get(url).then(res => res.data)