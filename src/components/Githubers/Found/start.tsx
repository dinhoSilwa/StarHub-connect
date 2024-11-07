import axios from "axios";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export const StarsGithubers = ({ url }: { url: string }) => {
  const [start, setStart] = useState();

  useEffect(() => {
    const getAllStarts = async () => {
      const response = await axios.get<any[]>(url!);
      const reposResponses = response.data
      const allStars = reposResponses.reduce((acc: number, repos : any) => acc + (repos.stargazers_count || 0), 0)
      setStart(allStars)
    };

    getAllStarts();
  }, [url]);

  return (
    <div className="flex items-center gap-2 w-full rounded-lg py-2 px-2">
    <div className=" flex -space-x-2 items-center">
      <span className=" w-12 h-12 border rounded-full flex items-center justify-center bg-Dark-second/20 text-Dark-second">
        <Star />{" "}
      </span>
      <span className=" w-12 h-12 border rounded-full flex items-center justify-center bg-Dark-second/20 text-Dark-second">
        {start}
      </span>
    </div>
    <p className="text-Dark-second font-semibold text-sm"> Total Estrelas</p>
  </div>
  )
};
