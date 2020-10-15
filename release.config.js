// {
//   "branches": [
//     "master",
//     {"name": "test", "prerelease": true},
//     {"name": "dev", "prerelease": true}
//   ],
//   "plugins": [
//     "@semantic-release/commit-analyzer",
//     "@semantic-release/release-notes-generator",
//     "@semantic-release/changelog",
//     "@semantic-release/git",
//     "@semantic-release/github"
//   ]
// }

const master = process.env.GITHUB_REF === 'refs/heads/master'

const plugins = [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
]

if (master) {
    plugins.push(
        '@semantic-release/changelog',
        '@semantic-release/git',
        '@semantic-release/github',
    )
}

module.exports = {
    branches: [
        'master',
        {name: 'test', prerelease: true},
        {name: 'dev', prerelease: true},
    ],
    plugins,
}
