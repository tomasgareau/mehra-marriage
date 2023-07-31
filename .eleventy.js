module.exports = function(eleventyConfig) {

  eleventyConfig.addPairedShortcode("event", function(data, title, time) {
    return `
      <li class="w-full flex flex-row items-stretch">
        <div class="flex-grow-0 flex-shrink-0 basis-28 pl-1 pr-4 relative flex flex-col items-center justify-center border-r border-red-900">
          <div class="absolute top-1/2 -translate-y-1/2 -right-[5px] w-2.5 h-2.5 bg-red-900 rotate-45"></div>
          <p class="text-emerald-800 font-medium">${title}</p>
          <p class="text-rose-800 text-sm">${time}</p>
        </div>
        <div class="flex flex-col items-start justify-center px-6 py-2">
          ${data}
        </div>
      </li>
    `;
  });

  eleventyConfig.addPairedShortcode("imageCard", function(data, src, title, imageSide) {
    let rowDir = "md:flex-row";
    let imageBorder = "md:rounded-l-lg"
    let textBorder = "md:rounded-r-lg"

    if (imageSide === "right") {
      rowDir = "md:flex-row-reverse";
      imageBorder = "md:rounded-r-lg"
      textBorder = "md:rounded-l-lg"
    }

    return `
      <div class="mx-auto max-w-xs shadow-lg border border-gray-200 rounded-lg bg-amber-50 md:flex ${rowDir} md:max-w-3xl">
        <img class="object-cover rounded-t-lg md:rounded-none ${imageBorder} w-96 md:h-72 md:w-auto"
          src="${src}" />
        <div class="pt-3 px-5 pb-5 rounded-b-lg md:rounded-none ${textBorder} md:my-auto">
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
