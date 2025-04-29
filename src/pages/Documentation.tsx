import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, BeakerIcon, CommandLineIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const navigation = [
    { name: 'Getting Started', href: '#getting-started', icon: BookOpenIcon, id: 'getting-started' },
    { name: 'Tutorials', href: '#tutorials', icon: BeakerIcon, id: 'tutorials' },
    { name: 'Reference', href: '#reference', icon: CommandLineIcon, id: 'reference' },
    { name: 'Explanation', href: '#explanation', icon: InformationCircleIcon, id: 'explanation' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pb-12 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 mb-8">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Documentation</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to know about K8sGPT - from getting started to advanced features.
            </p>
          </div>
        </div>
      </div>

      {/* Documentation Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-none">
            <div className="sticky top-8">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveSection(item.id)}
                    className={`
                      group flex items-center px-3 py-2 text-sm font-medium rounded-md
                      ${activeSection === item.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    <item.icon
                      className={`
                        mr-3 h-6 w-6 flex-shrink-0
                        ${activeSection === item.id
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600'
                        }
                      `}
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Getting Started Section */}
            <section id="getting-started" className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
              
              <div className="prose max-w-none">
                <h3>Overview</h3>
                <p>
                  K8sGPT gives Kubernetes SRE superpowers to everyone. Get started quickly with our
                  installation guides and basic usage instructions.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="text-lg font-semibold mb-2">Installation</h4>
                    <p className="text-gray-600 mb-4">Quick start guide for installing K8sGPT on your system.</p>
                    <Link to="/docs/getting-started/installation" className="text-indigo-600 hover:text-indigo-500">
                      Learn more →
                    </Link>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="text-lg font-semibold mb-2">In-Cluster Operator</h4>
                    <p className="text-gray-600 mb-4">Deploy K8sGPT as an operator in your Kubernetes cluster.</p>
                    <Link to="/docs/getting-started/in-cluster-operator" className="text-indigo-600 hover:text-indigo-500">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Tutorials Section */}
            <section id="tutorials" className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tutorials</h2>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-2">K8sGPT Playground</h3>
                  <p className="text-gray-600 mb-4">Try out K8sGPT features in an interactive environment.</p>
                  <Link to="/docs/tutorials/playground" className="text-indigo-600 hover:text-indigo-500">
                    Start learning →
                  </Link>
                </div>

                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-2">Custom Analyzers</h3>
                  <p className="text-gray-600 mb-4">Learn how to create your own custom analyzers.</p>
                  <Link to="/docs/tutorials/custom-analyzers" className="text-indigo-600 hover:text-indigo-500">
                    Start learning →
                  </Link>
                </div>

                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-2">Slack Integration</h3>
                  <p className="text-gray-600 mb-4">Set up K8sGPT notifications in Slack.</p>
                  <Link to="/docs/tutorials/slack-integration" className="text-indigo-600 hover:text-indigo-500">
                    Start learning →
                  </Link>
                </div>
              </div>
            </section>

            {/* Reference Section */}
            <section id="reference" className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reference</h2>
              
              <div className="prose max-w-none">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3>CLI Reference</h3>
                    <ul className="mt-4 space-y-3">
                      <li>
                        <Link to="/docs/reference/cli#overview" className="text-gray-600 hover:text-indigo-600">
                          Overview & Installation
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/cli#basic-commands" className="text-gray-600 hover:text-indigo-600">
                          Basic Commands
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/cli#advanced-commands" className="text-gray-600 hover:text-indigo-600">
                          Advanced Commands
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/cli#configuration" className="text-gray-600 hover:text-indigo-600">
                          Configuration
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/cli#troubleshooting" className="text-gray-600 hover:text-indigo-600">
                          Troubleshooting
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3>Additional References</h3>
                    <ul className="mt-4 space-y-3">
                      <li>
                        <Link to="/docs/reference/operator" className="text-gray-600 hover:text-indigo-600">
                          Operator Guide
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/providers" className="text-gray-600 hover:text-indigo-600">
                          AI Providers
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/mcp" className="text-gray-600 hover:text-indigo-600">
                          MCP Server
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Explanation Section */}
            <section id="explanation" className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Explanation</h2>
              
              <div className="prose max-w-none">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold mb-2">Integration</h3>
                    <p className="text-gray-600 mb-4">
                      Learn about integrating K8sGPT with your existing Kubernetes infrastructure
                      and other tools in your stack.
                    </p>
                    <Link to="/docs/explanation/integration" className="text-indigo-600 hover:text-indigo-500">
                      Read more →
                    </Link>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold mb-2">Caching</h3>
                    <p className="text-gray-600 mb-4">
                      Understanding how K8sGPT uses caching to improve performance and reduce
                      API calls to AI providers.
                    </p>
                    <Link to="/docs/explanation/caching" className="text-indigo-600 hover:text-indigo-500">
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation; 