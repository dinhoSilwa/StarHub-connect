import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";
import { useHTTP } from "../../service/useHTPP";
import { GithubService } from "../../service/gitHubService";
import type { GithubResponseInterface } from "../../@types/githubusers";
import { ProfileStore } from "../../store/profileStore";

const getUser = async (user: string): Promise<GithubResponseInterface> => {
  const api = useHTTP();
  const get = new GithubService();
  const dataResponse = get.gitGubUser(api, user);
  return dataResponse;
};

export const useGithubQuery = () => {
  const { setDataUser } = ProfileStore();
  const query = useQueryClient();
  const githubMutation: UseMutationResult<
    GithubResponseInterface,
    Error,
    string
  > = useMutation({
    mutationFn: getUser,
    onSuccess: (data) => {
      setDataUser(data);
      setDataUser(data);

      query.invalidateQueries({
        queryKey: ["github-query"],
      });
    },
    onError: (error: any) => {
      console.error("Falha aqui", error);
    },
  });

  return {
    githubMutation,
    isLoading: githubMutation.isPending,
  };
};
