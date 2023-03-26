const sass = require("sass");
const path = require("node:path");
const HtmlMin = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');
const _get = require("lodash.get");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const md = new markdownIt({
  html: true,
});

module.exports = eleventyConfig => {
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });
  eleventyConfig.addFilter("excerpt", (post) => {
    let excerpt = null;
    const separatorsList = [
      { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
      { start: '<p>', end: '</p>' }
    ];
    separatorsList.some(separators => {
      const startPosition = post.indexOf(separators.start);
      const endPosition = post.indexOf(separators.end);
   
      if (startPosition !== -1 && endPosition !== -1) {
        excerpt = post.substring(startPosition + separators.start.length, endPosition).trim();
        return true; // Exit out of array loop on first match
      }
    });
    return excerpt;
  });
  eleventyConfig.setTemplateFormats(['md', 'njk']);
  eleventyConfig.addPlugin(ErrorOverlay);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      // Skip files like _fileName.scss
      let parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }
  
      // Run file content through Sass
      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || "."],
        sourceMap: false, // or true, your choice!
      });
  
      // Allow included files from @use or @import to
      // trigger rebuilds when using --incremental
      this.addDependencies(inputPath, result.loadedUrls);
  
      return async () => {
        return result.css;
      };
    },
  });
  eleventyConfig.addNunjucksFilter("where", (arr, key, expected) => {
    if (expected === undefined) {
      return arr.filter(item => !!_get(item, key));
    }
    return arr.filter(item => _get(item, key) === expected);
  });
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    },
    jsDataFileSuffix: '.data',
  };
};