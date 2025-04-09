import DocPage from '../../../components/DocPage';

const CustomAnalyzers = () => {
  return (
    <DocPage
      title="Custom Analyzers"
      description="Learn how to create and use custom analyzers with K8sGPT"
      prev={{ title: 'Playground', href: '/docs/tutorials/playground' }}
      next={{ title: 'Slack Integration', href: '/docs/tutorials/slack-integration' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            Custom analyzers allow you to extend K8sGPT's capabilities by creating your own analysis rules
            and checks. This enables you to add domain-specific knowledge and custom validation logic
            to your Kubernetes cluster analysis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Creating a Custom Analyzer</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Custom analyzers are written in Go and follow a simple interface. Here's a basic example:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`package analyzers

import (
    "context"
    "fmt"
    "k8s.io/client-go/kubernetes"
)

type CustomAnalyzer struct {
    client *kubernetes.Clientset
}

func (a *CustomAnalyzer) Analyze(ctx context.Context) ([]Analysis, error) {
    // Your analysis logic here
    return []Analysis{
        {
            Name: "custom-check",
            Message: "Custom analysis result",
            Severity: "warning",
        },
    }, nil
}`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Analyzer Interface</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Every custom analyzer must implement the following interface:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">Analyze(ctx context.Context) ([]Analysis, error)</code></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">Name() string</code></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">Description() string</code></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              To use your custom analyzer:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Build your analyzer as a Go plugin</li>
              <li>Place the plugin in the analyzers directory</li>
              <li>Configure K8sGPT to load your analyzer</li>
              <li>Enable the analyzer in your analysis configuration</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Keep analyzers focused and single-purpose</li>
              <li>Include clear documentation and examples</li>
              <li>Handle errors gracefully</li>
              <li>Use appropriate severity levels</li>
              <li>Test thoroughly before deploying</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Example Use Cases</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Custom resource validation rules</li>
              <li>Organization-specific best practices</li>
              <li>Integration with internal tools</li>
              <li>Specialized security checks</li>
              <li>Performance optimization rules</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              After creating your custom analyzer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Test it in the playground</li>
              <li>Deploy it to your cluster</li>
              <li>Monitor its performance</li>
              <li>Share it with the community</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default CustomAnalyzers; 