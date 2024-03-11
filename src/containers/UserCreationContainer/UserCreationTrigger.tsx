import React, { useState } from "react";
import { Button, Dialog, DialogContent } from "components";
import { UserCreationContainer } from "./UserCreationContainer";

export const UserCreationTrigger = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = (value: boolean) => {
    setIsDialogOpen(value);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  return (
    <>
      <Button onPress={openDialog}>Ajouter un Nemo</Button>
      <Dialog
        defaultOpen={false}
        open={isDialogOpen}
        onOpenChange={toggleDialog}
      >
        <DialogContent>
          <UserCreationContainer
            onCancel={closeDialog}
            onSuccess={closeDialog}
            onError={closeDialog}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
