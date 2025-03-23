/* eslint-disable @typescript-eslint/no-explicit-any */
import { container, Lifecycle, InjectionToken } from "tsyringe";
import type { IServiceCollection, IServiceProvider } from "../interfaces/IServiceCollection.js";

/**
 * Implements a service collection using tsyringe for dependency injection.
 */
export class ServiceCollection implements IServiceCollection, IServiceProvider {
    private container = container.createChildContainer();

    /**
     * Registers a singleton service.
     */
    addSingleton<T>(serviceType: InjectionToken<T>, implementation: new (...args: any[]) => T): IServiceCollection {
        this.container.register(serviceType, implementation, { lifecycle: Lifecycle.Singleton });
        return this;
    }

    /**
     * Registers a singleton instance.
     */
    addSingletonInstance<T>(serviceType: InjectionToken<T>, instance: T): IServiceCollection {
        this.container.registerInstance(serviceType, instance);
        return this;
    }

    /**
     * Registers a scoped service.
     */
    addScoped<T>(serviceType: InjectionToken<T>, implementation: new (...args: any[]) => T): IServiceCollection {
        this.container.register(serviceType, implementation, { lifecycle: Lifecycle.ContainerScoped });
        return this;
    }

    /**
     * Registers a transient service.
     */
    addTransient<T>(serviceType: InjectionToken<T>, implementation: new (...args: any[]) => T): IServiceCollection {
        this.container.register(serviceType, implementation, { lifecycle: Lifecycle.Transient });
        return this;
    }

    /**
     * Gets a service of the specified type.
     */
    getService<T>(serviceType: InjectionToken<T>): T {
        return this.container.resolve(serviceType);
    }

    /**
     * Builds a service provider from this collection.
     */
    buildServiceProvider(): IServiceProvider {
        return this;
    }

    /**
     * Creates a new scope with its own service provider.
     */
    createScope(): { serviceProvider: IServiceProvider; dispose: () => void } {
        const childContainer = this.container.createChildContainer();
        const provider = new ScopedServiceProvider(childContainer);
        
        return {
            serviceProvider: provider,
            dispose: () => { /* Release any resources */ }
        };
    }
}

/**
 * Provides scoped service resolution.
 */
class ScopedServiceProvider implements IServiceProvider {
    constructor(private container: any) {}

    getService<T>(serviceType: InjectionToken<T>): T {
        return this.container.resolve(serviceType);
    }
}