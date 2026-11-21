import { useEffect, useRef } from "react";
import MainButton from "../button/MainButton";

import {
  DialogBox,
  DialogTitle,
  DialogMessage,
  DialogActions,
} from "./MainDialog.styles";

const MainDialog = ({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  confirmVariant = "primary",
  onConfirm,
  onClose,
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <DialogBox
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogMessage>{message}</DialogMessage>

      <DialogActions>
        <MainButton variant="outline" onClick={onClose}>
          Cancel
        </MainButton>

        <MainButton
          variant={confirmVariant}
          onClick={onConfirm}
        >
          {confirmText}
        </MainButton>
      </DialogActions>
    </DialogBox>
  );
};

export default MainDialog;