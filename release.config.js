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
        {name: 'stable', prerelease: 'test'},
        {name: 'sandbox', prerelease: process.env.GITHUB_REF},
    ],
    plugins,
}
