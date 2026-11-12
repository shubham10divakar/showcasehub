import React, { useState } from 'react';
import { PageHeader, Reveal, Ext, CopyCommand } from '../ui';
import { pdfTools, person } from '../data';

const URL = person.links.pdfdesk;

const readerFeatures = [
  'Reading library: Inbox, Planned, Reading, Paused, Completed, Revisit',
  'Colour-coded highlights, comments and Markdown notes linked to pages',
  'Add papers by arXiv ID or DOI, search across titles, tags and notes',
  'Reading calendar, session time tracking and a revision queue',
];

export default function PdfDesk() {
  const [launched, setLaunched] = useState(false);

  return (
    <main className="page">
      <PageHeader eyebrow="PDFDesk" title="Free PDF tools. Try them right here.">
        PDFDesk runs in your browser, so your documents are processed on your own device.
        No account needed.
      </PageHeader>

      <div className="chips chips-static">
        {pdfTools.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>

      <Reveal className="embed">
        <div className="embed-bar">
          <span className="embed-dots"><i /><i /><i /></span>
          <span className="embed-url">pdfdesk.in</span>
          <Ext href={URL} className="embed-open">Open in new tab ↗</Ext>
        </div>
        {launched ? (
          <iframe
            title="PDFDesk"
            src={URL}
            className="embed-frame"
            sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-modals"
          />
        ) : (
          <div className="embed-poster">
            <h2>PDFDesk</h2>
            <p className="muted">Merge, convert, compress, OCR and sign PDFs.</p>
            <button type="button" className="btn btn-primary" onClick={() => setLaunched(true)}>Launch PDFDesk here</button>
          </div>
        )}
      </Reveal>

      <Reveal as="section" className="section split">
        <div>
          <p className="eyebrow">Also on PyPI</p>
          <h2>pdfdesk for research papers</h2>
          <p className="lede">
            The Python package is a local-first reading workspace for papers. It installs with
            no dependencies, opens in your browser and loads nothing from the internet.
          </p>
          <CopyCommand command="pip install pdfdesk" />
          <div className="pkg-links">
            <Ext href="https://pypi.org/project/pdfdesk/">PyPI ↗</Ext>
            <Ext href="https://github.com/shubham10divakar/pdfdesk">GitHub ↗</Ext>
          </div>
        </div>
        <ul className="check-list">
          {readerFeatures.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </Reveal>
    </main>
  );
}
