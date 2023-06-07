(self["webpackChunkodin_todo"] = self["webpackChunkodin_todo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/add.svg */ "./src/assets/add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/radio-button.svg */ "./src/assets/radio-button.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/radio-button-checked.svg */ "./src/assets/radio-button-checked.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inter);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --title-padding: 0px 0px 10px 0px;\r\n  --pane-padding: 10px;\r\n  --navigation-color: #FAFAFA;\r\n  --main-color: #5E72C1;\r\n  --main-title-color: #FDFDFD; \r\n  --task-list-color: #FDFDFD;\r\n  --icon-height: 24px;\r\n  --details-color: #FAFAFA;\r\n  --text-color: #474749;\r\n}\r\n\r\n* {\r\n  font-family: 'Inter', sans-serif;\r\n  color: var(--text-color);\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nli.selected,\r\nli:hover {\r\n  filter: brightness(95%);\r\n}\r\n\r\nli:active {\r\n  filter: brightness(97%);\r\n}\r\n\r\n.title {\r\n  padding: var(--title-padding);\r\n}\r\n\r\n.icon {\r\n  max-height: var(--icon-height);\r\n  margin-right: 5px;\r\n}\r\n\r\n.navigation {\r\n  background-color: var(--navigation-color);\r\n  padding: var(--pane-padding);\r\n  width: 280px;\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.navigation .separator {\r\n  border: none;\r\n  margin: 5px;\r\n}\r\n\r\n.navigation li {\r\n  background-color: var(--navigation-color);\r\n  height: 40px;\r\n  font-size: 1.2rem;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.navigation input {\r\n  font-size: 1.2rem;\r\n  padding: 1px 1.5px;\r\n  width: 100%;\r\n}\r\n\r\n.list .label {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.list .icon {\r\n  z-index: 10;\r\n}\r\n\r\n.lighten {\r\n  filter: invert(78%) sepia(0%) saturate(0%) hue-rotate(106deg) brightness(103%) contrast(97%);\r\n}\r\n\r\n.lighten:hover {\r\n  filter: none;\r\n}\r\n\r\n.lighten:active {\r\n  filter: invert(78%) sepia(0%) saturate(0%) hue-rotate(106deg) brightness(103%) contrast(97%);\r\n}\r\n\r\n.actions {\r\n  margin-top: auto;\r\n}\r\n\r\n.main {\r\n  background-color: var(--main-color);\r\n  padding: var(--pane-padding);\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.main .title {\r\n  color: var(--main-title-color);\r\n}\r\n\r\n.main .task-list {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  gap: 5px;\r\n}\r\n\r\n.main .task {\r\n  background-color: var(--task-list-color);\r\n  font-size: 1.2rem;\r\n  height: 50px;\r\n  width: 100%;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 0.5px solid lightgray;\r\n  border-radius: 10px;\r\n}\r\n\r\n.main .actions input {\r\n  cursor: text;\r\n  padding-left: 35px;\r\n}\r\n\r\n.main .actions input:hover {\r\n  border: 1px solid gray;\r\n}\r\n\r\n.main .actions input:focus {\r\n  outline: none;\r\n}\r\n\r\n.main .task-list input {\r\n  padding: 1px 1.5px;\r\n  height: 125%;\r\n  cursor: text;\r\n  margin: 2px;\r\n  border-radius: 0px;\r\n}\r\n\r\n.main .actions .icon {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  filter: invert(49%) sepia(0%) saturate(1%) hue-rotate(177deg) brightness(92%) contrast(85%);\r\n  position: relative;\r\n  top: 40px;\r\n  left: 8px;\r\n}\r\n\r\n.main .actions .icon:has(+ input:focus){\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  filter: none;\r\n}\r\n\r\n.task-list .icon {\r\n  z-index: 10;\r\n}\r\n\r\n.task-list .icon:hover {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.task-list .done {\r\n  filter: brightness(93%);\r\n}\r\n\r\n.task-list .done:hover {\r\n  filter: brightness(90%);\r\n}\r\n\r\n.task-list .mark {\r\n  border: none;\r\n  height: 1px;\r\n  width: calc(100% - 16px);\r\n  background-color: var(--text-color);\r\n  position: absolute;\r\n  left: 8px;\r\n}\r\n\r\n.task-list .done .icon {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.task-list .done .icon:hover {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.task img {\r\n  height: 24px;\r\n}\r\n\r\n.details {\r\n  background-color: var(--details-color);\r\n  padding: var(--pane-padding);\r\n  flex-shrink: 0;\r\n  width: 330px;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  gap: 15px;\r\n}\r\n\r\n.details .header {\r\n  display: flex;\r\n  height: 30px;\r\n  flex-flow: row nowrap;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.details .icon {\r\n  background-color: var(--details-color);\r\n  margin-left: auto;\r\n  max-height: 30px;\r\n  aspect-ratio: 1 / 1;\r\n  padding: 5px;\r\n  border-radius: 6px;\r\n}\r\n\r\n.details .icon:hover {\r\n  filter: brightness(95%);\r\n}\r\n\r\n.details .icon:active {\r\n  filter: brightness(97%);\r\n}\r\n\r\n.details .row {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  gap: 15px;\r\n}\r\n\r\n.details .notes p {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.details input[type=\"date\"] {\r\n  flex: auto;\r\n}\r\n\r\n.details textarea {\r\n  resize: vertical;\r\n  width: 100%;\r\n  padding: 8px;\r\n}\r\n\r\n.details .updated,\r\n.details .created {\r\n  font-size: 0.8rem;\r\n  align-self: center;\r\n}\r\n\r\n.details .actions {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.details .action {\r\n  background-color: var(--details-color);\r\n  cursor: pointer;\r\n  width: 70px;\r\n  height: 70px;\r\n  padding: 5px;\r\n  border-radius: 6px;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n\r\n.details .action.selected {\r\n  filter: brightness(93%);\r\n}\r\n\r\n.details .action:hover {\r\n  filter: brightness(90%);\r\n}\r\n\r\n.details .action:active {\r\n  filter: brightness(95%);\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Inter');\r\n\r\n:root {\r\n  --title-padding: 0px 0px 10px 0px;\r\n  --pane-padding: 10px;\r\n  --navigation-color: #FAFAFA;\r\n  --main-color: #5E72C1;\r\n  --main-title-color: #FDFDFD; \r\n  --task-list-color: #FDFDFD;\r\n  --icon-height: 24px;\r\n  --details-color: #FAFAFA;\r\n  --text-color: #474749;\r\n}\r\n\r\n* {\r\n  font-family: 'Inter', sans-serif;\r\n  color: var(--text-color);\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nli.selected,\r\nli:hover {\r\n  filter: brightness(95%);\r\n}\r\n\r\nli:active {\r\n  filter: brightness(97%);\r\n}\r\n\r\n.title {\r\n  padding: var(--title-padding);\r\n}\r\n\r\n.icon {\r\n  max-height: var(--icon-height);\r\n  margin-right: 5px;\r\n}\r\n\r\n.navigation {\r\n  background-color: var(--navigation-color);\r\n  padding: var(--pane-padding);\r\n  width: 280px;\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.navigation .separator {\r\n  border: none;\r\n  margin: 5px;\r\n}\r\n\r\n.navigation li {\r\n  background-color: var(--navigation-color);\r\n  height: 40px;\r\n  font-size: 1.2rem;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.navigation input {\r\n  font-size: 1.2rem;\r\n  padding: 1px 1.5px;\r\n  width: 100%;\r\n}\r\n\r\n.list .label {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.list .icon {\r\n  z-index: 10;\r\n}\r\n\r\n.lighten {\r\n  filter: invert(78%) sepia(0%) saturate(0%) hue-rotate(106deg) brightness(103%) contrast(97%);\r\n}\r\n\r\n.lighten:hover {\r\n  filter: none;\r\n}\r\n\r\n.lighten:active {\r\n  filter: invert(78%) sepia(0%) saturate(0%) hue-rotate(106deg) brightness(103%) contrast(97%);\r\n}\r\n\r\n.actions {\r\n  margin-top: auto;\r\n}\r\n\r\n.main {\r\n  background-color: var(--main-color);\r\n  padding: var(--pane-padding);\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.main .title {\r\n  color: var(--main-title-color);\r\n}\r\n\r\n.main .task-list {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  gap: 5px;\r\n}\r\n\r\n.main .task {\r\n  background-color: var(--task-list-color);\r\n  font-size: 1.2rem;\r\n  height: 50px;\r\n  width: 100%;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 0.5px solid lightgray;\r\n  border-radius: 10px;\r\n}\r\n\r\n.main .actions input {\r\n  cursor: text;\r\n  padding-left: 35px;\r\n}\r\n\r\n.main .actions input:hover {\r\n  border: 1px solid gray;\r\n}\r\n\r\n.main .actions input:focus {\r\n  outline: none;\r\n}\r\n\r\n.main .task-list input {\r\n  padding: 1px 1.5px;\r\n  height: 125%;\r\n  cursor: text;\r\n  margin: 2px;\r\n  border-radius: 0px;\r\n}\r\n\r\n.main .actions .icon {\r\n  content: url('../assets/add.svg');\r\n  filter: invert(49%) sepia(0%) saturate(1%) hue-rotate(177deg) brightness(92%) contrast(85%);\r\n  position: relative;\r\n  top: 40px;\r\n  left: 8px;\r\n}\r\n\r\n.main .actions .icon:has(+ input:focus){\r\n  content: url('../assets/radio-button.svg');\r\n  filter: none;\r\n}\r\n\r\n.task-list .icon {\r\n  z-index: 10;\r\n}\r\n\r\n.task-list .icon:hover {\r\n  content: url('../assets/radio-button-checked.svg');\r\n}\r\n\r\n.task-list .done {\r\n  filter: brightness(93%);\r\n}\r\n\r\n.task-list .done:hover {\r\n  filter: brightness(90%);\r\n}\r\n\r\n.task-list .mark {\r\n  border: none;\r\n  height: 1px;\r\n  width: calc(100% - 16px);\r\n  background-color: var(--text-color);\r\n  position: absolute;\r\n  left: 8px;\r\n}\r\n\r\n.task-list .done .icon {\r\n  content: url('../assets/radio-button-checked.svg');\r\n}\r\n\r\n.task-list .done .icon:hover {\r\n  content: url('../assets/radio-button.svg');\r\n}\r\n\r\n.task img {\r\n  height: 24px;\r\n}\r\n\r\n.details {\r\n  background-color: var(--details-color);\r\n  padding: var(--pane-padding);\r\n  flex-shrink: 0;\r\n  width: 330px;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  gap: 15px;\r\n}\r\n\r\n.details .header {\r\n  display: flex;\r\n  height: 30px;\r\n  flex-flow: row nowrap;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.details .icon {\r\n  background-color: var(--details-color);\r\n  margin-left: auto;\r\n  max-height: 30px;\r\n  aspect-ratio: 1 / 1;\r\n  padding: 5px;\r\n  border-radius: 6px;\r\n}\r\n\r\n.details .icon:hover {\r\n  filter: brightness(95%);\r\n}\r\n\r\n.details .icon:active {\r\n  filter: brightness(97%);\r\n}\r\n\r\n.details .row {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  gap: 15px;\r\n}\r\n\r\n.details .notes p {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.details input[type=\"date\"] {\r\n  flex: auto;\r\n}\r\n\r\n.details textarea {\r\n  resize: vertical;\r\n  width: 100%;\r\n  padding: 8px;\r\n}\r\n\r\n.details .updated,\r\n.details .created {\r\n  font-size: 0.8rem;\r\n  align-self: center;\r\n}\r\n\r\n.details .actions {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.details .action {\r\n  background-color: var(--details-color);\r\n  cursor: pointer;\r\n  width: 70px;\r\n  height: 70px;\r\n  padding: 5px;\r\n  border-radius: 6px;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n\r\n.details .action.selected {\r\n  filter: brightness(93%);\r\n}\r\n\r\n.details .action:hover {\r\n  filter: brightness(90%);\r\n}\r\n\r\n.details .action:active {\r\n  filter: brightness(95%);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*\\.svg$":
/*!****************************************!*\
  !*** ./src/assets/ sync ^\.\/.*\.svg$ ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./add.svg": "./src/assets/add.svg",
	"./close.svg": "./src/assets/close.svg",
	"./delete.svg": "./src/assets/delete.svg",
	"./done.svg": "./src/assets/done.svg",
	"./important.svg": "./src/assets/important.svg",
	"./list.svg": "./src/assets/list.svg",
	"./radio-button-checked.svg": "./src/assets/radio-button-checked.svg",
	"./radio-button.svg": "./src/assets/radio-button.svg",
	"./tasks.svg": "./src/assets/tasks.svg",
	"./today.svg": "./src/assets/today.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive ^\\.\\/.*\\.svg$";

/***/ }),

/***/ "./src/scripts/controller.js":
/*!***********************************!*\
  !*** ./src/scripts/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _tasklist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasklist.js */ "./src/scripts/tasklist.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/scripts/display.js");
/* harmony import */ var _sidebarController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebarController.js */ "./src/scripts/sidebarController.js");







const Controller = (() => {
  // private variables
  let selectedTaskList = null;
  let selectedTask = null;
  let autoTaskLists = [];
  let userTaskLists = [];

  // private functions
  const isTaskDueToday = (task) => {
    const dueDate = task.getDueDate();
    if (dueDate) {
      const today = new Date();
      const year = dueDate.getFullYear() === today.getFullYear();
      const month = dueDate.getMonth() === today.getMonth()
      const day = dueDate.getDate() === today.getDate();
      return year && month && day;
    } else {
      return false;
    }
  }

  const todayLoader = () => {
    const tasks = [];
    userTaskLists.forEach(taskList => {
      taskList.getTasks().forEach(task => {
        if (isTaskDueToday(task)) {
          tasks.push(task);
        }
      });
    });
    return tasks;
  }

  const importantLoader = () => {
    const tasks = [];
    userTaskLists.forEach(taskList => {
      taskList.getTasks().forEach(task => {
        if (task.getIsImportant()) {
          tasks.push(task);
        }
      });
    });
    return tasks;
  }

  const tasksLoader = () => {
    const tasks = [];
    userTaskLists.forEach(taskList => {
      taskList.getTasks().forEach(task => {
        tasks.push(task);
      });
    });
    return tasks;
  }
  
  const loadAutoTaskLists = () => {
    const todayTaskList = (0,_tasklist_js__WEBPACK_IMPORTED_MODULE_0__.TaskList)('Today');
    todayTaskList.setTaskLoader(todayLoader);

    const importantTaskList = (0,_tasklist_js__WEBPACK_IMPORTED_MODULE_0__.TaskList)('Important');
    importantTaskList.setTaskLoader(importantLoader);

    const tasksTaskList = (0,_tasklist_js__WEBPACK_IMPORTED_MODULE_0__.TaskList)('Tasks');
    tasksTaskList.setTaskLoader(tasksLoader);

    const list = [
      todayTaskList,
      importantTaskList,
      tasksTaskList
    ];

    autoTaskLists = list;

    return list;
  }

  const taskReviver = (value) => {
    const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.Task)(value.name);
    task.setUuid(value.uuid);
    task.setTaskListUuid(value.taskListUuid);
    task.setIsDone(value.isDone);
    task.setIsImportant(value.isImportant);
    task.setNotes(value.notes);
    task.setCreated(new Date(value.created));
    task.setUpdated(new Date(value.updated));
    if (value.dueDate) {
      task.setDueDate(new Date(value.dueDate));
    }
    return task;
  }

  const taskListReviver = (value) => {
    const taskList = (0,_tasklist_js__WEBPACK_IMPORTED_MODULE_0__.TaskList)(value.name);
    taskList.setUuid(value.uuid);
    taskList.setCreated(new Date(value.created));
    taskList.setUpdated(new Date(value.updated));
    value.tasks.forEach(task => {
      taskList.addTask(taskReviver(task));
    })
    return taskList;
  }

  const loadUserTaskLists = () => {
    const storedValues = localStorage.getItem('userTaskLists');
    if (storedValues) {
      const parsedValues = JSON.parse(storedValues);
      const list = parsedValues.map(value => taskListReviver(value));
      return list;
    } else {
      return [];
    }
  }

  const initializeTaskLists = () => {
    const autoTaskLists = loadAutoTaskLists();
    autoTaskLists.forEach(taskList => {
      const icon = taskList.getName().toLowerCase();
      const options = {
        icon: icon, 
        readOnly: true,
        selectTaskListHandler: _sidebarController_js__WEBPACK_IMPORTED_MODULE_3__.SidebarController.selectTaskListHandler
      };
      _display_js__WEBPACK_IMPORTED_MODULE_2__.Display.addTaskList(taskList, options);
    });

    userTaskLists = loadUserTaskLists();

    userTaskLists.forEach(taskList => {
      const options = {
        icon: 'list', 
        selectTaskListHandler: _sidebarController_js__WEBPACK_IMPORTED_MODULE_3__.SidebarController.selectTaskListHandler,
        editTaskListHandler: _sidebarController_js__WEBPACK_IMPORTED_MODULE_3__.SidebarController.editTaskListHandler,
        saveTaskListHandler: _sidebarController_js__WEBPACK_IMPORTED_MODULE_3__.SidebarController.saveTaskListHandler,
        deleteTaskListHandler: _sidebarController_js__WEBPACK_IMPORTED_MODULE_3__.SidebarController.deleteTaskListHandler
      };
      _display_js__WEBPACK_IMPORTED_MODULE_2__.Display.addTaskList(taskList, options);
    });

    for (let i = 0; i < autoTaskLists.length; i++) {
      const taskList = autoTaskLists[i];
      taskList.loadTasks();
      if (taskList.getTasks().length || autoTaskLists.length === i+1 ) {
        selectedTaskList = autoTaskLists[i];
        break;
      }
    }
  }

  const getTaskListByUuid = (uuid) => {
    const taskLists = [].concat(autoTaskLists, userTaskLists);
    const taskList = taskLists.find(item => item.getUuid() === uuid);
    return taskList;
  }

  const isUserTaskList = (taskList) => {
    let isUserTaskList = false;
    
    userTaskLists.forEach(item => {
      if (item.getUuid() === taskList.getUuid()) {
        isUserTaskList = true;
      }
    });

    return isUserTaskList;
  }

  const loadTaskList = (taskList) => {
    if (isUserTaskList(taskList)) {
      return taskList;
    }
  }

  const saveUserTaskLists = () => {
    const userTaskListsJson = JSON.stringify(userTaskLists);
    localStorage.setItem('userTaskLists', userTaskListsJson);
  }

  const getAutoTaskLists = () => autoTaskLists;

  // public functions 
  const getUserTaskLists = () => userTaskLists;
  const getSelectedTaskList = () => selectedTaskList;
  const getSelectedTask = () => selectedTask;

  const setSelectedTaskList = (taskList) => {
    selectedTaskList = taskList;
  }

  const setSelectedTask = (task) => {
    selectedTask = task;
  }

  const addTaskList = (taskList) => {
    userTaskLists.push(taskList);
    saveUserTaskLists();
  }

  const deleteTaskList = (taskList) => {
    const index = userTaskLists.indexOf(taskList);
    
    const isTaskListSelected = selectedTaskList === taskList;

    if (isTaskListSelected && index > 0) {
      console.log(index - 1);
      selectedTaskList = userTaskLists[index - 1];
    } else if (isTaskListSelected && index === 0) {
      selectedTaskList = autoTaskLists[autoTaskLists.length - 1];
    }

    if (index > -1) {
      userTaskLists.splice(index, 1);
    }
    
    saveUserTaskLists();
  }

  const initialize = () => {
    const options = {
      addTaskListHandler: _sidebarController_js__WEBPACK_IMPORTED_MODULE_3__.SidebarController.addTaskListHandler
    };
    _display_js__WEBPACK_IMPORTED_MODULE_2__.Display.initialize(options);
    
    initializeTaskLists();

    const state = {
      isUserTaskList,
      getTaskListByUuid,
      addTaskList,
      deleteTaskList,
      setSelectedTaskList,
      setSelectedTask,
      getSelectedTaskList,
      getSelectedTask,
      getUserTaskLists,
      saveUserTaskLists,
      loadTaskList
    };
    _sidebarController_js__WEBPACK_IMPORTED_MODULE_3__.SidebarController.initialize(state);
  }

  return {
    initialize
  }
})();

