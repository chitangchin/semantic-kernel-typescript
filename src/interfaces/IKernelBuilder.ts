/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IServiceCollection } from "./IServiceCollection.ts";

/// <summary>Provides a builder for constructing instances of <see cref="Kernel"/>.</summary>
export interface IKernelBuilder
{
    /// <summary>Gets the collection of services to be built into the <see cref="Kernel"/>.</summary>
    readonly Services: IServiceCollection;

    /// <summary>Gets a builder for adding collections as singletons to <see cref="Services"/>.</summary>
    readonly Plugins: IKernelBuilderPlugins;
}

/// <summary>Provides a builder for adding plugins as singletons to a service collection.</summary>
export interface IKernelBuilderPlugins
{
    /// <summary>Gets the collection of services to which plugins should be added.</summary>
    readonly Services: IServiceCollection;
}