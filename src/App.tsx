import { BeakerIcon, ShieldCheckIcon, CloudIcon, CpuChipIcon, UserGroupIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import { Link, Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
              <Link to="/" className="flex items-center">
                <img src="/images/k8sgpt-icon.svg" alt="K8sGPT Icon" className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">K8sGPT</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#providers" className="text-gray-600 hover:text-gray-900">AI Providers</a>
              <a href="#adopters" className="text-gray-600 hover:text-gray-900">Adopters</a>
              <a href="#security" className="text-gray-600 hover:text-gray-900">Security</a>
              <a href="#community" className="text-gray-600 hover:text-gray-900">Community</a>
              <Link to="/docs" className="text-gray-600 hover:text-gray-900">Documentation</Link>
              <Link to="/docs/getting-started/installation" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isHomePage ? (
        <>
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
                    <Link to="/docs/getting-started/installation" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Get Started
                    </Link>
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

          {/* Adopters Section */}
          <div id="adopters" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <BuildingOfficeIcon className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Trusted by Industry Leaders
                  </h2>
                </div>
                <p className="mt-4 text-lg text-gray-500">
                  K8sGPT is trusted by industry leaders like Spectro Cloud, Nethopper, Upstage AI, and more within our community.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                  <img 
                    src="https://avatars.githubusercontent.com/u/36211249?s=280&v=4" 
                    alt="Spectro Cloud" 
                    className="h-12 mb-4"
                  />
                  <p className="text-sm text-gray-500">Spectro Cloud</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                  <img 
                    src="https://static.wixstatic.com/media/9bf0a1_e1b5c606db2d4f19908deff9f2e69ffd~mv2.png" 
                    alt="Nethopper" 
                    className="h-12 mb-4"
                  />
                  <p className="text-sm text-gray-500">Nethopper</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                  <img 
                    src="https://cdn.prod.website-files.com/6743d5190bb2b52f38e99e37/6743f495cc3c0ed693e0b5f3_Logo_Black.png" 
                    alt="Upstage AI" 
                    className="h-12 mb-4"
                  />
                  <p className="text-sm text-gray-500">Upstage AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div id="security" className="py-12 bg-white">
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
          <div id="community" className="py-12 bg-gray-50">
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
                  <div className="bg-white p-6 rounded-lg shadow-sm">
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

                  <div className="bg-white p-6 rounded-lg shadow-sm">
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
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default App;
