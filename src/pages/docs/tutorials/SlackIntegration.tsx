import DocPage from '../../../components/DocPage';

const SlackIntegration = () => {
  return (
    <DocPage
      title="Slack Integration"
      description="Learn how to integrate K8sGPT with Slack for automated Kubernetes insights"
      prev={{ title: 'Custom Analyzers', href: '/docs/tutorials/custom-analyzers' }}
      next={{ title: 'Overview', href: '/docs/getting-started/overview' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            The Slack integration allows you to receive K8sGPT analysis results directly in your Slack channels.
            This enables real-time monitoring and quick response to Kubernetes cluster issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>K8sGPT installed and configured in your cluster</li>
              <li>Slack workspace with admin permissions</li>
              <li>Slack app created with appropriate permissions</li>
              <li>Slack Bot User OAuth Token</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Setting Up Slack</h2>
          <div className="space-y-4">
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Create a new Slack app at <a href="https://api.slack.com/apps" className="text-indigo-600 hover:text-indigo-500">api.slack.com/apps</a></li>
              <li>Add the following bot token scopes:
                <ul className="list-disc pl-6 mt-2">
                  <li><code className="bg-gray-100 px-2 py-1 rounded">chat:write</code></li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">channels:read</code></li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">channels:join</code></li>
                </ul>
              </li>
              <li>Install the app to your workspace</li>
              <li>Copy the Bot User OAuth Token</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Configuring K8sGPT</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Add the following configuration to your K8sGPT deployment:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: v1
kind: Secret
metadata:
  name: k8sgpt-slack-secret
type: Opaque
stringData:
  SLACK_TOKEN: "xoxb-your-token"
  SLACK_CHANNEL: "#kubernetes-alerts"`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Real-time analysis notifications</li>
              <li>Customizable message formatting</li>
              <li>Multiple channel support</li>
              <li>Severity-based notifications</li>
              <li>Interactive message actions</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Message Format</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              K8sGPT messages in Slack include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Issue severity and description</li>
              <li>Affected resources</li>
              <li>Recommended actions</li>
              <li>Links to relevant documentation</li>
              <li>Timestamp and cluster information</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Use dedicated channels for different severity levels</li>
              <li>Configure notification frequency to avoid alert fatigue</li>
              <li>Set up proper access controls for the Slack app</li>
              <li>Regularly rotate the Slack token</li>
              <li>Monitor the integration's performance</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Common issues and solutions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Check Slack token permissions and validity</li>
              <li>Verify channel names and access</li>
              <li>Ensure proper network connectivity</li>
              <li>Check K8sGPT logs for errors</li>
              <li>Verify Slack app installation status</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default SlackIntegration; 