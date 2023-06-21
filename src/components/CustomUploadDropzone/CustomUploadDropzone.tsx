/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Accept } from 'react-dropzone';
import { CustomUploadDropzoneProps } from './CustomUploadDropzone.types';
import { Typography } from '@mui/material';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';

export function CustomUploadDropzone(props: CustomUploadDropzoneProps) {
  const { t } = useTranslation();
  const { value, onChange } = props;

  const onDrop = useCallback(
    (files: File[]) => {
      // Do something with the files

      if (files.length > 0) {
        onChange(files[0]);
      }
    },
    [onChange]
  );

  const acceptedFiles: Accept = {
    'image/*': [],
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDrop,
    accept: acceptedFiles,
    multiple: false,
  });

  const dropzoneStyle = {
    outline: '2px dashed gray',
    padding: '20px',
    borderRadius: '4px',
  };

  return (
    <div
      {...getRootProps()}
      style={dropzoneStyle}
    >
      <input {...getInputProps()} />
      <Typography>{t('misc.dropzonePrompt')}</Typography>
      <Typography fontSize={10}>{t('misc.dropzoneAcceptedFiles')}</Typography>
      {/* Display the current value or a placeholder */}
      {value && (
        <Typography fontSize={14}>
          {' '}
          {t('misc.dropzoneSelectedFile')}: {value.name}{' '}
        </Typography>
      )}
      {!value && <Typography fontSize={14}> {t('misc.dropzoneNoSelectedFile')}</Typography>}
    </div>
  );
}
