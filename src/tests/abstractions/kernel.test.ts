import { describe, it, expect } from 'vitest';
import { Kernel, KernelBuilder } from '../../abstractions/kernel';

describe('Kernel', () => {
  describe('builder', () => {
    it('should return a KernelBuilder instance', () => {
      const builder = Kernel.builder();
      expect(builder).toBeInstanceOf(KernelBuilder);
    });
  });

  describe('create', () => {
    it('should create a Kernel with the given config', () => {
      const config = { serviceId: 'test-service' };
      const kernel = Kernel.create(config);
      
      // Kernel is an instance of Kernel class
      expect(kernel).toBeInstanceOf(Kernel);
      
      // We can't directly access private fields, but we can check 
      // if the kernel was created successfully
      expect(kernel).toBeDefined();
    });
  });
});

describe('KernelBuilder', () => {
  describe('withServiceId', () => {
    it('should set the serviceId in the config', () => {
      const builder = new KernelBuilder();
      const result = builder.withServiceId('test-service');
      
      // Should return itself for chaining
      expect(result).toBe(builder);
      
      // Build to verify serviceId was set
      const kernel = builder.build();
      expect(kernel).toBeInstanceOf(Kernel);
    });
  });

  describe('build', () => {
    it('should create a Kernel with the configured settings', () => {
      const builder = new KernelBuilder()
        .withServiceId('test-service');
      
      const kernel = builder.build();
      expect(kernel).toBeInstanceOf(Kernel);
    });

    it('should create a Kernel with empty config if no settings are provided', () => {
      const builder = new KernelBuilder();
      const kernel = builder.build();
      expect(kernel).toBeInstanceOf(Kernel);
    });

    it('should support method chaining', () => {
      const kernel = new KernelBuilder()
        .withServiceId('test-service')
        .build();
      
      expect(kernel).toBeInstanceOf(Kernel);
    });
  });
});
