/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InjectionToken } from "tsyringe";

export interface IServiceCollection {
    /**
     * Registers a singleton service.
     */
    addSingleton<T>(serviceType: InjectionToken<T>, implementation: new (...args: any[]) => T): IServiceCollection;
    
    /**
     * Registers a singleton instance.
     */
    addSingletonInstance<T>(serviceType: InjectionToken<T>, instance: T): IServiceCollection;
    
    /**
     * Registers a scoped service.
     */
    addScoped<T>(serviceType: InjectionToken<T>, implementation: new (...args: any[]) => T): IServiceCollection;
    
    /**
     * Registers a transient service.
     */
    addTransient<T>(serviceType: InjectionToken<T>, implementation: new (...args: any[]) => T): IServiceCollection;
    
    /**
     * Builds a service provider from this collection.
     */
    buildServiceProvider(): IServiceProvider;
    
    /**
     * Creates a scope.
     */
    createScope(): { serviceProvider: IServiceProvider; dispose: () => void };
}

/**
 * Interface for the service provider.
 */
export interface IServiceProvider {
    /**
     * Gets a service of the specified type.
     */
    getService<T>(serviceType: InjectionToken<T>): T;
}