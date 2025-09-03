export default function SampleData({ sample, onClick }) {
    return (
      <div className="mt-4 mb-2">
        <label className="font-medium text-slate-800">Sample CSV Data</label>
        <pre className="mt-1 rounded-lg border border-slate-200 bg-slate-50/80 p-3 font-mono text-xs shadow-inner">{sample}</pre>
        <button
          className="mt-2 rounded-md bg-slate-900 px-4 py-1.5 text-white hover:bg-slate-800"
          onClick={onClick}
          type="button"
        >Try Sample Data</button>
      </div>
    );
}  