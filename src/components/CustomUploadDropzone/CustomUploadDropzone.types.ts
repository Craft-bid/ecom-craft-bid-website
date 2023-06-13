import { SetStateAction } from 'react';

export type CustomUploadDropzoneProps = {
  value: File | undefined;
  onChange: (value: SetStateAction<File | undefined>) => void;
};
