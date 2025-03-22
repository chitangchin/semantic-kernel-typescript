import { 
    PipelineRequest, 
    PipelineResponse, 
    SendRequest,
    HttpHeaders
} from "@azure/core-rest-pipeline";

/**
 * Interface for HTTP client implementations in the Semantic Kernel.
 * Uses Azure Core HTTP client library for JavaScript.
 */
export interface HttpClient {
    /**
     * The method that makes the request and returns a response.
     * 
     * @param request The request to be sent.
     * @returns A promise that resolves to the response.
     */
    sendRequest: SendRequest;
}

// Re-export the types from Azure
export { 
    PipelineRequest,
    PipelineResponse, 
    SendRequest,
    HttpHeaders
};
