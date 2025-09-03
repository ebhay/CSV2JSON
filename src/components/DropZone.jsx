import { useDropzone } from 'react-dropzone';

export default function DropZone({ onFileAccept }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (files) => {
      if (files?.length) onFileAccept(files[0]);
    },
    accept: { 'text/csv': ['.csv'], 'application/json': ['.json'] },
    maxSize: 10 * 1024 * 1024 // 10MB
  });

  return (
    <div {...getRootProps()} className="group p-8 rounded-2xl border border-dashed border-slate-300 bg-white/70 text-slate-600 mb-4 transition duration-150 hover:border-blue-300">
      <input {...getInputProps()} />
      <div className="flex flex-col items-center text-center">
        <span className="mb-2 inline-flex size-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100">⬆️</span>
        <p className="text-sm md:text-base">{isDragActive ? "Drop here..." : "Drop CSV or JSON, or click to browse"}</p>
        <small className="mt-1 text-xs text-slate-400">Up to 10MB — .csv or .json</small>
      </div>
      <button type="button" className="mt-3 rounded-md bg-blue-600 px-4 py-1.5 text-white shadow hover:bg-blue-700">Choose File</button>
    </div>
  );
}

