import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
    link: '/docs/reference/cli',
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

const DocSearch: React.FC = () => {
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

  return (
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
  );
};

export default DocSearch; 