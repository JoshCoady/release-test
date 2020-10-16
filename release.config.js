const production = process.env.GITHUB_REF === 'refs/heads/production'

const plugins = [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
]

if (production) {
    plugins.push(
        // '@semantic-release/changelog',
        // '@semantic-release/git',
        '@semantic-release/github',
    )
}

module.exports = {
    branches: [
        'production',
        {name: 'master', prerelease: 'rc'},
    ],
    plugins,
}
