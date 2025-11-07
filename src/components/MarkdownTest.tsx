import { useEffect } from 'react';

// Test markdown imports without ?raw first
import week1Content from '../data/blog/week-1.md';
import week2Content from '../data/blog/week-2.md';

const MarkdownTest = () => {
  useEffect(() => {
    console.log('MarkdownTest: Testing imports...');
    console.log('week1Content type:', typeof week1Content);
    console.log('week1Content length:', week1Content?.length);
    console.log('week1Content preview:', week1Content?.substring(0, 100));
    
    console.log('week2Content type:', typeof week2Content);
    console.log('week2Content length:', week2Content?.length);
    console.log('week2Content preview:', week2Content?.substring(0, 100));
  }, []);

  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px' }}>
      <h3>Markdown Import Test</h3>
      <p>Check console for debug info</p>
      <div>
        <strong>Week 1 Content Length:</strong> {week1Content?.length || 'undefined'}
      </div>
      <div>
        <strong>Week 2 Content Length:</strong> {week2Content?.length || 'undefined'}
      </div>
    </div>
  );
};

export default MarkdownTest;
