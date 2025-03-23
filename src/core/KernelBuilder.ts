import type { IServiceCollection } from "../interfaces/IServiceCollection.ts";
import type { IKernelBuilder, IKernelBuilderPlugins } from "../interfaces/IKernelBuilder.ts";
import { ServiceCollection } from "../services/ServiceCollection.ts";

export class KernelBuilder implements IKernelBuilder, IKernelBuilderPlugins {
    private _services?: IServiceCollection;
  
//Creates a new instance of KernelBuilder
    constructor(services?: IServiceCollection) {
        if (services) {
        this._services = services;
        }
        
        this.allowBuild = true;
    }

    //Decision for allowing a call to build()
    private readonly allowBuild: boolean;

    get services(): IServiceCollection {
        return this._services ??= new ServiceCollection();
    }
    

    get plugins(): IKernelBuilderPlugins {
        return this;
    }
    

    build(): Kernel {
        if (!this.allowBuild) {
          throw new Error("This builder instance does not allow building");
        }
        
        // Create service provider from the services
        const serviceProvider = this.services.buildServiceProvider();
        
        // Return new kernel with the service provider
        return new Kernel(serviceProvider);
      }
}