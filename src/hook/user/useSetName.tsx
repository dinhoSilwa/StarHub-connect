import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useUserNameStore } from "../../store/usrname";
import { useGithubQuery } from "../githubuser/getGithubUser";

export const useSetName = () => {

  const {githubMutation, isLoading} = useGithubQuery()
  const { setUsername } = useUserNameStore();
  const userNameSchema = Yup.object().shape({
    username: Yup.string().required("Digite O nome"),
    checkGithub: Yup.boolean(),
  });

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userNameSchema),
  });

  const onSubmitUserName = (data: any) => {
    const { username } = data;
    setUsername(username);
    githubMutation.mutate(username)
  };
  return {
    handleSubmit: handleSubmit(onSubmitUserName),
    register,
    watch,
    errors,
    setValue,
    isLoading
  };
};