/***/ }),

/***/ "./src/scripts/detailsController.js":
/*!******************************************!*\
  !*** ./src/scripts/detailsController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsController": () => (/* binding */ DetailsController)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/scripts/display.js");




const DetailsController = (() => {
  // private variables
  let controller = null;

  // private functions
  const parseDate = (value) => {
    if (value === null) {
      return null;
    } else {
      const [year, month, day] = value.split('-');
      const date = new Date(year, month - 1, day);
      return date;
    }
  }

  const editDueDateHandler = (event) => {
    const target = event.currentTarget;
    const value = target.value ? target.value : null;
    const dueDate = parseDate(value);
    const task = controller.getSelectedTask();
    task.setDueDate(dueDate);
    controller.saveUserTaskLists();
    showTaskDetails(task);
  }

  const editNotesHandler = (event) => {
    const target = event.currentTarget;
    const value = target.value;
    const task = controller.getSelectedTask();
    task.setNotes(value);
    controller.saveUserTaskLists();
    showTaskDetails(task);
  }

  const markIsDoneHandler = (event) => {
    const task = controller.getSelectedTask();
    const taskList = controller.getSelectedTaskList();
    const isDone = !task.getIsDone();
    task.setIsDone(isDone);
    controller.saveUserTaskLists();
    controller.showTaskList(taskList);
    showTaskDetails(task);
  }

  const markIsImportantHandler = (event) => {
    const task = controller.getSelectedTask();
    const isImportant = !task.getIsImportant();
    task.setIsImportant(isImportant);
    controller.saveUserTaskLists();
    showTaskDetails(task);
  }

  const deleteHandler = (event) => {
    const task = controller.getSelectedTask();
    const taskListUuid = task.getTaskListUuid();
    const taskList = controller.getTaskListByUuid(taskListUuid);
    const selectedTaskList = controller.getSelectedTaskList();
    taskList.deleteTask(task);
    selectedTaskList.deleteTask(task);
    controller.saveUserTaskLists();
    controller.showTaskList(selectedTaskList);
    hideTaskDetails();
  }

  // public functions
  const initialize = (state) => {
    controller = state;
  }

  const showTaskDetails = (task) => {
    controller.setSelectedTask(task);
    const options = {
      editDueDateHandler: editDueDateHandler,
      editNotesHandler: editNotesHandler,
      markIsDoneHandler: markIsDoneHandler,
      markIsImportantHandler: markIsImportantHandler,
      deleteHandler: deleteHandler
    };

    _display_js__WEBPACK_IMPORTED_MODULE_0__.Display.showTaskDetails(task, options);
  }

  const hideTaskDetails = () => {
    controller.setSelectedTask(null);
    _display_js__WEBPACK_IMPORTED_MODULE_0__.Display.hideTaskDetails();
  }

  return {
    initialize,
    showTaskDetails,
    hideTaskDetails
  }
})();

/***/ }),

/***/ "./src/scripts/detailsDisplay.js":
/*!***************************************!*\
  !*** ./src/scripts/detailsDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsDisplay": () => (/* binding */ DetailsDisplay)
/* harmony export */ });


const DetailsDisplay = (() => {
  // private functions
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  }

  const inputDate = (date) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

  const formatDate = (date) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric' 
    };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate
  }

  const closeDetails = () => {
    const details = document.querySelector('.details');
    if (details) {
      details.remove();
    };
  }

  const buildHeader = (task) => {
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = task.getName();

    const icon = document.createElement('img');
    icon.className = "icon";
    icon.src = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");
    icon.addEventListener('click', closeDetails);

    const header = document.createElement('div');
    header.className = 'header';
    header.append(title, icon);

    return header;

  }

  const buildDuedate = (task, options) => {
    const label = document.createElement('label');
    label.htmlFor = 'duedate';
    label.textContent = 'Due date ';

    const input = document.createElement('input');
    input.id = 'duedate';
    input.name = 'duedate';
    input.type = 'date';
    if (task.getDueDate()) {
      input.value = inputDate(task.getDueDate());
    }
    input.addEventListener('focusout', options.editDueDateHandler);

    const row = document.createElement('row');
    row.append(label, input);

    return row;
  }

  const buildNotes = (task, options) => {
    const label = document.createElement('p');
    label.textContent = 'Notes';
  
    const textArea = document.createElement('textarea');
    textArea.id = 'notes';
    textArea.name = 'notes';
    textArea.cols = '30';
    textArea.rows = '15';
    textArea.value = task.getNotes();
    textArea.addEventListener('focusout', options.editNotesHandler);

    const container = document.createElement('label');
    container.className = 'notes';
    container.htmlFor = 'notes';
    container.append(label, textArea);

    return container;
  }

  const buildUpdated = (task) => {
    const formattedDate = formatDate(task.getUpdated());
    const date = document.createElement('span');
    date.id = 'updated';
    date.textContent = formattedDate;

    const updated = document.createElement('p');
    updated.textContent = 'Updated on ';
    updated.append(date);

    const container = document.createElement('div');
    container.className = 'updated';
    container.append(updated);

    return container;
  }

  const buildActions = (task, options) => {
    const doneIcon = document.createElement('img');
    doneIcon.src = __webpack_require__(/*! ../assets/done.svg */ "./src/assets/done.svg");
    
    const doneLabel = document.createElement('p');
    doneLabel.textContent = 'Done';
    
    const doneContainer = document.createElement('div');
    doneContainer.className = 'action';
    doneContainer.append(doneIcon, doneLabel);
    if (task.getIsDone()) {
      doneContainer.classList.add('selected');
    }
    doneContainer.addEventListener('click', options.markIsDoneHandler);

    const importantIcon = document.createElement('img');
    importantIcon.src = __webpack_require__(/*! ../assets/important.svg */ "./src/assets/important.svg");
    
    const importantLabel = document.createElement('p');
    importantLabel.textContent = 'Important';
    
    const importantContainer = document.createElement('div');
    importantContainer.className = 'action';
    importantContainer.append(importantIcon, importantLabel);
    if (task.getIsImportant()) {
      importantContainer.classList.add('selected');
    }
    importantContainer.addEventListener('click', options.markIsImportantHandler);

    const deleteIcon = document.createElement('img');
    deleteIcon.src = __webpack_require__(/*! ../assets/delete.svg */ "./src/assets/delete.svg");
    
    const deleteLabel = document.createElement('p');
    deleteLabel.textContent = 'Delete';
    
    const deleteContainer = document.createElement('div');
    deleteContainer.className = 'action';
    deleteContainer.append(deleteIcon, deleteLabel);
    deleteContainer.addEventListener('click', options.deleteHandler);

    const actions = document.createElement('div');
    actions.className = 'actions';
    actions.append(doneContainer, importantContainer, deleteContainer);

    return actions;
  }

  const buildCreated = (task) => {
    const formattedDate = formatDate(task.getCreated());
    const date = document.createElement('span');
    date.id = 'created';
    date.textContent = formattedDate;

    const created = document.createElement('p');
    created.textContent = 'Created on ';
    created.append(date);

    const container = document.createElement('div');
    container.className = 'created';
    container.append(created);

    return container;
  }
  
  // public functions
  const showTaskDetails = (task, options) => {
    closeDetails();

    const header = buildHeader(task);
    const dueDate = buildDuedate(task, options);
    const notes = buildNotes(task, options);
    const updated = buildUpdated(task);
    const actions = buildActions(task, options);
    const created = buildCreated(task);

    const details = document.createElement('div');
    details.id = task.getUuid();
    details.className = 'details';
    details.append(header, dueDate, notes, updated, actions, created);

    const body = document.querySelector('body');
    body.append(details);
  }

  const hideTaskDetails = () => {
    closeDetails();
  }

  return {
    showTaskDetails,
    hideTaskDetails
  }
})();

/***/ }),

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _sidebarDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarDisplay.js */ "./src/scripts/sidebarDisplay.js");
/* harmony import */ var _mainDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainDisplay.js */ "./src/scripts/mainDisplay.js");
/* harmony import */ var _detailsDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailsDisplay.js */ "./src/scripts/detailsDisplay.js");






const Display = (() => {
  let isInitialized = false;

  const closeDetails = () => {
    const details = document.querySelector('.details');
    details.style.display = 'none';
  }
  const openDetails = () => {
    const details = document.querySelector('.details');
    details.style.display = 'flex';
  }
  const initialize = (options) => {
    if (!isInitialized) {
      isInitialized = true;
      _sidebarDisplay_js__WEBPACK_IMPORTED_MODULE_0__.SidebarDisplay.buildSidebar(options);
    }
  }

  return {
    initialize: initialize,
    closeDetails: closeDetails,
    openDetails: openDetails,

    showTaskList: _mainDisplay_js__WEBPACK_IMPORTED_MODULE_1__.MainDisplay.showTaskList,
    editTask: _mainDisplay_js__WEBPACK_IMPORTED_MODULE_1__.MainDisplay.editTask,
    isTaskSelected: _mainDisplay_js__WEBPACK_IMPORTED_MODULE_1__.MainDisplay.isTaskSelected,    
    renameTask: _mainDisplay_js__WEBPACK_IMPORTED_MODULE_1__.MainDisplay.renameTask,
    markTask: _mainDisplay_js__WEBPACK_IMPORTED_MODULE_1__.MainDisplay.markTask,
    unmarkTask: _mainDisplay_js__WEBPACK_IMPORTED_MODULE_1__.MainDisplay.unmarkTask,

    addTaskList: _sidebarDisplay_js__WEBPACK_IMPORTED_MODULE_0__.SidebarDisplay.addTaskList,
    deleteTaskList: _sidebarDisplay_js__WEBPACK_IMPORTED_MODULE_0__.SidebarDisplay.deleteTaskList,
    editTaskList: _sidebarDisplay_js__WEBPACK_IMPORTED_MODULE_0__.SidebarDisplay.editTaskList,
    renameTaskList: _sidebarDisplay_js__WEBPACK_IMPORTED_MODULE_0__.SidebarDisplay.renameTaskList,
    selectTaskList: _sidebarDisplay_js__WEBPACK_IMPORTED_MODULE_0__.SidebarDisplay.selectTaskList,
    getSelectedTaskList: _sidebarDisplay_js__WEBPACK_IMPORTED_MODULE_0__.SidebarDisplay.getSelectedTaskList,

    showTaskDetails: _detailsDisplay_js__WEBPACK_IMPORTED_MODULE_2__.DetailsDisplay.showTaskDetails,
    hideTaskDetails: _detailsDisplay_js__WEBPACK_IMPORTED_MODULE_2__.DetailsDisplay.hideTaskDetails
  }
})();

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/scripts/controller.js");




_controller_js__WEBPACK_IMPORTED_MODULE_1__.Controller.initialize();



// const tasks = document.querySelectorAll('.task-list .task');
// tasks.forEach(task => {
//   task.addEventListener("click", () => {
//     const showTaskList = Display.isTaskSelected(task);
//     if (isTaskSelected) {
//       Display.deselectTask(task);
//       Display.closeDetails();
//     } else {
//       Display.selectTask(task);
//       Display.openDetails();
//     }
//   })
// });

/***/ }),

/***/ "./src/scripts/mainController.js":
/*!***************************************!*\
  !*** ./src/scripts/mainController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainController": () => (/* binding */ MainController)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/scripts/display.js");
/* harmony import */ var _detailsController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailsController.js */ "./src/scripts/detailsController.js");






const MainController = (() => {
  // private variables
  let controller = null;

  // private functions
  const addTaskHandler = (event) => {
    const target = event.currentTarget;
    const key = event.key;

    if(key === 'Enter' && target.value) {
      const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(target.value);
      const taskList = controller.getSelectedTaskList();
      taskList.addTask(task);
      controller.saveUserTaskLists();
      showTaskList(taskList);
    }
  }

  const editTaskHandler = (event) => {
    const target = event.currentTarget.parentNode;
    const selectedTaskList = controller.getSelectedTaskList();
    const task = selectedTaskList.getTaskByUuid(target.id);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.Display.editTask(task);
  }

  const saveTaskHandler = (event) => {
    const targetDisplay = event.target.style.display;
    if(event.key === 'Enter' || (event.type === 'focusout' && targetDisplay !== 'none')) {
      const target = event.currentTarget;
      const taskListUuid = target.parentNode.id;
      const selectedTaskList = controller.getSelectedTaskList();
      const task = selectedTaskList.getTaskByUuid(taskListUuid);
      
      const name = target.value ? target.value : 'Untitled task';
      task.setName(name);
      controller.saveUserTaskLists();
      
      _detailsController_js__WEBPACK_IMPORTED_MODULE_2__.DetailsController.showTaskDetails(task);
      _display_js__WEBPACK_IMPORTED_MODULE_1__.Display.renameTask(task);
    }
  }

  const markTaskHandler = (event) => {
    const target = event.currentTarget.parentNode;
    const taskUuid = target.id;
    const selectedTaskList = controller.getSelectedTaskList();
    const task = selectedTaskList.getTaskByUuid(taskUuid);
    const isDone = !task.getIsDone();
    task.setIsDone(isDone);
    controller.saveUserTaskLists();

    if (task.getIsDone()) {
      _detailsController_js__WEBPACK_IMPORTED_MODULE_2__.DetailsController.showTaskDetails(task);
    } else {
      _detailsController_js__WEBPACK_IMPORTED_MODULE_2__.DetailsController.hideTaskDetails();
    }

    showTaskList(selectedTaskList)
  }

  const selectTaskHandler = (event) => {
    const taskUuid = event.currentTarget.id;
    const selectedTaskList = controller.getSelectedTaskList();
    const task = selectedTaskList.getTaskByUuid(taskUuid);
    const selectedTask = controller.getSelectedTask();

    if (selectedTask && selectedTask.getUuid() === task.getUuid()) {
      _detailsController_js__WEBPACK_IMPORTED_MODULE_2__.DetailsController.hideTaskDetails();
    } else {
      _detailsController_js__WEBPACK_IMPORTED_MODULE_2__.DetailsController.showTaskDetails(task);
    }
  }

  // public functions 
  const showTaskList = (taskList) => {
    const isUserTaskList = controller.isUserTaskList(taskList);
    const options = {
      showAction: isUserTaskList,
      editTaskHandler: editTaskHandler,
      addTaskHandler: addTaskHandler,
      saveTaskHandler: saveTaskHandler,
      markTaskHandler: markTaskHandler,
      selectTaskHandler: selectTaskHandler
    };
    taskList.loadTasks();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.Display.showTaskList(taskList, options);
  }

  const initialize = (state) => {
    controller = state;
    const mcState = Object.assign(state, {showTaskList})
    _detailsController_js__WEBPACK_IMPORTED_MODULE_2__.DetailsController.initialize(mcState);
  }

  return {
    initialize,
    showTaskList,
  }
})();

