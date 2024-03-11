export type UserRowAction =
  | {
      type: "DELETE_USER";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SUSPEND_USER";
      payload: {
        userId: string;
      };
    };
