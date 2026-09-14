import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  adopters, cliTranscript, commands, defaultAnalyzers, integrations, links, mcpClaudeConfig,
  operatorYaml, optionalAnalyzers, providers, videos,
} from '../home/content';
import { useCopy, useGoogleFonts, usePrefersReducedMotion } from '../home/hooks';

/*
 * Homepage: dark, terminal-native. The product is the hero (a live CLI session),
 * followed by an interactive walk through the operator's reconcile loop tied to real YAML.
 */

const FONTS = 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap';

const css = `
.ns { --fl-bg:6 8 12; --fl-panel:12 16 23; --fl-line:26 33 44; --fl-ink:231 237 244; --fl-mute:133 145 163; --fl-accent:49 206 232; --fl-accent2:51 165 242; --fl-warn:255 181 71; --fl-bad:255 107 107; --fl-good:70 227 166;
  background:rgb(var(--fl-bg)); color:rgb(var(--fl-ink)); font-family:Geist, ui-sans-serif, system-ui, sans-serif; }
.ns .mono { font-family:'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace; }
.ns-grid { background-image:linear-gradient(rgb(var(--fl-line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--fl-line)) 1px, transparent 1px); background-size:56px 56px; mask-image:radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%); }
.ns-glow { background:radial-gradient(600px 300px at 70% 20%, rgba(49,206,232,.18), transparent 70%), radial-gradient(500px 280px at 20% 60%, rgba(51,165,242,.12), transparent 70%); }
.ns-caret { display:inline-block; width:.55em; height:1.1em; background:rgb(var(--fl-accent)); vertical-align:-2px; animation:ns-blink 1s steps(1) infinite; }
@keyframes ns-blink { 50% { opacity:0 } }
@keyframes ns-marquee { to { transform:translateX(-50%) } }
.ns-marquee { animation:ns-marquee 40s linear infinite; }
@keyframes ns-flow { to { stroke-dashoffset:-24 } }
.ns-flow { stroke-dasharray:4 8; animation:ns-flow 1.2s linear infinite; }
@media (prefers-reduced-motion: reduce) { .ns-marquee, .ns-flow, .ns-caret { animation:none } }
`;

function Terminal() {
  const reduced = usePrefersReducedMotion();
  const cmd = cliTranscript[0].text;
  const [typed, setTyped] = useState(reduced ? cmd.length : 0);
  const [shown, setShown] = useState(reduced ? cliTranscript.length : 1);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    const timers: number[] = [];
    const run = () => {
      setTyped(0);
      setShown(1);
      for (let i = 1; i <= cmd.length; i++) timers.push(window.setTimeout(() => !cancelled && setTyped(i), 400 + i * 38));
      const start = 400 + cmd.length * 38 + 350;
      for (let l = 2; l <= cliTranscript.length; l++) timers.push(window.setTimeout(() => !cancelled && setShown(l), start + l * 170));
      timers.push(window.setTimeout(() => !cancelled && run(), start + cliTranscript.length * 170 + 5000));
    };
    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [cmd, reduced]);

  const color: Record<string, string> = {
    dim: 'text-fl-mute', head: 'text-fl-ink font-semibold', err: 'text-fl-bad', ai: 'text-fl-good', blank: '',
  };

  return (
    <div className="rounded-xl border border-fl-line bg-fl-panel/90 shadow-[0_0_0_1px_rgba(255,255,255,.02),0_40px_120px_-20px_rgba(49,206,232,.25)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-fl-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mono ml-3 text-xs text-fl-mute">~/prod-eu-west · zsh</span>
      </div>
      <div className="mono h-[380px] overflow-hidden px-5 py-4 text-[12.5px] leading-[1.7] sm:text-[13px]">
        <div>
          <span className="text-fl-accent">❯ </span>
          {cmd.slice(0, typed)}
          {shown === 1 && <span className="ns-caret ml-0.5" />}
        </div>
        {cliTranscript.slice(1, shown).map((line, i) => (
          <div key={i} className={`${color[line.t]} whitespace-pre-wrap break-words`}>{line.text || ' '}</div>
        ))}
        {shown >= cliTranscript.length && (
          <div className="mt-1"><span className="text-fl-accent">❯ </span><span className="ns-caret" /></div>
        )}
      </div>
    </div>
  );
}