/***/ }),

/***/ "./src/scripts/mainDisplay.js":
/*!************************************!*\
  !*** ./src/scripts/mainDisplay.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainDisplay": () => (/* binding */ MainDisplay)
/* harmony export */ });


const MainDisplay = (() => {
  // private functions
  const buildMain = (taskList) => {
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = taskList.getName();

    const taskListNode = document.createElement('ul');
    taskListNode.className = 'task-list';

    const actions = document.createElement('div');
    actions.className = 'actions';

    const main = document.createElement('div');
    main.className = 'main';
    main.append(title, taskListNode, actions);

    const body = document.querySelector('body');
    body.append(main);
  }

  const buildTask = (task, options) => {  
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = __webpack_require__(/*! ../assets/radio-button.svg */ "./src/assets/radio-button.svg");
    icon.addEventListener('click', options.markTaskHandler);

    const label = document.createElement('span');
    label.textContent = task.getName();
    label.style.display = 'inline-block';
    label.addEventListener('dblclick', options.editTaskHandler);

    const input = document.createElement('input');
    input.className = 'task';
    input.type = 'text';
    input.value = task.getName();
    input.style.display = 'none';
    input.addEventListener('keypress', options.saveTaskHandler);
    input.addEventListener('focusout', options.saveTaskHandler);
      
    const taskNode = document.createElement('li');
    taskNode.className = 'task';
    taskNode.id = task.getUuid();
    taskNode.append(icon, label, input);
    taskNode.addEventListener('click', options.selectTaskHandler);

    const taskList = document.querySelector('.main .task-list');
    taskList.append(taskNode);

    if (task.getIsDone()) {
      markTask(task);
    }
  }

  const buildNewTaskAction = (options) => {
    const icon = document.createElement('img');
    icon.className = 'icon';

    const input = document.createElement('input');
    input.className = 'add task';
    input.type = 'text';
    input.placeholder = 'Add a task';
    input.addEventListener('keypress', options.addTaskHandler);

    const action = document.createElement('div');
    action.className = 'action';
    action.append(icon, input);

    const actions = document.querySelector('.main .actions');
    actions.append(action);
  }

  const getTaskNode = (task) => {
    const tasks = Array.from(document.querySelectorAll('.main .task'));
    const taskNode = tasks.find(item => item.id === task.getUuid());
    return taskNode;
  }

  const taskSorter = (a, b) => {
    const check = a.getIsDone() >= b.getIsDone();
    const result = check ? 1 : -1;
    return result;
  }

  // public functions
  const showTaskList = (taskList, options) => {
    const current = document.querySelector('.main');
    const details = document.querySelector('.details');
    if (current) current.remove();
    if (details) details.remove();

    buildMain(taskList);

    const tasks = taskList.getTasks().slice().sort(taskSorter);
    tasks.forEach(task => buildTask(task, options));

    if (options.showAction) {
      buildNewTaskAction(options);
    }
  }

  // const selectTask = (task) => {
  //   const selectedTask = document.querySelector('.task.selected');
  //   if (selectedTask) {
  //     selectedTask.classList.remove('selected');
  //   }

  //   task.classList.add('selected');
  // }

  // const deselectTask = (task) => {
  //   task.classList.remove('selected');
  // }

  const isTaskSelected = (task) => {
    const isSelected = task.classList.contains('selected');
    return isSelected;
  }

  const editTask = (task) => {
    const taskNode = getTaskNode(task);

    if (!taskNode.classList.contains('done')) {
      const label = taskNode.querySelector('span');
      label.style.display = 'none';

      const input = taskNode.querySelector('input');
      input.style.display = 'inline-block';
      input.focus();
    } 
  }

  const renameTask = (task) => {
    const taskNode = getTaskNode(task);

    const input = taskNode.querySelector('input');
    input.value = task.getName();
    input.style.display = 'none';

    const label = taskNode.querySelector('span');
    label.textContent = task.getName();
    label.style.display = 'inline';
  }

  const markTask = (task) => {
    const taskNode = getTaskNode(task);
    taskNode.classList.add('done');

    const checkMark = taskNode.querySelector('.mark');
    if (!checkMark) {
      const mark = document.createElement('hr');
      mark.className = 'mark';
      taskNode.append(mark);
    }
  }

  const unmarkTask = (task) => {
    const taskNode = getTaskNode(task);
    taskNode.classList.remove('done');

    const mark = taskNode.querySelector('.mark');
    if (mark) {
      mark.remove();
    }
  }

  return {
    showTaskList,
    editTask,
    renameTask,
    // selectTask,
    // deselectTask,
    isTaskSelected,
    markTask,
    unmarkTask
  }
})();

/***/ }),

/***/ "./src/scripts/sidebarController.js":
/*!******************************************!*\
  !*** ./src/scripts/sidebarController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarController": () => (/* binding */ SidebarController)
/* harmony export */ });
/* harmony import */ var _tasklist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasklist.js */ "./src/scripts/tasklist.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/scripts/display.js");
/* harmony import */ var _mainController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainController.js */ "./src/scripts/mainController.js");






const SidebarController = (() => {
  // private variables
  let controller = null;

  const selectTaskList = (taskList) => {
    controller.setSelectedTask(null);
    controller.setSelectedTaskList(taskList);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.Display.selectTaskList(taskList);
    _mainController_js__WEBPACK_IMPORTED_MODULE_2__.MainController.showTaskList(taskList);
  }

  // public functions 
  const addTaskListHandler = (event) => {
    const taskList = (0,_tasklist_js__WEBPACK_IMPORTED_MODULE_0__.TaskList)('');
    controller.addTaskList(taskList);
    controller.setSelectedTaskList(taskList);
    
    const options = {
      icon: 'list',
      showInput: true, 
      selectTaskListHandler: selectTaskListHandler,
      editTaskListHandler: editTaskListHandler,
      saveTaskListHandler: saveTaskListHandler,
      deleteTaskListHandler: deleteTaskListHandler
    }
    _display_js__WEBPACK_IMPORTED_MODULE_1__.Display.addTaskList(taskList, options);
    
  }

  const selectTaskListHandler = (event) => {
    const target = event.currentTarget;    
    const taskList = controller.getTaskListByUuid(target.id);
    
    selectTaskList(taskList);
  }

  const editTaskListHandler = (event) => {
    const targetUuid = event.currentTarget.id;
    const taskList = controller.getTaskListByUuid(targetUuid);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.Display.editTaskList(taskList);
  }

  const saveTaskListHandler = (event) => {
    const targetDisplay = event.target.style.display;
    if(event.key === 'Enter' || (event.type === 'focusout' && targetDisplay !== 'none')) {
      const target = event.currentTarget;
      const taskListUuid = target.parentNode.id;
      
      const taskList = controller.getTaskListByUuid(taskListUuid);
      const name = target.value ? target.value : 'Untitled list';
      taskList.setName(name);
      
      controller.saveUserTaskLists();

      _display_js__WEBPACK_IMPORTED_MODULE_1__.Display.renameTaskList(taskList);
      _mainController_js__WEBPACK_IMPORTED_MODULE_2__.MainController.showTaskList(taskList);
    }
  }

  const deleteTaskListHandler = (event) => {
    const target = event.currentTarget;
    const taskListNode = target.parentNode;
    const taskListUuid = taskListNode.id;
    const taskList = controller.getTaskListByUuid(taskListUuid);

    controller.deleteTaskList(taskList);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.Display.deleteTaskList(taskList);
    selectTaskList(controller.getSelectedTaskList());

    event.stopPropagation();
    // Display.deleteTaskList();
  }

  const initialize = (state) => {
    controller = state;
    _mainController_js__WEBPACK_IMPORTED_MODULE_2__.MainController.initialize(state);
    selectTaskList(controller.getSelectedTaskList());
  }

  return {
    initialize,
    addTaskListHandler,
    selectTaskListHandler,
    editTaskListHandler,
    saveTaskListHandler,
    deleteTaskListHandler
  }
})();

/***/ }),

/***/ "./src/scripts/sidebarDisplay.js":
/*!***************************************!*\
  !*** ./src/scripts/sidebarDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDisplay": () => (/* binding */ SidebarDisplay)
/* harmony export */ });


const SidebarDisplay = (() => {
  // private functions
  const buildNewListAction = (options) => {
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = __webpack_require__(/*! ../assets/add.svg */ "./src/assets/add.svg");

    const name = document.createElement('span');
    name.textContent = 'New list';

    const action = document.createElement('li');
    action.className = 'action';
    action.id = 'add-list';
    action.addEventListener('click', options.addTaskListHandler)
    action.append(icon, name);

    return action;
  }

  const focusInput = (node) => {
    const input = node.querySelector('input');
    input.focus();
  }

  const selectTaskList = (taskList) => {
    const selected = document.querySelector('.lists .selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    
    const taskListNodes = Array.from(document.querySelectorAll('.lists .list'));
    
    const taskListNode = taskListNodes.find(item => item.id === taskList.getUuid());
    taskListNode.classList.add('selected');
  }

  const buildTaskList = (taskList, options) => {
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = __webpack_require__("./src/assets sync recursive ^\\.\\/.*\\.svg$")(`./${options.icon}.svg`);

    const name = document.createElement('span');
    name.className = 'label';
    name.textContent = taskList.getName();

    const nameInput = document.createElement('input');
    nameInput.className = 'list';
    nameInput.value = taskList.getName();
    nameInput.placeholder = 'Untitled list';
    nameInput.addEventListener('focusout', options.saveTaskListHandler);
    nameInput.addEventListener('keypress', options.saveTaskListHandler);

    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add('icon', 'lighten');
    deleteIcon.src = __webpack_require__(/*! ../assets/delete.svg */ "./src/assets/delete.svg");
    deleteIcon.addEventListener('click', options.deleteTaskListHandler);

    if(options.showInput) {
      nameInput.style.display = 'span';
      name.style.display = 'none';
    } else {
      nameInput.style.display = 'none';
      name.style.display = 'inline-block';
    }

    const list = document.createElement('li');
    list.className = 'list';
    list.id = taskList.getUuid();
    list.addEventListener('click', options.selectTaskListHandler);
    list.append(icon, name);

    if (!options.readOnly) {
      list.addEventListener('dblclick', options.editTaskListHandler);
      list.append(nameInput, deleteIcon);
    }

    return list;
  }

  // public functions
  const buildSidebar = (options) => {
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = 'To-do list';

    const lists = document.createElement('ul');
    lists.className = 'lists';

    const newListAction = buildNewListAction(options);

    const actions = document.createElement('ul');
    actions.className = 'actions';
    actions.append(newListAction);
    
    const navigation = document.createElement('div');
    navigation.className = 'navigation';
    navigation.append(title, lists, actions);

    const body = document.querySelector('body');
    body.prepend(navigation);
  }

  const addTaskList = (taskList, options) => {
    const taskListNode = buildTaskList(taskList, options);
    
    const lists = document.querySelector('.navigation .lists');
    lists.append(taskListNode);
    
    if (options.showInput) {
      selectTaskList(taskList);
      focusInput(taskListNode);
    }
  }

  const deleteTaskList = (taskList) => {
    const taskLists = Array.from(document.querySelectorAll('.navigation .list'));
    const taskListNode = taskLists.find(item => item.id === taskList.getUuid());
    console.log('yos');
    taskListNode.remove();
  }

  const editTaskList = (taskList) => {
    const taskLists = Array.from(document.querySelectorAll('.navigation .list'));

    const taskListNode = taskLists.find(item => item.id === taskList.getUuid());
    
    const label = taskListNode.querySelector('span');
    label.style.display = 'none';

    const input = taskListNode.querySelector('input');
    input.style.display = 'inline-block';

    focusInput(taskListNode);
  }

  const renameTaskList = (taskList) => {
    const taskListNodes = Array.from(document.querySelectorAll('.navigation .list'));

    const taskListNode = taskListNodes.find(item => item.id === taskList.getUuid());

    const input = taskListNode.querySelector('input');
    input.value = taskList.getName();
    input.style.display = 'none';

    const label = taskListNode.querySelector('span');
    label.textContent = taskList.getName();
    label.style.display = 'inline';
  }

  const getSelectedTaskList = () => {
    return document.querySelector('.list.selected');
  }

  return {
    buildSidebar,
    addTaskList,
    deleteTaskList,
    editTaskList,
    renameTaskList,
    selectTaskList,
    getSelectedTaskList
  }
})();

/***/ }),

/***/ "./src/scripts/task.js":
/*!*****************************!*\
  !*** ./src/scripts/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


const Task = (value) => {
  let uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let created = new Date();
  let name = value;
  let updated = new Date();
  let dueDate = null;
  let notes = null;
  let isImportant = false;
  let isDone = false;
  let taskListUuid = null;

  // public functions
  // getters
  const getUuid = () => uuid;
  const getName = () => name;
  const getIsDone = () => isDone;
  const getCreated = () => created;
  const getUpdated = () => updated;
  const getDueDate = () => dueDate;
  const getIsImportant = () => isImportant;
  const getNotes = () => notes;
  const getTaskListUuid = () => taskListUuid;

  // setters
  const setName = (value) => {
    setUpdated();
    name = value;
    return name;
  };
  const setIsDone = (value) => {
    if (typeof value === 'boolean') {
      setUpdated();
      isDone = value;
      return isDone;
    }
  }
  const setIsImportant = (value )=> {
    if (typeof value === 'boolean') {
      setUpdated();
      isImportant = value;
      return isImportant;
    }
  }
  const setNotes = (value) => {
    setUpdated();
    notes = value;
    return notes;
  }
  const setDueDate = (value) => {
    if (value instanceof Date || value === null) {
      setUpdated();
      dueDate = value;
      return dueDate;
    }
  }
  const setTaskListUuid = (value) => {
    taskListUuid = value;
  }
  const setUpdated = (date) => {
    updated = date ? date : new Date();
  }
  const setCreated = (date) => {
    created = date;
  }
  const setUuid = (value) => {
    uuid = value;
  }
  const toJSON = () => {
    return {
      uuid,
      created,
      name,
      updated,
      dueDate,
      notes,
      isImportant,
      isDone,
      taskListUuid
    }
  }

  return {
    getUuid,
    getName,
    getIsDone,
    getCreated,
    getUpdated,
    getDueDate,
    getIsImportant,
    getNotes,
    getTaskListUuid,
    setName,
    setIsDone,
    setNotes,
    setIsImportant,
    setDueDate,
    setTaskListUuid,
    setUpdated,
    setCreated,
    setUuid,
    toJSON
  }
}



/***/ }),

/***/ "./src/scripts/tasklist.js":
/*!*********************************!*\
  !*** ./src/scripts/tasklist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskList": () => (/* binding */ TaskList)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


const TaskList = (value) => {
  // private variables
  let uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let created = new Date();
  let tasks = [];
  let name = value;
  let updated = new Date();
  let taskLoader = null;

  // private functions
  
  const isTaskUuidEqual = (task1, task2) => {
    return task1.getUuid() === task2.getUuid();
  }
  const getTaskIndex = (task) => {
    let index = tasks.findIndex(
      item => isTaskUuidEqual(item, task)
    );
    return index;
  }

  // public functions
  // getters
  const getUuid = () => uuid;
  const getName = () => name;
  const getCreated = () => created;
  const getUpdated = () => updated;
  const getTasks = () => tasks;
  const getTaskByUuid = (uuid) => {
    return tasks.find(task => task.getUuid() === uuid);
  }

  // setters
  const setName = (value) => {
    name = value;
    setUpdated();
    return name;
  } 
  const addTask = (value) => {
    value.setTaskListUuid(uuid);
    tasks.push(value);
    setUpdated();
    return tasks;
  }
  const deleteTask = (value) => {
    let index = getTaskIndex(value);
    if (index >= 0) {
      setUpdated();
      tasks.splice(index, 1);
    }
    return tasks;
  }
  const setTaskLoader = (loader) => {
    taskLoader = loader;
  }
  const loadTasks = () => {
    if (taskLoader) {
      tasks = taskLoader();
    }
  }
  const setUpdated = (date) => {
    updated = date ? date : new Date();
  }
  const setCreated = (date) => {
    created = date
  }
  const setUuid = (value) => {
    uuid = value;
  }
  const toJSON = () => {
    return {
      uuid,
      created,
      tasks: tasks.map(task => task.toJSON()),
      name,
      updated
    };
  }
  return {
    getUuid,
    getName,
    getCreated,
    getUpdated,
    getTasks,
    getTaskByUuid,
    setName,
    addTask,
    deleteTask,
    setTaskLoader,
    setCreated,
    setUpdated,
    setUuid,
    loadTasks,
    toJSON
  }
}



