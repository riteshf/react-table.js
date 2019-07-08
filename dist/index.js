(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/lib/Components/container.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./src/lib/Components/container.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\r\n    margin-bottom: 20px;\r\n    background-color: #fff;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\r\n}\r\n.panel-default {\r\n    border-color: #ddd;\r\n}\r\n.panel-heading {\r\n    padding: 10px 15px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.panel-default > .panel-heading {\r\n    color: #333;\r\n    background-color: #f5f5f5;\r\n    border-color: #ddd;\r\n}\r\n\r\n.panel-body {\r\n    padding: 15px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/lib/Components/table/table.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./src/lib/Components/table/table.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel > .table-responsive {\r\n    margin-bottom: 0;\r\n    border: 0;\r\n}\r\n\r\n.table {\r\n    margin-bottom: 0;\r\n    background-color: transparent;\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.table th {\r\n    border-top: transparent;\r\n}\r\n\r\n.table th, .table td {\r\n    padding: 0.50rem;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/lib/Components/CellRenderers/AfterRow/AfterRow.js":
/*!***************************************************************!*\
  !*** ./src/lib/Components/CellRenderers/AfterRow/AfterRow.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var AfterRow = function AfterRow(_ref) {
  var _ref$row = _ref.row,
      row = _ref$row === void 0 ? {} : _ref$row,
      _ref$keyIndex = _ref.keyIndex,
      keyIndex = _ref$keyIndex === void 0 ? 0 : _ref$keyIndex,
      _ref$afterRowIndex = _ref.afterRowIndex,
      afterRowIndex = _ref$afterRowIndex === void 0 ? null : _ref$afterRowIndex,
      _ref$setAfterRowIndex = _ref.setAfterRowIndex,
      setAfterRowIndex = _ref$setAfterRowIndex === void 0 ? function () {} : _ref$setAfterRowIndex,
      _ref$setRowData = _ref.setRowData,
      setRowData = _ref$setRowData === void 0 ? function () {} : _ref$setRowData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusSquare"]),
      _useState2 = _slicedToArray(_useState, 2),
      font = _useState2[0],
      setFont = _useState2[1];

  var getNewFont = function getNewFont(currentFont) {
    return currentFont === _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusSquare"] ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMinusSquare"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusSquare"];
  };

  var getFont = function getFont(afterRowIndex) {
    if (Number.isInteger(afterRowIndex) && afterRowIndex === keyIndex) {
      setFont(getNewFont(font));
      setAfterRowIndex(null);
    } else {
      setAfterRowIndex(keyIndex);
      setFont(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMinusSquare"]);
      setRowData(row);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    key: keyIndex,
    onClick: function onClick() {
      return getFont(afterRowIndex);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: font
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AfterRow);

/***/ }),

/***/ "./src/lib/Components/CellRenderers/AfterRow/index.js":
/*!************************************************************!*\
  !*** ./src/lib/Components/CellRenderers/AfterRow/index.js ***!
  \************************************************************/
/*! exports provided: AfterRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AfterRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AfterRow */ "./src/lib/Components/CellRenderers/AfterRow/AfterRow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AfterRow", function() { return _AfterRow__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/lib/Components/CellRenderers/Date/Date.js":
/*!*******************************************************!*\
  !*** ./src/lib/Components/CellRenderers/Date/Date.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Date = function Date(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0 : _ref$value,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "DD-MMM-YYYY" : _ref$format,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, format(value, format));
};

/* harmony default export */ __webpack_exports__["default"] = (Date);

/***/ }),

/***/ "./src/lib/Components/CellRenderers/Date/DateWithHover.js":
/*!****************************************************************!*\
  !*** ./src/lib/Components/CellRenderers/Date/DateWithHover.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);




var DateWithHover = function DateWithHover(_ref) {
  var _ref$hoverValue = _ref.hoverValue,
      hoverValue = _ref$hoverValue === void 0 ? 0 : _ref$hoverValue,
      _ref$hoverFormat = _ref.hoverFormat,
      hoverFormat = _ref$hoverFormat === void 0 ? "DD-MMM-YYYY" : _ref$hoverFormat,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0 : _ref$value,
      _ref$valueFormat = _ref.valueFormat,
      valueFormat = _ref$valueFormat === void 0 ? "DD-MMM-YYYY" : _ref$valueFormat,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["OverlayTrigger"], {
    placement: "bottom",
    overlay: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      id: "tooltip-bottom"
    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(hoverValue, hoverFormat))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(value, valueFormat)));
};

/* harmony default export */ __webpack_exports__["default"] = (DateWithHover);

