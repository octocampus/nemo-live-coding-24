import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Heading } from "components";
import { yupResolver } from "@hookform/resolvers/yup";
import get from "lodash.get";
import { UserFormData } from "./types";
import { userFormSchema } from "./utils";
import { TextField } from "components";
import styles from "./UserCreationForm.module.css";

interface UserCreationFormProps {
  onSubmit: (user: UserFormData) => void;
  onCancel: () => void;
}

export const UserCreationForm = ({
  onSubmit,
  onCancel,
}: UserCreationFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: {
      firstName: "",
      email: "",
      lastName: "",
    },
    resolver: yupResolver(userFormSchema),
  });

  const handleOnCancel = () => {
    onCancel();
  };

  const handleOnSubmit: SubmitHandler<UserFormData> = (userData) => {
    onSubmit(userData);
  };

  return (
    <>
      <Heading level={3}>Nouveau nemo</Heading>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.form_wrapper}>
          <div className={styles.form_fields_wrapper}>
            <Controller
              name={"firstName"}
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label={"Prénom"}
                  {...field}
                  errorMessage={get(errors, "firstName.message")}
                />
              )}
            />

            <Controller
              name={"lastName"}
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label={"Nom"}
                  {...field}
                  errorMessage={get(errors, "lastName.message")}
                />
              )}
            />

            <Controller
              name={"email"}
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label={"Email"}
                  type={"email"}
                  errorMessage={get(errors, "email.message")}
                  {...field}
                />
              )}
            />
          </div>

          <div className={styles.action_buttons}>
            <Button
              variant={"primary"}
              style={"outline"}
              onPress={handleOnCancel}
            >
              Annuler
            </Button>
            <Button type={"submit"} variant={"primary"} style={"fill"}>
              Ajouter
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