/***/ }),

/***/ "./src/assets/add.svg":
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ca2a5c4f267b18aead6.svg";

/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "28b16caf94657bcfde20.svg";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60ca4cdd86aec8a01c8b.svg";

/***/ }),

/***/ "./src/assets/done.svg":
/*!*****************************!*\
  !*** ./src/assets/done.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4e29ec383812d214c26e.svg";

/***/ }),

/***/ "./src/assets/important.svg":
/*!**********************************!*\
  !*** ./src/assets/important.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "84ac0401b38be47b36d0.svg";

/***/ }),

/***/ "./src/assets/list.svg":
/*!*****************************!*\
  !*** ./src/assets/list.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a66857a5bef126fff950.svg";

/***/ }),

/***/ "./src/assets/radio-button-checked.svg":
/*!*********************************************!*\
  !*** ./src/assets/radio-button-checked.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2ce2406cb57df2d710d.svg";

/***/ }),

/***/ "./src/assets/radio-button.svg":
/*!*************************************!*\
  !*** ./src/assets/radio-button.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "695d3ab27b5e8470f9cd.svg";

/***/ }),

/***/ "./src/assets/tasks.svg":
/*!******************************!*\
  !*** ./src/assets/tasks.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f0af80261cb0a1e3a37.svg";

/***/ }),

