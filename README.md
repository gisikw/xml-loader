# Webpack XML loader

A Webpack plugin for loading XML files.

## Installation

Install via npm:

```
npm install --save-dev xml-loader
```

## Usage

To require XML files like this: ```import 'data.xml'```, you can add the xml-loader to your webpack config:

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

#### Options

It is not required to provide any options, but options can be any of the [xml2js parser options](https://github.com/Leonidas-from-XIV/node-xml2js#options).

## Credits

* Inspired by webpack's [dsv-loader](https://github.com/wbkd/dsv-loader)
* XML parsing done with [node-xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)
