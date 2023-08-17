
const generate = require('./generator');

// Snippet plugin relaunch snippet code extractor to generate the src/snippets/snippets.js file
async function SnippetPlugin(context, opts) {
  return {
   
    name: 'docusaurus-snippet-plugin',

    loadContent() {
      console.log('snippet hook');
      generate();
    },
  };
}
module.exports = SnippetPlugin;