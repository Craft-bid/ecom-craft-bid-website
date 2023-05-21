import { Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Accept } from 'react-dropzone';
export function CustomUploadDropzone() {
  const onDrop = useCallback((files: File[]) => {
    // Do something with the files
    console.log(files);
  }, []);

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
      <Typography>Drag and drop some files here, or click to select files</Typography>
      <Typography fontSize={10}>Only *.jpeg and *.png images will be accepted</Typography>
    </div>
  );
}
