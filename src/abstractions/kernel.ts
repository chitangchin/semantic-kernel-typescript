import type { SemanticKernelBuilder } from '../interfaces/SemanticKernelBuilder.ts';
import type { HttpClient } from '../interfaces/HttpClient.ts';
import type { KernelConfig } from '../config/KernelConfig.ts';

/**
 * Represents the main entry point for the Semantic Kernel functionality.
 */
export class Kernel {
    private constructor(
        private readonly config: KernelConfig
    ) {}

    /**
     * Creates a new builder for configuring and creating a Kernel instance.
     * 
     * @returns A new KernelBuilder instance.
     */
    public static builder(): KernelBuilder {
        return new KernelBuilder();
    }

    /**
     * Internal factory method to create a Kernel instance.
     * Only to be used by the KernelBuilder.
     */
    static create(config: KernelConfig): Kernel {
        return new Kernel(config);
    }

    // Additional kernel methods would go here
}

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
        return Kernel.create(this.config);
    }
}
