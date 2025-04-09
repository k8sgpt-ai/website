import DocPage from '../../../components/DocPage';

const Caching = () => {
  return (
    <DocPage
      title="Caching"
      description="Learn about K8sGPT's caching mechanisms and how to configure them"
      prev={{ title: 'Integration', href: '/docs/explanation/integration' }}
      next={{ title: 'Overview', href: '/docs/getting-started/overview' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT implements caching to improve performance and reduce API calls to AI providers.
            This page explains the caching mechanisms and how to configure them for optimal performance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Cache Types</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">In-Memory Cache</h3>
            <p className="text-gray-600">
              The default caching mechanism stores results in memory for quick access:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Enable in-memory caching
k8sgpt analyze --cache=true

# Configure cache duration (in minutes)
k8sgpt analyze --cache-duration=30`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Persistent Cache</h3>
            <p className="text-gray-600">
              Store cache results on disk for persistence across restarts:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Enable persistent caching
k8sgpt analyze --cache=true --cache-type=persistent

# Specify cache directory
k8sgpt analyze --cache-dir=/path/to/cache`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Redis Cache</h3>
            <p className="text-gray-600">
              Use Redis for distributed caching in multi-node environments:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Enable Redis caching
k8sgpt analyze --cache=true --cache-type=redis

# Configure Redis connection
k8sgpt analyze --redis-url=redis://localhost:6379
k8sgpt analyze --redis-password=your-password`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Cache Configuration</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Environment Variables</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Enable caching
export K8SGPT_CACHE=true

# Set cache duration (minutes)
export K8SGPT_CACHE_DURATION=30

# Configure cache type
export K8SGPT_CACHE_TYPE=persistent

# Set cache directory
export K8SGPT_CACHE_DIR=/path/to/cache

# Redis configuration
export K8SGPT_REDIS_URL=redis://localhost:6379
export K8SGPT_REDIS_PASSWORD=your-password`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Kubernetes Configuration</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: v1
kind: ConfigMap
metadata:
  name: k8sgpt-cache-config
data:
  K8SGPT_CACHE: "true"
  K8SGPT_CACHE_TYPE: "persistent"
  K8SGPT_CACHE_DURATION: "30"
  K8SGPT_CACHE_DIR: "/cache"`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Cache Management</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cache Operations</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Clear the cache
k8sgpt cache clear

# View cache statistics
k8sgpt cache stats

# List cached items
k8sgpt cache list`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Cache Invalidation</h3>
            <p className="text-gray-600">
              The cache is automatically invalidated when:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Cache duration expires</li>
              <li>Kubernetes resources change</li>
              <li>Analysis parameters change</li>
              <li>Manual cache clear is performed</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Performance Considerations</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Optimize caching for your use case:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Set appropriate cache duration based on cluster change frequency</li>
              <li>Use persistent cache for production environments</li>
              <li>Consider Redis for high-availability setups</li>
              <li>Monitor cache hit rates and adjust settings accordingly</li>
              <li>Regularly clean up old cache entries</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Common caching issues and solutions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Check cache permissions and storage space</li>
              <li>Verify Redis connectivity for distributed caching</li>
              <li>Monitor cache performance metrics</li>
              <li>Clear cache if stale results are observed</li>
              <li>Review cache configuration for optimal settings</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Caching; 