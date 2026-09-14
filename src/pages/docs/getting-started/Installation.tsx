import { useState } from 'react';
import { Link } from 'react-router-dom';
import DocPage from '../../../components/DocPage';
import { CodeBlock, SectionHeading } from '../../../components/DocBits';

const RELEASES = 'https://github.com/k8sgpt-ai/k8sgpt/releases';
const OPERATOR_REPO = 'https://github.com/k8sgpt-ai/k8sgpt-operator';

const methods = [
  { id: 'brew', label: 'Homebrew', hint: 'macOS / Linux' },
  { id: 'linux', label: 'Linux packages', hint: '.deb / .rpm / .apk' },
  { id: 'windows', label: 'Windows', hint: 'binary release' },
  { id: 'docker', label: 'Docker', hint: 'no install' },
  { id: 'operator', label: 'Operator', hint: 'in-cluster · Helm' },
] as const;

type MethodId = (typeof methods)[number]['id'];

const Installation: React.FC = () => {
  const [active, setActive] = useState<MethodId>('brew');

  return (
    <DocPage
      dark
      title="Installation"
      description="Install the K8sGPT CLI on your machine, run it once with Docker, or deploy the operator into your cluster for continuous analysis."
      prev={{ title: 'Overview', href: '/docs/getting-started/overview' }}
      next={{ title: 'Configuration', href: '/docs/getting-started/configuration' }}
      toc={[
        { id: 'prerequisites', title: 'Prerequisites' },
        { id: 'install', title: 'Install K8sGPT' },
        { id: 'verify', title: 'Verify your installation' },
        { id: 'first-run', title: 'First analysis' },
        { id: 'mcp', title: 'AI assistant setup' },
        { id: 'troubleshooting', title: 'Troubleshooting' },
        { id: 'next-steps', title: 'Next steps' },
      ]}
    >
      <div className="space-y-16">
        {/* Prerequisites */}
        <section>
          <SectionHeading
            id="prerequisites"
            index="Before you start"
            title="Prerequisites"
            body="Everything installs in minutes. What you need depends on how you want to run K8sGPT."
          />
          <div className="mt-6 rounded-xl border border-fl-line bg-fl-panel p-6">
            <ul className="space-y-3 text-[15px] leading-relaxed text-fl-mute">
              <li>
                <span className="font-semibold text-fl-ink">A Kubernetes cluster you can reach.</span>{' '}
                <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">kubectl</code> must
                be installed and your kubeconfig pointing at the cluster (
                <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">kubectl cluster-info</code>{' '}
                should succeed). Required for the CLI, Docker and operator paths alike.
              </li>
              <li>
                <span className="font-semibold text-fl-ink">An AI backend — or none to start.</span> The default backend
                is OpenAI (you will need an API key), but you can also run fully local with Ollama or LocalAI, or
                connect a custom REST service. Analysis without <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">--explain</code> works
                with no backend at all.
              </li>
              <li>
                <span className="font-semibold text-fl-ink">Helm 3</span> — only if you are installing the in-cluster
                operator.
              </li>
            </ul>
          </div>
        </section>

        {/* Install methods */}
        <section>
          <SectionHeading
            id="install"
            index="Pick your path"
            title="Install K8sGPT"
            body="Five supported ways to install. Homebrew is the fastest on macOS and Linux; use the Helm chart for the in-cluster operator."
          />

          <div role="tablist" aria-label="Installation methods" className="mt-6 flex gap-2 overflow-x-auto pb-1">
            {methods.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={active === m.id}
                onClick={() => setActive(m.id)}
                className={`flex-shrink-0 rounded-lg border px-4 py-3 text-left transition ${
                  active === m.id
                    ? 'border-fl-accent/60 bg-fl-accent/[0.06]'
                    : 'border-fl-line hover:border-fl-mute/40'
                }`}
              >
                <div className="text-[15px] font-semibold text-fl-ink">{m.label}</div>
                <div className="font-mono text-[11px] text-fl-mute">{m.hint}</div>
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-6">
            {active === 'brew' && (
              <div className="space-y-4">
                <p className="leading-relaxed text-fl-mute">
                  The quickest route on macOS and Linux. The formula is in the official tap:
                </p>
                <CodeBlock label="brew" code="brew install k8sgpt" />
                <p className="leading-relaxed text-fl-mute">
                  If that fails to resolve the formula, tap explicitly first:
                </p>
                <CodeBlock
                  label="brew · explicit tap"
                  code={['brew tap k8sgpt-ai/k8sgpt', 'brew install k8sgpt'].join('\n')}
                />
                <div className="rounded-lg border border-fl-line bg-fl-panel p-4 text-sm leading-relaxed text-fl-mute">
                  <span className="font-semibold text-fl-ink">On WSL or Linux without build tools</span> — if brew
                  complains the formula must be built from source, install a compiler toolchain first:{' '}
                  <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">sudo apt-get update && sudo apt-get install build-essential</code>
                </div>
              </div>
            )}

            {active === 'linux' && (
              <div className="space-y-4">
                <p className="leading-relaxed text-fl-mute">
                  Grab the package for your distribution and architecture from the{' '}
                  <a href={RELEASES} target="_blank" rel="noopener noreferrer" className="font-medium text-fl-accent hover:underline">
                    Releases page
                  </a>{' '}
                  (substitute the asset matching your arch — shown here for 64-bit). Or download it directly:
                </p>
                <div>
                  <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-fl-mute">Debian / Ubuntu</h3>
                  <CodeBlock
                    label="deb"
                    code={[
                      'curl -LO https://github.com/k8sgpt-ai/k8sgpt/releases/latest/download/k8sgpt_amd64.deb',
                      'sudo dpkg -i k8sgpt_amd64.deb',
                    ].join('\n')}
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-fl-mute">RHEL / CentOS / Fedora</h3>
                  <CodeBlock
                    label="rpm"
                    code="sudo rpm -ivh https://github.com/k8sgpt-ai/k8sgpt/releases/latest/download/k8sgpt_amd64.rpm"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-fl-mute">Alpine</h3>
                  <CodeBlock
                    label="apk"
                    code={[
                      'wget https://github.com/k8sgpt-ai/k8sgpt/releases/latest/download/k8sgpt_amd64.apk',
                      'apk add --allow-untrusted k8sgpt_amd64.apk',
                    ].join('\n')}
                  />
                </div>
                <p className="text-sm leading-relaxed text-fl-mute">
                  32-bit builds are published as <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">k8sgpt_386.*</code> assets
                  on the same Releases page.
                </p>
              </div>
            )}

            {active === 'windows' && (
              <div className="space-y-4">
                <p className="leading-relaxed text-fl-mute">There is no installer yet — installation is a download:</p>
                <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-fl-mute">
                  <li>
                    Download the latest Windows archive for your architecture from the{' '}
                    <a href={RELEASES} target="_blank" rel="noopener noreferrer" className="font-medium text-fl-accent hover:underline">
                      Releases page
                    </a>.
                  </li>
                  <li>Extract it to a permanent location, e.g. <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">C:\k8sgpt</code>.</li>
                  <li>
                    Add that folder to your <span className="font-semibold text-fl-ink">PATH</span> environment variable
                    (System Properties → Environment Variables), then open a new terminal.
                  </li>
                </ol>
                <CodeBlock label="verify" code="k8sgpt version" />
              </div>
            )}

            {active === 'docker' && (
              <div className="space-y-4">
                <p className="leading-relaxed text-fl-mute">
                  Run without installing anything. Mount your kubeconfig read-only so the container can reach the
                  cluster:
                </p>
                <CodeBlock
                  label="docker"
                  code="docker run --rm -it -v ~/.kube:/root/.kube:ro k8sgpt/k8sgpt:latest analyze --explain"
                />
                <p className="text-sm leading-relaxed text-fl-mute">
                  Auth credentials live in the container unless you also mount a config volume — for day-to-day use,
                  prefer a native install.
                </p>
              </div>
            )}

            {active === 'operator' && (
              <div className="space-y-4">
                <p className="leading-relaxed text-fl-mute">
                  For continuous in-cluster analysis, install the operator with Helm (recommended — the raw manifests
                  in older guides are no longer the supported path):
                </p>
                <CodeBlock
                  label="helm"
                  code={[
                    'helm repo add k8sgpt https://charts.k8sgpt.ai',
                    'helm repo update',
                    'helm install release k8sgpt/k8sgpt-operator \\',
                    '  -n k8sgpt-operator-system --create-namespace',
                  ].join('\n')}
                />
                <CodeBlock
                  label="verify operator"
                  code="kubectl get pods -n k8sgpt-operator-system"
                />
                <p className="leading-relaxed text-fl-mute">
                  Next you will create a secret with your provider key and a{' '}
                  <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">K8sGPT</code>{' '}
                  custom resource — walked through step by step in the{' '}
                  <Link to="/docs/getting-started/in-cluster-operator" className="font-medium text-fl-accent hover:underline">
                    in-cluster operator guide
                  </Link>. Install details for every release live in{' '}
                  <a href={OPERATOR_REPO} target="_blank" rel="noopener noreferrer" className="font-medium text-fl-accent hover:underline">
                    k8sgpt-operator
                  </a>.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Verify */}
        <section>
          <SectionHeading
            id="verify"
            index="Check it worked"
            title="Verify your installation"
          />
          <div className="mt-6 space-y-4">
            <CodeBlock label="verify" code={['k8sgpt version', 'kubectl cluster-info'].join('\n')} />
            <p className="leading-relaxed text-fl-mute">
              <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">k8sgpt version</code> should
              print a version number. If the shell cannot find the binary, reopen the terminal (PATH change) or check
              where the package manager placed it. If <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">kubectl cluster-info</code> fails,
              fix your kubeconfig context before going further — every K8sGPT surface needs cluster access.
            </p>
          </div>
        </section>

        {/* First run */}
        <section>
          <SectionHeading
            id="first-run"
            index="First run"
            title="Authenticate and run your first analysis"
            body="K8sGPT scans with built-in SRE analyzers. Add --explain to have your AI backend turn raw findings into a diagnosis with next steps."
          />
          <div className="mt-6 space-y-4">
            <CodeBlock
              label="authenticate"
              code={[
                '# Interactive — prompts for your key',
                'k8sgpt auth add --backend openai --model gpt-4o-mini',
                '',
                '# List (and later remove) configured backends',
                'k8sgpt auth list',
              ].join('\n')}
            />
            <CodeBlock
              label="analyze"
              code={[
                '# Scan the whole cluster, AI explanations on, identifiers masked',
                'k8sgpt analyze --explain --anonymize',
                '',
                '# Scope it down while you learn',
                'k8sgpt analyze --explain --filter=Pod,Service --namespace=default',
              ].join('\n')}
            />
            <div className="rounded-xl border border-fl-line bg-fl-panel p-6 text-[15px] leading-relaxed text-fl-mute">
              <p>
                <span className="font-semibold text-fl-ink">Prefer local and private?</span> Point K8sGPT at Ollama
                instead of a cloud API — nothing leaves your machine. See the{' '}
                <Link to="/docs/tutorials/ollama" className="font-medium text-fl-accent hover:underline">
                  Ollama tutorial
                </Link>{' '}
                and the full{' '}
                <Link to="/docs/reference/providers" className="font-medium text-fl-accent hover:underline">
                  AI providers reference
                </Link>{' '}
                (14 backends: OpenAI, Azure OpenAI, Bedrock, SageMaker, Vertex AI, Gemini, Groq, Cohere, OCI, watsonx,
                Hugging Face, Ollama, LocalAI and custom REST).
              </p>
            </div>
          </div>
        </section>

        {/* MCP signpost */}
        <section>
          <SectionHeading
            id="mcp"
            index="Third surface"
            title="Using K8sGPT from an AI assistant?"
            body="No separate install — the CLI you just installed also serves the Model Context Protocol."
          />
          <div className="mt-6 space-y-4">
            <CodeBlock
              label="mcp"
              code={[
                '# stdio — for Claude Desktop and other local assistants',
                'k8sgpt serve --mcp',
                '',
                '# HTTP — for network clients and webhooks',
                'k8sgpt serve --mcp --mcp-http --mcp-port 8089',
              ].join('\n')}
            />
            <p className="leading-relaxed text-fl-mute">
              Full tool, resource and prompt reference:{' '}
              <Link to="/docs/reference/mcp" className="font-medium text-fl-accent hover:underline">
                MCP server docs
              </Link>.
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <SectionHeading id="troubleshooting"
            index="Stuck?" title="Troubleshooting" />
          <div className="mt-6 divide-y divide-fl-line rounded-xl border border-fl-line bg-fl-panel">
            {[
              {
                q: 'k8sgpt: command not found after install',
                a: 'Your shell has a stale PATH. Open a new terminal, or run `which k8sgpt` / `where k8sgpt` to confirm the binary location is on PATH.',
              },
              {
                q: 'Homebrew wants to build from source on Linux/WSL',
                a: 'Install a compiler toolchain (`sudo apt-get update && sudo apt-get install build-essential`) and retry. Prebuilt bottles cover most setups; source builds need gcc/clang.',
              },
              {
                q: 'Connection refused / Unable to connect to the server',
                a: 'K8sGPT uses your kubeconfig. Check `kubectl cluster-info` and `kubectl config current-context` — VPNs, expired certs and wrong contexts are the usual culprits.',
              },
              {
                q: 'Auth / backend errors on --explain',
                a: 'Run `k8sgpt auth list` to confirm the backend, re-add it with `k8sgpt auth remove` + `k8sgpt auth add`, and verify the key works directly against the provider.',
              },
            ].map((item) => (
              <div key={item.q} className="p-6">
                <h3 className="font-semibold text-fl-ink">{item.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fl-mute">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next steps */}
        <section>
          <SectionHeading id="next-steps"
            index="Keep going" title="Next steps" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                to: '/docs/getting-started/configuration',
                title: 'Configure the CLI',
                body: 'Backends, filters, caching and output formats.',
              },
              {
                to: '/docs/reference/providers',
                title: 'Pick an AI provider',
                body: 'Cloud, local or fully custom backends.',
              },
              {
                to: '/docs/getting-started/in-cluster-operator',
                title: 'Deploy the operator',
                body: 'Continuous analysis, sinks and auto-remediation.',
              },
              {
                to: '/docs/reference/mcp',
                title: 'Connect an assistant',
                body: 'Expose the cluster over MCP.',
              },
            ].map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="rounded-xl border border-fl-line bg-fl-panel p-6 transition hover:border-fl-accent/50"
              >
                <div className="font-semibold text-fl-ink">{card.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-fl-mute">{card.body}</p>
                <span className="mt-4 inline-block text-sm font-medium text-fl-accent">Read more →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Installation;
