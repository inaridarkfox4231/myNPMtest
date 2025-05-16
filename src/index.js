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
   * hello().
   * greeting.
   * @returns {string}
   */
  function hello(){
    const message = "this is NPM test.";
    console.log(message);
    return message;
  }

  exports.hello = hello;

  Object.defineProperty(exports, "__esModule", { value: true });
});
