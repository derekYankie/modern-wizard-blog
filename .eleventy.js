// Sources Files
module.exports = function(eleventyConfig) {
    // Pass CSS and Images to public folder
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    return {
        dir: {
        input: "src", // Grab the files I'm working out of (blog folder)
        output: "public" // Set output to public folder
    }
    }
};