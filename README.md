<!-- @format -->

<p align="center">
  <img src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png" width="211" height="182" alt="Formik.js" />
</p>

<h3 align="center">
  Build forms in React, without the tears.
</h3>

<br>

[![Stable Release](https://img.shields.io/npm/v/formik.svg)](https://npm.im/formik)
[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://npm.im/formik)
[![gzip size](http://img.badgesize.io/https://unpkg.com/formik@latest/dist/formik.umd.production.min.js?compression=gzip)](https://unpkg.com/formik@latest/dist/formik.umd.production.min.js)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)
[![Discord](https://img.shields.io/discord/102860784329052160.svg?style=flat-square)](https://discord.gg/cU6MCve)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/palmer)

**Visit [https://jaredpalmer.com/formik](https://jaredpalmer.com/formik) to get
started with Formik.**

---

**The below readme is the documentation for the `canary` (prerelease) version of
Formik. To view the documentation for the latest stable Formik version visit
[jaredpalmer.com/formik/docs](https://jaredpalmer.com/formik/docs/overview)**

---

## Install

```sh
npm install -S easyformui
```

## Usage

You define and create schema objects. Schema objects are immutable, so each call
of a method returns a _new_ schema object. When using es module syntax, yup
exports everything as a named export

```js
import { form } from 'easyformui'; // for everything
```

```js
let yup = require('yup');

let schema = yup.object().shape({
	name: yup.string().required(),
	age: yup
		.number()
		.required()
		.positive()
		.integer(),
	email: yup.string().email(),
	website: yup.string().url(),
	createdOn: yup.date().default(function() {
		return new Date();
	})
});
```
