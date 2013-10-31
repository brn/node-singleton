/**
 * @fileoverview
 * @author Taketshi Aono
 */
'use strict';


/**
 * Add the singleton instance getter method to the passed class.
 * @param {function(new:T,...)} ctor
 * @returns {T}
 * @template T
 */
module.exports = function(ctor) {
  Object.defineProperty(ctor, 'instance', {
    get : function() {
      if (!ctor._instance) {
        ctor._instance = new ctor();
      }
      return ctor._instance;
    },
    configurable : true,
    enumerable : false
  });
};