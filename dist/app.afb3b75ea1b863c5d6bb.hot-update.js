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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery/dist/jquery.min */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nconst email = document.getElementById(\"exampleInputEmail1\");\n\nconst password = document.getElementById(\"exampleInputPassword1\");\n\nconst submitButton = document.getElementById(\"buttonSubmit\");\n\nconst url = \"https://graduate-projects.herokuapp.com\";\n\n// const users = fetch(\"server-herokuapp.com/users\").then(res => res.json())\n\nconst users = [\n  {\n    email: \"moumnioussama96@gmail.com\",\n    password: \"oussama\",\n  },\n  {\n    email: \"scdmr@gmail.com\",\n    password: \"tayeb\",\n  },\n  {\n    email: \"mail3@mail.com\",\n    password: \"123\",\n  },\n];\n\nconst login = async (email, password) => {\n  console.log(password, email);\n\n  const user = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`${url}/students/login`, {\n    email,\n    password,\n  });\n  console.log(user);\n\n\n\n  return user.data\n  // localStorage.getItem.user\n\n};\n\nconst newStudentName = document.getElementById(\"newStudentName\");\nconst NewStudentEmail = document.getElementById(\"newStudentEmail\");\nconst NewStudentMatricule = document.getElementById(\"newStudentMatricule\");\n\n$(\"#sidebar-user\").ready(() => console.log(\"on element\"));\n\n$(document).ready(function () {\n  // Login function\n  $(\"#buttonSubmit\").on(\"click\", async function (e) {\n    e.preventDefault();\n    const password = $(\"#inputPassword1\").val();\n\n    const email = $(\"#inputEmail1\").val();\n    console.log(password, email);\n    if (!password || !password.length) alert('enter a password')\n    if (!email || !email.length) alert(\"enter a email\");\n    \n    const user = await login(email, password);\n\n\n    if (user) {\n      window.location.href = \"./dashboard.html\"\n      console.log(user)\n      localStorage.setItem(\"user\", JSON.stringify(user));\n    }\n    else alert(\"User not found\");\n    \n  });\n\n  // Login function End\n\n  $(\"#AddStudent\").on(\"click\", function (e) {\n    e.preventDefault();\n    $(\"#students\").append(`\n    <tr>\n                <th scope=\"row\">4</th>\n                <td>${newStudentName.value}</td>\n                <td>${NewStudentMatricule.value}</td>\n                <td><address>${NewStudentEmail.value}</address></td>\n                <td>\n                  <button\n                    class=\"btn btn-warning btn-link text-center\"\n                    type=\"button\"  >\n                    <i class=\"bi bi-pencil-square\"></i>\n                  </button>\n                  <button class=\"btn text-center btn-danger\" type=\"button\">\n                    <i class=\"bi bi-trash-fill\"></i>\n                  </button>\n                </td>\n              </tr>\n    `);\n  });\n\n  $(\".pass_show\").append('<span class=\"ptxt\">Show</span>');\n\n  let C = 0;\n\n  function ProjectTemplate(project) {\n    C++;\n    return `\n    <li  id=\"projectList_${C}\" class=\"projectList d-flex justify-content-between  px-4 mb-2\">\n               <p id=\"ProjectName${C}\" class=\" ml-2  my-auto \">\n                 ${project.projectName}\n               </p>\n               <p id=\"ProfRes${C}\" class=\"my-auto\">\n               ${project.ProfResp}\n               </p>\n               <div id=\"SelectBtn_${C}\" class=\"SelectBtn\">\n                 <a href=\"#\" class=\"element\">\n                   <i class=\"bi bi-file-plus-fill addIcon\"></i>\n                 </a>\n               </div>\n             </li>\n    `;\n  }\n\n  $(\"#UL1\").html(`\n  ${ProjectData.map(ProjectTemplate).join(\"\")}\n  `);\n\n  // Selection projects function\n  $(\".SelectBtn\").on(\"click\", function (e) {\n    e.preventDefault();\n    console.log(\"id ... \", e.currentTarget.id.split(\"_\"));\n    const id = e.currentTarget.id.split(\"_\")[1];\n    console.log($(\"#UL2\").children().length);\n    const childCount = $(\"#UL2\").children().length + 1;\n    $(`#projectList_${id}`).prepend(\n      $(`<p class=\" ml-2  my-auto \">${childCount}</p>`)\n    );\n    $(`#projectList_${id}`).appendTo($(\"#UL2\"));\n    $(`#${e.currentTarget.id}`).replaceWith(\n      $(` <div id=\"#SelectBtn_${id}\" class=\"SelectBtn\">\n                 <a href=\"#\" >\n                   <i class=\"bi bi-trash3-fill btnDel\"></i>\n                 </a>\n        </div>`)\n    );\n  });\n});\n\n$(document).on(\"click\", \".dropdown-toggle\", function () {\n  $(\".dropdown-toggle\").dropdown();\n});\n\n$(document).on(\"click\", \".pass_show .ptxt\", function () {\n  $(this).text($(this).text() == \"Show\" ? \"Hide\" : \"Show\");\n\n  $(this)\n    .prev()\n    .attr(\"type\", function (index, attr) {\n      return attr == \"password\" ? \"text\" : \"password\";\n    });\n});\n\nconst ProjectData = [\n  {\n    projectName:\n      \"Conception et réalisation d'un site web <br> dynamique pour la promotion au grade <br> de professeur de l’université\",\n    ProfResp: \"MR.BENATIALLAH DJELLOUL\",\n  },\n  {\n    projectName:\n      \"Conception et réalisation d'une application <br> mobile pour la recherche d'emploi.\",\n    ProfResp: \"MR. KABOU SALAHEDDINE \",\n  },\n  {\n    projectName: \"Système de gestion d’e-vaccinations.\",\n    ProfResp: \"MR. CHOUGUEUR DJILALI\",\n  },\n  {\n    projectName:\n      \"Utilisation de l'algorithme KNN pour <br> la classification des images satellitaires.\",\n    ProfResp: \"MR. RABHI SEDIK\",\n  },\n  {\n    projectName:\n      \"Simulation d’un protocole de routage <br> dédié au RCSF à l'aide de NS3\",\n    ProfResp: \"MR. KADDI MOHAMMED \",\n  },\n  {\n    projectName:\n      \" Développement d'une application Android <br> pour la reconnaissance de caractère Arabe\",\n    ProfResp: \"MR. MAMOUNI EL MAMOUNE\",\n  },\n];\n\nfetch(\"https://graduate-projects.herokuapp.com/students\", {\n  method: \"GET\",\n})\n  .then((response) => {\n    return response.json();\n  })\n  .then((data) => {\n    console.log(data);\n    $(document).ready(function () {\n      let A = 0;\n      function StudentTemplate(student) {\n        A++;\n        return `\n             <tr id=\"${A}\">\n                <th scope=\"row\">${A}</th>\n                <td contenteditable=\"true\">${student.name}</td>\n                <td contenteditable=\"true\">${student.matricule}</td>\n                <td contenteditable=\"true\"><address>${student.email}</address></td>\n                <td>\n                  <button\n                    class=\"btn btn-warning btn-link text-center\"\n                    type=\"button\"  >\n                    <i class=\"bi bi-pencil-square\"></i>\n                  </button>\n                  <button id=\"DelStudent${A}\" class=\"btn  text-center btn-danger\" type=\"sub\">\n                    <i class=\"bi bi-trash-fill\"></i>\n                  </button>\n                </td>\n              </tr>\n    `;\n      }\n      $(\"#TableData\").html(`\n  ${data.map(StudentTemplate).join(\"\")}\n  `);\n\n      $(\"#DelStudent\" + { A }).on(\"click\", function () {\n        $(\"#\" + { A }).remove();\n      });\n    });\n  });\n\nfetch(\"https://graduate-projects.herokuapp.com/professors\", {\n  method: \"GET\",\n})\n  .then((response) => {\n    return response.json();\n  })\n  .then((data) => {\n    console.log(data);\n    $(document).ready(function () {\n      let B = 0;\n      function ProfTemplate(prof) {\n        B++;\n        return `\n             <tr id=\"${B}\">\n                <th scope=\"row\">${B}</th>\n                <td contenteditable=\"true\">${prof.name}</td>\n                <td contenteditable=\"true\">${prof.number}</td>\n                <td contenteditable=\"true\"><address>${prof.email}</address></td>\n                <td>\n                  <button\n                    class=\"btn btn-warning btn-link text-center\"\n                    type=\"button\"  >\n                    <i class=\"bi bi-pencil-square\"></i>\n                  </button>\n                  <button id=\"DelStudent${B}\" class=\"btn  text-center btn-danger\" type=\"sub\">\n                    <i class=\"bi bi-trash-fill\"></i>\n                  </button>\n                </td>\n              </tr>\n    `;\n      }\n      $(\"#ProfData\").html(`\n  ${data.map(ProfTemplate).join(\"\")}\n  `);\n    });\n  });\n\n\n//# sourceURL=webpack://graduation/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b19ed66d5b899d932c75")
/******/ })();
/******/ 
/******/ }
);