import { Dispatch, SetStateAction } from 'react';

export interface FormProps {
  onClose: () => void;
  setOpenStatusModal: Dispatch<SetStateAction<boolean>>;
  setStatusModalMessage: Dispatch<SetStateAction<string>>;
}
