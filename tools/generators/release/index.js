const { execSync } = require('child_process');

function runSemanticRelease(project) {
  try {
    // Set the project name environment variable
    process.env.NX_PROJECT_NAME = project;

    // Run semantic-release with the project-specific configuration
    execSync(`npx semantic-release -e ./scripts/semantic-release.js`, {
      stdio: 'inherit',
      env: { ...process.env, NX_PROJECT_NAME: project },
    });
  } catch (error) {
    console.error(`Failed to release ${project}:`, error);
    process.exit(1);
  }
}

module.exports = {
  name: 'release',
  factory: async () => {
    return {
      release: async ({ project }) => {
        runSemanticRelease(project);
      },
    };
  },
};
