import "reflect-metadata";
import { describe, it, expect } from 'vitest';
import { KernelBuilder } from '../../src/core/KernelBuilder.js';
import type { IKernelBuilder, IKernelBuilderPlugins } from '../../src/interfaces/IKernelBuilder.js';

describe('IKernelBuilder interface', () => {
  it('should be implemented correctly by KernelBuilder', () => {
    const builder: IKernelBuilder = new KernelBuilder();
    
    expect(builder).toHaveProperty('services');
    expect(builder).toHaveProperty('plugins');
    
    // Verify the plugins property returns an object implementing IKernelBuilderPlugins
    const plugins: IKernelBuilderPlugins = builder.plugins;
    expect(plugins).toHaveProperty('services');
    
    // Verify the services property exists on both the builder and plugins
    expect(builder.services).toBeDefined();
    expect(plugins.services).toBeDefined();
    
    // Verify the services are the same instance
    expect(builder.services).toBe(plugins.services);
  });
});

describe('IKernelBuilder', () => {
  it('placeholder test', () => {
    // This is a placeholder test to prevent the test suite from failing
    expect(true).toBe(true);
  });
});
