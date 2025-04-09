import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const AutoRemediation: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 mb-8">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              K8sGPT Auto Remediation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Automatically fix issues in your Kubernetes clusters with AI-powered remediation.
            </p>
          </div>
          <div className="mx-auto mt-10 w-full max-w-2xl lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <img
              src="/images/auto-remediation-illustration.svg"
              alt="K8sGPT Auto Remediation Illustration"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is Auto Remediation?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Auto Remediation is an experimental feature that attempts to fix problems encountered in your Kubernetes clusters. 
            It interprets K8sGPT results and applies patches to fix issues on target resources.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <h3 className="text-2xl font-semibold text-gray-900">How it Works</h3>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600">1</span>
                <span>K8sGPT operator parses results and identifies resources that have auto remediation enabled</span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600">2</span>
                <span>Creates a Mutation resource to track the remediation process</span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600">3</span>
                <span>Calculates a patch based on similarity score with the original resource</span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600">4</span>
                <span>Applies the patch to fix the issue</span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600">5</span>
                <span>Watches the resource until the issue is resolved or persists</span>
              </li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-2xl font-semibold text-gray-900">Supported Resources</h3>
            <p className="mt-4 text-gray-600">
              Currently in Alpha state, the following Kubernetes resources are supported:
            </p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600">•</span>
                <span>Service</span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600">•</span>
                <span>Pod (Owned by ReplicaSet/Deployment)</span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600">•</span>
                <span>Pod (Static)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-semibold text-gray-900">Configuration</h3>
          <p className="mt-4 text-gray-600">
            To enable auto remediation, you need to configure the K8sGPT custom resource with the following fields:
          </p>
          <div className="mt-6 rounded-lg bg-gray-50 p-6">
            <pre className="text-sm text-gray-800 overflow-x-auto">
{`apiVersion: core.k8sgpt.ai/v1alpha1
kind: K8sGPT
metadata:
  name: k8sgpt-sample
  namespace: default
spec:
  ai:
    autoRemediation:
      enabled: true
      riskThreshold: 90
      resources:
        - Pod
        - Service
        - Deployment`}
            </pre>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-semibold text-gray-900">Mutations</h3>
          <p className="mt-4 text-gray-600">
            Mutations are custom resources that hold the state and intent for mutating resources in the cluster. 
            They will eventually be compatible with GitOps processes, allowing you to pull mutations out of cluster and re-apply them.
          </p>
          <p className="mt-4 text-gray-600">
            Currently, Mutations reside in the same namespaces as your K8sGPT custom resource and are controlled by a finalizer.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <div className="rounded-lg bg-indigo-50 p-6">
            <h3 className="text-2xl font-semibold text-indigo-900">Important Note</h3>
            <p className="mt-4 text-indigo-800">
              This feature is <strong>highly experimental</strong> and is not ready for use in a production environment.
              Use with caution and always review the proposed changes before applying them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoRemediation; 