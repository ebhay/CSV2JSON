export default function CsvInput({ value, onChange }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-pink-500">📄</span>
          <span className="font-medium text-slate-800">CSV Input</span>
        </div>
        <div className="text-xs text-slate-500">Paste, type, or drop a .csv file</div>
      </div>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full min-h-[160px] rounded-lg border border-orange-200 bg-white/80 p-3 font-mono text-sm shadow-inner outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100/80 resize-vertical"
        placeholder="name,age,city\nAlice,28,London"
      />
    </div>
  );
}
