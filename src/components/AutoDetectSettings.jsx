const DELIMITERS = [
    { label: 'Comma (,)', value: ',' },
    { label: 'Semicolon (;)', value: ';' },
    { label: 'Tab', value: '\t' },
    { label: 'Pipe (|)', value: '|' },
  ];
  
  export default function AutoDetectSettings({ delimiter, setDelimiter, autoDetected, setAutoDetected }) {
    return (
      <div className="mb-4 rounded-xl border border-slate-200 bg-white/70 p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-medium text-slate-800">Delimiter:</span> {DELIMITERS.find(d => d.value === delimiter)?.label || 'Unknown'}
            {autoDetected && <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 border border-emerald-200">Auto</span>}
          </div>
          {!autoDetected && (
            <button
              className="text-xs text-slate-600 underline decoration-dotted decoration-slate-300 hover:text-slate-800"
              onClick={() => setAutoDetected(true)}
              type="button"
            >Re-enable auto</button>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {DELIMITERS.map(d => (
            <button
              key={d.value}
              className={`px-3 py-1 rounded-md border text-sm transition ${delimiter === d.value && !autoDetected ? "border-blue-300 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`}
              onClick={() => { setAutoDetected(false); setDelimiter(d.value); }}
              type="button"
            >{d.label}</button>
          ))}
        </div>
      </div>
    );
  }
  
  