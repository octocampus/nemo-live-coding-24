import { UserCreationForm } from "components/UserCreationForm";
import { useCreateUser } from "services";
import { UserFormData } from "components/UserCreationForm";

interface UserCreationContainerProps {
  onSuccess?: () => void;
  onError?: () => void;
  onCancel?: () => void;
}

export const UserCreationContainer = ({
  onSuccess,
  onError,
  onCancel,
}: UserCreationContainerProps) => {
  const { mutate: createUser } = useCreateUser();

  // Event handlers
  const handleOnSubmit = (data: UserFormData) => {
    createUser(data, {
      onSuccess: (data) => {
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: () => {
        if (onError) {
          onError();
        }
      },
    });
  };
  const handleOnCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <>
      <UserCreationForm onSubmit={handleOnSubmit} onCancel={handleOnCancel} />
    </>
  );
};