/***/ }),

/***/ "./src/lib/Components/CellRenderers/Date/index.js":
/*!********************************************************!*\
  !*** ./src/lib/Components/CellRenderers/Date/index.js ***!
  \********************************************************/
/*! exports provided: Date, DateWithHover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ "./src/lib/Components/CellRenderers/Date/Date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return _Date__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DateWithHover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateWithHover */ "./src/lib/Components/CellRenderers/Date/DateWithHover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateWithHover", function() { return _DateWithHover__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/lib/Components/CellRenderers/ProgressBar/SimpleProgressBar.js":
/*!***************************************************************************!*\
  !*** ./src/lib/Components/CellRenderers/ProgressBar/SimpleProgressBar.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$bars = _ref.bars,
      bars = _ref$bars === void 0 ? [] : _ref$bars;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], null, bars.map(function (_ref2, index) {
    var _ref2$variant = _ref2.variant,
        variant = _ref2$variant === void 0 ? "" : _ref2$variant,
        _ref2$now = _ref2.now,
        now = _ref2$now === void 0 ? Number : _ref2$now,
        label = _ref2.label;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], {
      key: index,
      striped: true,
      animated: true,
      variant: variant,
      now: now,
      lable: label
    });
  }));
});

/***/ }),

/***/ "./src/lib/Components/CellRenderers/ProgressBar/index.js":
/*!***************************************************************!*\
  !*** ./src/lib/Components/CellRenderers/ProgressBar/index.js ***!
  \***************************************************************/
/*! exports provided: SimpleProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimpleProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleProgressBar */ "./src/lib/Components/CellRenderers/ProgressBar/SimpleProgressBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleProgressBar", function() { return _SimpleProgressBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/lib/Components/CellRenderers/index.js":
/*!***************************************************!*\
  !*** ./src/lib/Components/CellRenderers/index.js ***!
  \***************************************************/
/*! exports provided: AfterRow, Date, DateWithHover, SimpleProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AfterRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AfterRow */ "./src/lib/Components/CellRenderers/AfterRow/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AfterRow", function() { return _AfterRow__WEBPACK_IMPORTED_MODULE_0__["AfterRow"]; });

/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Date */ "./src/lib/Components/CellRenderers/Date/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return _Date__WEBPACK_IMPORTED_MODULE_1__["Date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateWithHover", function() { return _Date__WEBPACK_IMPORTED_MODULE_1__["DateWithHover"]; });

/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ "./src/lib/Components/CellRenderers/ProgressBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleProgressBar", function() { return _ProgressBar__WEBPACK_IMPORTED_MODULE_2__["SimpleProgressBar"]; });





/***/ }),

/***/ "./src/lib/Components/Container.js":
/*!*****************************************!*\
  !*** ./src/lib/Components/Container.js ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.css */ "./src/lib/Components/container.css");
/* harmony import */ var _container_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_container_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ "./src/lib/Components/table/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/lib/Components/header/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var hasKeys = function hasKeys(o) {
  return Object.keys(o).length > 0;
};

var getSearchableFieldNames = function getSearchableFieldNames(columns) {
  return columns.filter(function (column) {
    return column.options && column.options.searchable;
  }).map(function (column) {
    return column.fieldName;
  });
};

var filterData = function filterData() {
  var searchString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var rows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var fieldNames = getSearchableFieldNames(columns);
  return searchString ? rows.filter(function (row) {
    return fieldNames.filter(function (field) {
      return String(row[field]).toLowerCase().startsWith(searchString.toLowerCase());
    }).length;
  }) : rows;
};

