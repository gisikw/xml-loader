# Webpack XML loader

A Webpack plugin for loading XML files.

## Installation

Install via npm:

```
npm install --save-dev xml-loader
```

## Usage

Add the loader to your webpack config:
(You may also can pass any of the [xml2js parser options](https://github.com/Leonidas-from-XIV/node-xml2js#options) in an object.)

```javascript
module : {
  loaders : [
    {
      test: /\.xml$/,
      use: {
        loader: 'xml-loader',
        options: {
          explicitArray: false,
        },
      },
    },
  ],
},
```

## Credits

* Inspired by webpack's [dsv-loader](https://github.com/wbkd/dsv-loader)
* XML parsing done with [node-xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)
