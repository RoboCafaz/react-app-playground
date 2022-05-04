module.exports = {
  // Load files with these extensions as modules
  moduleFileExtensions: [
    // Exact matches
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  // Consider files that match these patterns to
  //   be unit test files.
  testMatch: [
    // Glob Patterns
    '**/__tests__/**.test.(ts|tsx|js|jsx)'
  ],
  // Which loaders to use for which file patterns
  transform: {
    // Regex patterns
    '\\.[tj]s(x?)$': 'babel-jest'
  }
};