/***/ "./src/assets/today.svg":
/*!******************************!*\
  !*** ./src/assets/today.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9722e3e26ca02a4e1a3b.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUZBQW9DO0FBQzlEO0FBQ0EsSUFBSSwyREFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtFQUE0QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFQc0M7QUFDdkM7QUFDNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsaUVBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEx3QztBQUNGO0FBQ2M7QUFDckQ7QUFDNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQXNCO0FBQzFCLElBQUksMkVBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFzQjtBQUM1QixNQUFNLDJFQUEyQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0Z5QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsK0NBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0VBQVEsR0FBVyxFQUFFLGFBQWEsS0FBSyxDQUFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxxREFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLK0I7QUFDaEM7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Fzc2V0cy8gc3luYyBeXFwuXFwvLipcXC5zdmckIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3NjcmlwdHMvZGV0YWlsc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3NjcmlwdHMvZGV0YWlsc0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3NjcmlwdHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NyaXB0cy9tYWluQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NyaXB0cy9tYWluRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NyaXB0cy9zaWRlYmFyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NyaXB0cy9zaWRlYmFyRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zY3JpcHRzL3Rhc2tsaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYWRkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9yYWRpby1idXR0b24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3JhZGlvLWJ1dHRvbi1jaGVja2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JbnRlcik7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tdGl0bGUtcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcXHJcXG4gIC0tcGFuZS1wYWRkaW5nOiAxMHB4O1xcclxcbiAgLS1uYXZpZ2F0aW9uLWNvbG9yOiAjRkFGQUZBO1xcclxcbiAgLS1tYWluLWNvbG9yOiAjNUU3MkMxO1xcclxcbiAgLS1tYWluLXRpdGxlLWNvbG9yOiAjRkRGREZEOyBcXHJcXG4gIC0tdGFzay1saXN0LWNvbG9yOiAjRkRGREZEO1xcclxcbiAgLS1pY29uLWhlaWdodDogMjRweDtcXHJcXG4gIC0tZGV0YWlscy1jb2xvcjogI0ZBRkFGQTtcXHJcXG4gIC0tdGV4dC1jb2xvcjogIzQ3NDc0OTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saS5zZWxlY3RlZCxcXHJcXG5saTpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTUlKTtcXHJcXG59XFxyXFxuXFxyXFxubGk6YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgcGFkZGluZzogdmFyKC0tdGl0bGUtcGFkZGluZyk7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIG1heC1oZWlnaHQ6IHZhcigtLWljb24taGVpZ2h0KTtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhbmUtcGFkZGluZyk7XFxyXFxuICB3aWR0aDogMjgwcHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIC5zZXBhcmF0b3Ige1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIGxpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24tY29sb3IpO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24gaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxcHggMS41cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QgLmxhYmVsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCAuaWNvbiB7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0ZW4ge1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTA2ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDk3JSk7XFxyXFxufVxcclxcblxcclxcbi5saWdodGVuOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0ZW46YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDc4JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEwNmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9ucyB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhbmUtcGFkZGluZyk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC50aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi10aXRsZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC50YXNrLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiAudGFzayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWxpc3QtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiAuYWN0aW9ucyBpbnB1dCB7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC5hY3Rpb25zIGlucHV0OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC5hY3Rpb25zIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC50YXNrLWxpc3QgaW5wdXQge1xcclxcbiAgcGFkZGluZzogMXB4IDEuNXB4O1xcclxcbiAgaGVpZ2h0OiAxMjUlO1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC5hY3Rpb25zIC5pY29uIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBmaWx0ZXI6IGludmVydCg0OSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxJSkgaHVlLXJvdGF0ZSgxNzdkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4NSUpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA0MHB4O1xcclxcbiAgbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiAuYWN0aW9ucyAuaWNvbjpoYXMoKyBpbnB1dDpmb2N1cyl7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgZmlsdGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IC5pY29uIHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IC5pY29uOmhvdmVyIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3QgLmRvbmUge1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkzJSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3QgLmRvbmU6aG92ZXIge1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3QgLm1hcmsge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCAuZG9uZSAuaWNvbiB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IC5kb25lIC5pY29uOmhvdmVyIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGltZyB7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRldGFpbHMtY29sb3IpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFuZS1wYWRkaW5nKTtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgd2lkdGg6IDMzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgLmljb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGV0YWlscy1jb2xvcik7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDMwcHg7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyAuaWNvbjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgLmljb246YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyAucm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIC5ub3RlcyBwIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXHJcXG4gIGZsZXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgLnVwZGF0ZWQsXFxyXFxuLmRldGFpbHMgLmNyZWF0ZWQge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIC5hY3Rpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyAuYWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRldGFpbHMtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyXFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIC5hY3Rpb24uc2VsZWN0ZWQge1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkzJSk7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIC5hY3Rpb246aG92ZXIge1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIC5hY3Rpb246YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5NSUpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsNEZBQTRGO0FBQzlGOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEZBQTRGO0FBQzlGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnREFBaUM7RUFDakMsMkZBQTJGO0VBQzNGLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0RBQTBDO0VBQzFDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsZ0RBQTBDO0FBQzVDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JbnRlcicpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tdGl0bGUtcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcXHJcXG4gIC0tcGFuZS1wYWRkaW5nOiAxMHB4O1xcclxcbiAgLS1uYXZpZ2F0aW9uLWNvbG9yOiAjRkFGQUZBO1xcclxcbiAgLS1tYWluLWNvbG9yOiAjNUU3MkMxO1xcclxcbiAgLS1tYWluLXRpdGxlLWNvbG9yOiAjRkRGREZEOyBcXHJcXG4gIC0tdGFzay1saXN0LWNvbG9yOiAjRkRGREZEO1xcclxcbiAgLS1pY29uLWhlaWdodDogMjRweDtcXHJcXG4gIC0tZGV0YWlscy1jb2xvcjogI0ZBRkFGQTtcXHJcXG4gIC0tdGV4dC1jb2xvcjogIzQ3NDc0OTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saS5zZWxlY3RlZCxcXHJcXG5saTpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTUlKTtcXHJcXG59XFxyXFxuXFxyXFxubGk6YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgcGFkZGluZzogdmFyKC0tdGl0bGUtcGFkZGluZyk7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIG1heC1oZWlnaHQ6IHZhcigtLWljb24taGVpZ2h0KTtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhbmUtcGFkZGluZyk7XFxyXFxuICB3aWR0aDogMjgwcHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIC5zZXBhcmF0b3Ige1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIGxpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24tY29sb3IpO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24gaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxcHggMS41cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QgLmxhYmVsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCAuaWNvbiB7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0ZW4ge1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTA2ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDk3JSk7XFxyXFxufVxcclxcblxcclxcbi5saWdodGVuOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0ZW46YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDc4JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEwNmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9ucyB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhbmUtcGFkZGluZyk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC50aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi10aXRsZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC50YXNrLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiAudGFzayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWxpc3QtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiAuYWN0aW9ucyBpbnB1dCB7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC5hY3Rpb25zIGlucHV0OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC5hY3Rpb25zIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC50YXNrLWxpc3QgaW5wdXQge1xcclxcbiAgcGFkZGluZzogMXB4IDEuNXB4O1xcclxcbiAgaGVpZ2h0OiAxMjUlO1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC5hY3Rpb25zIC5pY29uIHtcXHJcXG4gIGNvbnRlbnQ6IHVybCgnLi4vYXNzZXRzL2FkZC5zdmcnKTtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDQ5JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDElKSBodWUtcm90YXRlKDE3N2RlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg1JSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDQwcHg7XFxyXFxuICBsZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC5hY3Rpb25zIC5pY29uOmhhcygrIGlucHV0OmZvY3VzKXtcXHJcXG4gIGNvbnRlbnQ6IHVybCgnLi4vYXNzZXRzL3JhZGlvLWJ1dHRvbi5zdmcnKTtcXHJcXG4gIGZpbHRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCAuaWNvbiB7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCAuaWNvbjpob3ZlciB7XFxyXFxuICBjb250ZW50OiB1cmwoJy4uL2Fzc2V0cy9yYWRpby1idXR0b24tY2hlY2tlZC5zdmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCAuZG9uZSB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTMlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCAuZG9uZTpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCAubWFyayB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IC5kb25lIC5pY29uIHtcXHJcXG4gIGNvbnRlbnQ6IHVybCgnLi4vYXNzZXRzL3JhZGlvLWJ1dHRvbi1jaGVja2VkLnN2ZycpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IC5kb25lIC5pY29uOmhvdmVyIHtcXHJcXG4gIGNvbnRlbnQ6IHVybCgnLi4vYXNzZXRzL3JhZGlvLWJ1dHRvbi5zdmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaW1nIHtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGV0YWlscy1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYW5lLXBhZGRpbmcpO1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICB3aWR0aDogMzMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyAuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyAuaWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXRhaWxzLWNvbG9yKTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMzBweDtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIC5pY29uOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5NSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyAuaWNvbjphY3RpdmUge1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDk3JSk7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIC5yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgLm5vdGVzIHAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcclxcbiAgZmxleDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgdGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyAudXBkYXRlZCxcXHJcXG4uZGV0YWlscyAuY3JlYXRlZCB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgLmFjdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIC5hY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGV0YWlscy1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgLmFjdGlvbi5zZWxlY3RlZCB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTMlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgLmFjdGlvbjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgLmFjdGlvbjphY3RpdmUge1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FkZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvYWRkLnN2Z1wiLFxuXHRcIi4vY2xvc2Uuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2Nsb3NlLnN2Z1wiLFxuXHRcIi4vZGVsZXRlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9kZWxldGUuc3ZnXCIsXG5cdFwiLi9kb25lLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9kb25lLnN2Z1wiLFxuXHRcIi4vaW1wb3J0YW50LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbXBvcnRhbnQuc3ZnXCIsXG5cdFwiLi9saXN0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9saXN0LnN2Z1wiLFxuXHRcIi4vcmFkaW8tYnV0dG9uLWNoZWNrZWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3JhZGlvLWJ1dHRvbi1jaGVja2VkLnN2Z1wiLFxuXHRcIi4vcmFkaW8tYnV0dG9uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9yYWRpby1idXR0b24uc3ZnXCIsXG5cdFwiLi90YXNrcy5zdmdcIjogXCIuL3NyYy9hc3NldHMvdGFza3Muc3ZnXCIsXG5cdFwiLi90b2RheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvdG9kYXkuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5zdmckXCI7IiwiaW1wb3J0IHsgVGFza0xpc3QgfSBmcm9tIFwiLi90YXNrbGlzdC5qc1wiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrLmpzJztcclxuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgU2lkZWJhckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9zaWRlYmFyQ29udHJvbGxlci5qc1wiO1xyXG5cclxuZXhwb3J0IHsgQ29udHJvbGxlciB9XHJcblxyXG5jb25zdCBDb250cm9sbGVyID0gKCgpID0+IHtcclxuICAvLyBwcml2YXRlIHZhcmlhYmxlc1xyXG4gIGxldCBzZWxlY3RlZFRhc2tMaXN0ID0gbnVsbDtcclxuICBsZXQgc2VsZWN0ZWRUYXNrID0gbnVsbDtcclxuICBsZXQgYXV0b1Rhc2tMaXN0cyA9IFtdO1xyXG4gIGxldCB1c2VyVGFza0xpc3RzID0gW107XHJcblxyXG4gIC8vIHByaXZhdGUgZnVuY3Rpb25zXHJcbiAgY29uc3QgaXNUYXNrRHVlVG9kYXkgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IHRhc2suZ2V0RHVlRGF0ZSgpO1xyXG4gICAgaWYgKGR1ZURhdGUpIHtcclxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCB5ZWFyID0gZHVlRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICBjb25zdCBtb250aCA9IGR1ZURhdGUuZ2V0TW9udGgoKSA9PT0gdG9kYXkuZ2V0TW9udGgoKVxyXG4gICAgICBjb25zdCBkYXkgPSBkdWVEYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICByZXR1cm4geWVhciAmJiBtb250aCAmJiBkYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2RheUxvYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tzID0gW107XHJcbiAgICB1c2VyVGFza0xpc3RzLmZvckVhY2godGFza0xpc3QgPT4ge1xyXG4gICAgICB0YXNrTGlzdC5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgaWYgKGlzVGFza0R1ZVRvZGF5KHRhc2spKSB7XHJcbiAgICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0YXNrcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGltcG9ydGFudExvYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tzID0gW107XHJcbiAgICB1c2VyVGFza0xpc3RzLmZvckVhY2godGFza0xpc3QgPT4ge1xyXG4gICAgICB0YXNrTGlzdC5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgaWYgKHRhc2suZ2V0SXNJbXBvcnRhbnQoKSkge1xyXG4gICAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGFza3M7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0YXNrc0xvYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tzID0gW107XHJcbiAgICB1c2VyVGFza0xpc3RzLmZvckVhY2godGFza0xpc3QgPT4ge1xyXG4gICAgICB0YXNrTGlzdC5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0YXNrcztcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgbG9hZEF1dG9UYXNrTGlzdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2RheVRhc2tMaXN0ID0gVGFza0xpc3QoJ1RvZGF5Jyk7XHJcbiAgICB0b2RheVRhc2tMaXN0LnNldFRhc2tMb2FkZXIodG9kYXlMb2FkZXIpO1xyXG5cclxuICAgIGNvbnN0IGltcG9ydGFudFRhc2tMaXN0ID0gVGFza0xpc3QoJ0ltcG9ydGFudCcpO1xyXG4gICAgaW1wb3J0YW50VGFza0xpc3Quc2V0VGFza0xvYWRlcihpbXBvcnRhbnRMb2FkZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzVGFza0xpc3QgPSBUYXNrTGlzdCgnVGFza3MnKTtcclxuICAgIHRhc2tzVGFza0xpc3Quc2V0VGFza0xvYWRlcih0YXNrc0xvYWRlcik7XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IFtcclxuICAgICAgdG9kYXlUYXNrTGlzdCxcclxuICAgICAgaW1wb3J0YW50VGFza0xpc3QsXHJcbiAgICAgIHRhc2tzVGFza0xpc3RcclxuICAgIF07XHJcblxyXG4gICAgYXV0b1Rhc2tMaXN0cyA9IGxpc3Q7XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0YXNrUmV2aXZlciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdGFzayA9IFRhc2sodmFsdWUubmFtZSk7XHJcbiAgICB0YXNrLnNldFV1aWQodmFsdWUudXVpZCk7XHJcbiAgICB0YXNrLnNldFRhc2tMaXN0VXVpZCh2YWx1ZS50YXNrTGlzdFV1aWQpO1xyXG4gICAgdGFzay5zZXRJc0RvbmUodmFsdWUuaXNEb25lKTtcclxuICAgIHRhc2suc2V0SXNJbXBvcnRhbnQodmFsdWUuaXNJbXBvcnRhbnQpO1xyXG4gICAgdGFzay5zZXROb3Rlcyh2YWx1ZS5ub3Rlcyk7XHJcbiAgICB0YXNrLnNldENyZWF0ZWQobmV3IERhdGUodmFsdWUuY3JlYXRlZCkpO1xyXG4gICAgdGFzay5zZXRVcGRhdGVkKG5ldyBEYXRlKHZhbHVlLnVwZGF0ZWQpKTtcclxuICAgIGlmICh2YWx1ZS5kdWVEYXRlKSB7XHJcbiAgICAgIHRhc2suc2V0RHVlRGF0ZShuZXcgRGF0ZSh2YWx1ZS5kdWVEYXRlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFzaztcclxuICB9XHJcblxyXG4gIGNvbnN0IHRhc2tMaXN0UmV2aXZlciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSBUYXNrTGlzdCh2YWx1ZS5uYW1lKTtcclxuICAgIHRhc2tMaXN0LnNldFV1aWQodmFsdWUudXVpZCk7XHJcbiAgICB0YXNrTGlzdC5zZXRDcmVhdGVkKG5ldyBEYXRlKHZhbHVlLmNyZWF0ZWQpKTtcclxuICAgIHRhc2tMaXN0LnNldFVwZGF0ZWQobmV3IERhdGUodmFsdWUudXBkYXRlZCkpO1xyXG4gICAgdmFsdWUudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgdGFza0xpc3QuYWRkVGFzayh0YXNrUmV2aXZlcih0YXNrKSk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRhc2tMaXN0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9hZFVzZXJUYXNrTGlzdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRWYWx1ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclRhc2tMaXN0cycpO1xyXG4gICAgaWYgKHN0b3JlZFZhbHVlcykge1xyXG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZXMgPSBKU09OLnBhcnNlKHN0b3JlZFZhbHVlcyk7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBwYXJzZWRWYWx1ZXMubWFwKHZhbHVlID0+IHRhc2tMaXN0UmV2aXZlcih2YWx1ZSkpO1xyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVUYXNrTGlzdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRvVGFza0xpc3RzID0gbG9hZEF1dG9UYXNrTGlzdHMoKTtcclxuICAgIGF1dG9UYXNrTGlzdHMuZm9yRWFjaCh0YXNrTGlzdCA9PiB7XHJcbiAgICAgIGNvbnN0IGljb24gPSB0YXNrTGlzdC5nZXROYW1lKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBpY29uOiBpY29uLCBcclxuICAgICAgICByZWFkT25seTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3RUYXNrTGlzdEhhbmRsZXI6IFNpZGViYXJDb250cm9sbGVyLnNlbGVjdFRhc2tMaXN0SGFuZGxlclxyXG4gICAgICB9O1xyXG4gICAgICBEaXNwbGF5LmFkZFRhc2tMaXN0KHRhc2tMaXN0LCBvcHRpb25zKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZXJUYXNrTGlzdHMgPSBsb2FkVXNlclRhc2tMaXN0cygpO1xyXG5cclxuICAgIHVzZXJUYXNrTGlzdHMuZm9yRWFjaCh0YXNrTGlzdCA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgaWNvbjogJ2xpc3QnLCBcclxuICAgICAgICBzZWxlY3RUYXNrTGlzdEhhbmRsZXI6IFNpZGViYXJDb250cm9sbGVyLnNlbGVjdFRhc2tMaXN0SGFuZGxlcixcclxuICAgICAgICBlZGl0VGFza0xpc3RIYW5kbGVyOiBTaWRlYmFyQ29udHJvbGxlci5lZGl0VGFza0xpc3RIYW5kbGVyLFxyXG4gICAgICAgIHNhdmVUYXNrTGlzdEhhbmRsZXI6IFNpZGViYXJDb250cm9sbGVyLnNhdmVUYXNrTGlzdEhhbmRsZXIsXHJcbiAgICAgICAgZGVsZXRlVGFza0xpc3RIYW5kbGVyOiBTaWRlYmFyQ29udHJvbGxlci5kZWxldGVUYXNrTGlzdEhhbmRsZXJcclxuICAgICAgfTtcclxuICAgICAgRGlzcGxheS5hZGRUYXNrTGlzdCh0YXNrTGlzdCwgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF1dG9UYXNrTGlzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFza0xpc3QgPSBhdXRvVGFza0xpc3RzW2ldO1xyXG4gICAgICB0YXNrTGlzdC5sb2FkVGFza3MoKTtcclxuICAgICAgaWYgKHRhc2tMaXN0LmdldFRhc2tzKCkubGVuZ3RoIHx8IGF1dG9UYXNrTGlzdHMubGVuZ3RoID09PSBpKzEgKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRUYXNrTGlzdCA9IGF1dG9UYXNrTGlzdHNbaV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFRhc2tMaXN0QnlVdWlkID0gKHV1aWQpID0+IHtcclxuICAgIGNvbnN0IHRhc2tMaXN0cyA9IFtdLmNvbmNhdChhdXRvVGFza0xpc3RzLCB1c2VyVGFza0xpc3RzKTtcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGFza0xpc3RzLmZpbmQoaXRlbSA9PiBpdGVtLmdldFV1aWQoKSA9PT0gdXVpZCk7XHJcbiAgICByZXR1cm4gdGFza0xpc3Q7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc1VzZXJUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gICAgbGV0IGlzVXNlclRhc2tMaXN0ID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHVzZXJUYXNrTGlzdHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0uZ2V0VXVpZCgpID09PSB0YXNrTGlzdC5nZXRVdWlkKCkpIHtcclxuICAgICAgICBpc1VzZXJUYXNrTGlzdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpc1VzZXJUYXNrTGlzdDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxvYWRUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gICAgaWYgKGlzVXNlclRhc2tMaXN0KHRhc2tMaXN0KSkge1xyXG4gICAgICByZXR1cm4gdGFza0xpc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzYXZlVXNlclRhc2tMaXN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJUYXNrTGlzdHNKc29uID0gSlNPTi5zdHJpbmdpZnkodXNlclRhc2tMaXN0cyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclRhc2tMaXN0cycsIHVzZXJUYXNrTGlzdHNKc29uKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEF1dG9UYXNrTGlzdHMgPSAoKSA9PiBhdXRvVGFza0xpc3RzO1xyXG5cclxuICAvLyBwdWJsaWMgZnVuY3Rpb25zIFxyXG4gIGNvbnN0IGdldFVzZXJUYXNrTGlzdHMgPSAoKSA9PiB1c2VyVGFza0xpc3RzO1xyXG4gIGNvbnN0IGdldFNlbGVjdGVkVGFza0xpc3QgPSAoKSA9PiBzZWxlY3RlZFRhc2tMaXN0O1xyXG4gIGNvbnN0IGdldFNlbGVjdGVkVGFzayA9ICgpID0+IHNlbGVjdGVkVGFzaztcclxuXHJcbiAgY29uc3Qgc2V0U2VsZWN0ZWRUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gICAgc2VsZWN0ZWRUYXNrTGlzdCA9IHRhc2tMaXN0O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0U2VsZWN0ZWRUYXNrID0gKHRhc2spID0+IHtcclxuICAgIHNlbGVjdGVkVGFzayA9IHRhc2s7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gICAgdXNlclRhc2tMaXN0cy5wdXNoKHRhc2tMaXN0KTtcclxuICAgIHNhdmVVc2VyVGFza0xpc3RzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSB1c2VyVGFza0xpc3RzLmluZGV4T2YodGFza0xpc3QpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpc1Rhc2tMaXN0U2VsZWN0ZWQgPSBzZWxlY3RlZFRhc2tMaXN0ID09PSB0YXNrTGlzdDtcclxuXHJcbiAgICBpZiAoaXNUYXNrTGlzdFNlbGVjdGVkICYmIGluZGV4ID4gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhpbmRleCAtIDEpO1xyXG4gICAgICBzZWxlY3RlZFRhc2tMaXN0ID0gdXNlclRhc2tMaXN0c1tpbmRleCAtIDFdO1xyXG4gICAgfSBlbHNlIGlmIChpc1Rhc2tMaXN0U2VsZWN0ZWQgJiYgaW5kZXggPT09IDApIHtcclxuICAgICAgc2VsZWN0ZWRUYXNrTGlzdCA9IGF1dG9UYXNrTGlzdHNbYXV0b1Rhc2tMaXN0cy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB1c2VyVGFza0xpc3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNhdmVVc2VyVGFza0xpc3RzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgYWRkVGFza0xpc3RIYW5kbGVyOiBTaWRlYmFyQ29udHJvbGxlci5hZGRUYXNrTGlzdEhhbmRsZXJcclxuICAgIH07XHJcbiAgICBEaXNwbGF5LmluaXRpYWxpemUob3B0aW9ucyk7XHJcbiAgICBcclxuICAgIGluaXRpYWxpemVUYXNrTGlzdHMoKTtcclxuXHJcbiAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgaXNVc2VyVGFza0xpc3QsXHJcbiAgICAgIGdldFRhc2tMaXN0QnlVdWlkLFxyXG4gICAgICBhZGRUYXNrTGlzdCxcclxuICAgICAgZGVsZXRlVGFza0xpc3QsXHJcbiAgICAgIHNldFNlbGVjdGVkVGFza0xpc3QsXHJcbiAgICAgIHNldFNlbGVjdGVkVGFzayxcclxuICAgICAgZ2V0U2VsZWN0ZWRUYXNrTGlzdCxcclxuICAgICAgZ2V0U2VsZWN0ZWRUYXNrLFxyXG4gICAgICBnZXRVc2VyVGFza0xpc3RzLFxyXG4gICAgICBzYXZlVXNlclRhc2tMaXN0cyxcclxuICAgICAgbG9hZFRhc2tMaXN0XHJcbiAgICB9O1xyXG4gICAgU2lkZWJhckNvbnRyb2xsZXIuaW5pdGlhbGl6ZShzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdGlhbGl6ZVxyXG4gIH1cclxufSkoKTsiLCJpbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheS5qc1wiO1xyXG5cclxuZXhwb3J0IHsgRGV0YWlsc0NvbnRyb2xsZXIgfTtcclxuXHJcbmNvbnN0IERldGFpbHNDb250cm9sbGVyID0gKCgpID0+IHtcclxuICAvLyBwcml2YXRlIHZhcmlhYmxlc1xyXG4gIGxldCBjb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgLy8gcHJpdmF0ZSBmdW5jdGlvbnNcclxuICBjb25zdCBwYXJzZURhdGUgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IHZhbHVlLnNwbGl0KCctJyk7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XHJcbiAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZWRpdER1ZURhdGVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWUgPyB0YXJnZXQudmFsdWUgOiBudWxsO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IHBhcnNlRGF0ZSh2YWx1ZSk7XHJcbiAgICBjb25zdCB0YXNrID0gY29udHJvbGxlci5nZXRTZWxlY3RlZFRhc2soKTtcclxuICAgIHRhc2suc2V0RHVlRGF0ZShkdWVEYXRlKTtcclxuICAgIGNvbnRyb2xsZXIuc2F2ZVVzZXJUYXNrTGlzdHMoKTtcclxuICAgIHNob3dUYXNrRGV0YWlscyh0YXNrKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGVkaXROb3Rlc0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2sgPSBjb250cm9sbGVyLmdldFNlbGVjdGVkVGFzaygpO1xyXG4gICAgdGFzay5zZXROb3Rlcyh2YWx1ZSk7XHJcbiAgICBjb250cm9sbGVyLnNhdmVVc2VyVGFza0xpc3RzKCk7XHJcbiAgICBzaG93VGFza0RldGFpbHModGFzayk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXJrSXNEb25lSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFzayA9IGNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRUYXNrKCk7XHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IGNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRUYXNrTGlzdCgpO1xyXG4gICAgY29uc3QgaXNEb25lID0gIXRhc2suZ2V0SXNEb25lKCk7XHJcbiAgICB0YXNrLnNldElzRG9uZShpc0RvbmUpO1xyXG4gICAgY29udHJvbGxlci5zYXZlVXNlclRhc2tMaXN0cygpO1xyXG4gICAgY29udHJvbGxlci5zaG93VGFza0xpc3QodGFza0xpc3QpO1xyXG4gICAgc2hvd1Rhc2tEZXRhaWxzKHRhc2spO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFya0lzSW1wb3J0YW50SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFzayA9IGNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRUYXNrKCk7XHJcbiAgICBjb25zdCBpc0ltcG9ydGFudCA9ICF0YXNrLmdldElzSW1wb3J0YW50KCk7XHJcbiAgICB0YXNrLnNldElzSW1wb3J0YW50KGlzSW1wb3J0YW50KTtcclxuICAgIGNvbnRyb2xsZXIuc2F2ZVVzZXJUYXNrTGlzdHMoKTtcclxuICAgIHNob3dUYXNrRGV0YWlscyh0YXNrKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhc2sgPSBjb250cm9sbGVyLmdldFNlbGVjdGVkVGFzaygpO1xyXG4gICAgY29uc3QgdGFza0xpc3RVdWlkID0gdGFzay5nZXRUYXNrTGlzdFV1aWQoKTtcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gY29udHJvbGxlci5nZXRUYXNrTGlzdEJ5VXVpZCh0YXNrTGlzdFV1aWQpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrTGlzdCA9IGNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRUYXNrTGlzdCgpO1xyXG4gICAgdGFza0xpc3QuZGVsZXRlVGFzayh0YXNrKTtcclxuICAgIHNlbGVjdGVkVGFza0xpc3QuZGVsZXRlVGFzayh0YXNrKTtcclxuICAgIGNvbnRyb2xsZXIuc2F2ZVVzZXJUYXNrTGlzdHMoKTtcclxuICAgIGNvbnRyb2xsZXIuc2hvd1Rhc2tMaXN0KHNlbGVjdGVkVGFza0xpc3QpO1xyXG4gICAgaGlkZVRhc2tEZXRhaWxzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgZnVuY3Rpb25zXHJcbiAgY29uc3QgaW5pdGlhbGl6ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgY29udHJvbGxlciA9IHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvd1Rhc2tEZXRhaWxzID0gKHRhc2spID0+IHtcclxuICAgIGNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRUYXNrKHRhc2spO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgZWRpdER1ZURhdGVIYW5kbGVyOiBlZGl0RHVlRGF0ZUhhbmRsZXIsXHJcbiAgICAgIGVkaXROb3Rlc0hhbmRsZXI6IGVkaXROb3Rlc0hhbmRsZXIsXHJcbiAgICAgIG1hcmtJc0RvbmVIYW5kbGVyOiBtYXJrSXNEb25lSGFuZGxlcixcclxuICAgICAgbWFya0lzSW1wb3J0YW50SGFuZGxlcjogbWFya0lzSW1wb3J0YW50SGFuZGxlcixcclxuICAgICAgZGVsZXRlSGFuZGxlcjogZGVsZXRlSGFuZGxlclxyXG4gICAgfTtcclxuXHJcbiAgICBEaXNwbGF5LnNob3dUYXNrRGV0YWlscyh0YXNrLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhpZGVUYXNrRGV0YWlscyA9ICgpID0+IHtcclxuICAgIGNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRUYXNrKG51bGwpO1xyXG4gICAgRGlzcGxheS5oaWRlVGFza0RldGFpbHMoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0aWFsaXplLFxyXG4gICAgc2hvd1Rhc2tEZXRhaWxzLFxyXG4gICAgaGlkZVRhc2tEZXRhaWxzXHJcbiAgfVxyXG59KSgpOyIsImV4cG9ydCB7IERldGFpbHNEaXNwbGF5IH07XHJcblxyXG5jb25zdCBEZXRhaWxzRGlzcGxheSA9ICgoKSA9PiB7XHJcbiAgLy8gcHJpdmF0ZSBmdW5jdGlvbnNcclxuICBjb25zdCBwYWRUbzJEaWdpdHMgPSAobnVtKSA9PiB7XHJcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlucHV0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgIHBhZFRvMkRpZ2l0cyhkYXRlLmdldE1vbnRoKCkgKyAxKSxcclxuICAgICAgcGFkVG8yRGlnaXRzKGRhdGUuZ2V0RGF0ZSgpKSxcclxuICAgIF0uam9pbignLScpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0geyBcclxuICAgICAgeWVhcjogJ251bWVyaWMnLCBcclxuICAgICAgbW9udGg6ICdsb25nJywgXHJcbiAgICAgIGRheTogJ251bWVyaWMnLCBcclxuICAgICAgaG91cjogJ251bWVyaWMnLCBcclxuICAgICAgbWludXRlOiAnbnVtZXJpYycgXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2VEZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzJyk7XHJcbiAgICBpZiAoZGV0YWlscykge1xyXG4gICAgICBkZXRhaWxzLnJlbW92ZSgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1aWxkSGVhZGVyID0gKHRhc2spID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0TmFtZSgpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGljb24uY2xhc3NOYW1lID0gXCJpY29uXCI7XHJcbiAgICBpY29uLnNyYyA9IHJlcXVpcmUoYC4uL2Fzc2V0cy9jbG9zZS5zdmdgKTtcclxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURldGFpbHMpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSwgaWNvbik7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBidWlsZER1ZWRhdGUgPSAodGFzaywgb3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuaHRtbEZvciA9ICdkdWVkYXRlJztcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlICc7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuaWQgPSAnZHVlZGF0ZSc7XHJcbiAgICBpbnB1dC5uYW1lID0gJ2R1ZWRhdGUnO1xyXG4gICAgaW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGlmICh0YXNrLmdldER1ZURhdGUoKSkge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGlucHV0RGF0ZSh0YXNrLmdldER1ZURhdGUoKSk7XHJcbiAgICB9XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9wdGlvbnMuZWRpdER1ZURhdGVIYW5kbGVyKTtcclxuXHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdyb3cnKTtcclxuICAgIHJvdy5hcHBlbmQobGFiZWwsIGlucHV0KTtcclxuXHJcbiAgICByZXR1cm4gcm93O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYnVpbGROb3RlcyA9ICh0YXNrLCBvcHRpb25zKSA9PiB7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ05vdGVzJztcclxuICBcclxuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIHRleHRBcmVhLmlkID0gJ25vdGVzJztcclxuICAgIHRleHRBcmVhLm5hbWUgPSAnbm90ZXMnO1xyXG4gICAgdGV4dEFyZWEuY29scyA9ICczMCc7XHJcbiAgICB0ZXh0QXJlYS5yb3dzID0gJzE1JztcclxuICAgIHRleHRBcmVhLnZhbHVlID0gdGFzay5nZXROb3RlcygpO1xyXG4gICAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvcHRpb25zLmVkaXROb3Rlc0hhbmRsZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ25vdGVzJztcclxuICAgIGNvbnRhaW5lci5odG1sRm9yID0gJ25vdGVzJztcclxuICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIHRleHRBcmVhKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYnVpbGRVcGRhdGVkID0gKHRhc2spID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKHRhc2suZ2V0VXBkYXRlZCgpKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkYXRlLmlkID0gJ3VwZGF0ZWQnO1xyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdHRlZERhdGU7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHVwZGF0ZWQudGV4dENvbnRlbnQgPSAnVXBkYXRlZCBvbiAnO1xyXG4gICAgdXBkYXRlZC5hcHBlbmQoZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3VwZGF0ZWQnO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZCh1cGRhdGVkKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYnVpbGRBY3Rpb25zID0gKHRhc2ssIG9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IGRvbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkb25lSWNvbi5zcmMgPSByZXF1aXJlKGAuLi9hc3NldHMvZG9uZS5zdmdgKTtcclxuICAgIFxyXG4gICAgY29uc3QgZG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZG9uZUxhYmVsLnRleHRDb250ZW50ID0gJ0RvbmUnO1xyXG4gICAgXHJcbiAgICBjb25zdCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkb25lQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdhY3Rpb24nO1xyXG4gICAgZG9uZUNvbnRhaW5lci5hcHBlbmQoZG9uZUljb24sIGRvbmVMYWJlbCk7XHJcbiAgICBpZiAodGFzay5nZXRJc0RvbmUoKSkge1xyXG4gICAgICBkb25lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICB9XHJcbiAgICBkb25lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3B0aW9ucy5tYXJrSXNEb25lSGFuZGxlcik7XHJcblxyXG4gICAgY29uc3QgaW1wb3J0YW50SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1wb3J0YW50SWNvbi5zcmMgPSByZXF1aXJlKGAuLi9hc3NldHMvaW1wb3J0YW50LnN2Z2ApO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbXBvcnRhbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGltcG9ydGFudExhYmVsLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XHJcbiAgICBcclxuICAgIGNvbnN0IGltcG9ydGFudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1wb3J0YW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdhY3Rpb24nO1xyXG4gICAgaW1wb3J0YW50Q29udGFpbmVyLmFwcGVuZChpbXBvcnRhbnRJY29uLCBpbXBvcnRhbnRMYWJlbCk7XHJcbiAgICBpZiAodGFzay5nZXRJc0ltcG9ydGFudCgpKSB7XHJcbiAgICAgIGltcG9ydGFudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG4gICAgaW1wb3J0YW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3B0aW9ucy5tYXJrSXNJbXBvcnRhbnRIYW5kbGVyKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkZWxldGVJY29uLnNyYyA9IHJlcXVpcmUoYC4uL2Fzc2V0cy9kZWxldGUuc3ZnYCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRlbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGVsZXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcclxuICAgIFxyXG4gICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZWxldGVDb250YWluZXIuY2xhc3NOYW1lID0gJ2FjdGlvbic7XHJcbiAgICBkZWxldGVDb250YWluZXIuYXBwZW5kKGRlbGV0ZUljb24sIGRlbGV0ZUxhYmVsKTtcclxuICAgIGRlbGV0ZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wdGlvbnMuZGVsZXRlSGFuZGxlcik7XHJcblxyXG4gICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWN0aW9ucy5jbGFzc05hbWUgPSAnYWN0aW9ucyc7XHJcbiAgICBhY3Rpb25zLmFwcGVuZChkb25lQ29udGFpbmVyLCBpbXBvcnRhbnRDb250YWluZXIsIGRlbGV0ZUNvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbnM7XHJcbiAgfVxyXG5cclxuICBjb25zdCBidWlsZENyZWF0ZWQgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdERhdGUodGFzay5nZXRDcmVhdGVkKCkpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRhdGUuaWQgPSAnY3JlYXRlZCc7XHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0dGVkRGF0ZTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY3JlYXRlZC50ZXh0Q29udGVudCA9ICdDcmVhdGVkIG9uICc7XHJcbiAgICBjcmVhdGVkLmFwcGVuZChkYXRlKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY3JlYXRlZCc7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZWQpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuICBjb25zdCBzaG93VGFza0RldGFpbHMgPSAodGFzaywgb3B0aW9ucykgPT4ge1xyXG4gICAgY2xvc2VEZXRhaWxzKCk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gYnVpbGRIZWFkZXIodGFzayk7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gYnVpbGREdWVkYXRlKHRhc2ssIG9wdGlvbnMpO1xyXG4gICAgY29uc3Qgbm90ZXMgPSBidWlsZE5vdGVzKHRhc2ssIG9wdGlvbnMpO1xyXG4gICAgY29uc3QgdXBkYXRlZCA9IGJ1aWxkVXBkYXRlZCh0YXNrKTtcclxuICAgIGNvbnN0IGFjdGlvbnMgPSBidWlsZEFjdGlvbnModGFzaywgb3B0aW9ucyk7XHJcbiAgICBjb25zdCBjcmVhdGVkID0gYnVpbGRDcmVhdGVkKHRhc2spO1xyXG5cclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRldGFpbHMuaWQgPSB0YXNrLmdldFV1aWQoKTtcclxuICAgIGRldGFpbHMuY2xhc3NOYW1lID0gJ2RldGFpbHMnO1xyXG4gICAgZGV0YWlscy5hcHBlbmQoaGVhZGVyLCBkdWVEYXRlLCBub3RlcywgdXBkYXRlZCwgYWN0aW9ucywgY3JlYXRlZCk7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGJvZHkuYXBwZW5kKGRldGFpbHMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGlkZVRhc2tEZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgY2xvc2VEZXRhaWxzKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2hvd1Rhc2tEZXRhaWxzLFxyXG4gICAgaGlkZVRhc2tEZXRhaWxzXHJcbiAgfVxyXG59KSgpOyIsImltcG9ydCB7IFNpZGViYXJEaXNwbGF5IH0gZnJvbSAnLi9zaWRlYmFyRGlzcGxheS5qcyc7XHJcbmltcG9ydCB7IE1haW5EaXNwbGF5IH0gZnJvbSAnLi9tYWluRGlzcGxheS5qcyc7XHJcbmltcG9ydCB7IERldGFpbHNEaXNwbGF5IH0gZnJvbSAnLi9kZXRhaWxzRGlzcGxheS5qcydcclxuXHJcbmV4cG9ydCB7IERpc3BsYXkgfTtcclxuXHJcbmNvbnN0IERpc3BsYXkgPSAoKCkgPT4ge1xyXG4gIGxldCBpc0luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGNsb3NlRGV0YWlscyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpO1xyXG4gICAgZGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuICBjb25zdCBvcGVuRGV0YWlscyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpO1xyXG4gICAgZGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIH1cclxuICBjb25zdCBpbml0aWFsaXplID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGlmICghaXNJbml0aWFsaXplZCkge1xyXG4gICAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgU2lkZWJhckRpc3BsYXkuYnVpbGRTaWRlYmFyKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXRpYWxpemU6IGluaXRpYWxpemUsXHJcbiAgICBjbG9zZURldGFpbHM6IGNsb3NlRGV0YWlscyxcclxuICAgIG9wZW5EZXRhaWxzOiBvcGVuRGV0YWlscyxcclxuXHJcbiAgICBzaG93VGFza0xpc3Q6IE1haW5EaXNwbGF5LnNob3dUYXNrTGlzdCxcclxuICAgIGVkaXRUYXNrOiBNYWluRGlzcGxheS5lZGl0VGFzayxcclxuICAgIGlzVGFza1NlbGVjdGVkOiBNYWluRGlzcGxheS5pc1Rhc2tTZWxlY3RlZCwgICAgXHJcbiAgICByZW5hbWVUYXNrOiBNYWluRGlzcGxheS5yZW5hbWVUYXNrLFxyXG4gICAgbWFya1Rhc2s6IE1haW5EaXNwbGF5Lm1hcmtUYXNrLFxyXG4gICAgdW5tYXJrVGFzazogTWFpbkRpc3BsYXkudW5tYXJrVGFzayxcclxuXHJcbiAgICBhZGRUYXNrTGlzdDogU2lkZWJhckRpc3BsYXkuYWRkVGFza0xpc3QsXHJcbiAgICBkZWxldGVUYXNrTGlzdDogU2lkZWJhckRpc3BsYXkuZGVsZXRlVGFza0xpc3QsXHJcbiAgICBlZGl0VGFza0xpc3Q6IFNpZGViYXJEaXNwbGF5LmVkaXRUYXNrTGlzdCxcclxuICAgIHJlbmFtZVRhc2tMaXN0OiBTaWRlYmFyRGlzcGxheS5yZW5hbWVUYXNrTGlzdCxcclxuICAgIHNlbGVjdFRhc2tMaXN0OiBTaWRlYmFyRGlzcGxheS5zZWxlY3RUYXNrTGlzdCxcclxuICAgIGdldFNlbGVjdGVkVGFza0xpc3Q6IFNpZGViYXJEaXNwbGF5LmdldFNlbGVjdGVkVGFza0xpc3QsXHJcblxyXG4gICAgc2hvd1Rhc2tEZXRhaWxzOiBEZXRhaWxzRGlzcGxheS5zaG93VGFza0RldGFpbHMsXHJcbiAgICBoaWRlVGFza0RldGFpbHM6IERldGFpbHNEaXNwbGF5LmhpZGVUYXNrRGV0YWlsc1xyXG4gIH1cclxufSkoKTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcclxuXHJcblxyXG5Db250cm9sbGVyLmluaXRpYWxpemUoKTtcclxuXHJcblxyXG5cclxuLy8gY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1saXN0IC50YXNrJyk7XHJcbi8vIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbi8vICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgICAgY29uc3Qgc2hvd1Rhc2tMaXN0ID0gRGlzcGxheS5pc1Rhc2tTZWxlY3RlZCh0YXNrKTtcclxuLy8gICAgIGlmIChpc1Rhc2tTZWxlY3RlZCkge1xyXG4vLyAgICAgICBEaXNwbGF5LmRlc2VsZWN0VGFzayh0YXNrKTtcclxuLy8gICAgICAgRGlzcGxheS5jbG9zZURldGFpbHMoKTtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIERpc3BsYXkuc2VsZWN0VGFzayh0YXNrKTtcclxuLy8gICAgICAgRGlzcGxheS5vcGVuRGV0YWlscygpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pXHJcbi8vIH0pOyIsImltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBEZXRhaWxzQ29udHJvbGxlciB9IGZyb20gXCIuL2RldGFpbHNDb250cm9sbGVyLmpzXCI7XHJcblxyXG5leHBvcnQgeyBNYWluQ29udHJvbGxlciB9XHJcblxyXG5jb25zdCBNYWluQ29udHJvbGxlciA9ICgoKSA9PiB7XHJcbiAgLy8gcHJpdmF0ZSB2YXJpYWJsZXNcclxuICBsZXQgY29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIC8vIHByaXZhdGUgZnVuY3Rpb25zXHJcbiAgY29uc3QgYWRkVGFza0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XHJcblxyXG4gICAgaWYoa2V5ID09PSAnRW50ZXInICYmIHRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjb25zdCB0YXNrID0gVGFzayh0YXJnZXQudmFsdWUpO1xyXG4gICAgICBjb25zdCB0YXNrTGlzdCA9IGNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRUYXNrTGlzdCgpO1xyXG4gICAgICB0YXNrTGlzdC5hZGRUYXNrKHRhc2spO1xyXG4gICAgICBjb250cm9sbGVyLnNhdmVVc2VyVGFza0xpc3RzKCk7XHJcbiAgICAgIHNob3dUYXNrTGlzdCh0YXNrTGlzdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBlZGl0VGFza0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkVGFza0xpc3QgPSBjb250cm9sbGVyLmdldFNlbGVjdGVkVGFza0xpc3QoKTtcclxuICAgIGNvbnN0IHRhc2sgPSBzZWxlY3RlZFRhc2tMaXN0LmdldFRhc2tCeVV1aWQodGFyZ2V0LmlkKTtcclxuICAgIERpc3BsYXkuZWRpdFRhc2sodGFzayk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzYXZlVGFza0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldERpc3BsYXkgPSBldmVudC50YXJnZXQuc3R5bGUuZGlzcGxheTtcclxuICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJyB8fCAoZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyAmJiB0YXJnZXREaXNwbGF5ICE9PSAnbm9uZScpKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIGNvbnN0IHRhc2tMaXN0VXVpZCA9IHRhcmdldC5wYXJlbnROb2RlLmlkO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFRhc2tMaXN0ID0gY29udHJvbGxlci5nZXRTZWxlY3RlZFRhc2tMaXN0KCk7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSBzZWxlY3RlZFRhc2tMaXN0LmdldFRhc2tCeVV1aWQodGFza0xpc3RVdWlkKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQudmFsdWUgPyB0YXJnZXQudmFsdWUgOiAnVW50aXRsZWQgdGFzayc7XHJcbiAgICAgIHRhc2suc2V0TmFtZShuYW1lKTtcclxuICAgICAgY29udHJvbGxlci5zYXZlVXNlclRhc2tMaXN0cygpO1xyXG4gICAgICBcclxuICAgICAgRGV0YWlsc0NvbnRyb2xsZXIuc2hvd1Rhc2tEZXRhaWxzKHRhc2spO1xyXG4gICAgICBEaXNwbGF5LnJlbmFtZVRhc2sodGFzayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXJrVGFza0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhc2tVdWlkID0gdGFyZ2V0LmlkO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrTGlzdCA9IGNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRUYXNrTGlzdCgpO1xyXG4gICAgY29uc3QgdGFzayA9IHNlbGVjdGVkVGFza0xpc3QuZ2V0VGFza0J5VXVpZCh0YXNrVXVpZCk7XHJcbiAgICBjb25zdCBpc0RvbmUgPSAhdGFzay5nZXRJc0RvbmUoKTtcclxuICAgIHRhc2suc2V0SXNEb25lKGlzRG9uZSk7XHJcbiAgICBjb250cm9sbGVyLnNhdmVVc2VyVGFza0xpc3RzKCk7XHJcblxyXG4gICAgaWYgKHRhc2suZ2V0SXNEb25lKCkpIHtcclxuICAgICAgRGV0YWlsc0NvbnRyb2xsZXIuc2hvd1Rhc2tEZXRhaWxzKHRhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgRGV0YWlsc0NvbnRyb2xsZXIuaGlkZVRhc2tEZXRhaWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Rhc2tMaXN0KHNlbGVjdGVkVGFza0xpc3QpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWxlY3RUYXNrSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFza1V1aWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrTGlzdCA9IGNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRUYXNrTGlzdCgpO1xyXG4gICAgY29uc3QgdGFzayA9IHNlbGVjdGVkVGFza0xpc3QuZ2V0VGFza0J5VXVpZCh0YXNrVXVpZCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBjb250cm9sbGVyLmdldFNlbGVjdGVkVGFzaygpO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZFRhc2sgJiYgc2VsZWN0ZWRUYXNrLmdldFV1aWQoKSA9PT0gdGFzay5nZXRVdWlkKCkpIHtcclxuICAgICAgRGV0YWlsc0NvbnRyb2xsZXIuaGlkZVRhc2tEZXRhaWxzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBEZXRhaWxzQ29udHJvbGxlci5zaG93VGFza0RldGFpbHModGFzayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgZnVuY3Rpb25zIFxyXG4gIGNvbnN0IHNob3dUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gICAgY29uc3QgaXNVc2VyVGFza0xpc3QgPSBjb250cm9sbGVyLmlzVXNlclRhc2tMaXN0KHRhc2tMaXN0KTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHNob3dBY3Rpb246IGlzVXNlclRhc2tMaXN0LFxyXG4gICAgICBlZGl0VGFza0hhbmRsZXI6IGVkaXRUYXNrSGFuZGxlcixcclxuICAgICAgYWRkVGFza0hhbmRsZXI6IGFkZFRhc2tIYW5kbGVyLFxyXG4gICAgICBzYXZlVGFza0hhbmRsZXI6IHNhdmVUYXNrSGFuZGxlcixcclxuICAgICAgbWFya1Rhc2tIYW5kbGVyOiBtYXJrVGFza0hhbmRsZXIsXHJcbiAgICAgIHNlbGVjdFRhc2tIYW5kbGVyOiBzZWxlY3RUYXNrSGFuZGxlclxyXG4gICAgfTtcclxuICAgIHRhc2tMaXN0LmxvYWRUYXNrcygpO1xyXG4gICAgRGlzcGxheS5zaG93VGFza0xpc3QodGFza0xpc3QsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5pdGlhbGl6ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgY29udHJvbGxlciA9IHN0YXRlO1xyXG4gICAgY29uc3QgbWNTdGF0ZSA9IE9iamVjdC5hc3NpZ24oc3RhdGUsIHtzaG93VGFza0xpc3R9KVxyXG4gICAgRGV0YWlsc0NvbnRyb2xsZXIuaW5pdGlhbGl6ZShtY1N0YXRlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0aWFsaXplLFxyXG4gICAgc2hvd1Rhc2tMaXN0LFxyXG4gIH1cclxufSkoKTsiLCJleHBvcnQgeyBNYWluRGlzcGxheSB9O1xyXG5cclxuY29uc3QgTWFpbkRpc3BsYXkgPSAoKCkgPT4ge1xyXG4gIC8vIHByaXZhdGUgZnVuY3Rpb25zXHJcbiAgY29uc3QgYnVpbGRNYWluID0gKHRhc2tMaXN0KSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrTGlzdC5nZXROYW1lKCk7XHJcblxyXG4gICAgY29uc3QgdGFza0xpc3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHRhc2tMaXN0Tm9kZS5jbGFzc05hbWUgPSAndGFzay1saXN0JztcclxuXHJcbiAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhY3Rpb25zLmNsYXNzTmFtZSA9ICdhY3Rpb25zJztcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJztcclxuICAgIG1haW4uYXBwZW5kKHRpdGxlLCB0YXNrTGlzdE5vZGUsIGFjdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBib2R5LmFwcGVuZChtYWluKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1aWxkVGFzayA9ICh0YXNrLCBvcHRpb25zKSA9PiB7ICBcclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGljb24uY2xhc3NOYW1lID0gJ2ljb24nO1xyXG4gICAgaWNvbi5zcmMgPSByZXF1aXJlKGAuLi9hc3NldHMvcmFkaW8tYnV0dG9uLnN2Z2ApO1xyXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wdGlvbnMubWFya1Rhc2tIYW5kbGVyKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGFzay5nZXROYW1lKCk7XHJcbiAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9wdGlvbnMuZWRpdFRhc2tIYW5kbGVyKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAndGFzayc7XHJcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgaW5wdXQudmFsdWUgPSB0YXNrLmdldE5hbWUoKTtcclxuICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG9wdGlvbnMuc2F2ZVRhc2tIYW5kbGVyKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb3B0aW9ucy5zYXZlVGFza0hhbmRsZXIpO1xyXG4gICAgICBcclxuICAgIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHRhc2tOb2RlLmNsYXNzTmFtZSA9ICd0YXNrJztcclxuICAgIHRhc2tOb2RlLmlkID0gdGFzay5nZXRVdWlkKCk7XHJcbiAgICB0YXNrTm9kZS5hcHBlbmQoaWNvbiwgbGFiZWwsIGlucHV0KTtcclxuICAgIHRhc2tOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3B0aW9ucy5zZWxlY3RUYXNrSGFuZGxlcik7XHJcblxyXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbiAudGFzay1saXN0Jyk7XHJcbiAgICB0YXNrTGlzdC5hcHBlbmQodGFza05vZGUpO1xyXG5cclxuICAgIGlmICh0YXNrLmdldElzRG9uZSgpKSB7XHJcbiAgICAgIG1hcmtUYXNrKHRhc2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYnVpbGROZXdUYXNrQWN0aW9uID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGljb24uY2xhc3NOYW1lID0gJ2ljb24nO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LmNsYXNzTmFtZSA9ICdhZGQgdGFzayc7XHJcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIGEgdGFzayc7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG9wdGlvbnMuYWRkVGFza0hhbmRsZXIpO1xyXG5cclxuICAgIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWN0aW9uLmNsYXNzTmFtZSA9ICdhY3Rpb24nO1xyXG4gICAgYWN0aW9uLmFwcGVuZChpY29uLCBpbnB1dCk7XHJcblxyXG4gICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluIC5hY3Rpb25zJyk7XHJcbiAgICBhY3Rpb25zLmFwcGVuZChhY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0VGFza05vZGUgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluIC50YXNrJykpO1xyXG4gICAgY29uc3QgdGFza05vZGUgPSB0YXNrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGFzay5nZXRVdWlkKCkpO1xyXG4gICAgcmV0dXJuIHRhc2tOb2RlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGFza1NvcnRlciA9IChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBjaGVjayA9IGEuZ2V0SXNEb25lKCkgPj0gYi5nZXRJc0RvbmUoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrID8gMSA6IC0xO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuICBjb25zdCBzaG93VGFza0xpc3QgPSAodGFza0xpc3QsIG9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzJyk7XHJcbiAgICBpZiAoY3VycmVudCkgY3VycmVudC5yZW1vdmUoKTtcclxuICAgIGlmIChkZXRhaWxzKSBkZXRhaWxzLnJlbW92ZSgpO1xyXG5cclxuICAgIGJ1aWxkTWFpbih0YXNrTGlzdCk7XHJcblxyXG4gICAgY29uc3QgdGFza3MgPSB0YXNrTGlzdC5nZXRUYXNrcygpLnNsaWNlKCkuc29ydCh0YXNrU29ydGVyKTtcclxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiBidWlsZFRhc2sodGFzaywgb3B0aW9ucykpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLnNob3dBY3Rpb24pIHtcclxuICAgICAgYnVpbGROZXdUYXNrQWN0aW9uKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY29uc3Qgc2VsZWN0VGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgLy8gICBjb25zdCBzZWxlY3RlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay5zZWxlY3RlZCcpO1xyXG4gIC8vICAgaWYgKHNlbGVjdGVkVGFzaykge1xyXG4gIC8vICAgICBzZWxlY3RlZFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBkZXNlbGVjdFRhc2sgPSAodGFzaykgPT4ge1xyXG4gIC8vICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgaXNUYXNrU2VsZWN0ZWQgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpO1xyXG4gICAgcmV0dXJuIGlzU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBlZGl0VGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrTm9kZSA9IGdldFRhc2tOb2RlKHRhc2spO1xyXG5cclxuICAgIGlmICghdGFza05vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb25lJykpIHtcclxuICAgICAgY29uc3QgbGFiZWwgPSB0YXNrTm9kZS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICBjb25zdCBpbnB1dCA9IHRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5hbWVUYXNrID0gKHRhc2spID0+IHtcclxuICAgIGNvbnN0IHRhc2tOb2RlID0gZ2V0VGFza05vZGUodGFzayk7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSB0YXNrTm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgaW5wdXQudmFsdWUgPSB0YXNrLmdldE5hbWUoKTtcclxuICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgY29uc3QgbGFiZWwgPSB0YXNrTm9kZS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRhc2suZ2V0TmFtZSgpO1xyXG4gICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFya1Rhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza05vZGUgPSBnZXRUYXNrTm9kZSh0YXNrKTtcclxuICAgIHRhc2tOb2RlLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuXHJcbiAgICBjb25zdCBjaGVja01hcmsgPSB0YXNrTm9kZS5xdWVyeVNlbGVjdG9yKCcubWFyaycpO1xyXG4gICAgaWYgKCFjaGVja01hcmspIHtcclxuICAgICAgY29uc3QgbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICAgIG1hcmsuY2xhc3NOYW1lID0gJ21hcmsnO1xyXG4gICAgICB0YXNrTm9kZS5hcHBlbmQobWFyayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB1bm1hcmtUYXNrID0gKHRhc2spID0+IHtcclxuICAgIGNvbnN0IHRhc2tOb2RlID0gZ2V0VGFza05vZGUodGFzayk7XHJcbiAgICB0YXNrTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IHRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5tYXJrJyk7XHJcbiAgICBpZiAobWFyaykge1xyXG4gICAgICBtYXJrLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNob3dUYXNrTGlzdCxcclxuICAgIGVkaXRUYXNrLFxyXG4gICAgcmVuYW1lVGFzayxcclxuICAgIC8vIHNlbGVjdFRhc2ssXHJcbiAgICAvLyBkZXNlbGVjdFRhc2ssXHJcbiAgICBpc1Rhc2tTZWxlY3RlZCxcclxuICAgIG1hcmtUYXNrLFxyXG4gICAgdW5tYXJrVGFza1xyXG4gIH1cclxufSkoKTsiLCJpbXBvcnQgeyBUYXNrTGlzdCB9IGZyb20gXCIuL3Rhc2tsaXN0LmpzXCI7XHJcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IE1haW5Db250cm9sbGVyIH0gZnJvbSBcIi4vbWFpbkNvbnRyb2xsZXIuanNcIjtcclxuXHJcbmV4cG9ydCB7IFNpZGViYXJDb250cm9sbGVyIH1cclxuXHJcbmNvbnN0IFNpZGViYXJDb250cm9sbGVyID0gKCgpID0+IHtcclxuICAvLyBwcml2YXRlIHZhcmlhYmxlc1xyXG4gIGxldCBjb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgY29uc3Qgc2VsZWN0VGFza0xpc3QgPSAodGFza0xpc3QpID0+IHtcclxuICAgIGNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRUYXNrKG51bGwpO1xyXG4gICAgY29udHJvbGxlci5zZXRTZWxlY3RlZFRhc2tMaXN0KHRhc2tMaXN0KTtcclxuICAgIERpc3BsYXkuc2VsZWN0VGFza0xpc3QodGFza0xpc3QpO1xyXG4gICAgTWFpbkNvbnRyb2xsZXIuc2hvd1Rhc2tMaXN0KHRhc2tMaXN0KTtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBmdW5jdGlvbnMgXHJcbiAgY29uc3QgYWRkVGFza0xpc3RIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IFRhc2tMaXN0KCcnKTtcclxuICAgIGNvbnRyb2xsZXIuYWRkVGFza0xpc3QodGFza0xpc3QpO1xyXG4gICAgY29udHJvbGxlci5zZXRTZWxlY3RlZFRhc2tMaXN0KHRhc2tMaXN0KTtcclxuICAgIFxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaWNvbjogJ2xpc3QnLFxyXG4gICAgICBzaG93SW5wdXQ6IHRydWUsIFxyXG4gICAgICBzZWxlY3RUYXNrTGlzdEhhbmRsZXI6IHNlbGVjdFRhc2tMaXN0SGFuZGxlcixcclxuICAgICAgZWRpdFRhc2tMaXN0SGFuZGxlcjogZWRpdFRhc2tMaXN0SGFuZGxlcixcclxuICAgICAgc2F2ZVRhc2tMaXN0SGFuZGxlcjogc2F2ZVRhc2tMaXN0SGFuZGxlcixcclxuICAgICAgZGVsZXRlVGFza0xpc3RIYW5kbGVyOiBkZWxldGVUYXNrTGlzdEhhbmRsZXJcclxuICAgIH1cclxuICAgIERpc3BsYXkuYWRkVGFza0xpc3QodGFza0xpc3QsIG9wdGlvbnMpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWxlY3RUYXNrTGlzdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7ICAgIFxyXG4gICAgY29uc3QgdGFza0xpc3QgPSBjb250cm9sbGVyLmdldFRhc2tMaXN0QnlVdWlkKHRhcmdldC5pZCk7XHJcbiAgICBcclxuICAgIHNlbGVjdFRhc2tMaXN0KHRhc2tMaXN0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGVkaXRUYXNrTGlzdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldFV1aWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSBjb250cm9sbGVyLmdldFRhc2tMaXN0QnlVdWlkKHRhcmdldFV1aWQpO1xyXG4gICAgRGlzcGxheS5lZGl0VGFza0xpc3QodGFza0xpc3QpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2F2ZVRhc2tMaXN0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0RGlzcGxheSA9IGV2ZW50LnRhcmdldC5zdHlsZS5kaXNwbGF5O1xyXG4gICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IChldmVudC50eXBlID09PSAnZm9jdXNvdXQnICYmIHRhcmdldERpc3BsYXkgIT09ICdub25lJykpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgY29uc3QgdGFza0xpc3RVdWlkID0gdGFyZ2V0LnBhcmVudE5vZGUuaWQ7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB0YXNrTGlzdCA9IGNvbnRyb2xsZXIuZ2V0VGFza0xpc3RCeVV1aWQodGFza0xpc3RVdWlkKTtcclxuICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC52YWx1ZSA/IHRhcmdldC52YWx1ZSA6ICdVbnRpdGxlZCBsaXN0JztcclxuICAgICAgdGFza0xpc3Quc2V0TmFtZShuYW1lKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnRyb2xsZXIuc2F2ZVVzZXJUYXNrTGlzdHMoKTtcclxuXHJcbiAgICAgIERpc3BsYXkucmVuYW1lVGFza0xpc3QodGFza0xpc3QpO1xyXG4gICAgICBNYWluQ29udHJvbGxlci5zaG93VGFza0xpc3QodGFza0xpc3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlVGFza0xpc3RIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgdGFza0xpc3ROb2RlID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YXNrTGlzdFV1aWQgPSB0YXNrTGlzdE5vZGUuaWQ7XHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IGNvbnRyb2xsZXIuZ2V0VGFza0xpc3RCeVV1aWQodGFza0xpc3RVdWlkKTtcclxuXHJcbiAgICBjb250cm9sbGVyLmRlbGV0ZVRhc2tMaXN0KHRhc2tMaXN0KTtcclxuICAgIERpc3BsYXkuZGVsZXRlVGFza0xpc3QodGFza0xpc3QpO1xyXG4gICAgc2VsZWN0VGFza0xpc3QoY29udHJvbGxlci5nZXRTZWxlY3RlZFRhc2tMaXN0KCkpO1xyXG5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgLy8gRGlzcGxheS5kZWxldGVUYXNrTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5pdGlhbGl6ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgY29udHJvbGxlciA9IHN0YXRlO1xyXG4gICAgTWFpbkNvbnRyb2xsZXIuaW5pdGlhbGl6ZShzdGF0ZSk7XHJcbiAgICBzZWxlY3RUYXNrTGlzdChjb250cm9sbGVyLmdldFNlbGVjdGVkVGFza0xpc3QoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdGlhbGl6ZSxcclxuICAgIGFkZFRhc2tMaXN0SGFuZGxlcixcclxuICAgIHNlbGVjdFRhc2tMaXN0SGFuZGxlcixcclxuICAgIGVkaXRUYXNrTGlzdEhhbmRsZXIsXHJcbiAgICBzYXZlVGFza0xpc3RIYW5kbGVyLFxyXG4gICAgZGVsZXRlVGFza0xpc3RIYW5kbGVyXHJcbiAgfVxyXG59KSgpOyIsImV4cG9ydCB7IFNpZGViYXJEaXNwbGF5IH07XHJcblxyXG5jb25zdCBTaWRlYmFyRGlzcGxheSA9ICgoKSA9PiB7XHJcbiAgLy8gcHJpdmF0ZSBmdW5jdGlvbnNcclxuICBjb25zdCBidWlsZE5ld0xpc3RBY3Rpb24gPSAob3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XHJcbiAgICBpY29uLnNyYyA9IHJlcXVpcmUoYC4uL2Fzc2V0cy9hZGQuc3ZnYCk7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnTmV3IGxpc3QnO1xyXG5cclxuICAgIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBhY3Rpb24uY2xhc3NOYW1lID0gJ2FjdGlvbic7XHJcbiAgICBhY3Rpb24uaWQgPSAnYWRkLWxpc3QnO1xyXG4gICAgYWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3B0aW9ucy5hZGRUYXNrTGlzdEhhbmRsZXIpXHJcbiAgICBhY3Rpb24uYXBwZW5kKGljb24sIG5hbWUpO1xyXG5cclxuICAgIHJldHVybiBhY3Rpb247XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb2N1c0lucHV0ID0gKG5vZGUpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdFRhc2tMaXN0ID0gKHRhc2tMaXN0KSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cyAuc2VsZWN0ZWQnKTtcclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICBzZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCB0YXNrTGlzdE5vZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdHMgLmxpc3QnKSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tMaXN0Tm9kZSA9IHRhc2tMaXN0Tm9kZXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRhc2tMaXN0LmdldFV1aWQoKSk7XHJcbiAgICB0YXNrTGlzdE5vZGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1aWxkVGFza0xpc3QgPSAodGFza0xpc3QsIG9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGljb24uY2xhc3NOYW1lID0gJ2ljb24nO1xyXG4gICAgaWNvbi5zcmMgPSByZXF1aXJlKGAuLi9hc3NldHMvJHtvcHRpb25zLmljb259LnN2Z2ApO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBuYW1lLmNsYXNzTmFtZSA9ICdsYWJlbCc7XHJcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdGFza0xpc3QuZ2V0TmFtZSgpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuYW1lSW5wdXQuY2xhc3NOYW1lID0gJ2xpc3QnO1xyXG4gICAgbmFtZUlucHV0LnZhbHVlID0gdGFza0xpc3QuZ2V0TmFtZSgpO1xyXG4gICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1VudGl0bGVkIGxpc3QnO1xyXG4gICAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb3B0aW9ucy5zYXZlVGFza0xpc3RIYW5kbGVyKTtcclxuICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG9wdGlvbnMuc2F2ZVRhc2tMaXN0SGFuZGxlcik7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJywgJ2xpZ2h0ZW4nKTtcclxuICAgIGRlbGV0ZUljb24uc3JjID0gcmVxdWlyZShgLi4vYXNzZXRzL2RlbGV0ZS5zdmdgKTtcclxuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25zLmRlbGV0ZVRhc2tMaXN0SGFuZGxlcik7XHJcblxyXG4gICAgaWYob3B0aW9ucy5zaG93SW5wdXQpIHtcclxuICAgICAgbmFtZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnc3Bhbic7XHJcbiAgICAgIG5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hbWVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBuYW1lLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpc3QuY2xhc3NOYW1lID0gJ2xpc3QnO1xyXG4gICAgbGlzdC5pZCA9IHRhc2tMaXN0LmdldFV1aWQoKTtcclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25zLnNlbGVjdFRhc2tMaXN0SGFuZGxlcik7XHJcbiAgICBsaXN0LmFwcGVuZChpY29uLCBuYW1lKTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMucmVhZE9ubHkpIHtcclxuICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9wdGlvbnMuZWRpdFRhc2tMaXN0SGFuZGxlcik7XHJcbiAgICAgIGxpc3QuYXBwZW5kKG5hbWVJbnB1dCwgZGVsZXRlSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgZnVuY3Rpb25zXHJcbiAgY29uc3QgYnVpbGRTaWRlYmFyID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUby1kbyBsaXN0JztcclxuXHJcbiAgICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBsaXN0cy5jbGFzc05hbWUgPSAnbGlzdHMnO1xyXG5cclxuICAgIGNvbnN0IG5ld0xpc3RBY3Rpb24gPSBidWlsZE5ld0xpc3RBY3Rpb24ob3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBhY3Rpb25zLmNsYXNzTmFtZSA9ICdhY3Rpb25zJztcclxuICAgIGFjdGlvbnMuYXBwZW5kKG5ld0xpc3RBY3Rpb24pO1xyXG4gICAgXHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZpZ2F0aW9uLmNsYXNzTmFtZSA9ICduYXZpZ2F0aW9uJztcclxuICAgIG5hdmlnYXRpb24uYXBwZW5kKHRpdGxlLCBsaXN0cywgYWN0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGJvZHkucHJlcGVuZChuYXZpZ2F0aW9uKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tMaXN0ID0gKHRhc2tMaXN0LCBvcHRpb25zKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrTGlzdE5vZGUgPSBidWlsZFRhc2tMaXN0KHRhc2tMaXN0LCBvcHRpb25zKTtcclxuICAgIFxyXG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbiAubGlzdHMnKTtcclxuICAgIGxpc3RzLmFwcGVuZCh0YXNrTGlzdE5vZGUpO1xyXG4gICAgXHJcbiAgICBpZiAob3B0aW9ucy5zaG93SW5wdXQpIHtcclxuICAgICAgc2VsZWN0VGFza0xpc3QodGFza0xpc3QpO1xyXG4gICAgICBmb2N1c0lucHV0KHRhc2tMaXN0Tm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gICAgY29uc3QgdGFza0xpc3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbiAubGlzdCcpKTtcclxuICAgIGNvbnN0IHRhc2tMaXN0Tm9kZSA9IHRhc2tMaXN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGFza0xpc3QuZ2V0VXVpZCgpKTtcclxuICAgIGNvbnNvbGUubG9nKCd5b3MnKTtcclxuICAgIHRhc2tMaXN0Tm9kZS5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGVkaXRUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gICAgY29uc3QgdGFza0xpc3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbiAubGlzdCcpKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTGlzdE5vZGUgPSB0YXNrTGlzdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRhc2tMaXN0LmdldFV1aWQoKSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxhYmVsID0gdGFza0xpc3ROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSB0YXNrTGlzdE5vZGUucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICBmb2N1c0lucHV0KHRhc2tMaXN0Tm9kZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5hbWVUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gICAgY29uc3QgdGFza0xpc3ROb2RlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb24gLmxpc3QnKSk7XHJcblxyXG4gICAgY29uc3QgdGFza0xpc3ROb2RlID0gdGFza0xpc3ROb2Rlcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGFza0xpc3QuZ2V0VXVpZCgpKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IHRhc2tMaXN0Tm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgaW5wdXQudmFsdWUgPSB0YXNrTGlzdC5nZXROYW1lKCk7XHJcbiAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gdGFza0xpc3ROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGFza0xpc3QuZ2V0TmFtZSgpO1xyXG4gICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2VsZWN0ZWRUYXNrTGlzdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC5zZWxlY3RlZCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGJ1aWxkU2lkZWJhcixcclxuICAgIGFkZFRhc2tMaXN0LFxyXG4gICAgZGVsZXRlVGFza0xpc3QsXHJcbiAgICBlZGl0VGFza0xpc3QsXHJcbiAgICByZW5hbWVUYXNrTGlzdCxcclxuICAgIHNlbGVjdFRhc2tMaXN0LFxyXG4gICAgZ2V0U2VsZWN0ZWRUYXNrTGlzdFxyXG4gIH1cclxufSkoKTsiLCJpbXBvcnQge3Y0IGFzIFV1aWR9IGZyb20gJ3V1aWQnO1xyXG5cclxuY29uc3QgVGFzayA9ICh2YWx1ZSkgPT4ge1xyXG4gIGxldCB1dWlkID0gVXVpZCgpO1xyXG4gIGxldCBjcmVhdGVkID0gbmV3IERhdGUoKTtcclxuICBsZXQgbmFtZSA9IHZhbHVlO1xyXG4gIGxldCB1cGRhdGVkID0gbmV3IERhdGUoKTtcclxuICBsZXQgZHVlRGF0ZSA9IG51bGw7XHJcbiAgbGV0IG5vdGVzID0gbnVsbDtcclxuICBsZXQgaXNJbXBvcnRhbnQgPSBmYWxzZTtcclxuICBsZXQgaXNEb25lID0gZmFsc2U7XHJcbiAgbGV0IHRhc2tMaXN0VXVpZCA9IG51bGw7XHJcblxyXG4gIC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuICAvLyBnZXR0ZXJzXHJcbiAgY29uc3QgZ2V0VXVpZCA9ICgpID0+IHV1aWQ7XHJcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgY29uc3QgZ2V0SXNEb25lID0gKCkgPT4gaXNEb25lO1xyXG4gIGNvbnN0IGdldENyZWF0ZWQgPSAoKSA9PiBjcmVhdGVkO1xyXG4gIGNvbnN0IGdldFVwZGF0ZWQgPSAoKSA9PiB1cGRhdGVkO1xyXG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xyXG4gIGNvbnN0IGdldElzSW1wb3J0YW50ID0gKCkgPT4gaXNJbXBvcnRhbnQ7XHJcbiAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiBub3RlcztcclxuICBjb25zdCBnZXRUYXNrTGlzdFV1aWQgPSAoKSA9PiB0YXNrTGlzdFV1aWQ7XHJcblxyXG4gIC8vIHNldHRlcnNcclxuICBjb25zdCBzZXROYW1lID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRVcGRhdGVkKCk7XHJcbiAgICBuYW1lID0gdmFsdWU7XHJcbiAgICByZXR1cm4gbmFtZTtcclxuICB9O1xyXG4gIGNvbnN0IHNldElzRG9uZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHNldFVwZGF0ZWQoKTtcclxuICAgICAgaXNEb25lID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiBpc0RvbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHNldElzSW1wb3J0YW50ID0gKHZhbHVlICk9PiB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgc2V0VXBkYXRlZCgpO1xyXG4gICAgICBpc0ltcG9ydGFudCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gaXNJbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHNldE5vdGVzID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRVcGRhdGVkKCk7XHJcbiAgICBub3RlcyA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIG5vdGVzO1xyXG4gIH1cclxuICBjb25zdCBzZXREdWVEYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHNldFVwZGF0ZWQoKTtcclxuICAgICAgZHVlRGF0ZSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gZHVlRGF0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgc2V0VGFza0xpc3RVdWlkID0gKHZhbHVlKSA9PiB7XHJcbiAgICB0YXNrTGlzdFV1aWQgPSB2YWx1ZTtcclxuICB9XHJcbiAgY29uc3Qgc2V0VXBkYXRlZCA9IChkYXRlKSA9PiB7XHJcbiAgICB1cGRhdGVkID0gZGF0ZSA/IGRhdGUgOiBuZXcgRGF0ZSgpO1xyXG4gIH1cclxuICBjb25zdCBzZXRDcmVhdGVkID0gKGRhdGUpID0+IHtcclxuICAgIGNyZWF0ZWQgPSBkYXRlO1xyXG4gIH1cclxuICBjb25zdCBzZXRVdWlkID0gKHZhbHVlKSA9PiB7XHJcbiAgICB1dWlkID0gdmFsdWU7XHJcbiAgfVxyXG4gIGNvbnN0IHRvSlNPTiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHV1aWQsXHJcbiAgICAgIGNyZWF0ZWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHVwZGF0ZWQsXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIG5vdGVzLFxyXG4gICAgICBpc0ltcG9ydGFudCxcclxuICAgICAgaXNEb25lLFxyXG4gICAgICB0YXNrTGlzdFV1aWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRVdWlkLFxyXG4gICAgZ2V0TmFtZSxcclxuICAgIGdldElzRG9uZSxcclxuICAgIGdldENyZWF0ZWQsXHJcbiAgICBnZXRVcGRhdGVkLFxyXG4gICAgZ2V0RHVlRGF0ZSxcclxuICAgIGdldElzSW1wb3J0YW50LFxyXG4gICAgZ2V0Tm90ZXMsXHJcbiAgICBnZXRUYXNrTGlzdFV1aWQsXHJcbiAgICBzZXROYW1lLFxyXG4gICAgc2V0SXNEb25lLFxyXG4gICAgc2V0Tm90ZXMsXHJcbiAgICBzZXRJc0ltcG9ydGFudCxcclxuICAgIHNldER1ZURhdGUsXHJcbiAgICBzZXRUYXNrTGlzdFV1aWQsXHJcbiAgICBzZXRVcGRhdGVkLFxyXG4gICAgc2V0Q3JlYXRlZCxcclxuICAgIHNldFV1aWQsXHJcbiAgICB0b0pTT05cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRhc2sgfTsiLCJpbXBvcnQge3Y0IGFzIFV1aWR9IGZyb20gJ3V1aWQnO1xyXG5cclxuY29uc3QgVGFza0xpc3QgPSAodmFsdWUpID0+IHtcclxuICAvLyBwcml2YXRlIHZhcmlhYmxlc1xyXG4gIGxldCB1dWlkID0gVXVpZCgpO1xyXG4gIGxldCBjcmVhdGVkID0gbmV3IERhdGUoKTtcclxuICBsZXQgdGFza3MgPSBbXTtcclxuICBsZXQgbmFtZSA9IHZhbHVlO1xyXG4gIGxldCB1cGRhdGVkID0gbmV3IERhdGUoKTtcclxuICBsZXQgdGFza0xvYWRlciA9IG51bGw7XHJcblxyXG4gIC8vIHByaXZhdGUgZnVuY3Rpb25zXHJcbiAgXHJcbiAgY29uc3QgaXNUYXNrVXVpZEVxdWFsID0gKHRhc2sxLCB0YXNrMikgPT4ge1xyXG4gICAgcmV0dXJuIHRhc2sxLmdldFV1aWQoKSA9PT0gdGFzazIuZ2V0VXVpZCgpO1xyXG4gIH1cclxuICBjb25zdCBnZXRUYXNrSW5kZXggPSAodGFzaykgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gdGFza3MuZmluZEluZGV4KFxyXG4gICAgICBpdGVtID0+IGlzVGFza1V1aWRFcXVhbChpdGVtLCB0YXNrKVxyXG4gICAgKTtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuICAvLyBnZXR0ZXJzXHJcbiAgY29uc3QgZ2V0VXVpZCA9ICgpID0+IHV1aWQ7XHJcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgY29uc3QgZ2V0Q3JlYXRlZCA9ICgpID0+IGNyZWF0ZWQ7XHJcbiAgY29uc3QgZ2V0VXBkYXRlZCA9ICgpID0+IHVwZGF0ZWQ7XHJcbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrcztcclxuICBjb25zdCBnZXRUYXNrQnlVdWlkID0gKHV1aWQpID0+IHtcclxuICAgIHJldHVybiB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay5nZXRVdWlkKCkgPT09IHV1aWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gc2V0dGVyc1xyXG4gIGNvbnN0IHNldE5hbWUgPSAodmFsdWUpID0+IHtcclxuICAgIG5hbWUgPSB2YWx1ZTtcclxuICAgIHNldFVwZGF0ZWQoKTtcclxuICAgIHJldHVybiBuYW1lO1xyXG4gIH0gXHJcbiAgY29uc3QgYWRkVGFzayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuc2V0VGFza0xpc3RVdWlkKHV1aWQpO1xyXG4gICAgdGFza3MucHVzaCh2YWx1ZSk7XHJcbiAgICBzZXRVcGRhdGVkKCk7XHJcbiAgICByZXR1cm4gdGFza3M7XHJcbiAgfVxyXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAodmFsdWUpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGdldFRhc2tJbmRleCh2YWx1ZSk7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICBzZXRVcGRhdGVkKCk7XHJcbiAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFza3M7XHJcbiAgfVxyXG4gIGNvbnN0IHNldFRhc2tMb2FkZXIgPSAobG9hZGVyKSA9PiB7XHJcbiAgICB0YXNrTG9hZGVyID0gbG9hZGVyO1xyXG4gIH1cclxuICBjb25zdCBsb2FkVGFza3MgPSAoKSA9PiB7XHJcbiAgICBpZiAodGFza0xvYWRlcikge1xyXG4gICAgICB0YXNrcyA9IHRhc2tMb2FkZXIoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgc2V0VXBkYXRlZCA9IChkYXRlKSA9PiB7XHJcbiAgICB1cGRhdGVkID0gZGF0ZSA/IGRhdGUgOiBuZXcgRGF0ZSgpO1xyXG4gIH1cclxuICBjb25zdCBzZXRDcmVhdGVkID0gKGRhdGUpID0+IHtcclxuICAgIGNyZWF0ZWQgPSBkYXRlXHJcbiAgfVxyXG4gIGNvbnN0IHNldFV1aWQgPSAodmFsdWUpID0+IHtcclxuICAgIHV1aWQgPSB2YWx1ZTtcclxuICB9XHJcbiAgY29uc3QgdG9KU09OID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXVpZCxcclxuICAgICAgY3JlYXRlZCxcclxuICAgICAgdGFza3M6IHRhc2tzLm1hcCh0YXNrID0+IHRhc2sudG9KU09OKCkpLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICB1cGRhdGVkXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0VXVpZCxcclxuICAgIGdldE5hbWUsXHJcbiAgICBnZXRDcmVhdGVkLFxyXG4gICAgZ2V0VXBkYXRlZCxcclxuICAgIGdldFRhc2tzLFxyXG4gICAgZ2V0VGFza0J5VXVpZCxcclxuICAgIHNldE5hbWUsXHJcbiAgICBhZGRUYXNrLFxyXG4gICAgZGVsZXRlVGFzayxcclxuICAgIHNldFRhc2tMb2FkZXIsXHJcbiAgICBzZXRDcmVhdGVkLFxyXG4gICAgc2V0VXBkYXRlZCxcclxuICAgIHNldFV1aWQsXHJcbiAgICBsb2FkVGFza3MsXHJcbiAgICB0b0pTT05cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRhc2tMaXN0IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9