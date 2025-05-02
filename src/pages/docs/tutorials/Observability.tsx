import DocPage from '../../../components/DocPage';

const Observability = () => {
  return (
    <DocPage
      title="Observability"
      description="Learn how to integrate Prometheus and Grafana with K8sGPT for enhanced cluster monitoring"
      prev={{ title: 'Custom Rest Backend', href: '/docs/tutorials/custom-rest-backend' }}
      next={{ title: 'CLI Reference', href: '/docs/reference/cli' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            Enhance your Kubernetes observability by integrating Prometheus and Grafana with K8sGPT. This integration
            allows you to monitor and visualize your cluster's insights through comprehensive dashboards and metrics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Prometheus: Install using Helm via Prometheus Community Helm Charts</li>
              <li>Grafana Dashboard: Ensure Grafana is installed and accessible in your environment</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Installation Steps</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Install the K8sGPT Operator with observability features enabled:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`helm install release k8sgpt/k8sgpt-operator -n k8sgpt-operator-system --create-namespace --set interplex.enabled=true --set grafanaDashboard.enabled=true --set serviceMonitor.enabled=true`}</code>
            </pre>
            <p className="text-gray-600">
              This command:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Creates a ServiceMonitor to integrate with Prometheus</li>
              <li>Automatically configures and populates data into your Grafana dashboard</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Key Metrics</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Once set up, you can explore key metrics like:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Results identified by K8sGPT</li>
              <li>Operator workload details</li>
              <li>Resource usage and efficiency metrics</li>
              <li>Analysis performance statistics</li>
              <li>Error rates and patterns</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Grafana Dashboard</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The K8sGPT Grafana dashboard provides:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Real-time visualization of cluster health</li>
              <li>Historical trend analysis</li>
              <li>Customizable panels and alerts</li>
              <li>Export capabilities for reports</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Regularly review and adjust alert thresholds</li>
              <li>Set up appropriate retention periods for metrics</li>
              <li>Configure dashboards based on your specific needs</li>
              <li>Monitor the performance impact of metrics collection</li>
              <li>Document your observability setup and procedures</li>
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
              <li>Verify Prometheus and Grafana connectivity</li>
              <li>Check ServiceMonitor configuration</li>
              <li>Ensure proper permissions for metrics access</li>
              <li>Monitor resource usage of the observability stack</li>
              <li>Review logs for any integration issues</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              After setting up observability:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Customize your Grafana dashboards</li>
              <li>Set up alerts for critical metrics</li>
              <li>Integrate with other monitoring tools</li>
              <li>Optimize metrics collection for your use case</li>
              <li>Share your dashboard configurations with the community</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Observability; 