// Import reflect-metadata properly
import "reflect-metadata";
import { describe, it, expect } from 'vitest';
import { KernelBuilder } from '../../src/core/KernelBuilder.js';
import { ServiceCollection } from '../../src/services/ServiceCollection.js';

describe('KernelBuilder', () => {
  it('should create a builder with default services', () => {
    const builder = new KernelBuilder();
    
    expect(builder.services).toBeInstanceOf(ServiceCollection);
    expect(builder.plugins).toBe(builder);
  });
  
  it('should create a builder with provided services', () => {
    const services = new ServiceCollection();
    const builder = new KernelBuilder(services);
    
    expect(builder.services).toBe(services);
  });
  
  it('should maintain the same services instance for plugins', () => {
    const builder = new KernelBuilder();
    
    expect(builder.plugins.services).toBe(builder.services);
  });
  
  it('should lazy initialize services if not provided', () => {
    const builder = new KernelBuilder();
    const services = builder.services;
    
    // Access services a second time, should be same instance
    expect(builder.services).toBe(services);
  });
  
  it('should allow adding services through the builder', () => {
    const builder = new KernelBuilder();
    
    // Add a test service
    class TestService {
      public getValue(): string {
        return 'test-value-from-builder';
      }
    }
    
    builder.services.addSingleton(TestService, TestService);
    
    // Build a service provider first, then resolve the service
    const serviceProvider = builder.services.buildServiceProvider();
    const resolvedService = serviceProvider.getService(TestService);
    expect(resolvedService).toBeInstanceOf(TestService);
    expect(resolvedService.getValue()).toBe('test-value-from-builder');
  });
});
