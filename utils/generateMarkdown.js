// all information pertaining to licenses were pulled from https://choosealicense.com/licenses/

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![mit](https://img.shields.io/badge/license-MIT-brightgreen)`;
  } else if (license === 'Apache') {
    return `![apache](https://img.shields.io/badge/license-APACHE%202.0-orange)`;
  } else if (license === 'GNU') {
    return `![gpl](https://img.shields.io/badge/license-GPL%203.0-green)`;
  } else if (license === 'Mozilla') {
    return `![bsd](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === 'None') {
    return ``;
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT license](https://choosealicense.com/licenses/mit/)`;
  } else if (license === 'Apache') {
    return `[Apache 2.0 license](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === 'GNU') {
    return `[GNU GPLv3 license](https://choosealicense.com/licenses/agpl-3.0/)`;
  } else if (license === 'Mozilla') {
    return `[Mozilla license](https://opensource.org/licenses/MPL-2.0')`;
  } else if (license === 'None') {
    return ``;
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return ` A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. `;
  } else if (license === 'Apache') {
    return ` A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (license === 'GNU') {
    return ` Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. `;
  } else if (license === 'Mozilla') {
    return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. `;
  } else if (license === 'None') {
    return ``;
  }
}

var backTicks = '```';
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

By: ${data.name}

## Description:
${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Tests](#tests)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

## Installation

Users need to install the following:
${backTicks}
${data.install}
${backTicks}

## Usage

${backTicks}
${data.use}
${backTicks}

## Technologies

${data.technologies} were used to create this project.

## Tests

Users can test this code by: 
${backTicks}
${data.test}
${backTicks}

## Contributing

Would you like to contribute to the project?
${backTicks}
${data.contribute}
${backTicks}

## Questions

Do you have any questions or concerns? Please contact me at either my GitHub at [${data.GitHub}](https://github.com/${data.GitHub}) or email me at [${data.email}](mailto:${data.email})

## License

The licensing for this project is provided by: ${renderLicenseLink(data.license)}.

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
// thank you for reading thru my code! 