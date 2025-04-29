import { BeakerIcon, ShieldCheckIcon, CloudIcon, CpuChipIcon, UserGroupIcon, CalendarIcon, BuildingOfficeIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon, ListBulletIcon, Bars3Icon, XMarkIcon, VideoCameraIcon, ChatBubbleLeftRightIcon, CommandLineIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const iconRef = useRef<HTMLImageElement>(null);

  // Preload the K8sGPT icon to prevent flickering
  useEffect(() => {
    const preloadIcon = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = '/images/k8sgpt-icon.svg';
      document.head.appendChild(link);
    };
    
    preloadIcon();
  }, []);

  // Cache the icon in memory
  useEffect(() => {
    if (iconRef.current) {
      const img = new Image();
      img.src = '/images/k8sgpt-icon.svg';
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {isHomePage && <AnimatedBackground />}
        {/* Auto Remediation Banner */}
        <div className="bg-indigo-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-indigo-800">
                  <CpuChipIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">New: K8sGPT works with Claude Desktop!</span>
                  <span className="hidden md:inline">Exciting news! K8sGPT now integrates with Claude Desktop for enhanced Kubernetes management.</span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#claude-integration"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('claude-integration')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo Section */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <img 
                    ref={iconRef}
                    src="/images/k8sgpt-icon.svg" 
                    alt="K8sGPT Icon" 
                    className="h-8 w-auto" 
                    width="32"
                    height="32"
                  />
                  <span className="ml-2 text-xl font-bold hidden sm:inline">K8sGPT</span>
                </Link>
              </div>

              {/* Desktop Links - Hidden on Mobile */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                <a href="/#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="/#providers" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">AI Providers</a>
                <a href="/#adopters" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Adopters</a>
                <a href="/#guardrails" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Guardrails</a>
                <a href="/#community" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Community</a>
                <Link to="/roadmap" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Roadmap</Link>
                <Link to="/docs" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Documentation</Link>
                <Link to="/docs/getting-started/installation" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary">
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button - Hidden on Desktop */}
              <div className="-mr-2 flex items-center sm:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  type="button" 
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  aria-controls="mobile-menu" 
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu - Shown when isMobileMenuOpen is true */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/#features" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="/#providers" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">AI Providers</a>
              <a href="/#adopters" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Adopters</a>
              <a href="/#guardrails" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Guardrails</a>
              <a href="/#community" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Community</a>
              <Link to="/roadmap" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Roadmap</Link>
              <Link to="/docs" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Documentation</Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-2">
                <Link to="/docs/getting-started/installation" className="block w-full text-center bg-primary text-white px-4 py-2 rounded-md text-base font-medium hover:bg-secondary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="relative">
          {isHomePage && <AnimatedBackground />}
          {isHomePage ? (
            <>
              {/* Hero Section */}
              <div className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100">
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
              <div id="features" className="py-12 bg-gray-50/90 backdrop-blur-sm shadow-sm border-b border-gray-100">
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
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
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
                        <ArrowPathIcon className="h-8 w-8 text-primary" />
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Auto Remediation</h3>
                        <p className="mt-2 text-base text-gray-500">
                          Automatically apply suggested fixes to common Kubernetes issues, reducing manual intervention and speeding up recovery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Claude Desktop Integration Section */}
              <div id="claude-integration" className="py-12 bg-gray-50/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                      Claude Desktop Integration
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Seamlessly integrate K8sGPT with Claude Desktop for enhanced Kubernetes management
                    </p>
                  </div>
                  <div className="mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <img 
                          src="/images/claude.png" 
                          alt="Claude Desktop Integration" 
                          className="w-full h-auto rounded-lg shadow-sm"
                        />
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <CommandLineIcon className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">Native CLI Experience</h3>
                            <p className="mt-2 text-base text-gray-500">
                              Access K8sGPT directly through Claude Desktop's command line interface for a seamless development experience.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CpuChipIcon className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">Enhanced AI Capabilities</h3>
                            <p className="mt-2 text-base text-gray-500">
                              Leverage Claude's advanced AI capabilities to get deeper insights into your Kubernetes clusters and workloads.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <ArrowPathIcon className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">Streamlined Workflow</h3>
                            <p className="mt-2 text-base text-gray-500">
                              Combine the power of K8sGPT's analysis with Claude's natural language understanding for a more intuitive troubleshooting experience.
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link
                            to="/docs/reference/mcp"
                            className="text-primary hover:text-secondary font-medium"
                          >
                            Learn more about MCP →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Providers Section */}
              <div id="providers" className="py-12 bg-white/80 backdrop-blur-sm">
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
              <div id="adopters" className="py-12 bg-gray-50/90 backdrop-blur-sm shadow-sm border-b border-gray-100">
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

              {/* Guardrails Section (Previously Security) */}
              <div id="guardrails" className="py-12 bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                      Fine-Grained Control & Guardrails
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      K8sGPT puts you in control, allowing you to tailor analysis and remediation to your needs.
                    </p>
                  </div>
                  <div className="mt-10">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <ul className="space-y-4 text-gray-600">
                        <li className="flex items-start">
                          <AdjustmentsHorizontalIcon className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                          <span><strong className="text-gray-900">Toggle Auto-Remediation:</strong> You decide if K8sGPT should automatically apply suggested fixes.</span>
                        </li>
                        <li className="flex items-start">
                          <MagnifyingGlassIcon className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                          <span><strong className="text-gray-900">AI-Free Analysis:</strong> Run built-in analyzers locally without involving any AI backend for simple diagnostics.</span>
                        </li>
                        <li className="flex items-start">
                          <ListBulletIcon className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                          <span><strong className="text-gray-900">Selective Analyzers:</strong> Choose precisely which analyzers to run, focusing only on the areas you need.</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheckIcon className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                          <span><strong className="text-gray-900">Data Anonymization:</strong> Sensitive data is automatically anonymized before being sent to external AI backends.</span>
                        </li>
                        <li className="flex items-start">
                          <CpuChipIcon className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                          <span><strong className="text-gray-900">Local AI Models:</strong> Keep your data entirely within your environment by using supported local AI models.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Section */}
              <div id="community" className="py-12 bg-gray-50/80 backdrop-blur-sm">
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
                          <a href="https://github.com/k8sgpt-ai/community/blob/main/community-membership.md" className="text-primary hover:text-secondary font-medium" target="_blank" rel="noopener noreferrer">
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
                          <a href="https://github.com/k8sgpt-ai/community" className="text-primary hover:text-secondary font-medium" target="_blank" rel="noopener noreferrer">
                            Check schedule →
                          </a>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary" />
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Join the Conversation</h3>
                        <p className="mt-2 text-base text-gray-500">
                          Connect with the community and maintainers on Slack for real-time discussions and support.
                        </p>
                        <div className="mt-4">
                          <a href="https://join.slack.com/t/k8sgpt/shared_invite/zt-2ablh72q8-80lw46~ETCWl5dZQdDnfsg" className="text-primary hover:text-secondary font-medium" target="_blank" rel="noopener noreferrer">
                            Join Slack →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Videos Section */}
              <div id="videos" className="py-12 bg-gray-50/90 backdrop-blur-sm shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                      K8sGPT in Action
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      See how the community is using K8sGPT to enhance their Kubernetes workflows.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Kubecon 2025 Video */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                          src="https://www.youtube.com/embed/EXtCejkOJB0" 
                          title="Kubecon 2025 Talk" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">Kubecon 2025 Talk</h3>
                        <p className="text-sm text-gray-500 mt-1">Latest K8sGPT presentation from KubeCon</p>
                      </div>
                    </div>

                    {/* Video Embeds */}
                    {[
                      'SX_2YHC15cM', // K8sGPT: Kubernetes Superpowers with AI by Alex Jones
                      '3Mmw2PyY9j0', // K8sGPT: Your Kubernetes SRE Superpowers on Autopilot - Alex Jones, KubeCon EU 2023
                      'tfZWVutKgFY', // K8sGPT integration in Testkube (OSS tool)
                      '6HUFn0sSzA0', // K8sGPT : AI assistant for Kubernetes troubleshooting - Kubernetesbytes
                      'aKVDMh2ha98', // K8sGPT: Giving Kubernetes Superpowers to Everyone
                      '7WA8XVrod2Y'  // K8sGPT Tutorial | Giving Kubernetes Superpowers
                    ].map((videoId) => (
                      <div key={videoId} className="aspect-w-16 aspect-h-9">
                        <iframe 
                          className="w-full h-full rounded-lg shadow-sm border border-gray-200"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`YouTube video player - ${videoId}`}
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
