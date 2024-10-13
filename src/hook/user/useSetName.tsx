import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useUserNameStore } from "../../store/usrname";

export const useSetName = () => {
  let timeout = 3000;
  const { setUsername } = useUserNameStore();
  const [firstName, setFirstname] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const userNameSchema = Yup.object().shape({
    username: Yup.string().required("Digite O nome"),
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userNameSchema),
  });

  const onSubmitUserName = (data: any) => {
    setIsLoading(true);

    setTimeout(() => {
      const { username } = data;
      const firstName = username.split(" ")[0];
      setFirstname(firstName);
      setUsername(firstName);
      setIsLoading(false);
    }, timeout);
  };
  return {
    handleSubmit: handleSubmit(onSubmitUserName),
    register,
    watch,
    errors,
    firstName,
    isLoading,
  };
};
