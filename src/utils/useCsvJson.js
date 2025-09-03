// src/utils/useCsvJson.js
import Papa from 'papaparse';
import { useState, useCallback } from 'react';

const detectDelimiter = (csv) => {
  const delimiters = [',', ';', '\t', '|'];
  let best = ',';
  let maxCount = 0;
  delimiters.forEach((d) => {
    const count = (csv.split('\n')[0] || '').split(d).length;
    if (count > maxCount) { best = d; maxCount = count; }
  });
  return best;
};

export function useCsvJson() {
  const [csv, setCsv] = useState('');
  const [json, setJson] = useState([]);
  const [delimiter, setDelimiter] = useState(',');
  const [autoDetected, setAutoDetected] = useState(true);

  const parseCsv = useCallback(
    (val, delim = delimiter) => {
      if (!val) { setJson([]); return; }
      Papa.parse(val, {
        header: true,
        delimiter: delim,
        skipEmptyLines: true,
        complete: ({data}) => setJson(data),
        error: () => setJson([{ error: 'Invalid CSV' }]),
      });
    },
    [delimiter]
  );

  const jsonToCsv = useCallback(
    (jsonData, delim = delimiter) => {
      try {
        const csv = Papa.unparse(jsonData, { delimiter: delim });
        setCsv(csv);
      } catch { setCsv(''); }
    },
    [delimiter]
  );

  const setCsvAndParse = (val) => {
    setCsv(val);
    if (autoDetected) {
      const auto = detectDelimiter(val);
      setDelimiter(auto);
    }
    parseCsv(val, autoDetected ? detectDelimiter(val) : delimiter);
  };

  const setJsonAndConvert = (val) => {
    setJson(val);
    jsonToCsv(val, delimiter);
  };

  const overrideDelimiter = (value) => {
    setDelimiter(value);
    setAutoDetected(false);
    parseCsv(csv, value);
  };

  return {
    csv, setCsv: setCsvAndParse,
    json, setJson: setJsonAndConvert,
    delimiter, setDelimiter: overrideDelimiter,
    autoDetected, setAutoDetected
  };
}

