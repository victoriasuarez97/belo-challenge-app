// eslint-disable-next-line no-undef
module.exports = {
    "preset": "jest-expo",
    "testEnvironment": 'node',
    "transform": {
    '^.+\\.ts?$': 'ts-jest',
    },
    "transformIgnorePatterns": [
      // eslint-disable-next-line max-len
      'node_modules/(?!((jest-)?react-native' +
      '|@react-native(-community)?)' +
      '|expo(nent)?|@expo(nent)?/.*' +
      '|@expo-google-fonts/.*' +
      '|react-navigation' +
      '|@react-navigation/.*' +
      '|@unimodules/.*' +
      '|unimodules' +
      '|sentry-expo' +
      '|native-base' +
      '|react-native-svg)'
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx"
    ]
}
