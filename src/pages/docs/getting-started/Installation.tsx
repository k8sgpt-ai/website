import React from 'react';
import DocPage from '../../../components/DocPage';

const Installation: React.FC = () => {
  return (
    <DocPage
      title="Installation"
      description="Learn how to install K8sGPT using various methods including CLI, operator, and package managers."
      prev={{ title: "Overview", href: "/docs/getting-started/overview" }}
      next={{ title: "Configuration", href: "/docs/getting-started/configuration" }}
    >
      <section>
        <h2>Installation Methods</h2>
        <p>
          K8sGPT can be installed in several ways depending on your needs:
        </p>
        <ul>
          <li>CLI installation for local development and testing</li>
          <li>Operator installation for Kubernetes clusters</li>
          <li>Package manager installation for system-wide deployment</li>
        </ul>
      </section>

      <section>
        <h2>CLI Installation</h2>
        <p>
          The CLI tool is the simplest way to get started with K8sGPT. It can be installed
          using various package managers or downloaded directly.
        </p>

        <h3>Using Homebrew (macOS/Linux)</h3>
        <pre>
          <code>
            {`brew tap k8sgpt-ai/tap
brew install k8sgpt`}
          </code>
        </pre>

        <h3>Direct Download</h3>
        <p>
          Download the latest release for your platform from the GitHub releases page:
        </p>
        <pre>
          <code>
            {`# For Linux
curl -LO https://github.com/k8sgpt-ai/k8sgpt/releases/latest/download/k8sgpt-linux-amd64
chmod +x k8sgpt-linux-amd64
sudo mv k8sgpt-linux-amd64 /usr/local/bin/k8sgpt

# For macOS
curl -LO https://github.com/k8sgpt-ai/k8sgpt/releases/latest/download/k8sgpt-darwin-amd64
chmod +x k8sgpt-darwin-amd64
sudo mv k8sgpt-darwin-amd64 /usr/local/bin/k8sgpt`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Operator Installation</h2>
        <p>
          For production use in Kubernetes clusters, we recommend using the K8sGPT operator.
          It can be installed using Helm:
        </p>
        <pre>
          <code>
            {`# Add the Helm repository
helm repo add k8sgpt https://charts.k8sgpt.ai
helm repo update

# Install the operator
helm install k8sgpt k8sgpt/k8sgpt-operator`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Package Manager Installation</h2>
        <p>
          K8sGPT is available in various package managers for easy installation:
        </p>

        <h3>APT (Debian/Ubuntu)</h3>
        <pre>
          <code>
            {`# Add the repository
curl -fsSL https://packages.k8sgpt.ai/gpg | sudo gpg --dearmor -o /usr/share/keyrings/k8sgpt-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/k8sgpt-archive-keyring.gpg] https://packages.k8sgpt.ai/apt stable main" | sudo tee /etc/apt/sources.list.d/k8sgpt.list

# Install K8sGPT
sudo apt update
sudo apt install k8sgpt`}
          </code>
        </pre>

        <h3>RPM (RHEL/CentOS/Fedora)</h3>
        <pre>
          <code>
            {`# Add the repository
sudo dnf install https://packages.k8sgpt.ai/rpm/k8sgpt-release.rpm

# Install K8sGPT
sudo dnf install k8sgpt`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Docker Installation</h2>
        <p>
          You can also run K8sGPT using Docker:
        </p>
        <pre>
          <code>
            {`# Pull the image
docker pull k8sgpt/k8sgpt:latest

# Run K8sGPT
docker run -it --rm \\
  -v ~/.kube/config:/root/.kube/config:ro \\
  -v ~/.config/k8sgpt:/root/.config/k8sgpt \\
  k8sgpt/k8sgpt:latest analyze`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Verifying Installation</h2>
        <p>
          After installation, verify that K8sGPT is working correctly:
        </p>
        <pre>
          <code>
            {`# Check version
k8sgpt version

# Run analysis
k8sgpt analyze`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Next Steps</h2>
        <p>
          After installing K8sGPT, you should:
        </p>
        <ul>
          <li>Configure your AI provider credentials</li>
          <li>Set up filters and analyzers</li>
          <li>Configure output formats and integrations</li>
          <li>Review the configuration documentation for advanced settings</li>
        </ul>
      </section>
    </DocPage>
  );
};

export default Installation; 