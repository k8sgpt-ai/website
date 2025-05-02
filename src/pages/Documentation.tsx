import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, BeakerIcon, CommandLineIcon, InformationCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Search index for documentation content
const searchIndex = [
  {
    title: 'Overview',
    link: '/docs/getting-started/overview',
    section: 'Getting Started',
    content: 'K8sGPT is an innovative tool that combines the power of artificial intelligence with Kubernetes expertise to help you manage and troubleshoot your clusters more effectively.'
  },
  {
    title: 'Installation',
    link: '/docs/getting-started/installation',
    section: 'Getting Started',
    content: 'Learn how to install K8sGPT using various methods including CLI, operator, and package managers.'
  },
  {
    title: 'Configuration',
    link: '/docs/getting-started/configuration',
    section: 'Getting Started',
    content: 'Learn how to configure K8sGPT for your specific needs using YAML configuration files and environment variables.'
  },
  {
    title: 'In-Cluster Operator',
    link: '/docs/getting-started/in-cluster-operator',
    section: 'Getting Started',
    content: 'Deploy K8sGPT as an operator in your Kubernetes cluster for automated analysis.'
  },
  {
    title: 'K8sGPT Playground',
    link: '/docs/tutorials/playground',
    section: 'Tutorials',
    content: 'Try out K8sGPT features in an interactive environment.'
  },
  {
    title: 'Custom Analyzers',
    link: '/docs/tutorials/custom-analyzers',
    section: 'Tutorials',
    content: 'Learn how to create your own custom analyzers for specialized Kubernetes analysis.'
  },
  {
    title: 'Slack Integration',
    link: '/docs/tutorials/slack-integration',
    section: 'Tutorials',
    content: 'Set up K8sGPT notifications in Slack for real-time monitoring of your Kubernetes clusters.'
  },
  {
    title: 'Observability',
    link: '/docs/tutorials/observability',
    section: 'Tutorials',
    content: 'Learn how to use K8sGPT\'s observability features to monitor and analyze your Kubernetes cluster.'
  },
  {
    title: 'CLI Reference',
    link: '/docs/reference/cli-reference',
    section: 'Reference',
    content: 'Comprehensive reference for K8sGPT command-line interface commands and options.'
  },
  {
    title: 'Operator Reference',
    link: '/docs/reference/operator-reference',
    section: 'Reference',
    content: 'Detailed documentation for the K8sGPT operator deployment and configuration.'
  },
  {
    title: 'MCP Server',
    link: '/docs/reference/mcp',
    section: 'Reference',
    content: 'Learn about the MCP server integration with Claude Desktop for AI-powered Kubernetes analysis.'
  },
  {
    title: 'Integration',
    link: '/docs/explanation/integration',
    section: 'Explanation',
    content: 'Learn how to integrate K8sGPT with other tools and systems in your Kubernetes ecosystem.'
  },
  {
    title: 'Caching',
    link: '/docs/explanation/caching',
    section: 'Explanation',
    content: 'Learn about K8sGPT\'s caching mechanisms and how to configure them for optimal performance.'
  }
];

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{ title: string; link: string; section: string; content: string }>>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search function that looks through titles, sections, and content
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = searchIndex.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

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
          <div className="flex justify-between items-center">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            {/* Search Component */}
            <div className="relative" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      to={result.link}
                      className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <div className="text-sm font-medium text-gray-900">{result.title}</div>
                      <div className="text-xs text-indigo-600 mb-1">{result.section}</div>
                      <div className="text-xs text-gray-500 line-clamp-2">{result.content}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Documentation</h1>
          </div>
        </div>
      </div>

      {/* Documentation Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        {/* Info Box */}
        <div className="mb-8 rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Documentation Notice</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  For the most up-to-date and comprehensive documentation about K8sGPT, please visit:
                </p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>
                    <a href="https://docs.k8sgpt.ai" target="_blank" rel="noopener noreferrer" className="font-medium underline">
                      docs.k8sgpt.ai
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/k8sgpt-ai/k8sgpt" target="_blank" rel="noopener noreferrer" className="font-medium underline">
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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

                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="text-lg font-semibold mb-2">Configuration</h4>
                    <p className="text-gray-600 mb-4">Learn how to configure K8sGPT for your specific needs.</p>
                    <Link to="/docs/getting-started/configuration" className="text-indigo-600 hover:text-indigo-500">
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
                        <Link to="/docs/reference/cli" className="text-gray-600 hover:text-indigo-600">
                          Overview & Installation
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/cli#basic-commands" className="text-gray-600 hover:text-indigo-600">
                          Basic Commands
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/cli#additional-commands" className="text-gray-600 hover:text-indigo-600">
                          Additional Commands
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/cli#serve-mode" className="text-gray-600 hover:text-indigo-600">
                          Serve Mode
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3>Additional References</h3>
                    <ul className="mt-4 space-y-3">
                      <li>
                        <Link to="/docs/reference/providers" className="text-gray-600 hover:text-indigo-600">
                          AI Providers
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs/reference/operator" className="text-gray-600 hover:text-indigo-600">
                          Operator Guide
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