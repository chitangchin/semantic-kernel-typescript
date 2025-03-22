import { SemanticKernelBuilder } from '../interfaces/SemanticKernelBuilder';
import { Kernel } from '../core/kernel';
import { KernelConfig } from '../config/KernelConfig';
import { HttpClient } from '../interfaces/HttpClient';

/**
 * Builder for creating configured Kernel instances.
 */
export class KernelBuilder implements SemanticKernelBuilder<Kernel> {
    private config: KernelConfig = {};

    /**
     * Sets the service ID for the kernel.
     * 
     * @param serviceId The service ID.
     * @returns The builder instance for chaining.
     */
    public withServiceId(serviceId: string): KernelBuilder {
        this.config = { ...this.config, serviceId };
        return this;
    }

    /**
     * Sets the HTTP client for the kernel.
     * 
     * @param httpClient The HTTP client to use.
     * @returns The builder instance for chaining.
     */
    public withHttpClient(httpClient: HttpClient): KernelBuilder {
        this.config = { ...this.config, httpClient };
        return this;
    }

        /**
     * Builds a new Kernel instance with the configured settings.
     * 
     * @returns A new Kernel instance.
     */
    public build(): Kernel {
        return new Kernel(this.config);
    }
}
