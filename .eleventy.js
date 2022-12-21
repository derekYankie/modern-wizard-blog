// Format Date
const { DateTime } = require("luxon");

// Sources Files
module.exports = function(eleventyConfig) {
    // Pass CSS and Images to public folder
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
        input: "src", // Grab the files I'm working out of (blog folder)
        output: "public" // Set output to public folder
    }
    };
}