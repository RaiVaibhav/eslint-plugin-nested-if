const path = require('path');

const DEAFULTDEPTH = 3;
module.exports = {
  rules: {
    "nested-if-statements": {
      create: function (context) {
        let count = 0;
        const depth = context.options[0] || DEAFULTDEPTH;
        function checkNestedIf(node) {
          if (depth < 2) {
            return;
          }
          const parent = node.parent
          if (parent.type === 'BlockStatement' && parent.parent.type === 'IfStatement'){
            count+=1;
          } else {
            count = 0;
          }
          if (depth - 1 === count) {
            return context.report({
              node: node,
              message: `Wait, what is going on here, why ${depth} level nesting of if statement`
            });
          }
          return;
        }
        return {
          IfStatement: checkNestedIf
        }
      }
    }
  }
};