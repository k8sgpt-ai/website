import DocPage from '../../../components/DocPage';

const InClusterOperator = () => {
  return (
    <DocPage
      title="In-Cluster Operator"
      description="Deploy K8sGPT in your Kubernetes cluster using the operator"
      prev={{ title: 'Installation', href: '/docs/getting-started/installation' }}
      next={{ title: 'Playground', href: '/docs/tutorials/playground' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            The K8sGPT Operator allows you to deploy and manage K8sGPT within your Kubernetes cluster.
            This provides a more integrated experience and enables automated analysis of your cluster.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/hb4du-oK0KY"
                title="K8sGPT Operator Tutorial 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/SX_2YHC15cM"
                title="K8sGPT Operator Tutorial 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Kubernetes cluster (1.19+)</li>
            <li>kubectl configured to communicate with your cluster</li>
            <li>Helm 3.x installed</li>
            <li>Access to an AI provider (OpenAI, Azure OpenAI, or LocalAI)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Install the K8sGPT operator using Helm:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm">
                helm repo add k8sgpt https://charts.k8sgpt.ai
                <br />
                helm repo update
                <br />
                helm install k8sgpt k8sgpt/k8sgpt-operator
              </code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Create a K8sGPT configuration with your AI provider settings:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm">
                apiVersion: core.k8sgpt.ai/v1
                <br />
                kind: K8sGPT
                <br />
                metadata:
                <br />
                &nbsp;&nbsp;name: k8sgpt
                <br />
                spec:
                <br />
                &nbsp;&nbsp;ai:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;backend: openai
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;model: gpt-3.5-turbo
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;baseURL: https://api.openai.com/v1
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;secretRef:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: k8sgpt-secret
                <br />
                &nbsp;&nbsp;analysis:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;interval: 5m
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;namespace: k8sgpt
              </code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Secret Management</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Create a Kubernetes secret with your AI provider credentials:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm">
                kubectl create secret generic k8sgpt-secret \
                <br />
                &nbsp;&nbsp;--from-literal=api-key=your-api-key
              </code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Verifying Installation</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Check if the operator and K8sGPT are running:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm">
                kubectl get pods -n k8sgpt
                <br />
                kubectl get k8sgpt
              </code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Configure custom analyzers for your specific needs</li>
            <li>Set up integrations with notification systems</li>
            <li>Explore the playground for interactive analysis</li>
            <li>Review the CLI reference for additional commands</li>
          </ul>
        </section>
      </div>
    </DocPage>
  );
};

export default InClusterOperator; 