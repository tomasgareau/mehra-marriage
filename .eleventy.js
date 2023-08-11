const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addPairedShortcode("event", function(data, title, time) {
    return `
      <li class="w-full flex flex-row items-stretch">
        <div class="flex-grow-0 flex-shrink-0 basis-28 pl-1 pr-4 relative flex flex-col items-center justify-center border-r border-red-900">
          <div class="absolute top-1/2 -translate-y-1/2 -right-[5px] w-2.5 h-2.5 bg-red-900 rotate-45"></div>
          <p class="text-emerald-800 font-medium text-center">${title}</p>
          <p class="text-rose-800 text-sm">${time}</p>
        </div>
        <div class="flex flex-col items-start justify-center px-6 py-2">
          ${data}
        </div>
      </li>
    `;
  });

  eleventyConfig.addPairedShortcode("imageCard", function(data, src, title, imageSide) {
    let rowDir = "sm:flex-row";
    let imageBorder = "sm:rounded-l-lg"
    let textBorder = "sm:rounded-r-lg"

    if (imageSide === "right") {
      rowDir = "sm:flex-row-reverse";
      imageBorder = "sm:rounded-r-lg"
      textBorder = "sm:rounded-l-lg"
    }

    return `
      <div class="mx-auto max-w-xs shadow-lg border border-gray-200 rounded-lg bg-amber-50 sm:flex ${rowDir} sm:max-w-3xl">
        <img class="object-cover rounded-t-lg sm:rounded-none ${imageBorder} w-96 sm:h-72 sm:w-auto"
          src="${src}" />
        <div class="pt-3 px-5 pb-5 rounded-b-lg sm:rounded-none ${textBorder} sm:my-auto">
          <h5 class="text-2xl mb-2 font-light text-yellow-700">${title}</h5>
          ${data}
        </div>
      </div>
    `;
  });

  eleventyConfig.addPassthroughCopy("assets");

  return {
      dir: { input: 'src', output: 'dist' }
  };
};