var Container = function Container() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$header = _ref.header,
      header = _ref$header === void 0 ? {} : _ref$header,
      _ref$colDef = _ref.colDef,
      colDef = _ref$colDef === void 0 ? [] : _ref$colDef,
      _ref$rowData = _ref.rowData,
      rowData = _ref$rowData === void 0 ? [] : _ref$rowData,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(options.defaultShowTable),
      _useState2 = _slicedToArray(_useState, 2),
      showTable = _useState2[0],
      shouldShowTable = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(rowData),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      searchString = _useState6[0],
      setSearchString = _useState6[1];

  var setShowTable = function setShowTable() {
    return shouldShowTable(!showTable);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setRows(filterData(searchString, colDef, rowData));
  }, [searchString, rowData]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel panel-default",
    style: options.style || {}
  }, hasKeys(header) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    header: header || {},
    showOptions: showTable,
    showTable: setShowTable,
    onSearch: setSearchString
  }) : null, showTable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, options.beforeTable ? options.beforeTable : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    colDef: colDef || [],
    rowData: rows || [],
    options: options || {},
    header: header || {}
  }))));
};



/***/ }),

/***/ "./src/lib/Components/column/Column.js":
/*!*********************************************!*\
  !*** ./src/lib/Components/column/Column.js ***!
  \*********************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sortable */ "./src/lib/Components/column/Sortable.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Column = function Column(_ref) {
  var colDef = _ref.colDef,
      options = _ref.options,
      sort = _ref.sort;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  var updateCurrentState = function updateCurrentState(headerName) {
    setColumns(columns.map(function (column) {
      if (column.name === headerName) {
        column.options.sortBy = headerName;
        column.options.sortingOrder = column.options.sortingOrder === "ASC" ? "DESC" : "ASC";
        sort({
          sortBy: headerName,
          sortingOrder: column.options.sortingOrder === "ASC" ? "DESC" : "ASC"
        });
      } else {
        delete column.options.sortBy;
        delete column.options.sortingOrder;
      }

      return column;
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setColumns(colDef.map(function (column) {
      column.options = column.options || {};

      if (column.name === options.sortBy) {
        column.options.sortBy = options.sortBy;
        column.options.sortingOrder = options.sortingOrder === "ASC" ? "DESC" : "ASC";
      } else {
        delete column.options.sortBy;
        delete column.options.sortingOrder;
      }

      return column;
    }));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, columns.map(function (column, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      key: key,
      style: column.style || {}
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: function onClick() {
        return column.options.sortable && updateCurrentState(column.name);
      }
    }, column.name, "\xA0"), column.options.sortable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sortable__WEBPACK_IMPORTED_MODULE_1__["Sortable"], {
      column: column
    }) : null);
  }));
};



/***/ }),

/***/ "./src/lib/Components/column/Sortable.js":
/*!***********************************************!*\
  !*** ./src/lib/Components/column/Sortable.js ***!
  \***********************************************/
/*! exports provided: Sortable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Sortable = function Sortable(_ref) {
  var column = _ref.column;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(column.options.sortBy),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setShow(column.options.sortBy);
  }, [column.options.sortBy]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, show && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: column.options.sortingOrder === "DESC" ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSortUp"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSortDown"],
    style: column.style || {}
  }));
};



/***/ }),

/***/ "./src/lib/Components/column/index.js":
/*!********************************************!*\
  !*** ./src/lib/Components/column/index.js ***!
  \********************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Column */ "./src/lib/Components/column/Column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _Column__WEBPACK_IMPORTED_MODULE_0__["Column"]; });



/***/ }),

/***/ "./src/lib/Components/container.css":
/*!******************************************!*\
  !*** ./src/lib/Components/container.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./container.css */ "./node_modules/css-loader/index.js!./src/lib/Components/container.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/Components/header/Header.js":
/*!*********************************************!*\
  !*** ./src/lib/Components/header/Header.js ***!
  \*********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./src/lib/Components/header/options/index.js");





var Header = function Header() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$header = _ref.header,
      header = _ref$header === void 0 ? {} : _ref$header,
      showOptions = _ref.showOptions,
      showTable = _ref.showTable,
      _ref$onSearch = _ref.onSearch,
      onSearch = _ref$onSearch === void 0 ? "" : _ref$onSearch;

  var headerStyle = header && header.style ? header.style : {};
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading",
    style: headerStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: {
      span: 4
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
    onClick: function onClick() {
      return showTable();
    }
  }, header.icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: header.icon
  }), " ", header.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: {
      span: 8
    }
  }, showOptions && header.options && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_options__WEBPACK_IMPORTED_MODULE_3__["Options"], {
    options: header.options,
    onSearch: onSearch
  }))));
};



/***/ }),

