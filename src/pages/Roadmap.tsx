import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const Roadmap = () => {
  const milestones = [
    {
      title: 'Auto Remediation GitOps Support',
      quarter: 'Q2 2025',
      description: 'Integrate auto-remediation capabilities directly into GitOps workflows for seamless automated fixes.',
    },
    {
      title: 'Model Context Protocol Support',
      quarter: 'Q3 2025',
      description: 'Implement support for standard context protocols to enhance compatibility and data sharing with various AI models.',
    },
    {
      title: 'Additional Core Analyzers',
      quarter: 'Q4 2025',
      description: 'Expand the suite of built-in analyzers to cover more Kubernetes resources and common issues.',
    },
    {
      title: 'Mutation AI Scoring',
      quarter: 'Q4 2025',
      description: 'Introduce AI-driven scoring for potential mutations or changes, assessing risk and impact before application.',
    },
  ];

  // Sort milestones chronologically by quarter (simplistic sort, assumes Q1 < Q2 < Q3 < Q4)
  milestones.sort((a, b) => {
    const [aQ, aY] = a.quarter.split(' ');
    const [bQ, bY] = b.quarter.split(' ');
    if (aY !== bY) return parseInt(aY) - parseInt(bY);
    return parseInt(aQ.substring(1)) - parseInt(bQ.substring(1));
  });

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Public Roadmap
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            An overview of our planned major features and milestones. Timelines are estimates and subject to change.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 flex items-start space-x-4">
              <div className="flex-shrink-0 bg-primary p-2 rounded-full">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                <p className="text-sm font-medium text-indigo-600">Target: {milestone.quarter}</p>
                <p className="mt-1 text-base text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Want to suggest a feature or contribute? Check out our <a href="https://github.com/k8sgpt-ai/k8sgpt/issues" className="text-primary hover:text-secondary font-medium" target="_blank" rel="noopener noreferrer">GitHub Issues</a>.
          You can also view our detailed backlog on the <a href="https://github.com/orgs/k8sgpt-ai/projects/1" className="text-primary hover:text-secondary font-medium" target="_blank" rel="noopener noreferrer">GitHub Project Board</a>.
        </p>
      </div>
    </div>
  );
};

export default Roadmap; 