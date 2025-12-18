import { WrenchIcon, CogIcon, CommandLineIcon, DocumentTextIcon, SparklesIcon, LinkIcon } from '@heroicons/react/24/outline'

export default function MCPFeatures() {
  const tools = [
    {
      name: 'Cluster Analysis',
      description: 'Analyze Kubernetes resources for issues and get AI-powered explanations',
      icon: SparklesIcon,
    },
    {
      name: 'Resource Management',
      description: 'List and inspect any Kubernetes resource type with detailed information',
      icon: CogIcon,
    },
    {
      name: 'Log & Events Access',
      description: 'Retrieve pod logs and cluster events for troubleshooting',
      icon: DocumentTextIcon,
    },
    {
      name: 'Analyzer Control',
      description: 'Manage and configure which analyzers to enable or disable',
      icon: WrenchIcon,
    },
  ];

  const features = [
    {
      title: '12+ Powerful Tools',
      description: 'Access cluster analysis, resource management, logs, events, and analyzer configuration through a standardized interface.',
    },
    {
      title: 'Multiple Integration Modes',
      description: 'Choose between Stdio mode for local AI assistants or HTTP mode for network access and webhooks.',
    },
    {
      title: 'Rich Resources & Prompts',
      description: 'Access read-only cluster information and guided troubleshooting workflows for pods, deployments, and clusters.',
    },
    {
      title: 'Standardized Protocol',
      description: 'Built on the Model Context Protocol (MCP) standard, enabling compatibility with any MCP-compatible AI client.',
    },
  ];

  return (
    <div id="mcp-features" className="py-12 bg-gradient-to-b from-white to-gray-50/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-100 mb-4">
            <LinkIcon className="h-5 w-5 text-indigo-600 mr-2" />
            <span className="text-sm font-semibold text-indigo-900">Model Context Protocol (MCP)</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            AI-Native Kubernetes Integration
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            K8sGPT MCP server exposes powerful Kubernetes operations as standardized tools, resources, and prompts for any AI assistant.
          </p>
        </div>

        {/* Key Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <Icon className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-base text-gray-500">{tool.description}</p>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="bg-indigo-50/50 rounded-xl p-8 border border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What You Can Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{feature.title}</h4>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Server Modes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <CommandLineIcon className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Stdio Mode</h3>
            <p className="text-gray-500 mb-4">Perfect for local AI assistants like Claude Desktop</p>
            <code className="bg-gray-900 text-green-400 p-4 rounded text-sm block">
              k8sgpt serve --mcp
            </code>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <CommandLineIcon className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">HTTP Mode</h3>
            <p className="text-gray-500 mb-4">Enable network access and webhook integrations</p>
            <code className="bg-gray-900 text-green-400 p-4 rounded text-sm block overflow-x-auto text-nowrap">
              k8sgpt serve --mcp --mcp-http --mcp-port 8089
            </code>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ready to supercharge your Kubernetes troubleshooting with AI?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/k8sgpt-ai/k8sgpt/blob/main/MCP.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Explore MCP Documentation
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="/docs/reference/mcp"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
            >
              View Integration Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