/***/ "./src/lib/Components/header/index.js":
/*!********************************************!*\
  !*** ./src/lib/Components/header/index.js ***!
  \********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/lib/Components/header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });



/***/ }),

/***/ "./src/lib/Components/header/options/KeyValueFilter.js":
/*!*************************************************************!*\
  !*** ./src/lib/Components/header/options/KeyValueFilter.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var KeyValueFilter = function KeyValueFilter(_ref) {
  var defaultValue = _ref.defaultValue,
      valueObject = _ref.valueObject,
      label = _ref.label,
      onFilterChange = _ref.onFilterChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      newValue = _React$useState2[0],
      updateDefaultValue = _React$useState2[1];

  var changeFilter = function changeFilter(newField) {
    updateDefaultValue(newField);
    onFilterChange(newField);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "24px",
      fontSize: "12px",
      padding: "3px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    style: {
      color: "#428bca"
    }
  }, label, ":"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    style: {
      height: "24px",
      fontSize: "12px",
      padding: "3px"
    },
    defaultValue: newValue,
    onChange: function onChange(e) {
      return changeFilter(e.target.value);
    }
  }, Object.keys(valueObject).map(function (field) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: field,
      value: field
    }, field);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (KeyValueFilter);

/***/ }),

/***/ "./src/lib/Components/header/options/Options.js":
/*!******************************************************!*\
  !*** ./src/lib/Components/header/options/Options.js ***!
  \******************************************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _KeyValueFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyValueFilter */ "./src/lib/Components/header/options/KeyValueFilter.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search */ "./src/lib/Components/header/options/Search.js");







var Options = function Options() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$options = _ref.options,
      _ref$options$keyValue = _ref$options.keyValueFilters,
      keyValueFilters = _ref$options$keyValue === void 0 ? [] : _ref$options$keyValue,
      search = _ref$options.search,
      refresh = _ref$options.refresh,
      _ref$options$buttons = _ref$options.buttons,
      buttons = _ref$options$buttons === void 0 ? [] : _ref$options$buttons,
      onSearch = _ref.onSearch;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      flexDirection: 'row-reverse'
    },
    className: "flex"
  }, refresh && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 1
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: refresh.onChange
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSync"],
    size: "lg",
    style: refresh.style || {}
  }))), " ", buttons.map(function (button, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i
    }, button);
  }), search && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_5__["SearchBox"], {
    onSearch: onSearch,
    style: {
      marginTop: '5px'
    }
  }), " ", keyValueFilters.map(function (kVF, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: i,
      style: kVF.style
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KeyValueFilter__WEBPACK_IMPORTED_MODULE_2__["default"], kVF));
  }));
};



/***/ }),

/***/ "./src/lib/Components/header/options/Search.js":
/*!*****************************************************!*\
  !*** ./src/lib/Components/header/options/Search.js ***!
  \*****************************************************/
/*! exports provided: SearchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SearchBox = function SearchBox(_ref) {
  var onSearch = _ref.onSearch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _onChange = function onChange(newValue) {
    setValue(newValue);
    onSearch(newValue);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    size: "sm",
    style: {
      maxWidth: '140px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    placeholder: "Search",
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }));
};



/***/ }),

/***/ "./src/lib/Components/header/options/index.js":
/*!****************************************************!*\
  !*** ./src/lib/Components/header/options/index.js ***!
  \****************************************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options */ "./src/lib/Components/header/options/Options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return _Options__WEBPACK_IMPORTED_MODULE_0__["Options"]; });



/***/ }),

/***/ "./src/lib/Components/index.js":
/*!*************************************!*\
  !*** ./src/lib/Components/index.js ***!
  \*************************************/
