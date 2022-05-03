module.exports = {
  // Load files with these extensions as modules
  moduleFileExtensions: [
    // Exact matches
    "js",
    "jsx",
  ],
  // Consider files that match these patterns to
  //   be unit test files.
  testMatch: [
    // Glob Patterns
    "**/__tests__/**.test.(js|jsx)",
  ],
  // Which loaders to use for which file patterns
  transform: {
    // Regex patterns
    "\\.js(x?)$": "babel-jest",
  },
};
