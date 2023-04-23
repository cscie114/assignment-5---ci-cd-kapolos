# Assignment 5

## Live site

[Netlify Deployment](https://assignment-5-ci-cd-kap.netlify.app)

## Local development

### Source

#### Clone

`git clone https://github.com/cscie114/assignment-5---ci-cd-kapolos.git`

### Gatsby

### Description

This is a modified version of Assignment 4.

In order to reduce build time, there are the following differences:

* Places are not used
* Park images are displayed instead.

### Local Installation

#### Setup API key

Create a `.env` file with a key called `NPS_API_KEY`.
Set your NPS API key as its value.

#### Install dependencies

`npm install`

#### Run

`npm start`

#### Beware!

It can take a while to build!!

* `.cache`: 7.1 GB

The sharp-images plugin will process over 5500 images.

GitHub action takes ~35 minutes to complete.

## Production deployment

### GitHub Secrets

#### Build

When pushing `main` on GitHub, the CI workflow automatically triggers.

You have to add a Secret in your Github repository, to setup the `.env` file. See [here](https://github.com/cscie114/assignment-5---ci-cd-kapolos.git) for instructions.

* For the `Name` field, type `ENV_FILE`.
* For the `Secret` field, type: `NPS_API_KEY=<YOUR NPS KEY HERE>`

The CI workflow will use the secret to create the `.env` file in the root directory.

#### Netlify

The action deploys to Netlify. To use, add your Netlify personal token as `NETLIFY_AUTH_TOKEN` secret and the site id as `NETLIFY_SITE_ID`.
