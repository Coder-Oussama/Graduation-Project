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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery/dist/jquery.min */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nconst email = document.getElementById(\"exampleInputEmail1\");\n\nconst password = document.getElementById(\"exampleInputPassword1\");\n\nconst submitButton = document.getElementById(\"buttonSubmit\");\n\n// const users = fetch(\"server-herokuapp.com/users\").then(res => res.json())\n\nconst users = [\n  {\n    email: \"moumnioussama96@gmail.com\",\n    password: \"oussama\",\n  },\n  {\n    email: \"scdmr@gmail.com\",\n    password: \"tayeb\",\n  },\n  {\n    email: \"mail3@mail.com\",\n    password: \"123\",\n  },\n];\n\n$(document).ready(function () {\n  // Login function\n\n  $(\"#buttonSubmit\").on(\"click\", function (e) {\n    e.preventDefault();\n    for (let index = 0; index < users.length; index++) {\n      const user = users[index];\n      if (password.value === user.password && email.value === user.email) {\n        // console.log(\"success user is ... \",user)\n\n        window.location.href = \"./dashboard.html\";\n\n        return;\n      }\n    }\n    alert(\"User not found\");\n  });\n\n  // Login function End\n\n  $(\".pass_show\").append('<span class=\"ptxt\">Show</span>');\n\n  \n});\n\n$(document).on(\"click\", \".dropdown-toggle\", function () {\n  $(\".dropdown-toggle\").dropdown();\n});\n\n$(document).on(\"click\", \".pass_show .ptxt\", function () {\n  $(this).text($(this).text() == \"Show\" ? \"Hide\" : \"Show\");\n\n  $(this)\n    .prev()\n    .attr(\"type\", function (index, attr) {\n      return attr == \"password\" ? \"text\" : \"password\";\n    });\n});\n\nconst StudentGroups = [\n  {\n    \n  }\n]\nconst ProjectData = [\n  {\n    projectName:\n      \"Conception et réalisation d'un site web <br> dynamique pour la promotion au grade <br> de professeur de l’université\",\n    ProfResp: \"MR.BENATIALLAH DJELLOUL\",\n  },\n  {\n    projectName:\n      \"Conception et réalisation d'une application <br> mobile pour la recherche d'emploi.\",\n    ProfResp: \"MR. KABOU SALAHEDDINE \",\n  },\n  {\n    projectName: \"Système de gestion d’e-vaccinations.\",\n    ProfResp: \"MR. CHOUGUEUR DJILALI\",\n  },\n  {\n    projectName:\n      \"Utilisation de l'algorithme KNN pour <br> la classification des images satellitaires.\",\n    ProfResp: \"MR. RABHI SEDIK\",\n  },\n  {\n    projectName:\n      \"Simulation d’un protocole de routage <br> dédié au RCSF à l'aide de NS3\",\n    ProfResp: \"MR. KADDI MOHAMMED \",\n  },\n  {\n    projectName:\n      \" Développement d'une application Android <br> pour la reconnaissance de caractère Arabe\",\n    ProfResp: \"MR. MAMOUNI EL MAMOUNE\",\n  },\n];\n\n$(document).ready(function () {\nlet C = 0;\n  \n  function ProjectTemplate(project) {\n    C++;\n    return `\n    <li id=\"projectList${C}\" class=\"projectList d-flex justify-content-between  px-4 mb-2\">\n               <p id=\"ProjectName${C}\" class=\" ml-2  my-auto \">\n                 ${project.projectName}\n               </p>\n               <p id=\"ProfRes${C}\" class=\"my-auto\">\n               ${project.ProfResp}\n               </p>\n               <div id=\"SelectBtn${C}\" class=\"SelectBtn\">\n                 <a href=\"#\" class=\"element\">\n                   <i class=\"bi bi-file-plus-fill addIcon\"></i>\n                 </a>\n               </div>\n             </li>\n    `;\n    \n  }\n\n  $(\"#UL1\").html(`\n  ${ProjectData.map(ProjectTemplate).join(\"\")}\n  `);\n\n  // Selection projects function\n  $(\"#SelectBtn1\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList1\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn\").replaceWith(\n      $(` <div id=\"#SelectBtn\" class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n        </div>`)\n    );\n  });\n\n  $(\"#SelectBtn\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn\").replaceWith(\n      $(` <div id=\"#SelectBtn\" class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n        </div>`)\n    );\n  });\n\n  $(\"#SelectBtn\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn\").replaceWith(\n      $(` <div id=\"#SelectBtn\" class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n        </div>`)\n    );\n  });\n\n  $(\"#SelectBtn\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn\").replaceWith(\n      $(` <div id=\"#SelectBtn\" class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n        </div>`)\n    );\n  });\n\n  $(\"#SelectBtn5\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList5\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn5\").replaceWith(\n      $(` <div id=\"#SelectBtn5\" class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n        </div>`)\n    );\n  });\n\n  $(\"#SelectBtn6\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#projectList6\").appendTo($(\"#UL2\"));\n    $(\"#SelectBtn6\").replaceWith(\n      $(` <div id=\"#SelectBtn6\" class=\"SelectBtn \">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n        </div>`)\n    );\n  });\n\n  //End of Selection projects function\n});\n\n//# sourceURL=webpack://graduation/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("62a1020e04340129ea3d")
/******/ })();
/******/ 
/******/ }
);