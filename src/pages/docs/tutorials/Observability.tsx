import React from 'react';
import DocPage from '../../../components/DocPage';

const Observability = () => {
  return (
    <DocPage
      title="Observability"
      description="Learn how to use K8sGPT's observability features to monitor and analyze your Kubernetes cluster"
      prev={{ title: 'Slack Integration', href: '/docs/tutorials/slack-integration' }}
      next={{ title: 'CLI Reference', href: '/docs/reference/cli-reference' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT provides comprehensive observability features to help you monitor, analyze, and troubleshoot
            your Kubernetes clusters. These features enable you to gain insights into cluster health, performance,
            and potential issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Metrics and Monitoring</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              K8sGPT collects and analyzes various metrics from your Kubernetes cluster:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Resource utilization (CPU, memory, storage)</li>
              <li>Pod and container health</li>
              <li>Network performance</li>
              <li>API server latency</li>
              <li>Node status and capacity</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Logging Integration</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              K8sGPT can integrate with your existing logging infrastructure:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Aggregate logs from pods and containers</li>
              <li>Correlate logs with Kubernetes events</li>
              <li>Identify patterns and anomalies</li>
              <li>Provide context for troubleshooting</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Tracing and Debugging</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Advanced tracing capabilities help you debug complex issues:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Request tracing across services</li>
              <li>Latency analysis</li>
              <li>Dependency mapping</li>
              <li>Error correlation</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Dashboards and Visualization</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              K8sGPT provides customizable dashboards for visualizing cluster data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Real-time metrics display</li>
              <li>Historical trend analysis</li>
              <li>Custom dashboard creation</li>
              <li>Export capabilities</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Alerting and Notifications</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Configure alerts based on various conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Threshold-based alerts</li>
              <li>Anomaly detection</li>
              <li>Multi-channel notifications</li>
              <li>Alert aggregation and deduplication</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Integration with Other Tools</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              K8sGPT can integrate with popular observability tools:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Prometheus and Grafana</li>
              <li>Elasticsearch and Kibana</li>
              <li>Jaeger and OpenTelemetry</li>
              <li>Datadog and New Relic</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Define clear observability objectives</li>
              <li>Collect relevant metrics only</li>
              <li>Set appropriate retention periods</li>
              <li>Regularly review and adjust alert thresholds</li>
              <li>Document observability setup and procedures</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              To get started with K8sGPT observability:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Configure metrics collection</li>
              <li>Set up logging integration</li>
              <li>Create initial dashboards</li>
              <li>Define alert rules</li>
              <li>Integrate with existing tools</li>
            </ol>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Observability; 