import { BeakerIcon, CommandLineIcon, CubeIcon, ShieldCheckIcon, CloudIcon, CpuChipIcon, UserGroupIcon, CalendarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Auto Remediation Banner */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <CpuChipIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">New: K8sGPT Auto Remediation!</span>
                <span className="hidden md:inline">Exciting news! K8sGPT now supports Auto Remediation for Kubernetes issues.</span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <Link
                to="/auto-remediation"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/images/k8sgpt-icon.svg" alt="K8sGPT Icon" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">K8sGPT</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#providers" className="text-gray-600 hover:text-gray-900">AI Providers</a>
              <a href="#security" className="text-gray-600 hover:text-gray-900">Security</a>
              <a href="#community" className="text-gray-600 hover:text-gray-900">Community</a>
              <a href="https://docs.k8sgpt.ai/getting-started/getting-started/" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <img src="/images/k8sgpt-logo.png" alt="K8sGPT Logo" className="h-32 mx-auto mb-8" />
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Giving Kubernetes</span>
              <span className="block text-primary">Superpowers to Everyone</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              K8sGPT is an AI-powered tool that helps diagnose and fix Kubernetes issues with intelligent insights and automated troubleshooting.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="https://github.com/k8sgpt-ai/k8sgpt" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary md:py-4 md:text-lg md:px-10">
                  View on GitHub
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="https://docs.k8sgpt.ai/getting-started/getting-started/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to manage and troubleshoot your Kubernetes clusters
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <BeakerIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">AI-Powered Analysis</h3>
                <p className="mt-2 text-base text-gray-500">
                  Advanced AI algorithms analyze your cluster state and provide intelligent insights for troubleshooting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShieldCheckIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Data Anonymization</h3>
                <p className="mt-2 text-base text-gray-500">
                  Sensitive data is automatically anonymized before being sent to AI backends for analysis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CloudIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Multiple AI Providers</h3>
                <p className="mt-2 text-base text-gray-500">
                  Support for various AI providers including OpenAI, Azure, Google, and local models.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CommandLineIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Custom Analyzers</h3>
                <p className="mt-2 text-base text-gray-500">
                  Extend functionality with custom analyzers written in your preferred programming language.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CpuChipIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Auto Remediation</h3>
                <p className="mt-2 text-base text-gray-500">
                  Automatically fix issues in your Kubernetes clusters with AI-powered remediation.
                </p>
                <div className="mt-4">
                  <Link
                    to="/auto-remediation"
                    className="text-primary hover:text-secondary font-medium"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CubeIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Comprehensive Analysis</h3>
                <p className="mt-2 text-base text-gray-500">
                  Analyzes StatefulSets, Services, Pods, Deployments, and more for complete cluster health insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Providers Section */}
      <div id="providers" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Supported AI Providers
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Choose from a wide range of AI providers to power your Kubernetes analysis
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {['OpenAI', 'Azure OpenAI', 'Google Vertex AI', 'Amazon Bedrock', 'IBM WatsonX', 'Local AI', 'Ollama', 'Cohere', 'Hugging Face'].map((provider) => (
              <div key={provider} className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-gray-900 font-medium">{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div id="security" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Enterprise-Grade Security
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Built with security in mind for production environments
            </p>
          </div>
          <div className="mt-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-6 w-6 text-primary mt-1 mr-2" />
                  <span>Data anonymization for sensitive cluster information</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-6 w-6 text-primary mt-1 mr-2" />
                  <span>Support for local AI models to keep data within your DMZ</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-6 w-6 text-primary mt-1 mr-2" />
                  <span>Secure configuration management with encrypted storage</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-6 w-6 text-primary mt-1 mr-2" />
                  <span>Remote caching with enterprise storage solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div id="community" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Connect with other K8sGPT users and contributors
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <UserGroupIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Community Membership</h3>
                <p className="mt-2 text-base text-gray-500">
                  Join our growing community of users and contributors. We welcome everyone interested in Kubernetes and AI.
                </p>
                <div className="mt-4">
                  <a href="https://github.com/k8sgpt-ai/community/blob/main/community-membership.md" className="text-primary hover:text-secondary font-medium">
                    Learn about membership →
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <CalendarIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Office Hours</h3>
                <p className="mt-2 text-base text-gray-500">
                  Join our regular office hours to get help, share your experiences, and connect with the K8sGPT team.
                </p>
                <div className="mt-4">
                  <a href="https://github.com/k8sgpt-ai/community" className="text-primary hover:text-secondary font-medium">
                    Check schedule →
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Slack Community</h3>
                <p className="mt-2 text-base text-gray-500">
                  Join our Slack workspace for real-time discussions, support, and to connect with other K8sGPT users.
                </p>
                <div className="mt-4">
                  <a href="https://github.com/k8sgpt-ai/community" className="text-primary hover:text-secondary font-medium">
                    Join Slack →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Interested in Contributing?</h3>
            <p className="text-gray-600 mb-4">
              K8sGPT is an open-source project that welcomes contributions from everyone. Whether you're a developer, writer, or user, there are many ways to get involved.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-medium text-gray-900">For Contributors</h4>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <a href="https://github.com/k8sgpt-ai/k8sgpt/blob/main/CONTRIBUTING.md" className="hover:text-gray-900">Contributing Guidelines</a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <a href="https://github.com/k8sgpt-ai/k8sgpt/issues" className="hover:text-gray-900">Open Issues</a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <a href="https://github.com/k8sgpt-ai/k8sgpt/discussions" className="hover:text-gray-900">Discussions</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">For Organizations</h4>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <a href="https://github.com/k8sgpt-ai/community/blob/main/ADOPTERS.md" className="hover:text-gray-900">Become an Adopter</a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <a href="https://github.com/k8sgpt-ai/community/blob/main/interested-parties.md" className="hover:text-gray-900">Join Interested Parties</a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <a href="https://github.com/k8sgpt-ai/community/blob/main/CHARTER.md" className="hover:text-gray-900">Community Charter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <img src="/images/k8sgpt-logo.png" alt="K8sGPT Logo" className="h-24 mb-4" />
              <p className="text-gray-500 text-sm">
                Giving Kubernetes Superpowers to Everyone
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://docs.k8sgpt.ai/" className="text-gray-500 hover:text-gray-900">Documentation</a>
                </li>
                <li>
                  <a href="https://github.com/k8sgpt-ai/k8sgpt" className="text-gray-500 hover:text-gray-900">GitHub</a>
                </li>
                <li>
                  <a href="https://docs.k8sgpt.ai/getting-started/getting-started/" className="text-gray-500 hover:text-gray-900">Getting Started</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/k8sgpt-ai/k8sgpt/discussions" className="text-gray-500 hover:text-gray-900">Discussions</a>
                </li>
                <li>
                  <a href="https://github.com/k8sgpt-ai/k8sgpt/issues" className="text-gray-500 hover:text-gray-900">Issues</a>
                </li>
                <li>
                  <a href="https://github.com/k8sgpt-ai/k8sgpt/blob/main/CONTRIBUTING.md" className="text-gray-500 hover:text-gray-900">Contributing</a>
                </li>
                <li>
                  <a href="https://github.com/k8sgpt-ai/community" className="text-gray-500 hover:text-gray-900">Community Hub</a>
                </li>
                <li>
                  <a href="https://github.com/k8sgpt-ai/community/blob/main/community-membership.md" className="text-gray-500 hover:text-gray-900">Membership</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/k8sgpt-ai/k8sgpt/blob/main/LICENSE" className="text-gray-500 hover:text-gray-900">License</a>
                </li>
                <li>
                  <a href="https://github.com/k8sgpt-ai/k8sgpt/blob/main/CODE_OF_CONDUCT.md" className="text-gray-500 hover:text-gray-900">Code of Conduct</a>
                </li>
                <li>
                  <a href="https://github.com/k8sgpt-ai/community/blob/main/CHARTER.md" className="text-gray-500 hover:text-gray-900">Charter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} K8sGPT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