function CopyCommand({ text }: { text: string }) {
  const { copied, copy } = useCopy();
  return (
    <button
      onClick={() => copy(text)}
      className="mono group inline-flex items-center gap-3 rounded-lg border border-fl-line bg-fl-panel px-4 py-3 text-sm text-fl-ink hover:border-fl-accent/50"
    >
      <span className="text-fl-accent">$</span>
      {text}
      <span className="text-xs text-fl-mute group-hover:text-fl-accent">{copied === text ? 'copied' : 'copy'}</span>
    </button>
  );
}

const modes = [
  {
    id: 'cli',
    label: 'CLI',
    kicker: 'On your laptop',
    title: 'Triage any cluster in one command.',
    body: 'Point k8sgpt at a kubeconfig. Built-in analyzers codify SRE know-how, and --explain turns raw errors into a diagnosis and next steps from the backend of your choice.',
    code: `${commands.brew}\n${commands.auth}\n${commands.analyze} --filter=Pod,Service`,
    cta: { label: 'Install the CLI', to: links.install },
  },
  {
    id: 'operator',
    label: 'Operator',
    kicker: 'In your cluster',
    title: 'Continuous analysis, stored as Kubernetes resources.',
    body: 'The operator runs K8sGPT on a loop inside the cluster. Findings land as Result custom resources, stream to Slack, expose Prometheus metrics, and can drive guarded auto-remediation.',
    code: commands.helm,
    cta: { label: 'Deploy the operator', to: links.operatorDocs },
  },
  {
    id: 'mcp',
    label: 'MCP',
    kicker: 'In your AI assistant',
    title: 'Give Claude and friends a Kubernetes toolbelt.',
    body: 'k8sgpt serve --mcp exposes analysis, resources, logs, events and analyzer control over the Model Context Protocol, in stdio mode for desktop assistants or HTTP for everything else.',
    code: mcpClaudeConfig,
    cta: { label: 'Connect an assistant', to: links.mcpDocs },
  },
];

