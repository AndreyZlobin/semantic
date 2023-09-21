module.exports = {
    "branches": ["main"],
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          releaseRules: [
            { type: 'bug', release: 'patch' },
            { type: 'build', release: 'patch' },
            { type: 'feat', release: 'minor' },
            { type: 'refactor', release: 'patch' },
            { type: 'major', release: 'major' },
            { type: 'doc', release: 'patch' },
          ],
        },
      ],
      [
        '@semantic-release/release-notes-generator',
        {
          preset: 'conventionalcommits',
          linkReferences: true,
          presetConfig: {
            types: [
              {
                type: 'bug',
                section: '🐞 Bugs',
                hidden: false,
              },
              {
                type: 'feat',
                section: '✨ Features',
                hidden: false,
              },
              {
                type: 'build',
                section: '📦 Build',
                hidden: false,
              },
              {
                type: 'doc',
                section: '📄 Docs',
                hidden: false,
              },
            ],
          },
        },
      ],
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
        },
      ],
      ['@semantic-release/github'],
    ],
    
    // "plugins": [
    //   "@semantic-release/commit-analyzer",
    //   "@semantic-release/release-notes-generator",
    //   "@semantic-release/npm",
    //   [
    //     "@semantic-release/git",
    //     {
    //       "assets": ["package.json", "CHANGELOG.md"],
    //       "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    //     }
    //   ]
    // ]
}