/*! exports provided: Table, AfterRow, Date, DateWithHover, SimpleProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./src/lib/Components/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Container__WEBPACK_IMPORTED_MODULE_0__["Container"]; });

/* harmony import */ var _CellRenderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRenderers */ "./src/lib/Components/CellRenderers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AfterRow", function() { return _CellRenderers__WEBPACK_IMPORTED_MODULE_1__["AfterRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return _CellRenderers__WEBPACK_IMPORTED_MODULE_1__["Date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateWithHover", function() { return _CellRenderers__WEBPACK_IMPORTED_MODULE_1__["DateWithHover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleProgressBar", function() { return _CellRenderers__WEBPACK_IMPORTED_MODULE_1__["SimpleProgressBar"]; });




/***/ }),

/***/ "./src/lib/Components/row/AfterRow.js":
/*!********************************************!*\
  !*** ./src/lib/Components/row/AfterRow.js ***!
  \********************************************/
/*! exports provided: AfterRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterRow", function() { return AfterRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AfterRow = function AfterRow() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$afterRowCell = _ref.afterRowCell,
      afterRowCell = _ref$afterRowCell === void 0 ? {
    Cell: null
  } : _ref$afterRowCell,
      _ref$colSpan = _ref.colSpan,
      colSpan = _ref$colSpan === void 0 ? 2 : _ref$colSpan;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: colSpan
  }, afterRowCell));
};



/***/ }),

/***/ "./src/lib/Components/row/Cell.js":
/*!****************************************!*\
  !*** ./src/lib/Components/row/Cell.js ***!
  \****************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Cell = function Cell(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? "" : _ref$value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: style
  }, value);
};



/***/ }),

/***/ "./src/lib/Components/row/Row.js":
/*!***************************************!*\
  !*** ./src/lib/Components/row/Row.js ***!
  \***************************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ "./src/lib/Components/row/Cell.js");



var Row = function Row() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    columns: [],
    row: {}
  },
      columns = _ref.columns,
      row = _ref.row,
      rowIndex = _ref.rowIndex;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, columns.map(function (column, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cell__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      style: column.style || {},
      value: column.Cell ? column.Cell(row, rowIndex) : row[column.fieldName]
    }));
  }));
};



/***/ }),

/***/ "./src/lib/Components/row/RowAfterRowCombo.js":
/*!****************************************************!*\
  !*** ./src/lib/Components/row/RowAfterRowCombo.js ***!
  \****************************************************/
/*! exports provided: RowAfterRowCombo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowAfterRowCombo", function() { return RowAfterRowCombo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./src/lib/Components/row/Row.js");
/* harmony import */ var _AfterRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AfterRow */ "./src/lib/Components/row/AfterRow.js");




var RowAfterRowCombo = function RowAfterRowCombo(_ref) {
  var _ref$colDef = _ref.colDef,
      colDef = _ref$colDef === void 0 ? [] : _ref$colDef,
      _ref$row = _ref.row,
      row = _ref$row === void 0 ? [] : _ref$row,
      _ref$rowIndex = _ref.rowIndex,
      rowIndex = _ref$rowIndex === void 0 ? 0 : _ref$rowIndex,
      _ref$afterRowCell = _ref.afterRowCell,
      afterRowCell = _ref$afterRowCell === void 0 ? function () {} : _ref$afterRowCell,
      _ref$afterRowIndex = _ref.afterRowIndex,
      afterRowIndex = _ref$afterRowIndex === void 0 ? null : _ref$afterRowIndex;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    columns: colDef,
    row: row,
    rowIndex: rowIndex
  }), rowIndex === afterRowIndex ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AfterRow__WEBPACK_IMPORTED_MODULE_2__["AfterRow"], {
    afterRowCell: afterRowCell,
    colSpan: colDef.length
  }) : null);
};



/***/ }),

/***/ "./src/lib/Components/row/Rows.js":
/*!****************************************!*\
  !*** ./src/lib/Components/row/Rows.js ***!
  \****************************************/
