# Polymer App Toolbox - Starter Kit with custom build

[![Build Status](https://travis-ci.org/PolymerElements/generator-polymer-init-custom-build.svg?branch=master)](https://travis-ci.org/PolymerElements/generator-polymer-init-custom-build)

This template is a starting point for building apps using [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit)
with a custom gulp process leveraging [polymer-build](https://github.com/Polymer/polymer-build),
the library powering [Polymer CLI](https://github.com/Polymer/polymer-cli).

### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) and
generator-polymer-init-custom-build using [npm](https://www.npmjs.com) (we
assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli
    npm install -g generator-polymer-init-custom-build

Second, install [Bower](https://bower.io/) using [npm](https://www.npmjs.com)

    npm install -g bower

##### Initialize project from template

    mkdir my-app
    cd my-app
    polymer init polymer-starter-kit-custom-build

### Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides basic URL
routing for the app:

    polymer serve

### You can read more information at [template README.md](generators/app/README.md).

---

#### Polymer v1 version

If you want to use the Polymer v1 version, you should install the `v2.2.1` tag:

    npm install -g generator-polymer-init-custom-build@2.2.1
