import type { HttpClient } from '../interfaces/HttpClient.ts';

/**
 * Configuration for a Kernel instance.
 */
export interface KernelConfig {
    /**
     * The service identifier for the kernel.
     */
    readonly serviceId?: string;

    /**
     * The HTTP client for making network requests.
     */
    readonly httpClient?: HttpClient;

    /**
     * The memory store for persisting data.
     */
    readonly memoryStore?: unknown; // Placeholder for memory store type
}