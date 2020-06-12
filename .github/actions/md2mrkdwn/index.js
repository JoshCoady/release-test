const core = require('@actions/core');
const slackifyMarkdown = require('slackify-markdown');
try {
    const md = core.getInput('text');
    const mrkdwn = slackifyMarkdown(md);
    core.setOutput("text", mrkdwn);
} catch (error) {
    core.setFailed(error.message);
}
