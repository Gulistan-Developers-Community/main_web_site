// at .next.config.js

module.exports = {
    // pre-existing configs
      env: {
    //you need to insert BOTH KEYs in order to connect with Parse Server
        PARSE_APP_ID: process.env.PARSE_APP_ID,
        PARSE_JS_KEY: process.env.PARSE_JS_KEY,
      }
    }