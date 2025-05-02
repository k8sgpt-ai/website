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
}

const DocPage: React.FC<DocPageProps> = ({ title, description, children, prev, next }) => {
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