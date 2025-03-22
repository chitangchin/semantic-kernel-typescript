import type { KernelConfig } from '../config/KernelConfig.ts';
import { KernelBuilder } from '../builders/KernelBuilder.ts';

/**
 * Represents the main entry point for the Semantic Kernel functionality.
 */
export class Kernel {
    /**
     * Creates a new Kernel with the specified configuration.
     * 
     * @param config The kernel configuration.
     */
    constructor(
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

    // Additional kernel methods would go here
}
