/* eslint-disable @typescript-eslint/no-explicit-any */

import { container, Lifecycle } from "tsyringe";
import type { IServiceCollection, IServiceProvider, IServiceScope } from "../interfaces/IKernelBuilder.js";

// Implement the service collection using tsyringe
export class ServiceCollection implements IServiceCollection {
    private container = container.createChildContainer();

    addSingleton<T>(serviceType: any, implementation: new (...args: any[]) => T): void {
        // Fix the registration to use the correct format expected by tsyringe
        this.container.register(serviceType, implementation, { lifecycle: Lifecycle.Singleton });
    }

    addSingletonInstance<T>(serviceType: any, instance: T): void {
        this.container.registerInstance(serviceType, instance);
    }

    addScoped<T>(serviceType: any, implementation: new (...args: any[]) => T): void {
        // For scoped, we register with the container
        this.container.register(serviceType, implementation, { lifecycle: Lifecycle.ContainerScoped });
    }

    addTransient<T>(serviceType: any, implementation: new (...args: any[]) => T): void {
        this.container.register(serviceType, implementation, { lifecycle: Lifecycle.Transient });
    }

    getService<T>(serviceType: any): T {
        return this.container.resolve(serviceType);
    }

    createScope(): IServiceScope {
        const childContainer = this.container.createChildContainer();
        return new ServiceScope(childContainer);
    }
}

// Implement service scope
class ServiceScope implements IServiceScope {
    constructor(private childContainer: any) {}

    get serviceProvider(): IServiceProvider {
        return new ServiceProvider(this.childContainer);
    }

    dispose(): void {
        // Release any resources if needed
    }
}

// Implement service provider
class ServiceProvider implements IServiceProvider {
    constructor(private container: any) {}

    getService<T>(serviceType: any): T {
        return this.container.resolve(serviceType);
    }
}
