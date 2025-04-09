import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pb-12 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
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
          <div className="mx-auto max-w-4xl">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
            {description && (
              <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-indigo max-w-none">
            {children}
          </div>
        </div>
      </div>

      {/* Next/Previous Navigation */}
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