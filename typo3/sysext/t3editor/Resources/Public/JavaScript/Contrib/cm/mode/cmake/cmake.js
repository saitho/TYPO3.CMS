!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("cmake",function(){function a(a,b){for(var c,d,e=!1;!a.eol()&&(c=a.next())!=b.pending;){if("$"===c&&"\\"!=d&&'"'==b.pending){e=!0;break}d=c}return e&&a.backUp(1),c==b.pending?b.continueString=!1:b.continueString=!0,"string"}function b(b,d){var e=b.next();return"$"===e?b.match(c)?"variable-2":"variable":d.continueString?(b.backUp(1),a(b,d)):b.match(/(\s+)?\w+\(/)||b.match(/(\s+)?\w+\ \(/)?(b.backUp(1),"def"):"#"==e?(b.skipToEnd(),"comment"):"'"==e||'"'==e?(d.pending=e,a(b,d)):"("==e||")"==e?"bracket":e.match(/[0-9]/)?"number":(b.eatWhile(/[\w-]/),null)}var c=/({)?[a-zA-Z0-9_]+(})?/;return{startState:function(){var a={};return a.inDefinition=!1,a.inInclude=!1,a.continueString=!1,a.pending=!1,a},token:function(a,c){return a.eatSpace()?null:b(a,c)}}}),a.defineMIME("text/x-cmake","cmake")});