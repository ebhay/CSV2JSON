export default function JsonOutput({ jsonData, onCopy, onDownload }) {
  const jsonString = (typeof jsonData === 'string')
    ? jsonData
    : JSON.stringify(jsonData, null, 2);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-blue-500">📘</span>
          <span className="font-medium text-slate-800">JSON Output</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onCopy(jsonString)} className="px-3 py-1 rounded-md border border-slate-200 bg-white text-xs text-slate-700 hover:bg-slate-50">Copy</button>
          <button onClick={() => onDownload(jsonString)} className="px-3 py-1 rounded-md bg-blue-600 text-xs text-white hover:bg-blue-700">Download</button>
        </div>
      </div>
      <pre className="w-full min-h-[160px] max-h-[60vh] rounded-lg border border-orange-200 bg-white/80 p-3 font-mono text-sm overflow-auto shadow-inner">{jsonString}</pre>
    </div>
  );
}
