# Assignment 5

## Live site

[Netlify Site](https://assignment-5-ci-cd-kap.netlify.app)

## Serverless functionality

For every park, we can check the current weather and future prediction.

![button](https://i.imgur.com/8sh6jpQ.png)
![result](https://i.imgur.com/zNSV71h.png)


### Weather API Token

Create a free API token [here](https://www.visualcrossing.com/sign-up). The free tier allows for 1000 calls per day.

The process is:
* Enter your email
* Enter the verification token you will receive
* Set a password for your new account
* Agree to the terms.
* Write "test the API" (or whatever you like) on the description box
* Press "Create Account"
* Sign in
* Click on Account (top right)
* Get the API key from "Your details" section

## Local development

### Source

#### Clone

`git clone https://github.com/cscie114/assignment-5---ci-cd-kapolos.git`

### Gatsby

### Description

This is a <u>modified version</u> of Assignment 4.

In order to reduce build time, there are the following differences:

* Places are not used.
* Park images are displayed instead.

### Local Installation

#### Setup API key

##### NPS

Create a `.env` file with a key called `NPS_API_KEY`.
Set your NPS API token as its value.

##### OpenWeather

Add a new line to the `.env` file with key `WEATHER_API_KEY`.
Set up your Open Weather API token as its value.

#### Install dependencies

`npm install`

#### Run

`npm start`

#### Beware!

It can take a while to build!!

* `.cache`: 7.1 GB

The sharp-images plugin will process over 5500 images.

GitHub action takes ~35 minutes to complete.

#### With netlify dev environment

`netlify-cli` has been installed as part of the dev dependencies. You can use `npm run netlify-dev` to launch an environment that supports local serverless functionality.

If you are using `WSL 2`, you will probably want to `export BROWSER=none` before launching the script.

## Production deployment

### GitHub Secrets

#### Build

When pushing `main` on GitHub, the CI workflow automatically triggers.

You have to add a Secret in your Github repository, to setup the `.env` file. See [here](https://github.com/cscie114/assignment-5---ci-cd-kapolos.git) for instructions.

* For the `Name` field, type `ENV_FILE`.
* For the `Secret` field, type: `NPS_API_KEY=<YOUR NPS KEY HERE>`

The CI workflow will use the secret to create the `.env` file in the root directory.

The action deploys to Netlify. To use, add your Netlify personal token as `NETLIFY_AUTH_TOKEN` secret and the site id as `NETLIFY_SITE_ID`.

### Netlify setup

Create a new environment variable for your site in Netlify to power the Weather API fetching.

Set `WEATHER_API_KEY` as the key and the API token as its value.
Scopes can be left to the default `All scopes`.

#### Upgrade deployment to live

After the GitHub action completes we have a deployment in Netlify, but it is not active. You will need to promote it via the Netlify site. Click on the deployment as listed in the "Production deploys" sections and then click "Publish Deploy".
