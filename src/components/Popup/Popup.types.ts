import { ReactElement } from 'react';

export interface PopupProps {
  onClose: () => void;
  form: ReactElement;
}
