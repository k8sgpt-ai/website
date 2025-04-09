import React from 'react';
import DocPage from '../../../components/DocPage';
import ReactMarkdown from 'react-markdown';
import { 
  CommandLineIcon, 
  CubeIcon, 
  ServerIcon, 
  BeakerIcon,
  CircleStackIcon,
  CloudIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const Installation: React.FC = () => {
  const markdownContent = `# Installation Methods

Learn how to install K8sGPT using various methods including CLI, operator, and package managers.

## CLI Installation

The simplest way to get started with K8sGPT is using the CLI installation method.

\`\`\`bash
# Using curl
curl -LO https://github.com/k8sgpt-ai/k8sgpt/releases/latest/download/k8sgpt_Linux_x86_64.tar.gz
tar -xzf k8sgpt_Linux_x86_64.tar.gz
sudo mv k8sgpt /usr/local/bin/

# Using wget
wget https://github.com/k8sgpt-ai/k8sgpt/releases/latest/download/k8sgpt_Linux_x86_64.tar.gz
tar -xzf k8sgpt_Linux_x86_64.tar.gz
sudo mv k8sgpt /usr/local/bin/
\`\`\`

## Operator Installation

For Kubernetes-native installation, use the K8sGPT operator.

\`\`\`bash
# Install the operator
kubectl apply -f https://raw.githubusercontent.com/k8sgpt-ai/k8sgpt-operator/main/deploy/crds/k8sgpt.ai_v1alpha1_k8sgpt_cr.yaml
kubectl apply -f https://raw.githubusercontent.com/k8sgpt-ai/k8sgpt-operator/main/deploy/operator.yaml

# Create a K8sGPT instance
kubectl apply -f https://raw.githubusercontent.com/k8sgpt-ai/k8sgpt-operator/main/deploy/crds/k8sgpt.ai_v1alpha1_k8sgpt_cr.yaml
\`\`\`

## Package Manager Installation

### Homebrew (macOS)

\`\`\`bash
brew tap k8sgpt-ai/tap
brew install k8sgpt
\`\`\`

### APT (Debian/Ubuntu)

\`\`\`bash
# Add the repository
curl -fsSL https://download.opensuse.org/repositories/home:/k8sgpt-ai:/stable/xUbuntu_22.04/Release.key | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/k8sgpt.gpg
echo "deb https://download.opensuse.org/repositories/home:/k8sgpt-ai:/stable/xUbuntu_22.04/ /" | sudo tee /etc/apt/sources.list.d/k8sgpt.list

# Install K8sGPT
sudo apt update
sudo apt install k8sgpt
\`\`\`

### YUM/DNF (RHEL/CentOS)

\`\`\`bash
# Add the repository
curl -fsSL https://download.opensuse.org/repositories/home:/k8sgpt-ai:/stable/RHEL_8/Release.key | sudo gpg --dearmor -o /etc/pki/rpm-gpg/RPM-GPG-KEY-k8sgpt
echo "[k8sgpt]
name=K8sGPT Repository
baseurl=https://download.opensuse.org/repositories/home:/k8sgpt-ai:/stable/RHEL_8/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-k8sgpt" | sudo tee /etc/yum.repos.d/k8sgpt.repo

# Install K8sGPT
sudo dnf install k8sgpt
\`\`\`

## Docker Installation

You can also run K8sGPT using Docker.

\`\`\`bash
docker run -it --rm -v ~/.kube:/root/.kube k8sgpt/k8sgpt:latest
\`\`\`

## Verifying Installation

After installation, verify that K8sGPT is working correctly:

\`\`\`bash
k8sgpt version
\`\`\`

## Next Steps

Now that you have K8sGPT installed, you can:

1. Configure your AI backend
2. Run your first analysis
3. Set up auto-remediation
4. Explore advanced features

Check out our [configuration guide](/docs/configuration) to get started.`;

  return (
    <DocPage
      title="Installation"
      prev={{ title: "Overview", href: "/docs/getting-started/overview" }}
      next={{ title: "Configuration", href: "/docs/getting-started/configuration" }}
    >
      <div className="flex flex-col space-y-8">
        <div className="flex items-center space-x-2">
          <CommandLineIcon className="h-6 w-6 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Installation Methods</h1>
        </div>
        
        <ReactMarkdown
          components={{
            h2: ({node, children, ...props}) => {
              const title = React.Children.toArray(children)[0] as string;
              return (
                <div className="flex items-center space-x-2 mt-8 mb-4">
                  {title === 'CLI Installation' && <CommandLineIcon className="h-5 w-5 text-indigo-600" />}
                  {title === 'Operator Installation' && <CubeIcon className="h-5 w-5 text-indigo-600" />}
                  {title === 'Package Manager Installation' && <ServerIcon className="h-5 w-5 text-indigo-600" />}
                  {title === 'Docker Installation' && <CloudIcon className="h-5 w-5 text-indigo-600" />}
                  {title === 'Verifying Installation' && <BeakerIcon className="h-5 w-5 text-indigo-600" />}
                  {title === 'Next Steps' && <CircleStackIcon className="h-5 w-5 text-indigo-600" />}
                  <h2 className="text-2xl font-bold text-gray-800" {...props}>{children}</h2>
                </div>
              );
            },
            h3: ({node, children, ...props}) => {
              const title = React.Children.toArray(children)[0] as string;
              return (
                <div className="flex items-center space-x-2 mt-6 mb-3">
                  {title === 'Using Homebrew (macOS/Linux)' && <CommandLineIcon className="h-4 w-4 text-indigo-600" />}
                  {title === 'Direct Download' && <CommandLineIcon className="h-4 w-4 text-indigo-600" />}
                  {title === 'APT (Debian/Ubuntu)' && <ServerIcon className="h-4 w-4 text-indigo-600" />}
                  {title === 'RPM (RHEL/CentOS/Fedora)' && <ServerIcon className="h-4 w-4 text-indigo-600" />}
                  <h3 className="text-xl font-bold text-gray-700" {...props}>{children}</h3>
                </div>
              );
            },
          }}
        >
          {markdownContent.replace('# Installation Methods\n\n', '')}
        </ReactMarkdown>
      </div>
    </DocPage>
  );
};

export default Installation; 