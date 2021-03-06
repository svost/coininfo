var assign = require('object-assign')

var common = {
  name: 'ReddCoin',
  unit: 'RDD'
}

var main = assign({}, {
  versions: {
    bip44: 4,
    private: 0xbd,
    public: 0x3d,
    scripthash: 0x05
  }
}, common)

var test = assign({}, {
  versions: {
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
