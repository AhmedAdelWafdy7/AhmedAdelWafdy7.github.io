// Simple test to check if markdown imports work
console.log('Testing markdown imports...');

try {
  // Test import
  import('../data/blog/week-1.md?raw').then(module => {
    console.log('Week 1 import successful, content length:', module.default?.length);
  }).catch(error => {
    console.error('Week 1 import failed:', error);
  });
} catch (error) {
  console.error('Import error:', error);
}
