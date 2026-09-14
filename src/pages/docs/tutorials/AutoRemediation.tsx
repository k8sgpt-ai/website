import { Link } from 'react-router-dom';
import DocPage from '../../../components/DocPage';
import { CodeBlock, SectionHeading } from '../../../components/DocBits';

const AutoRemediation: React.FC = () => {
  return (
    <DocPage
      dark
      title="Auto-Remediation"
      description="Let the K8sGPT operator go beyond diagnosis: propose a patch for a failing resource, apply it under a risk threshold you set, and watch until the issue clears."
      prev={{ title: 'Observability', href: '/docs/tutorials/observability' }}
      next={{ title: 'Integrations', href: '/docs/tutorials/integrations' }}
      toc={[
        { id: 'how-it-works', title: 'How it works' },
        { id: 'enable', title: 'Enable it' },
        { id: 'supported-resources', title: 'Supported resources' },
        { id: 'mutations', title: 'Follow a Mutation' },
        { id: 'safety', title: 'Safety notes' },
      ]}
    >
      <div className="space-y-16">
        <section id="how-it-works" className="scroll-mt-24">
          <SectionHeading
            index="Concept"
            title="How it works"
            body="Auto-remediation is an experimental, operator-only feature. The operator reads its own Result resources, and for every issue on a resource type you opted in, it calculates a patch, records the intent as a Mutation custom resource, applies the patch only if the similarity score clears your risk threshold, then watches the resource until the finding disappears — or persists."
          />
          <ol className="mt-6 space-y-3 text-[15px] leading-relaxed text-fl-mute">
            {[
              'Operator parses Results and finds resources with auto-remediation enabled.',
              'Creates a Mutation resource to track the remediation.',
              'Calculates a patch from the similarity score against the live resource.',
              'Applies the patch when the score clears your riskThreshold.',
              'Watches the resource until the issue resolves or persists.',
            ].map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-fl-accent text-[11px] text-fl-accent">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 leading-relaxed text-fl-mute">
            Background reading:{' '}
            <Link to="/auto-remediation" className="font-medium text-fl-accent hover:underline">
              the auto-remediation overview
            </Link>{' '}
            and the{' '}
            <Link to="/docs/getting-started/in-cluster-operator" className="font-medium text-fl-accent hover:underline">
              in-cluster operator guide
            </Link>.
          </p>
        </section>

        <section id="enable" className="scroll-mt-24">
          <SectionHeading
            index="Setup"
            title="Enable it"
            body="Auto-remediation is configured on the K8sGPT custom resource, under spec.ai.autoRemediation. It is off unless you opt in."
          />
          <div className="mt-6 space-y-4">
            <CodeBlock
              label="k8sgpt.yaml"
              code={[
                'apiVersion: core.k8sgpt.ai/v1alpha1',
                'kind: K8sGPT',
                'metadata:',
                '  name: k8sgpt',
                '  namespace: k8sgpt-operator-system',
                'spec:',
                '  ai:',
                '    enabled: true',
                '    backend: openai',
                '    autoRemediation:',
                '      enabled: true',
                '      riskThreshold: 90',
                '      resources:',
                '        - Pod',
                '        - Service',
                '        - Deployment',
              ].join('\n')}
            />
            <p className="leading-relaxed text-fl-mute">
              <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[13px] text-fl-ink">riskThreshold</code> is
              a similarity score (0–100). Higher means more conservative: only patches the operator is very confident
              about get applied. Start at 90 and lower it only once you trust the Mutations you see.
            </p>
          </div>
        </section>

        <section id="supported-resources" className="scroll-mt-24">
          <SectionHeading
            index="Scope"
            title="Supported resources"
            body="The feature is in alpha, so the opt-in list is deliberately short. Anything not listed is analyzed but never patched."
          />
          <div className="mt-6 rounded-xl border border-fl-line bg-fl-panel p-6">
            <ul className="space-y-2 text-[15px] text-fl-mute">
              <li><span className="font-mono text-[13px] text-fl-ink">Service</span> — e.g. selector/port mismatches with no endpoints.</li>
              <li><span className="font-mono text-[13px] text-fl-ink">Pod</span> owned by a ReplicaSet or Deployment.</li>
              <li><span className="font-mono text-[13px] text-fl-ink">Pod</span> static pods.</li>
            </ul>
          </div>
        </section>

        <section id="mutations" className="scroll-mt-24">
          <SectionHeading
            index="Observe"
            title="Follow a Mutation"
            body="Every remediation attempt is a first-class object. Mutations live in the same namespace as your K8sGPT resource and carry a finalizer, so they behave like any other Kubernetes state you can query, alert on, and eventually manage with GitOps."
          />
          <div className="mt-6 space-y-4">
            <CodeBlock
              label="observe"
              code={[
                '# What the operator wants to change (or changed)',
                'kubectl get mutations -n k8sgpt-operator-system',
                'kubectl describe mutation <name> -n k8sgpt-operator-system',
                '',
                '# Confirm the underlying finding cleared',
                'kubectl get results -n k8sgpt-operator-system',
              ].join('\n')}
            />
          </div>
        </section>

        <section id="safety" className="scroll-mt-24">
          <SectionHeading index="Warning" title="Safety notes" />
          <div className="mt-6 rounded-xl border border-fl-warn/40 bg-fl-warn/[0.06] p-6 text-[15px] leading-relaxed text-fl-mute">
            <p>
              <span className="font-semibold text-fl-ink">Highly experimental — not for production.</span> Remediation
              mutates live resources. Keep the resource list short, keep the threshold high, restrict the operator to a
              non-production namespace while you evaluate, and review Mutations before trusting them blindly. Diagnosis
              (analysis + Results + sinks) is safe to run everywhere; patching is the part that needs supervision.
            </p>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default AutoRemediation;
