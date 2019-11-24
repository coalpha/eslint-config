module.exports={env:{es6:true,node:true},parserOptions:{ecmaVersion:2019,sourceType:"module",ecmaFeatures:{objectLiteralDuplicateProperties:false}},rules:{curly:[1,"all"],"dot-location":[1,"property"],"dot-notation":[1,{allowKeywords:true}],eqeqeq:[1,"always"],"guard-for-in":"warn","no-case-declarations":"error","no-constructor-return":"error","no-else-return":[1,{allowElseIf:false}],"no-eq-null":"warn","no-extend-native":"warn","no-extra-bind":"warn","no-floating-decimal":"warn","no-invalid-this":"warn","no-iterator":"error","no-loop-func":"error","no-multi-spaces":[1,{ignoreEOLComments:false,exceptions:{}}],"no-new":"error","no-new-wrappers":"error","no-octal":"warn","no-proto":"warn","no-return-await":"warn","no-script-url":"warn","no-self-assign":[1,{props:true}],"no-self-compare":"warn","no-useless-call":"warn","no-useless-concat":"warn","no-useless-escape":"warn","no-useless-return":"warn","prefer-promise-reject-errors":[1,{allowEmptyReject:false}],"prefer-regex-literals":"warn",radix:[2,"always"],yoda:[1,"never",{exceptRange:true}],"arrow-body-style":[1,"as-needed"],"arrow-parens":[1,"as-needed",{requireForBlockBody:false}],"arrow-spacing":"warn","generator-star-spacing":[1,{before:false,after:true}],"no-class-assign":"error","no-const-assign":"error","no-dupe-class-members":"error","no-duplicate-imports":"error","no-new-symbol":"error","no-this-before-super":"error","no-useless-computed-key":"warn","no-useless-constructor":"warn","no-useless-rename":[1,{ignoreImport:false,ignoreExport:false,ignoreDestructuring:false}],"object-shorthand":"warn","prefer-arrow-callback":[1,{allowNamedFunctions:true,allowUnboundThis:true}],"prefer-const":[1,{destructuring:"any",ignoreReadBeforeAssign:false}],"prefer-destructuring":[1,{VariableDeclarator:{array:false,object:true},AssignmentExpression:{array:true,object:true}},{enforceForRenamedProperties:false}],"prefer-numeric-literals":"warn","prefer-rest-params":"warn","prefer-spread":"warn","prefer-template":"warn","rest-spread-spacing":[1,"never"],"template-curly-spacing":[1,"never"],"yield-star-spacing":[1,{before:false,after:true}],"no-buffer-constructor":"error","no-new-require":"warn","for-direction":"warn","getter-return":"warn","no-async-promise-executor":"error","no-await-in-loop":"warn","no-compare-neg-zero":"warn","no-constant-condition":"warn","no-control-regex":"error","no-dupe-else-if":"warn","no-dupe-keys":"error","no-duplicate-case":"error","no-ex-assign":"error","no-extra-boolean-cast":"warn","no-extra-semi":"warn","no-func-assign":"error","no-import-assign":"error","no-invalid-regexp":"error","no-irregular-whitespace":"error","no-misleading-character-class":"error","no-obj-calls":"error","no-setter-return":"error","no-sparse-arrays":"error","no-template-curly-in-string":"warn","no-unreachable":"error","no-unsafe-finally":"warn","no-unsafe-negation":"error","require-atomic-updates":"error","use-isnan":"error","valid-typeof":[2,{requireStringLiterals:true}],"array-bracket-newline":[1,{multiline:true,minItems:null}],"array-bracket-spacing":[1,"never",{singleValue:false,objectsInArrays:false,arraysInArrays:false}],"block-spacing":[1,"always"],"brace-style":[1,"1tbs",{allowSingleLine:true}],"comma-dangle":[1,"always-multiline"],"comma-spacing":[1,{before:false,after:true}],"comma-style":[1,"last"],"computed-property-spacing":[1,"never"],"eol-last":[1,"always"],"func-call-spacing":[1,"never"],"func-style":[1,"declaration",{allowArrowFunctions:true}],"function-paren-newline":[1,"consistent"],indent:[1,3,{SwitchCase:1}],"key-spacing":[1,{beforeColon:false,afterColon:true,mode:"strict"}],"keyword-spacing":[1,{before:true,after:true}],"linebreak-style":[2,"unix"],"max-len":[1,120,2],"multiline-ternary":[1,"always-multiline"],"no-array-constructor":"error","no-lonely-if":"warn","no-mixed-spaces-and-tabs":"error","no-negated-condition":"warn","no-new-object":"error","no-tabs":"error","no-trailing-spaces":"warn","no-unneeded-ternary":"warn","no-whitespace-before-property":"warn","nonblock-statement-body-position":[1,"beside"],"object-curly-newline":[1,{consistent:true}],"object-curly-spacing":[1,"always"],"one-var-declaration-per-line":[1,"initializations"],"operator-assignment":[1,"always"],"operator-linebreak":[1,"before"],"padded-blocks":[1,"never"],"prefer-exponentiation-operator":"warn","prefer-object-spread":"warn","quote-props":[1,"as-needed",{keywords:false,unnecessary:false,numbers:false}],quotes:[1,"double",{avoidEscape:true,allowTemplateLiterals:false}],semi:[2,"always"],"semi-spacing":[1,{before:false,after:true}],"semi-style":[1,"last"],"space-before-blocks":[1,"always"],"space-before-function-paren":[1,{anonymous:"always",named:"never",asyncArrow:"always"}],"space-in-parens":[1,"never"],"space-infix-ops":[1,{int32Hint:true}],"space-unary-ops":[1,{words:true,nonwords:false}],"switch-colon-spacing":[1,{before:false,after:true}],"template-tag-spacing":[1,"never"],"unicode-bom":[1,"never"],"no-delete-var":"error","no-shadow-restricted-names":"error","no-undef":"warn","no-undef-init":"error","no-use-before-define":"error"}}