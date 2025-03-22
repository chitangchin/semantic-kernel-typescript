/**
 * Interface for all builders.
 * 
 * @typeparam T the type to build.
 */
export interface SemanticKernelBuilder<T> {
    /**
     * Build the object.
     * 
     * @returns a constructed object.
     */
    build(): T;
}
