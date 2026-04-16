import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import React from 'react';
import ReactDOM from 'react-dom/client';

describe('src/index.tsx', () => {
  let rootElement: HTMLDivElement;

  beforeEach(() => {
    // Create a root element for testing
    rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    // Clean up after each test
    document.body.removeChild(rootElement);
  });

  it('should render React app without crashing', () => {
    const mockApp = () => React.createElement('div', null, 'Test App');
    
    expect(() => {
      const root = ReactDOM.createRoot(rootElement);
      root.render(
        React.createElement(
          React.StrictMode,
          null,
          React.createElement(mockApp)
        )
      );
    }).not.toThrow();
  });

  it('should mount to root element', () => {
    const root = ReactDOM.createRoot(rootElement);
    expect(root).toBeDefined();
    expect(rootElement.id).toBe('root');
  });

  it('should render App component in StrictMode', () => {
    const mockApp = () => React.createElement('div', null, 'App Content');
    
    const root = ReactDOM.createRoot(rootElement);
    const element = React.createElement(
      React.StrictMode,
      null,
      React.createElement(mockApp)
    );
    
    expect(element.type).toBe(React.StrictMode);
    root.render(element);
  });

  it('should throw error when root element does not exist', () => {
    const nonExistentElement = document.getElementById('non-existent-root');
    
    expect(() => {
      ReactDOM.createRoot(nonExistentElement as HTMLElement);
    }).toThrow();
  });

  it('should only create single root instance', () => {
    const root1 = ReactDOM.createRoot(rootElement);
    
    expect(() => {
      const root2 = ReactDOM.createRoot(rootElement);
    }).toThrow();
  });

  it('should import App component correctly', async () => {
    const appModule = await import('./App');
    expect(appModule.default).toBeDefined();
    expect(typeof appModule.default).toBe('function');
  });

  it('should apply App.css stylesheet', async () => {
    const cssModule = await import('./App.css?raw');
    expect(cssModule).toBeDefined();
  });

  it('should render with React.StrictMode enabled', () => {
    const mockApp = () => React.createElement('div', null, 'Strict Mode Test');
    
    const strictModeElement = React.createElement(
      React.StrictMode,
      null,
      React.createElement(mockApp)
    );
    
    expect(strictModeElement.type).toBe(React.StrictMode);
    expect(strictModeElement.props.children).toBeDefined();
  });
});