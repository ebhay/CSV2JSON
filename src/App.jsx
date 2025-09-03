import { useState } from "react";
import DropZone from "./components/DropZone";
import AutoDetectSettings from "./components/AutoDetectSettings";
import CsvInput from "./components/CsvInput";
import JsonOutput from "./components/JsonOutput";
import SampleData from "./components/SampleData";
import { useCsvJson } from "./utils/useCsvJson";

const SAMPLE_CSV = `name,age,city,occupation
John Doe,30,New York,Engineer
Jane Smith,25,San Francisco,Designer
Bob Johnson,35,Chicago,Manager`;

function App() {
  const {
    csv, setCsv,
    json, setJson,
    delimiter, setDelimiter,
    autoDetected, setAutoDetected
  } = useCsvJson();

  const handleFileAccepted = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileText = e.target.result;
      if (file.name.endsWith(".csv")) {
        setCsv(fileText);
      } else if (file.name.endsWith(".json")) {
        try {
          const jsonObj = JSON.parse(fileText);
          setJson(jsonObj);
        } catch {
          alert("Invalid JSON file");
        }
      }
    };
    reader.readAsText(file);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleDownload = (text) => {
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-100 text-slate-800 overflow-x-hidden">
      <main className="w-full px-4 py-10">
        <div className="mx-auto max-w-4xl text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs text-slate-700 shadow-sm">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Live converter — paste CSV or drop a file
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">CSV to JSON Converter</h1>
          <p className="mt-2 text-slate-600">Clean, fast, and developer-friendly. Auto-detects delimiter and exports instantly.</p>
        </div>

        <div className="mx-auto w-full max-w-5xl">
          <div className="rounded-2xl border border-orange-200/60 bg-white shadow-lg p-6 md:p-8">

            <div className="mb-5">
              <DropZone onFileAccept={handleFileAccepted} />
            </div>

            <div className="mb-5">
              <AutoDetectSettings
                delimiter={delimiter}
                setDelimiter={setDelimiter}
                autoDetected={autoDetected}
                setAutoDetected={setAutoDetected}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-2">
              <div className="rounded-xl border border-orange-200 bg-white/80 p-3 shadow-sm">
                <CsvInput value={csv} onChange={setCsv} />
              </div>
              <div className="rounded-xl border border-orange-200 bg-white/80 p-3 shadow-sm">
                <JsonOutput
                  jsonData={json}
                  onCopy={handleCopy}
                  onDownload={handleDownload}
                />
              </div>
            </div>

            <SampleData sample={SAMPLE_CSV} onClick={() => setCsv(SAMPLE_CSV)} />
          </div>
        </div>
      </main>
      <footer className="pb-8 pt-2 text-center text-xs text-slate-600">
  <strong className="font-semibold">Made with <span role="img" aria-label="love">❤️</span> by <a href="https://github.com/ebhay/" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-500">ebhay</a></strong>
      </footer>
    </div>
  );
}

export default App;

