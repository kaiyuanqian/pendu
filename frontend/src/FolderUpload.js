import React, { useState } from "react";
import { useDropzone } from 'react-dropzone';

function FolderUpload({ onFilesUpload }) {
    
  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result);
          onFilesUpload(json);
        } catch (error) {
          console.error('Error parsing JSON file:', error);
        }
      };
      reader.readAsText(file);
    });
  };
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true, // Allow multiple file uploads
    directory: true, // Enable directory uploads
  });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop folder here, or click to select folder</p>
    </div>
  );
}
  
const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FolderUpload;
