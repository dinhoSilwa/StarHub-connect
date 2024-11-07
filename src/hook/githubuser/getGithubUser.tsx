import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { GithubService } from "../../service/gitHubService";
import { useHTTP } from "../../service/useHTPP";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type {
  GithubErrorResponse,
  GithubUserResponse,
} from "../../@types/githubusers";
import { SearchUsernameStore } from "../../store/searchResults";
import { userProfileGithubName } from "../../store/profileName";

interface GithubuserProps {
  isUserProfile: true | false | undefined;
}

export const useFindGithubers = ({ isUserProfile }: GithubuserProps) => {
  const { setUserFound } = SearchUsernameStore();
  const { setGithubProfileName } = userProfileGithubName();
  const api = useHTTP();
  const QUERY_KEY = ["get-githubuser"] as const;
  const queryKey = useQueryClient();
  const service = useMemo(() => new GithubService(), []);

  const githubusermutation = useCallback(
    (username: string) => service.gitHubUser(api, username),
    [service, api]
  );

  const mutation = useMutation<
    GithubUserResponse,
    GithubErrorResponse,
    string,
    unknown
  >({
    mutationFn: githubusermutation,
    onSuccess: (data) => {
      queryKey.invalidateQueries({ queryKey: QUERY_KEY });
      isUserProfile ? setGithubProfileName(data as any) : setUserFound(data as any);
      console.log(
        isUserProfile ? "é a busca do Perfil" : "Não é a busca do perfil",
        data
      );
    },
  });

  const githubSchema = yup.object().shape({
    username: yup.string().required("Digite o github username"),
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(githubSchema),
  });

  const onSubmit = (data: any) => {
    const { username } = data;
    mutation.mutate(username);
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    watch,
    register,
    setValue,
    reset,
    setError,
    errors,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError : mutation.error
  };
};
