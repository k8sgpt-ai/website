import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import DocSearch from './DocSearch';

interface DocPageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  prev?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
  dark?: boolean;
  toc?: TocItem[];
}

// Homepage theme tokens (same channels as Home.tsx `.ns`), scoped to dark docs pages.
const darkVars = {
  '--fl-bg': '6 8 12',
  '--fl-panel': '12 16 23',
  '--fl-line': '26 33 44',
  '--fl-ink': '231 237 244',
  '--fl-mute': '133 145 163',
  '--fl-accent': '49 206 232',
  '--fl-accent2': '51 165 242',
  '--fl-warn': '255 181 71',
  '--fl-bad': '255 107 107',
  '--fl-good': '70 227 166',
} as React.CSSProperties;

interface TocItem {
  id: string;
  title: string;
}

const docsNav: { section: string; links: { title: string; href: string }[] }[] = [
  {
    section: 'Getting Started',
    links: [
      { title: 'Overview', href: '/docs/getting-started/overview' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'Configuration', href: '/docs/getting-started/configuration' },
      { title: 'CLI Configuration', href: '/docs/getting-started/cli-configuration' },
      { title: 'Operator Configuration', href: '/docs/getting-started/operator-configuration' },
      { title: 'In-Cluster Operator', href: '/docs/getting-started/in-cluster-operator' },
    ],
  },
  {
    section: 'Tutorials',
    links: [
      { title: 'Playground', href: '/docs/tutorials/playground' },
      { title: 'Custom Analyzers', href: '/docs/tutorials/custom-analyzers' },
      { title: 'Slack Integration', href: '/docs/tutorials/slack-integration' },
      { title: 'Ollama (local LLMs)', href: '/docs/tutorials/ollama' },
      { title: 'Custom REST Backend', href: '/docs/tutorials/custom-rest-backend' },
      { title: 'Observability', href: '/docs/tutorials/observability' },
      { title: 'Auto-Remediation', href: '/docs/tutorials/auto-remediation' },
      { title: 'Integrations', href: '/docs/tutorials/integrations' },
    ],
  },
  {
    section: 'Reference',
    links: [
      { title: 'CLI Reference', href: '/docs/reference/cli' },
      { title: 'Operator Reference', href: '/docs/reference/operator' },
      { title: 'AI Providers', href: '/docs/reference/providers' },
      { title: 'MCP Server', href: '/docs/reference/mcp' },
    ],
  },
  {
    section: 'Explanation',
    links: [
      { title: 'Integration', href: '/docs/explanation/integration' },
      { title: 'Caching', href: '/docs/explanation/caching' },
    ],
  },
];

const SidebarNav: React.FC<{ current: string; mobile?: boolean }> = ({ current, mobile }) => (
  <nav aria-label="Documentation sections" className={mobile ? 'mt-4 space-y-6' : 'space-y-7'}>
    {docsNav.map((group) => (
      <div key={group.section}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fl-mute">{group.section}</p>
        <ul className="mt-2 space-y-1">
          {group.links.map((link) => {
            const isActive = current === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block rounded-md px-3 py-1.5 text-sm transition ${
                    isActive
                      ? 'bg-fl-accent/[0.08] font-medium text-fl-accent'
                      : 'text-fl-mute hover:bg-white/5 hover:text-fl-ink'
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    ))}
  </nav>
);

const DocPage: React.FC<DocPageProps> = ({ title, description, children, prev, next, dark = true, toc }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  useEffect(() => {
    // Handle hash-based scrolling
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  if (dark) {
    return (
      <div className="min-h-screen bg-fl-bg text-fl-ink" style={darkVars}>
        {/* Header */}
        <div className="border-b border-fl-line">
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pb-12 lg:px-8">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link to="/docs" className="inline-flex items-center text-sm font-medium text-fl-accent hover:underline">
                  <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  Back to Documentation
                </Link>
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-x-2">
                    {pathSegments.map((segment, index) => (
                      <li key={segment} className="flex items-center gap-2">
                        {index > 0 && <span className="text-fl-mute/50">/</span>}
                        <span className="text-sm capitalize text-fl-mute">
                          {segment.replace(/-/g, ' ')}
                        </span>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
              <DocSearch />
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
              {description && (
                <p className="mt-6 text-lg leading-8 text-fl-mute">{description}</p>
              )}
            </div>
          </div>
        </div>

        {/* Main Content + Sidebar */}
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
            {/* Sidebar: collapsible on mobile, sticky on desktop */}
            <details className="mb-8 rounded-xl border border-fl-line bg-fl-panel p-4 lg:hidden">
              <summary className="cursor-pointer text-sm font-semibold text-fl-ink">
                Documentation menu
              </summary>
              <SidebarNav current={location.pathname} mobile />
            </details>
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
                <SidebarNav current={location.pathname} />
              </div>
            </aside>

            {/* Article */}
            <div className="min-w-0">
              <div className="max-w-3xl">
                {toc && toc.length > 0 && (
                  <nav aria-label="On this page" className="mb-10 rounded-xl border border-fl-line bg-fl-panel p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-fl-mute">On this page</p>
                    <ul className="mt-3 space-y-2">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a href={`#${item.id}`} className="text-sm text-fl-mute hover:text-fl-accent">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
                {children}
              </div>

              {/* Navigation */}
              <div className="max-w-3xl">
                <div className="mt-12 flex items-center justify-between border-t border-fl-line pt-8">
                  <div className="flex flex-1 justify-between sm:justify-start">
                    {prev ? (
                      <Link to={prev.href} className="text-sm font-medium text-fl-accent hover:underline">
                        <span aria-hidden="true">&larr;</span> {prev.title}
                      </Link>
                    ) : (
                      <div />
                    )}
                    {next ? (
                      <Link to={next.href} className="ml-8 text-sm font-medium text-fl-accent hover:underline">
                        {next.title} <span aria-hidden="true">&rarr;</span>
                      </Link>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pb-12 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <Link to="/docs" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Documentation
              </Link>
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  {pathSegments.map((segment, index) => (
                    <li key={segment}>
                      {index > 0 && (
                        <span className="text-gray-400 mx-2">/</span>
                      )}
                      <span className="text-gray-600 capitalize">
                        {segment.replace(/-/g, ' ')}
                      </span>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <DocSearch />
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h1>
            {description && (
              <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-indigo max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:text-gray-900
            prose-h2:text-2xl prose-h2:text-gray-800 prose-h2:mt-8 prose-h2:mb-4 prose-h2:scroll-mt-24
            prose-h3:text-xl prose-h3:text-gray-700 prose-h3:mt-6 prose-h3:mb-3 prose-h3:scroll-mt-24
            prose-p:text-gray-600 prose-p:leading-7
            prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6
            prose-li:text-gray-600">
            {children}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-8">
            <div className="flex flex-1 justify-between sm:justify-start">
              {prev ? (
                <Link
                  to={prev.href}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <span aria-hidden="true">&larr;</span> {prev.title}
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  to={next.href}
                  className="ml-8 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {next.title} <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocPage; 