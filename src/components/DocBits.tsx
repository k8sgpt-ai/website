import { useState } from 'react';

export function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-fl-line bg-black/60">
      <div className="flex items-center justify-between border-b border-fl-line px-4 py-2">
        <span className="font-mono text-xs text-fl-mute">{label ?? 'terminal'}</span>
        <button
          onClick={copy}
          className="font-mono text-xs text-fl-mute hover:text-fl-accent"
          aria-label="Copy command to clipboard"
        >
          {copied ? 'copied' : 'copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-fl-ink">{code}</pre>
    </div>
  );
}

export function SectionHeading({ index, title, body, id }: { index: string; title: string; body?: string; id?: string }) {
  return (
    <div id={id}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-fl-accent">{index}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fl-ink">{title}</h2>
      {body && <p className="mt-3 leading-relaxed text-fl-mute">{body}</p>}
    </div>
  );
}
