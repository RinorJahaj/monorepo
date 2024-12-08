const path = require('path');

module.exports = () => {
  // Get the project name from the environment variable
  const projectName = 'projects';
  //   const projectName = process.env.NX_PROJECT_NAME;

  // Read the base semantic-release config
  const baseConfig = require('../semantic-release.config.js');

  // Customize the config for the specific project
  baseConfig.plugins = baseConfig.plugins.map((plugin) => {
    if (Array.isArray(plugin) && plugin[0] === '@semantic-release/npm') {
      return [
        '@semantic-release/npm',
        {
          ...plugin[1],
          pkgRoot: `dist/libs/${projectName}`,
        },
      ];
    }

    if (Array.isArray(plugin) && plugin[0] === '@semantic-release/git') {
      return [
        '@semantic-release/git',
        {
          ...plugin[1],
          assets: [
            `libs/${projectName}/CHANGELOG.md`,
            `libs/${projectName}/package.json`,
          ],
        },
      ];
    }

    return plugin;
  });

  return baseConfig;
};
