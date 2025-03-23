import type { IServiceCollection } from "../interfaces/IServiceCollection.js";
import type { IKernelBuilder } from "../interfaces/IKernelBuilder.js";

export class KernelBuilder implements IKernelBuilder {
    private _services?: IServiceCollection;
  
  /**
   * Creates a new instance of KernelBuilder
   */
  constructor(services?: IServiceCollection) {
    if (services) {
      if (!services) {
        throw new Error("Services cannot be null");
      }
      this._services = services;
    }
    
    this.allowBuild = true;
}