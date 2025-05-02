import DocPage from '../../../components/DocPage';

const CustomRestBackend = () => {
  return (
    <DocPage
      title="Custom Rest Backend"
      description="Learn how to integrate a custom backend with k8sgpt using RESTful API"
      prev={{ title: 'Slack Integration', href: '/docs/tutorials/slack-integration' }}
      next={{ title: 'Observability', href: '/docs/tutorials/observability' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            This tutorial guides you through the process of integrating a custom backend with k8sgpt using RESTful API.
            This setup is particularly useful when you want to integrate Retrieval-Augmented Generation (RAG) or an AI Agent with k8sgpt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">API Specification</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              To ensure k8sgpt can interact with your custom backend, implement the following API endpoint using the OpenAPI schema:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`openapi: 3.0.0
info:
  title: Custom REST Backend API
  version: 1.0.0
paths:
  /v1/completions:
    post:
      summary: Generate a text-based response from the custom backend
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                model:
                  type: string
                  description: The name of the model to use.
                prompt:
                  type: string
                  description: The textual prompt to send to the model.
                options:
                  type: object
                  additionalProperties:
                    type: string
                  description: Model-specific options, such as temperature.
              required:
                - model
                - prompt
      responses:
        "200":
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  model:
                    type: string
                    description: The model name that generated the response.
                  created_at:
                    type: string
                    format: date-time
                    description: The timestamp of the response.
                  response:
                    type: string
                    description: The textual response itself.
                required:
                  - model
                  - created_at
                  - response
        "400":
          description: Bad Request
        "500":
          description: Internal Server Error`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>K8sGPT CLI</li>
              <li>Golang go1.22 or higher</li>
              <li>langchaingo library for building RAG applications</li>
              <li>gin for handling RESTful APIs in Go</li>
              <li>Qdrant vector database for storing and searching through knowledge bases</li>
              <li>Ollama service to run large language models</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Writing a simple RAG backend</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Setup</h3>
            <p className="text-gray-600">
              Create a new simple golang project:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`mkdir -p custom-backend
cd custom-backend
go mod init github.com/<username>/custom-backend`}</code>
            </pre>

            <p className="text-gray-600">
              Install necessary dependencies:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`go get -u github.com/tmc/langchaingo
go get -u github.com/gin-gonic/gin`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-4 mb-2">Basic Implementation</h3>
            <p className="text-gray-600">
              Create a main.go file with the following content:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`package main

import (
    "context"
    "fmt"
    "net/http"
    "net/url"
    "strings"
    "time"

    "github.com/gin-gonic/gin"
    "github.com/tmc/langchaingo/embeddings"
    "github.com/tmc/langchaingo/llms"
    "github.com/tmc/langchaingo/llms/ollama"
    "github.com/tmc/langchaingo/vectorstores"
    "github.com/tmc/langchaingo/vectorstores/qdrant"
)

var (
    ollama_url = "http://localhost:11434"
    listenAddr = ":8090"
)

func main() {
    server := gin.Default()
    server.POST("/completion", func(c *gin.Context) {
        var req CustomRestRequest
        if err := c.ShouldBindJSON(&req); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }
        content, err := rag(ollama_url, req)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
            return
        }
        resp := CustomRestResponse{
            Model:     req.Model,
            CreatedAt: time.Now(),
            Response:  content,
        }
        c.JSON(http.StatusOK, resp)
    })
    err := server.Run(listenAddr)
    if err != nil {
        fmt.Println("Error: %w", err)
    }
}`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Testing with K8sGPT</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              To test this with K8sGPT, add a customrest AI backend configuration:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`./k8sgpt auth add --backend customrest --baseurl http://localhost:8090/completion --model llama3.1`}</code>
            </pre>

            <p className="text-gray-600">
              To explain the analysis results using the custom RAG pipeline:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`./k8sgpt analyze --backend customrest --explain`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              After setting up your custom backend:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Extend it to use private datasets for knowledge retrieval</li>
              <li>Build more complex AI pipelines</li>
              <li>Enhance error handling and logging</li>
              <li>Add authentication and security features</li>
              <li>Optimize performance and scalability</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default CustomRestBackend; 