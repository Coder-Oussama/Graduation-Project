"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdategraduation"]("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery/dist/jquery.min */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nconst email = document.getElementById(\"exampleInputEmail1\");\n\nconst password = document.getElementById(\"exampleInputPassword1\");\n\nconst submitButton = document.getElementById(\"buttonSubmit\");\n\n// const users = fetch(\"server-herokuapp.com/users\").then(res => res.json())\n\nconst users = [\n  {\n    email: \"moumnioussama96@gmail.com\",\n    password: \"oussama\",\n  },\n  {\n    email: \"scdmr@gmail.com\",\n    password: \"tayeb\",\n  },\n  {\n    email: \"mail3@mail.com\",\n    password: \"123\",\n  },\n];\n\n$(document).ready(function () {\n  // Login function\n\n  $(\"#buttonSubmit\").on(\"click\", function (e) {\n    e.preventDefault();\n    for (let index = 0; index < users.length; index++) {\n      const user = users[index];\n      if (password.value === user.password && email.value === user.email) {\n        // console.log(\"success user is ... \",user)\n\n        window.location.href = \"./dashboard.html\";\n\n        return;\n      }\n    }\n    alert(\"User not found\");\n  });\n\n  // Login function End\n\n  $(\".pass_show\").append('<span class=\"ptxt\">Show</span>');\n\n  // Selection projects function\n\n  $(\"#SelectBtn1\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList1\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn1\").replaceWith(\n      $(` <div class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n               </div>`)\n    );\n  });\n\n  $(\"#SelectBtn2\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList2\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn2\").replaceWith(\n      $(` <div class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n               </div>`)\n    );\n  });\n\n  $(\"#SelectBtn3\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList3\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn3\").replaceWith(\n      $(` <div class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n               </div>`)\n    );\n  });\n\n  $(\"#SelectBtn4\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList4\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn4\").replaceWith(\n      $(` <div class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n               </div>`)\n    );\n  });\n\n  $(\"#SelectBtn5\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList5\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn5\").replaceWith(\n      $(` <div class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n               </div>`)\n    );\n  });\n\n  $(\"#SelectBtn6\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList6\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn6\").replaceWith(\n      $(` <div class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n               </div>`)\n    );\n  });\n\n  //End of Selection projects function\n});\n\n$(document).on(\"click\", \".dropdown-toggle\", function () {\n  $(\".dropdown-toggle\").dropdown();\n});\n\n$(document).on(\"click\", \".pass_show .ptxt\", function () {\n  $(this).text($(this).text() == \"Show\" ? \"Hide\" : \"Show\");\n\n  $(this)\n    .prev()\n    .attr(\"type\", function (index, attr) {\n      return attr == \"password\" ? \"text\" : \"password\";\n    });\n});\n\n\nconst ProjectData = [\n  {\n    projectName:\n      \"Conception et réalisation d'un site web <br> dynamique pour la promotion au grade <br> de professeur de l’université\",\n    ProfResp: \"MR.BENATIALLAH DJELLOUL\",\n    B: \"37001910\",\n    photo: \"./images/oussama.JPG\",\n  },\n  {\n    name: \"Sidamor Tayeb\",\n    Email: \"tsdmr@gmail.com\",\n    Matricule: \"37001836\",\n    photo: \"./images/Tayeb.jpg\",\n  },\n  {\n    name: \"Laksaci Taher\",\n    Email: \"Taherlaks@gmail.com\",\n    Matricule: \"37002045\",\n    photo: \"./images/taher.jpg\",\n  },\n];\n\n//# sourceURL=webpack://graduation/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ea08a49cbc4cbb5540b")
/******/ })();
/******/ 
/******/ }
);