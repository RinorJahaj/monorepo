module.exports = {
  branches: ['main'], // Tracks releases from the 'main' branch
  plugins: [
    '@semantic-release/commit-analyzer', // Analyzes commit messages to determine release type
    '@semantic-release/release-notes-generator', // Generates release notes
    '@semantic-release/changelog', // Writes the release notes into CHANGELOG.md
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/packages/my-library', // Customizable per-library (dynamic)
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'packages/my-library/CHANGELOG.md',
          'packages/my-library/package.json',
        ],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
