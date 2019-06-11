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

/***/ "./src/lib/Components/header.js":
/*!**************************************!*\
  !*** ./src/lib/Components/header.js ***!
  \**************************************/
/*! exports provided: getHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return getHeaders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var getSortableView = function getSortableView() {};

var applyOtherHeaderOptions = function applyOtherHeaderOptions(options, shouldSortBy, sortingOrder) {
  var sortable = options.sortable;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, sortable ? getSortableView(shouldSortBy, sortingOrder) : null);
};

var getHeaders = function getHeaders(colDef, options) {
  return colDef.map(function (header, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      key: key,
      style: header.style || {}
    }, header.name);
  });
};



/***/ }),

/***/ "./src/lib/Components/rows.js":
/*!************************************!*\
  !*** ./src/lib/Components/rows.js ***!
  \************************************/
/*! exports provided: getRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRows", function() { return getRows; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils_rows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/rows */ "./src/lib/Utils/rows.js");



var getRows = function getRows(colDef, rowData, options) {
  var rows = options ? Object(_Utils_rows__WEBPACK_IMPORTED_MODULE_1__["filterRows"])(colDef, rowData, options) : rowData;
  return rows.map(function (row, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, colDef.map(function (header, key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: key,
        style: header.style || {}
      }, header.Cell ? header.Cell(row) : row[header.fieldName]);
    }));
  });
};



/***/ }),

/***/ "./src/lib/Components/table.js":
/*!*************************************!*\
  !*** ./src/lib/Components/table.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-js-pagination */ "react-js-pagination");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utils_rows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/rows */ "./src/lib/Utils/rows.js");
/* harmony import */ var _rows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rows */ "./src/lib/Components/rows.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./src/lib/Components/header.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Table = function Table(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      activePage = _useState2[0],
      setActivePage = _useState2[1];

  var itemsPerPage = props.options.itemsPerPage || 10;
  var originalRows = Object(_rows__WEBPACK_IMPORTED_MODULE_4__["getRows"])(props.colDef, props.rowData, props.options);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_Utils_rows__WEBPACK_IMPORTED_MODULE_3__["getDataWithinIndexRange"])(0, itemsPerPage, originalRows)),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var changePageWithData = function changePageWithData() {
    var pageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var newRows = Object(_Utils_rows__WEBPACK_IMPORTED_MODULE_3__["getDataWithinIndexRange"])((pageId - 1) * itemsPerPage, pageId * itemsPerPage, originalRows);
    setRows(newRows);
    setActivePage(newRows.length > itemsPerPage ? pageId - 1 : 0);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel panel-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-heading"
  }, props.header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body table-responsive"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-bordered",
    id: props.header
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, Object(_header__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(props.colDef, props.options))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, rows)), originalRows.length > itemsPerPage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activePage: activePage,
    itemsCountPerPage: itemsPerPage,
    totalItemsCount: originalRows.length,
    onChange: changePageWithData,
    itemClass: "page-item",
    linkClass: "page-link"
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./src/lib/Utils/rows.js":
/*!*******************************!*\
  !*** ./src/lib/Utils/rows.js ***!
  \*******************************/
/*! exports provided: getDataWithinIndexRange, filterRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataWithinIndexRange", function() { return getDataWithinIndexRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRows", function() { return filterRows; });
var sortData = function sortData(data, fieldName, order) {
  if (!fieldName) return data;else return data;
};

var filterRows = function filterRows(colDef, rowData, options) {
  var rows = sortData(rowData, colDef.reduce(function (column, crrCol) {
    return column = options.sortBy === crrCol.name ? crrCol.fieldName : column;
  }, ""), options.sortingOrder);
  return rows;
};

var getDataWithinIndexRange = function getDataWithinIndexRange(from, to, data) {
  return data && data.filter(function (row, index) {
    return index >= from && index < to;
  });
};



/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/table */ "./src/lib/Components/table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Components_table__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "bootstrap/dist/css/bootstrap.css":
/*!***************************************************!*\
  !*** external "bootstrap/dist/css/bootstrap.css" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.css");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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