/**
 * my_first_github_npm_fish
 *
 * npm github test.
 * GitHub repository: {@link https://github.com/inaridarkfox4231/myNPMtest}
 *
 * @module my_first_github_npm_fish
 * @copyright 2025
 * @author fisce
 * @license MIT
 * @version 1.0.0
 */

(function(global, factory){
  if (typeof exports === "object" && typeof module !== "undefined") {
    //console.log("module is defined");
    factory(exports);
  } else if(typeof define === "function" && define.amd) {
    //console.log("define is defined");
    define(["exports"], factory);
  } else {
    //console.log("global");
    global = global || self;
    factory((global.mylibrary = {}));
  }
})(this, function (exports) {
  "use strict";

  /**
   * あいさつをします。
   * @function hello
   * @returns {string} あいさつの文字列
   */
  function hello(){
    const message = "this is NPM test.";
    console.log(message);
    return message;
  }

  exports.hello = hello;

  Object.defineProperty(exports, "__esModule", { value: true });
});