/*! exports provided: Rows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rows", function() { return Rows; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RowAfterRowCombo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowAfterRowCombo */ "./src/lib/Components/row/RowAfterRowCombo.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Rows = function Rows() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$colDef = _ref.colDef,
      colDef = _ref$colDef === void 0 ? [] : _ref$colDef,
      _ref$rowData = _ref.rowData,
      rowData = _ref$rowData === void 0 ? [] : _ref$rowData,
      _ref$headerOptions = _ref.headerOptions,
      headerOptions = _ref$headerOptions === void 0 ? {
    afterRow: {
      index: null,
      Cell: null
    }
  } : _ref$headerOptions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(headerOptions.afterRow ? headerOptions.afterRow.index : null),
      _useState2 = _slicedToArray(_useState, 2),
      afterRowIndex = _useState2[0],
      setAfterRowIndex = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setAfterRowIndex(headerOptions.afterRow ? headerOptions.afterRow.index : null);
  }, [headerOptions.afterRow]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rowData.map(function (row, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowAfterRowCombo__WEBPACK_IMPORTED_MODULE_1__["RowAfterRowCombo"], {
      colDef: colDef,
      row: row,
      rowIndex: key,
      afterRowCell: headerOptions.afterRow ? headerOptions.afterRow.Cell : null,
      afterRowIndex: afterRowIndex
    }));
  }));
};



/***/ }),

/***/ "./src/lib/Components/row/index.js":
/*!*****************************************!*\
  !*** ./src/lib/Components/row/index.js ***!
  \*****************************************/
/*! exports provided: Rows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rows */ "./src/lib/Components/row/Rows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rows", function() { return _Rows__WEBPACK_IMPORTED_MODULE_0__["Rows"]; });



/***/ }),

/***/ "./src/lib/Components/table/Table.js":
/*!*******************************************!*\
  !*** ./src/lib/Components/table/Table.js ***!
  \*******************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-js-pagination */ "react-js-pagination");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css */ "./src/lib/Components/table/table.css");
/* harmony import */ var _table_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_table_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utils_rows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/rows */ "./src/lib/Utils/rows.js");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../row */ "./src/lib/Components/row/index.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../column */ "./src/lib/Components/column/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Table = function Table() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$header = _ref.header,
      header = _ref$header === void 0 ? {} : _ref$header,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$colDef = _ref.colDef,
      colDef = _ref$colDef === void 0 ? [] : _ref$colDef,
      _ref$rowData = _ref.rowData,
      rowData = _ref$rowData === void 0 ? [] : _ref$rowData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      activePage = _useState2[0],
      setActivePage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showPagination = _useState4[0],
      setShowPagination = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      rows = _useState6[0],
      setRows = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    sortBy: options.sortBy,
    sortingOrder: options.sortingOrder || "ASC"
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      sortBy = _useState8[0],
      setSortBy = _useState8[1];

  var pageOptions = options.paginationOptions || {};

  var getNext = function getNext(rowData, pageId) {
    return Promise.resolve({
      pageId: pageId + 1,
      data: Object(_Utils_rows__WEBPACK_IMPORTED_MODULE_3__["getDataWithinIndexRange"])((pageId - 1) * paginationOptions.itemsPerPage, pageId * paginationOptions.itemsPerPage, rowData)
    });
  };

  var getPrevious = function getPrevious(rowData, pageId) {
    return Promise.resolve({
      pageId: pageId - 1,
      data: Object(_Utils_rows__WEBPACK_IMPORTED_MODULE_3__["getDataWithinIndexRange"])((pageId - 1) * paginationOptions.itemsPerPage, pageId * paginationOptions.itemsPerPage, rowData)
    });
  };

  var paginationOptions = {
    itemsPerPage: pageOptions.itemsPerPage || 10,
    pageRangeDisplayed: pageOptions.pageRangeDisplayed || 4,
    getNext: pageOptions.getNext || getNext,
    getPrevious: pageOptions.getPrevious || getPrevious,
    pageId: pageOptions.pageId || 1
  };

  var changePageWithData = function changePageWithData(pageId) {
    if (activePage === pageId) {
      var sortedData = Object(_Utils_rows__WEBPACK_IMPORTED_MODULE_3__["getSortedData"])(colDef, rowData, sortBy);
      var nextData = Object(_Utils_rows__WEBPACK_IMPORTED_MODULE_3__["getDataWithinIndexRange"])((pageId - 1) * paginationOptions.itemsPerPage, pageId * paginationOptions.itemsPerPage, sortedData);
      setRows(nextData.slice(0, pageOptions.itemsPerPage));
      setActivePage(pageId);
    } else if (activePage < pageId) {
      paginationOptions.getNext(rowData, pageId);
    } else if (activePage > pageId) {
      paginationOptions.getPrevious(rowData, pageId);
    }

    setActivePage(pageId);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShowPagination(rowData.length > paginationOptions.itemsPerPage);
    changePageWithData(paginationOptions.pageId);
  }, [sortBy, rowData, header]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-responsive"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-hover"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_column__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    colDef: colDef,
    options: options,
    sort: setSortBy
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_row__WEBPACK_IMPORTED_MODULE_4__["Rows"], {
    colDef: colDef,
    rowData: rows,
    headerOptions: header.options
  }))), showPagination && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activePage: activePage,
    itemsCountPerPage: paginationOptions.itemsPerPage,
    pageRangeDisplayed: paginationOptions.pageRangeDisplayed,
    totalItemsCount: rowData.length,
    onChange: changePageWithData,
    itemClass: "page-item",
    linkClass: "page-link"
  }));
};



