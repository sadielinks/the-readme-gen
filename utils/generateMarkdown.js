// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


var backTicks = "```"
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

by: ${data.name}

${data.description}

## Table of Contents
* [Install](#Install)
* [Usage](#Usage)
* [Testing](#Testing)
* [Contribute](#Contribute)
* [Questions](#Questions)
* [License](#license)

## Installation

${backTicks}
${data.installation}
${backTicks}

## Usage

${backTicks}
${data.use}
${backTicks}

## Testing

## Contribute

## Questions

## License




`;
}

module.exports = generateMarkdown;
