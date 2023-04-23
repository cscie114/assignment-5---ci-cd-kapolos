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
