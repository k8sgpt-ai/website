import React from 'react';
import DocPage from '../../../components/DocPage';

const Observability: React.FC = () => {
  return (
    <DocPage
      title="Observability"
      description="Learn how to integrate Prometheus and Grafana with K8sGPT"
      prev={{ title: "Custom Rest Backend", href: "/docs/tutorials/custom-rest-backend" }}
      next={{ title: "CLI Reference", href: "/docs/reference/cli" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT provides comprehensive observability features that allow you to monitor and analyze your Kubernetes clusters effectively. This tutorial will guide you through setting up Prometheus and Grafana integration with K8sGPT.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>K8sGPT installed in your cluster</li>
            <li>Prometheus and Grafana installed in your cluster</li>
            <li>Access to your cluster's monitoring stack</li>
            <li>Basic understanding of Kubernetes metrics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Metrics and Monitoring</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT exposes several metrics that can be collected by Prometheus:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm">
              <code>
{`# HELP k8sgpt_analysis_duration_seconds Duration of K8sGPT analysis
# TYPE k8sgpt_analysis_duration_seconds histogram
k8sgpt_analysis_duration_seconds_bucket{le="0.1"} 0
k8sgpt_analysis_duration_seconds_bucket{le="0.5"} 0
k8sgpt_analysis_duration_seconds_bucket{le="1"} 0
k8sgpt_analysis_duration_seconds_bucket{le="+Inf"} 0
k8sgpt_analysis_duration_seconds_sum 0
k8sgpt_analysis_duration_seconds_count 0

# HELP k8sgpt_issues_total Total number of issues found
# TYPE k8sgpt_issues_total counter
k8sgpt_issues_total{severity="critical"} 0
k8sgpt_issues_total{severity="warning"} 0`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Setting Up Prometheus</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-600">
            <li>
              <strong>Configure ServiceMonitor:</strong> Create a ServiceMonitor resource to tell Prometheus to scrape K8sGPT metrics.
            </li>
            <li>
              <strong>Verify Metrics Collection:</strong> Check that Prometheus is collecting K8sGPT metrics.
            </li>
            <li>
              <strong>Set Up Alerting Rules:</strong> Configure alerting rules based on K8sGPT metrics.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Grafana Dashboards</h2>
          <p className="text-gray-600 mb-4">
            Import the following Grafana dashboard to visualize K8sGPT metrics:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm">
              <code>
{`{
  "dashboard": {
    "title": "K8sGPT Metrics",
    "panels": [
      {
        "title": "Analysis Duration",
        "type": "graph",
        "datasource": "Prometheus",
        "targets": [
          {
            "expr": "rate(k8sgpt_analysis_duration_seconds_sum[5m]) / rate(k8sgpt_analysis_duration_seconds_count[5m])"
          }
        ]
      },
      {
        "title": "Issues by Severity",
        "type": "piechart",
        "datasource": "Prometheus",
        "targets": [
          {
            "expr": "k8sgpt_issues_total"
          }
        ]
      }
    ]
  }
}`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Logging Integration</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT logs can be integrated with your existing logging stack:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Configure log levels and output format</li>
            <li>Set up log aggregation with Fluentd or similar tools</li>
            <li>Create log-based alerts for critical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Regularly review and update alerting thresholds</li>
            <li>Set up proper retention policies for metrics and logs</li>
            <li>Implement proper access controls for monitoring data</li>
            <li>Regularly backup your monitoring configuration</li>
          </ul>
        </section>
      </div>
    </DocPage>
  );
};

export default Observability; 