/***/ }),

/***/ "./src/lib/Components/table/index.js":
/*!*******************************************!*\
  !*** ./src/lib/Components/table/index.js ***!
  \*******************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./src/lib/Components/table/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_0__["Table"]; });



/***/ }),

/***/ "./src/lib/Components/table/table.css":
/*!********************************************!*\
  !*** ./src/lib/Components/table/table.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./table.css */ "./node_modules/css-loader/index.js!./src/lib/Components/table/table.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/Utils/rows.js":
/*!*******************************!*\
  !*** ./src/lib/Utils/rows.js ***!
  \*******************************/
/*! exports provided: getDataWithinIndexRange, getSortedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataWithinIndexRange", function() { return getDataWithinIndexRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedData", function() { return getSortedData; });
var getDataWithinIndexRange = function getDataWithinIndexRange(from, to, data) {
  return data ? data.filter(function (row, index) {
    return index >= from && index < to;
  }) : [];
};

var numberSort = function numberSort(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};

var stringSort = function stringSort(a, b) {
  return a.toUpperCase() < b.toUpperCase() ? -1 : 1;
};

var sortData = function sortData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fieldName = arguments.length > 1 ? arguments[1] : undefined;
  var order = arguments.length > 2 ? arguments[2] : undefined;

  if (fieldName && data.length > 1) {
    var newData = data.sort(function (a, b) {
      return typeof a[fieldName] === 'number' ? numberSort(a[fieldName], b[fieldName]) : stringSort(a[fieldName], b[fieldName]);
    });
    return order === 'ASC' ? newData : newData.reverse();
  } else {
    return data;
  }
};

var getFieldNameIfSortable = function getFieldNameIfSortable(columns, headerName) {
  var col = columns.filter(function (col) {
    return col.name === headerName && col.options && col.options.sortable;
  })[0];
  return col.fieldName;
};

var getSortedData = function getSortedData(colDef, rowData, sortBy) {
  if (sortBy.sortBy) {
    var fieldName = getFieldNameIfSortable(colDef, sortBy.sortBy);
    return sortData(rowData, fieldName, sortBy.sortingOrder);
  } else {
    return rowData;
  }
};



/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: Table, AfterRow, Date, DateWithHover, SimpleProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components */ "./src/lib/Components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Components__WEBPACK_IMPORTED_MODULE_0__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AfterRow", function() { return _Components__WEBPACK_IMPORTED_MODULE_0__["AfterRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return _Components__WEBPACK_IMPORTED_MODULE_0__["Date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateWithHover", function() { return _Components__WEBPACK_IMPORTED_MODULE_0__["DateWithHover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleProgressBar", function() { return _Components__WEBPACK_IMPORTED_MODULE_0__["SimpleProgressBar"]; });



/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-js-pagination":
/*!**************************************!*\
  !*** external "react-js-pagination" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-js-pagination");

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map