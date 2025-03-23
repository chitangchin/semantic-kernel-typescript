/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IServiceCollection {
    // Register a singleton service
    addSingleton<T>(serviceType: any, implementation: new (...args: any[]) => T): void;
    addSingletonInstance<T>(serviceType: any, instance: T): void;
    
    // Register a scoped service
    addScoped<T>(serviceType: any, implementation: new (...args: any[]) => T): void;
    
    // Register a transient service
    addTransient<T>(serviceType: any, implementation: new (...args: any[]) => T): void;
    
    // Get a service
    getService<T>(serviceType: any): T;
    
    // Create a scope
    createScope(): IServiceScope;
}

// Interface for defining a service scope
export interface IServiceScope {
    serviceProvider: IServiceProvider;
    dispose(): void;
}

// Interface for the service provider
export interface IServiceProvider {
    getService<T>(serviceType: any): T;
}
