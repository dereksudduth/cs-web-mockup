import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Images, X } from '@phosphor-icons/react';

interface PhotoUploadProps {
  images: File[];
  onChange: (files: File[]) => void;
  onRemove: (index: number) => void;
  maxFiles?: number;
}

export function PhotoUpload({ images, onChange, onRemove, maxFiles = 5 }: PhotoUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const remainingSlots = maxFiles - images.length;
    const newFiles = acceptedFiles.slice(0, remainingSlots);
    onChange([...images, ...newFiles]);
  }, [images, maxFiles, onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: maxFiles - images.length,
    disabled: images.length >= maxFiles
  });

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt={`Upload ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-lg hover:bg-neutral-50"
            >
              <X className="h-4 w-4 text-neutral-500" />
            </button>
          </div>
        ))}
        
        {images.length < maxFiles && (
          <div
            {...getRootProps()}
            className={`flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
              isDragActive 
                ? 'border-black bg-neutral-50' 
                : 'border-neutral-300 hover:bg-neutral-50'
            }`}
          >
            <input {...getInputProps()} />
            <Images className="h-6 w-6 text-neutral-400" />
            <span className="text-xs text-neutral-500 mt-1">
              {isDragActive ? 'Drop files here' : 'Add Photos'}
            </span>
          </div>
        )}
      </div>
      <p className="text-xs text-neutral-500">
        Upload up to {maxFiles} photos (JPEG, PNG)
      </p>
    </div>
  );
}