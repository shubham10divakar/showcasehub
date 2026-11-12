import React from 'react';
import './WorkExperience.css';

/* Live AI products (with their own sites) first, then the rest of the PyPI
   libraries. `site` + `status` drive the Live/Upcoming badge and link. */
const libraries = [
  {
    name: 'freeaiagent',
    fullName: 'Free Local AI Agent',
    desc:
      'Zero-setup local AI agent — run local LLMs (llamafile / GGUF) or Groq, Gemini and Ollama behind ' +
      'one HTTP API with sessions, streaming and tool use.',
    pip: 'pip install freeaiagent',
    site: 'freeaiagent.in',
    status: 'live',
    tags: ['LLM', 'AI Agent', 'Python'],
  },
  {
    name: 'plantdoc-predictor',
    fullName: 'PlantDoc — Plant Disease Predictor',
    desc:
      'Predict plant diseases from leaf images using trained deep-learning models — the productized ' +
      'successor to my SIH-winning plant-disease research.',
    pip: 'pip install plantdoc-predictor',
    site: 'plandocai.in',
    status: 'live',
    tags: ['Computer Vision', 'Deep Learning'],
  },
  {
    name: 'medivision',
    fullName: 'MediVision AI — Assisted X-ray Diagnosis',
    desc:
      'Medical-imaging AI for assisted X-ray diagnosis, building on my X-ray model-zoo work. Launching soon.',
    site: 'medivisionai.in',
    status: 'upcoming',
    tags: ['Medical AI', 'Computer Vision'],
  },
  {
    name: 'xrayzoo',
    fullName: 'X-ray Model Zoo',
    desc: 'A PyTorch model zoo for X-ray image classification across multiple medical imaging datasets.',
    pip: 'pip install xrayzoo',
    tags: ['Medical AI', 'PyTorch'],
  },
  {
    name: 'audiotimm',
    fullName: 'AudioTimm — Audio Model Hub',
    desc: 'The model hub for audio intelligence — a "timm" for audio classification.',
    pip: 'pip install audiotimm',
    tags: ['Audio AI', 'PyTorch'],
  },
  {
    name: 'aiaudio',
    fullName: 'AIAudio',
    desc: 'Audio processing meets audio intelligence — utilities for building audio ML pipelines.',
    pip: 'pip install aiaudio',
    tags: ['Audio AI', 'Python'],
  },
  {
    name: 'tokenfit',
    fullName: 'TokenFit — Context Selection for LLMs',
    desc:
      'Fit your whole repo into any small model\'s token window — smart context selection for free / small LLMs.',
    pip: 'pip install tokenfit',
    tags: ['LLM', 'Tooling'],
  },
  {
    name: 'runxmd',
    fullName: 'runxmd — Executable Markdown',
    desc: 'Add state and execution to your Markdown — .xmd is plain Markdown with a run-intent label.',
    pip: 'pip install runxmd',
    tags: ['Tooling', 'Developer'],
  },
  {
    name: 'cyberscanner',
    fullName: 'CyberScanner',
    desc:
      'Open-source vulnerability scanner for Python & JavaScript projects — available as a CLI and a Python library.',
    pip: 'pip install cyberscanner',
    tags: ['Security', 'CLI'],
  },
  {
    name: 'sdscmt',
    fullName: 'Secure Data SSL Certificate Management Tool',
    desc:
      'Generate and manage self-signed SSL certificates and private keys, with seamless conversion ' +
      'between PEM, DER and PKCS12 formats.',
    pip: 'pip install sdscmt',
    tags: ['Security', 'Python'],
  },
  {
    name: 'sdcfc',
    fullName: 'Secure Data Certificate Format Converter',
    desc:
      'Convert certificate and private-key files between PEM, DER and PKCS12 formats through a ' +
      'user-friendly interface.',
    pip: 'pip install sdcfc',
    tags: ['Security', 'Python'],
  },
];

function ProjectsInPortfolio() {
  return (
    <section className='section-block'>
      <h2 className='section-block-title'>Open Source · Libraries &amp; Products</h2>
      <p className='lib-intro'>
        10 packages published on{' '}
        <a
          href='https://pypi.org/user/subhamdivakar10/'
          target='_blank'
          rel='noopener noreferrer'
        >
          PyPI
        </a>{' '}
        — spanning AI agents, computer vision, audio intelligence and developer tooling.
      </p>

      <div className='timeline'>
        {libraries.map((lib) => (
          <div className='timeline-item' key={lib.name}>
            <div className='timeline-header'>
              <div>
                <h3 className='timeline-role'>{lib.name}</h3>
                <p className='timeline-company'>{lib.fullName}</p>
              </div>
              {lib.status === 'live' && <span className='lib-badge lib-badge-live'>● Live</span>}
              {lib.status === 'upcoming' && (
                <span className='lib-badge lib-badge-soon'>Upcoming</span>
              )}
            </div>

            <p className='timeline-desc'>{lib.desc}</p>

            <div className='timeline-tags'>
              {lib.tags.map((t) => (
                <span className='timeline-tag' key={t}>{t}</span>
              ))}
              {lib.pip && (
                <span className='timeline-tag' style={{ fontFamily: 'monospace' }}>{lib.pip}</span>
              )}
            </div>

            <div className='lib-links'>
              {lib.pip && (
                <a
                  className='lib-link'
                  href={`https://pypi.org/project/${lib.name}/`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View on PyPI <span className='lib-link-arrow'>↗</span>
                </a>
              )}
              {lib.site && (
                <a
                  className={`lib-link ${lib.status === 'upcoming' ? 'lib-link-soon' : 'lib-link-site'}`}
                  href={`https://${lib.site}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {lib.status === 'upcoming' ? `${lib.site} (soon)` : lib.site}{' '}
                  <span className='lib-link-arrow'>↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsInPortfolio;
