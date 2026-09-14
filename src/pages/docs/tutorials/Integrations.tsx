import { Link } from 'react-router-dom';
import DocPage from '../../../components/DocPage';
import { CodeBlock, SectionHeading } from '../../../components/DocBits';

const Integrations: React.FC = () => {
  return (
    <DocPage
      dark
      title="Integrations"
      description="Pull findings from the tools you already run — vulnerability scanners, policy engines, autoscalers, metrics — into K8sGPT analysis, so diagnosis sees the whole picture."
      prev={{ title: 'Auto-Remediation', href: '/docs/tutorials/auto-remediation' }}
      next={{ title: 'CLI Reference', href: '/docs/reference/cli' }}
      toc={[
        { id: 'how-they-work', title: 'How they work' },
        { id: 'cli', title: 'Use from the CLI' },
        { id: 'catalog', title: 'Integration catalog' },
        { id: 'operator', title: 'Enable in the operator' },
      ]}
    >
      <div className="space-y-16">
        <section id="how-they-work" className="scroll-mt-24">
          <SectionHeading
            index="Concept"
            title="How they work"
            body="Integrations are extra analyzers fed by external systems rather than the Kubernetes API. Once activated, their findings flow through the same pipeline as built-in analyzers: detected, optionally explained by your AI backend, recorded as Results, and routed to your sinks."
          />
        </section>

        <section id="cli" className="scroll-mt-24">
          <SectionHeading
            index="CLI"
            title="Use from the CLI"
            body="List what your build supports, activate what you need, then scope analysis to it with --filter."
          />
          <div className="mt-6 space-y-4">
            <CodeBlock
              label="integrations"
              code={[
                '# What is available in your build',
                'k8sgpt integrations list',
                '',
                '# Turn one or more on (and off again)',
                'k8sgpt integrations activate prometheus',
                'k8sgpt integrations deactivate prometheus',
                '',
                '# Analyze through the integration',
                'k8sgpt analyze --explain --filter=prometheus',
              ].join('\n')}
            />
            <p className="text-sm leading-relaxed text-fl-mute">
              Availability varies by release — <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">k8sgpt integrations list</code> is
              the source of truth for your binary.
            </p>
          </div>
        </section>

        <section id="catalog" className="scroll-mt-24">
          <SectionHeading
            index="Catalog"
            title="Integration catalog"
            body="The integrations shipped across recent releases. Check list output for the exact names in yours."
          />
          <div className="mt-6 divide-y divide-fl-line rounded-xl border border-fl-line bg-fl-panel">
            {[
              {
                name: 'Prometheus',
                body: 'Correlates alerts and metrics with cluster findings. Pair with the Prometheus + Grafana setup in the observability tutorial.',
                link: { to: '/docs/tutorials/observability', label: 'Observability tutorial' },
              },
              {
                name: 'Trivy',
                body: 'Surfaces image vulnerability scan results inside analysis, so a failing Pod can point at the CVE behind it. Also configurable directly on the operator CR.',
                link: null,
              },
              {
                name: 'Kyverno',
                body: 'Brings policy violations into the diagnosis loop — useful when a workload is blocked by admission policy rather than broken itself.',
                link: null,
              },
              {
                name: 'KEDA',
                body: 'Explains autoscaling-related findings from KEDA scalers alongside the workloads they drive.',
                link: null,
              },
              {
                name: 'AWS',
                body: 'Adds context from AWS services backing the cluster (e.g. load balancer and storage signals).',
                link: null,
              },
            ].map((item) => (
              <div key={item.name} className="p-6">
                <h3 className="font-mono text-[15px] font-semibold text-fl-ink">{item.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fl-mute">
                  {item.body}{' '}
                  {item.link && (
                    <Link to={item.link.to} className="font-medium text-fl-accent hover:underline">
                      {item.link.label} →
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="operator" className="scroll-mt-24">
          <SectionHeading
            index="Operator"
            title="Enable in the operator"
            body="Some integrations are configured on the K8sGPT custom resource instead of the CLI. Trivy is the documented example:"
          />
          <div className="mt-6 space-y-4">
            <CodeBlock
              label="k8sgpt.yaml"
              code={[
                'spec:',
                '  integrations:',
                '    trivy:',
                '      enabled: true',
                '      skipInstall: false',
                '      namespace: trivy-system',
              ].join('\n')}
            />
            <p className="leading-relaxed text-fl-mute">
              Full CR reference:{' '}
              <Link to="/docs/getting-started/operator-configuration" className="font-medium text-fl-accent hover:underline">
                Operator Configuration
              </Link>.
            </p>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Integrations;
