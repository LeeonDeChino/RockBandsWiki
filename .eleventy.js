module.exports  = function (eleventyConfig){
eleventyConfig.addPassthroughCopy("code/css");
eleventyConfig.addPassthroughCopy("code/js");
eleventyConfig.addPassthroughCopy("code/img");

  return{
    dir:{
      input: "code",
      output: "docs",
    },
  };
}