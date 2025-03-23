// Import reflect-metadata properly
import "reflect-metadata";
import { describe, it, expect } from 'vitest';
import { ServiceCollection } from '../../src/services/ServiceCollection.js';

describe('ServiceCollection', () => {
  it('should register and resolve singleton services', () => {
    const services = new ServiceCollection();
    
    class TestService {
      getValue() {
        return 'test-value';
      }
    }
    
    services.addSingleton(TestService, TestService);
    
    const serviceProvider = services.buildServiceProvider();
    const service1 = serviceProvider.getService(TestService);
    const service2 = serviceProvider.getService(TestService);
    
    expect(service1).toBeInstanceOf(TestService);
    expect(service1.getValue()).toBe('test-value');
    expect(service1).toBe(service2); // Same instance (singleton)
  });
  
  it('should register and resolve singleton instances', () => {
    const services = new ServiceCollection();
    
    class TestService {
      constructor(public value: string) {}
      getValue() {
        return this.value;
      }
    }
    
    const instance = new TestService('instance-value');
    services.addSingletonInstance(TestService, instance);
    
    const serviceProvider = services.buildServiceProvider();
    const resolved = serviceProvider.getService(TestService);
    
    expect(resolved).toBe(instance); // Same exact instance
    expect(resolved.getValue()).toBe('instance-value');
  });
  
  it('should register and resolve transient services', () => {
    const services = new ServiceCollection();
    
    class TestService {
      getValue() {
        return 'transient-value';
      }
    }
    
    services.addTransient(TestService, TestService);
    
    const serviceProvider = services.buildServiceProvider();
    const service1 = serviceProvider.getService(TestService);
    const service2 = serviceProvider.getService(TestService);
    
    expect(service1).toBeInstanceOf(TestService);
    expect(service1.getValue()).toBe('transient-value');
    expect(service1).not.toBe(service2); // Different instances (transient)
  });
  
  it('should create scoped services correctly', () => {
    const services = new ServiceCollection();
    
    class TestService {
      getValue() {
        return 'scoped-value';
      }
    }
    
    services.addScoped(TestService, TestService);
    
    const scope = services.createScope();
    const scopedProvider = scope.serviceProvider;
    
    const service1 = scopedProvider.getService(TestService);
    const service2 = scopedProvider.getService(TestService);
    
    expect(service1).toBeInstanceOf(TestService);
    expect(service1.getValue()).toBe('scoped-value');
    expect(service1).toBe(service2); // Same instance within scope
    
    // Test another scope
    const scope2 = services.createScope();
    const scopedProvider2 = scope2.serviceProvider;
    const service3 = scopedProvider2.getService(TestService);
    
    expect(service3).toBeInstanceOf(TestService);
    expect(service3).not.toBe(service1); // Different instance in different scope
    
    scope.dispose();
    scope2.dispose();
  });
});