function Modes() {
  const [active, setActive] = useState(0);
  const m = modes[active];
  return (
    <section id="modes" className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <p className="mono text-xs uppercase tracking-[.25em] text-fl-accent">One engine · three surfaces</p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Start in your terminal. Graduate to autopilot.</h2>
      <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
        <div role="tablist" className="flex gap-2 overflow-x-auto lg:flex-col">
          {modes.map((mode, i) => (
            <button
              key={mode.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 rounded-xl border px-5 py-4 text-left transition ${
                i === active ? 'border-fl-accent/60 bg-fl-accent/[.06]' : 'border-fl-line hover:border-fl-mute/40'
              }`}
            >
              <div className="mono text-[11px] uppercase tracking-widest text-fl-mute">{mode.kicker}</div>
              <div className="mt-1 text-lg font-semibold">{mode.label}</div>
            </button>
          ))}
        </div>
        <div className="grid gap-8 rounded-2xl border border-fl-line bg-fl-panel p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{m.title}</h3>
            <p className="mt-4 leading-relaxed text-fl-mute">{m.body}</p>
            <Link to={m.cta.to} className="mt-8 inline-flex items-center gap-2 font-medium text-fl-accent hover:underline">
              {m.cta.label} →
            </Link>
          </div>
          <pre className="mono overflow-x-auto rounded-xl border border-fl-line bg-black/50 p-5 text-[13px] leading-relaxed text-fl-ink">{m.code}</pre>
        </div>
      </div>
    </section>
  );
}

const yamlLines = operatorYaml.split('\n');

const stages = [
  { id: 'watch', label: 'Watch', title: 'Reconcile the K8sGPT resource', body: 'Declare what you want once. The operator deploys K8sGPT and runs every enabled analyzer against the cluster on an interval.', lines: [0, 5], out: '$ kubectl get k8sgpt -A\nNAMESPACE                NAME     AGE\nk8sgpt-operator-system   k8sgpt   14d' },
  { id: 'explain', label: 'Explain', title: 'Diagnose with any backend, anonymized', body: 'Findings are masked before they leave the cluster and explained by the provider you choose, from OpenAI to a local Ollama model.', lines: [6, 13], out: '- Error: Back-off pulling image "checkout-api:v2.1"\n  → Tag v2.1 does not exist. Pin a published tag.' },
  { id: 'record', label: 'Record', title: 'Findings become Result CRs', body: 'Every issue is a first-class Kubernetes object: queryable with kubectl, watchable by controllers, and ready for GitOps and dashboards.', lines: [] as number[], out: '$ kubectl get results -n k8sgpt-operator-system\nNAME                         KIND      BACKEND\ndefaultcheckoutapi7d9f8      Pod       openai\ndefaultpayments              Service   openai' },
  { id: 'notify', label: 'Notify', title: 'Route to where your team lives', body: 'Sinks push new results to Slack or Mattermost the moment they appear, and a ServiceMonitor exposes metrics to Prometheus and Grafana.', lines: [17, 19], out: '#prod-alerts  K8sGPT  02:14\n🔴 Pod default/checkout-api-7d9f8\nTag v2.1 not found. Suggested: pin v2.0.3' },
  { id: 'remediate', label: 'Remediate', title: 'Guarded auto-remediation', body: 'Opt in per resource type. The operator proposes a patch as a Mutation, applies it only under your risk threshold, and watches until the issue clears.', lines: [14, 16], out: '$ kubectl get mutations -n k8sgpt-operator-system\nNAME                      RESOURCE   PHASE\ncheckout-api-7d9f8-img    Pod        Resolved' },
];

function ReconcileLoop() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced || paused) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % stages.length), 4200);
    return () => clearInterval(t);
  }, [reduced, paused]);

  const s = stages[active];
  const hl = (i: number) => s.lines.length === 2 && i >= s.lines[0] && i <= s.lines[1];

  return (
    <section id="operator" className="relative overflow-hidden border-y border-fl-line bg-fl-panel/60">
      <div className="ns-glow pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono text-xs uppercase tracking-[.25em] text-fl-accent">K8sGPT Operator</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">The SRE that never goes off shift.</h2>
          </div>
          <p className="max-w-md text-fl-mute">One custom resource turns K8sGPT into a control loop: watch, explain, record, notify and, when you allow it, fix.</p>
        </div>

        <div
          className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ol className="relative space-y-2">
            <svg className="absolute left-[27px] top-6 hidden h-[calc(100%-48px)] w-1 sm:block" preserveAspectRatio="none" viewBox="0 0 2 100" aria-hidden>
              <line x1="1" y1="0" x2="1" y2="100" stroke="rgb(var(--fl-accent))" strokeOpacity=".5" strokeWidth="2" className="ns-flow" vectorEffect="non-scaling-stroke" />
            </svg>
            {stages.map((stage, i) => (
              <li key={stage.id}>
                <button
                  onClick={() => setActive(i)}
                  className={`relative flex w-full gap-5 rounded-xl border p-4 text-left transition ${
                    i === active ? 'border-fl-accent/50 bg-fl-bg' : 'border-transparent hover:bg-white/[.02]'
                  }`}
                >
                  <span
                    className={`mono relative z-10 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-[11px] ${
                      i === active ? 'border-fl-accent bg-fl-accent text-black' : 'border-fl-line bg-fl-panel text-fl-mute'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className="mono text-[11px] uppercase tracking-widest text-fl-mute">{stage.label}</span>
                    <span className="mt-0.5 block font-semibold">{stage.title}</span>
                    {i === active && <span className="mt-2 block text-sm leading-relaxed text-fl-mute">{stage.body}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="space-y-4">
            <div className="rounded-xl border border-fl-line bg-black/60">
              <div className="mono flex items-center justify-between border-b border-fl-line px-4 py-2.5 text-xs text-fl-mute">
                <span>k8sgpt.yaml</span>
                <span className="text-fl-accent">kubectl apply -f</span>
              </div>
              <pre className="mono overflow-x-auto py-3 text-[12.5px] leading-[1.65]">
                {yamlLines.map((line, i) => (
                  <div
                    key={i}
                    className={`flex px-4 transition-colors duration-300 ${hl(i) ? 'bg-fl-accent/10 text-fl-ink' : s.lines.length ? 'text-fl-mute/60' : 'text-fl-mute'}`}
                  >
                    <span className="mr-4 w-5 select-none text-right text-fl-mute/40">{i + 1}</span>
                    <span className={hl(i) ? 'border-l-2 border-fl-accent -ml-[2px] pl-0' : ''}>{line}</span>
                  </div>
                ))}
              </pre>
            </div>
            <pre className="mono min-h-[110px] overflow-x-auto rounded-xl border border-fl-line bg-fl-bg p-4 text-[12.5px] leading-relaxed text-fl-good">{s.out}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Analyzers() {
  const [showOptional, setShowOptional] = useState(true);
  const list = [...defaultAnalyzers.map((n) => ({ n, opt: false })), ...(showOptional ? optionalAnalyzers.map((n) => ({ n, opt: true })) : [])];
  return (
    <section id="analyzers" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="mono text-xs uppercase tracking-[.25em] text-fl-accent">Analyzers</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">SRE experience, codified.</h2>
          <p className="mt-4 leading-relaxed text-fl-mute">
            {defaultAnalyzers.length + optionalAnalyzers.length} built-in analyzers run without any AI at all. Add your own in any language over gRPC, or pull in findings from Trivy, Prometheus, Kyverno, KEDA and AWS.
          </p>
          <label className="mt-8 flex cursor-pointer items-center gap-3 text-sm">
            <input type="checkbox" checked={showOptional} onChange={(e) => setShowOptional(e.target.checked)} className="accent-fl-accent" />
            Include opt-in analyzers
          </label>
          <Link to={links.customAnalyzers} className="mt-6 inline-block font-medium text-fl-accent hover:underline">Write a custom analyzer →</Link>
        </div>
        <div className="flex flex-wrap content-start gap-2">
          {list.map(({ n, opt }) => (
            <span
              key={n}
              className={`mono rounded-md border px-3 py-1.5 text-[13px] ${opt ? 'border-dashed border-fl-line text-fl-mute' : 'border-fl-line bg-fl-panel'}`}
            >
              {n}
            </span>
          ))}
          {integrations.map((n) => (
            <span key={n} className="mono rounded-md border border-fl-accent2/30 bg-fl-accent2/[.07] px-3 py-1.5 text-[13px] text-fl-accent2">
              integration/{n.toLowerCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const guardrails = [
  { flag: '--anonymize', title: 'Mask before it leaves', body: 'Names and identifiers are masked before a prompt is sent, then restored in the answer.' },
  { flag: '--backend ollama', title: 'Keep it local', body: 'Run fully air-gapped with Ollama, LocalAI or your own REST backend.' },
  { flag: '--filter Pod,Service', title: 'Scope precisely', body: 'Choose exactly which analyzers and namespaces are in play.' },
  { flag: 'riskThreshold: 90', title: 'Fix only what is safe', body: 'Auto-remediation is opt-in and gated by a risk threshold you set.' },
];

export default function Home() {
  useGoogleFonts(FONTS);
  const allProviders = [...providers.cloud, ...providers.local];

  return (
    <div className="ns min-h-screen antialiased">
      <style>{css}</style>

      <header className="sticky top-0 z-50 border-b border-fl-line bg-fl-bg/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/images/k8sgpt-icon.svg" alt="" className="h-7 w-7" />
            <span className="text-[17px] font-semibold tracking-tight">k8sgpt</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-fl-mute md:flex">
            <a href="#modes" className="hover:text-fl-ink">Product</a>
            <a href="#operator" className="hover:text-fl-ink">Operator</a>
            <a href="#analyzers" className="hover:text-fl-ink">Analyzers</a>
            <a href="#guardrails" className="hover:text-fl-ink">Guardrails</a>
            <Link to={links.docs} className="hover:text-fl-ink">Docs</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a href={links.github} className="hidden rounded-lg px-3 py-2 text-sm text-fl-mute hover:text-fl-ink sm:block">GitHub</a>
            <Link to={links.install} className="rounded-lg bg-fl-ink px-4 py-2 text-sm font-semibold text-black hover:bg-white">Get started</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="ns-grid pointer-events-none absolute inset-0" />
        <div className="ns-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8 lg:pt-28">
          <div>
            <a href="#operator" className="mono inline-flex items-center gap-2 rounded-full border border-fl-line bg-fl-panel px-3 py-1 text-xs text-fl-mute hover:text-fl-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-fl-good" /> CNCF Sandbox · Operator + MCP server
            </a>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-.035em] sm:text-6xl lg:text-7xl">
              Your cluster,<br />
              <span className="bg-gradient-to-r from-fl-accent to-fl-accent2 bg-clip-text text-transparent">explained.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-fl-mute">
              K8sGPT scans Kubernetes with SRE-grade analyzers, explains what is broken in plain English, and runs in-cluster as an operator that can notify, record and fix.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CopyCommand text={commands.brew} />
              <a href={links.github} className="rounded-lg border border-fl-line px-4 py-3 text-sm font-medium hover:border-fl-mute/50">★ Star on GitHub</a>
            </div>
          </div>
          <Terminal />
        </div>
      </section>

      {/* Proof strip */}
      <div className="border-y border-fl-line">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-fl-line md:grid-cols-4">
          {[
            [`${defaultAnalyzers.length + optionalAnalyzers.length}`, 'built-in analyzers'],
            [`${allProviders.length}`, 'AI backends, cloud or local'],
            ['3', 'surfaces: CLI, operator, MCP'],
            ['100%', 'open source, Apache 2.0'],
          ].map(([n, l]) => (
            <div key={l} className="px-4 py-7 sm:px-8">
              <div className="text-3xl font-semibold tracking-tight">{n}</div>
              <div className="mono mt-1 text-xs text-fl-mute">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <Modes />
      <ReconcileLoop />
      <Analyzers />

      {/* Guardrails */}
      <section id="guardrails" className="border-t border-fl-line">
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <p className="mono text-xs uppercase tracking-[.25em] text-fl-accent">Guardrails</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Powerful by default. Safe by design.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-fl-line bg-fl-line sm:grid-cols-2 lg:grid-cols-4">
            {guardrails.map((g) => (
              <div key={g.flag} className="bg-fl-bg p-7">
                <code className="mono rounded bg-fl-accent/10 px-2 py-1 text-[13px] text-fl-accent">{g.flag}</code>
                <h3 className="mt-6 text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fl-mute">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers marquee */}
      <section id="providers" className="overflow-hidden border-y border-fl-line py-10">
        <div className="ns-marquee flex w-max gap-12 whitespace-nowrap">
          {[...allProviders, ...allProviders].map((p, i) => (
            <span key={i} className="mono text-lg text-fl-mute">
              <span className="mr-3 text-fl-accent">◆</span>{p}
            </span>
          ))}
        </div>
      </section>

      {/* Community */}
      <section id="community" className="border-b border-fl-line">
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mono text-xs uppercase tracking-[.25em] text-fl-accent">Community</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">See it in action.</h2>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <a href={links.membership} className="rounded-lg border border-fl-line px-4 py-2 hover:border-fl-mute/50">Become a member</a>
              <a href={links.community} className="rounded-lg border border-fl-line px-4 py-2 hover:border-fl-mute/50">Office hours</a>
              <a href={links.slack} className="rounded-lg border border-fl-line px-4 py-2 hover:border-fl-mute/50">Slack</a>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-fl-line bg-fl-panel">
                  <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover opacity-70 transition group-hover:scale-[1.03] group-hover:opacity-100" />
                  <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-fl-bg/80 text-fl-accent ring-1 ring-fl-line transition group-hover:bg-fl-accent group-hover:text-black">▶</span>
                </div>
                <div className="mt-3 text-sm font-medium group-hover:text-fl-accent">{v.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="ns-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Stop grepping. Start knowing.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-fl-mute">Free, open source, and trusted by teams at {adopters.join(', ')} and across the CNCF community.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to={links.install} className="rounded-lg bg-fl-accent px-6 py-3 font-semibold text-black hover:brightness-110">Install K8sGPT</Link>
            <Link to={links.operatorDocs} className="rounded-lg border border-fl-line px-6 py-3 font-medium hover:border-fl-mute/50">Deploy the operator</Link>
            <a href={links.slack} className="rounded-lg border border-fl-line px-6 py-3 font-medium hover:border-fl-mute/50">Join Slack</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-fl-line">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-fl-mute sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="mono">k8sgpt · a CNCF Sandbox project</span>
            <div className="flex flex-wrap gap-6">
              <a href={links.github} className="hover:text-fl-ink">GitHub</a>
              <a href={links.operator} className="hover:text-fl-ink">Operator</a>
              <a href={links.community} className="hover:text-fl-ink">Community</a>
              <Link to="/roadmap" className="hover:text-fl-ink">Roadmap</Link>
              <Link to={links.docs} className="hover:text-fl-ink">Docs</Link>
            </div>
          </div>
          <p className="mt-8 text-xs leading-relaxed">
            Copyright K8sGPT a Series of LF Projects, LLC. For website terms of use, trademark policy and other project policies please see{' '}
            <a href={links.lfPolicies} target="_blank" rel="noopener noreferrer" className="underline hover:text-fl-ink">lfprojects.org/policies</a>.
          </p>
        </div>
      </footer>

    </div>
  );
}
