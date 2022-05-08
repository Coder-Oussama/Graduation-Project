import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min";
import "flatpickr/dist/flatpickr.css";
import axios from "axios";

import "bootstrap/dist/js/bootstrap.min.js";
import "flatpickr/dist/flatpickr.js";
import flatpickr from "flatpickr";

const email = document.getElementById("exampleInputEmail1");

const password = document.getElementById("exampleInputPassword1");

const submitButton = document.getElementById("buttonSubmit");

const url = "https://graduate-projects.herokuapp.com";

const url1 = "http://localhost:3000";

// const users = fetch("server-herokuapp.com/users").then(res => res.json())

const login = async (email, password) => {
  console.log(password, email);

  const user = await axios.post(`${url}`, {
    email,
    password,
  });
  console.log(user);

  return user.data;
  // localStorage.getItem.user
};

const newStudentName = document.getElementById("newStudentName");
const NewStudentEmail = document.getElementById("newStudentEmail");
const NewStudentMatricule = document.getElementById("newStudentMatricule");

$("#sidebar-user").ready(() => {
  const user = JSON.parse(localStorage.user);
  $("#sidebar-user").append(
    $(`
    <span class="name">${user.name}</span>
    <span class="profession">${user.role}</span>
    `)
  );
  const projects = axios(`${url}/${user.group}`);
});

// $("#projects").ready(() => {
//   // const session = axios(`${url}/session/project`)
//   // if (!session.isExpired) {
//   //   window.location.href = ''
//   // } else {
//   //   window.location.href = "";
//   // }
// });

// $("#sideBar").ready(() => {
//   const user = JSON.parse(localStorage.user)
//   if (user.role === 'student') {

//   }
// });

$(document).ready(function () {
  // Login function
  $("#buttonSubmit").on("click", async function (e) {
    e.preventDefault();
    const password = $("#inputPassword1").val();

    const email = $("#inputEmail1").val();
    console.log(password, email);
    if (!password || !password.length) alert("enter a password");
    if (!email || !email.length) alert("enter a email");

    const user = await login(email, password);

    if (user) {
      window.location.href = "./dashboard.html";
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
    } else alert("User not found");
  });

  // Login function End

  // $("#AddStudent").on("click", function (e) {
  //   e.preventDefault();
  //   $("#students").append(`
  //   <tr>
  //               <th scope="row">4</th>
  //               <td>${newStudentName.value}</td>
  //               <td>${NewStudentMatricule.value}</td>
  //               <td><address>${NewStudentEmail.value}</address></td>
  //               <td>
  //                 <button
  //                   class="btn btn-warning btn-link text-center"
  //                   type="button"  >
  //                   <i class="bi bi-pencil-square"></i>
  //                 </button>
  //                 <button class="btn text-center btn-danger" type="button">
  //                   <i class="bi bi-trash-fill"></i>
  //                 </button>
  //               </td>
  //             </tr>
  //   `);
  // });

  $(".pass_show").append('<span class="ptxt">Show</span>');

  const user = JSON.parse(localStorage.user);
  if (user.role === "student") {
    $(".student").addClass("d-none");
    $("#imgLogo").replaceWith(`<img src="images/Avatar 1.png" alt="Avatar" />`);
  }
  if (user.role === "prof") {
    $(".prof").addClass("d-none");
  }
});

$(document).on("click", ".dropdown-toggle", function () {
  $(".dropdown-toggle").dropdown();
});

$(document).on("click", ".pass_show .ptxt", function () {
  $(this).text($(this).text() == "Show" ? "Hide" : "Show");

  $(this)
    .prev()
    .attr("type", function (index, attr) {
      return attr == "password" ? "text" : "password";
    });
});

fetch("https://graduate-projects.herokuapp.com/students/licence", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let A = 0;
    function StudentTemplate(student) {
      A++;
      return `
             <tr id="${A}">
                <th scope="row">${A}</th>
                <td contenteditable="true">${student.name}</td>
                <td contenteditable="true">${student.matricule}</td>
                <td contenteditable="true"><address>${student.email}</address></td>
                <td>
                  <button
                    class="btn btn-warning btn-link text-center"
                    type="button"  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button id="DelStudent${A}" class="btn  text-center btn-danger" type="sub">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
    `;
    }
    $("#TableData1").html(`
  ${data.map(StudentTemplate).join("")}
  `);

    //Selection project groups function

    let groupeValue = 1;
    function ProjectGroupTemplate(student, group) {
      groupeValue++;
      return `
      <option value="${student._id}">${student.name}</option>
    `;
    }
    $(".custom-select").html(`
  ${data.map(ProjectGroupTemplate).join("")}
  `);
  });

fetch("https://graduate-projects.herokuapp.com/students/master", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    $(document).ready(function () {
      let A = 0;
      function StudentTemplate(student) {
        A++;
        return `
             <tr id="${A}">
                <th scope="row">${A}</th>
                <td contenteditable="true">${student.name}</td>
                <td contenteditable="true">${student.matricule}</td>
                <td contenteditable="true"><address>${student.email}</address></td>
                <td>
                  <button
                    class="btn btn-warning btn-link text-center"
                    type="button"  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button id="DelStudent${A}" class="btn  text-center btn-danger" type="sub">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
    `;
      }
      $("#TableData2").html(`
  ${data.map(StudentTemplate).join("")}
  `);
    });
  });

fetch("https://graduate-projects.herokuapp.com/professors", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    $(document).ready(function () {
      let B = 0;
      function ProfTemplate(prof) {
        B++;
        return `
             <tr id="${B}">
                <th scope="row">${B}</th>
                <td contenteditable="true">${prof.name}</td>
                <td contenteditable="true">${prof.number}</td>
                <td contenteditable="true"><address>${prof.email}</address></td>
                <td>
                  <button
                    class="btn btn-warning btn-link text-center"
                    type="button"  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button id="DelStudent${B}" class="btn  text-center btn-danger" type="sub">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
    `;
      }
      $("#ProfData").html(`
  ${data.map(ProfTemplate).join("")}
  `);
    });
  });

fetch("https://graduate-projects.herokuapp.com/projects", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let C = 0;

    function ProjectTemplate(project) {
      C++;
      return `
    
    <li  id="projectList_${C}" class="projectList projectList_${project._id}  d-flex justify-content-between  px-4 mb-2">
               <p id="ProjectName${C}" class="col-7  ml-2  my-auto ">
                 ${project.title}
               </p>
               <p id="ProfRes${C}" class="col-4 my-auto">
               ${project.encadreur}
               </p>
               <div id="SelectBtn_${C}" class="col-1 SelectBtn">
                 <a href="#" class="element">
                   <i class="bi bi-file-plus-fill addIcon"></i>
                 </a>
               </div>
             </li>
           
    `;
    }

    $("#UL1").html(`
  ${data.map(ProjectTemplate).join("")}
  `);

    // Selection projects function
    $(".SelectBtn").on("click", function (e) {
      e.preventDefault();
      console.log("id ... ", e.currentTarget.id.split("_"));
      const id = e.currentTarget.id.split("_")[1];
      console.log($("#UL2").children().length);
      const childCount = $("#UL2").children().length + 1;
      $(`#projectList_${id}`).prepend(
        $(`<p class=" ml-2  my-auto ">${childCount}</p>`)
      );
      $(`#projectList_${id}`).appendTo($("#UL2"));
      $(`#${e.currentTarget.id}`).replaceWith(
        $(` <div id="DeltBtn_${id}"  class="DeltBtn">
                 <a href="#">
                   <i class="bi bi-trash3-fill btnDel"></i>
                 </a>
        </div>`)
      );
    });
  });

// const inpFile = document.querySelector("#inpFile");

// inpFile.addEventListener("change", function () {
//   console.log(inpFile.files);
// })
// Not Working
//  var formData = new FormData();
//  var ProfList = document.querySelector("#file");
//  formData.append("File", ProfList.files[0]);
//  axios.post("https://graduate-projects.herokuapp.com/professors/list", formData, {
//    headers: {
//      "Content-Type": "multipart/form-data",
//    },
//  });
// $("#uploid").on("submit" ,function (e) {
//    e.preventDefault;
//    var formData = new FormData();
//    var ProfList = $("#file");
//  formData.append("File", ProfList.files[0]);
//  axios.post("https://graduate-projects.herokuapp.com/professors/list", formData, {
//    headers: {
//      "Content-Type": "multipart/form-data",
//    },
//  });
// });

function SidbarTemplate() {
  return `
              <li  class="nav-links active">
                  <a   href="./dashboard.html">
                    <i class="bi bi-columns-gap icon"></i>
                    <span class="text nav-text">Dashboard</span>
                  </a>
                </li>
                
                <li class="nav-links student prof">
                  <a  href="./Sessions.html">
                    <i class="bi bi-stopwatch-fill"></i>
                    <span class="text nav-text">Sessions</span>
                  </a>
                </li>
                <li  class="nav-links student prof">
                  <a  href="./Documents.html">
                    <i class="bi bi-calendar-event icon"></i>
                    <span class="text nav-text">Document</span>
                  </a>
                </li>
              <li  class="nav-links d-flex drop "> 
                <div class="btn-group dropright text nav-text student">
                  <i class="bi bi-door-open-fill icon"></i>
                        <button type="button"
                        class="btn text  p-0 dropdown-toggle"
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                          
                          <span class="ml-4">Fields</span>
                        </button>
                        <div class="dropdown-menu">
                              <a class="dropdown-item" href="./Studentlist01.html">Bachelor's degree 3 yrs  Computer science</a>
                              <a class="dropdown-item" href="./Studentlist02.html">Bachelor's degree 3 yrs  Mathematic</a>
                              <a class="dropdown-item" href="./Studentlist03.html">Master's degree 2 yrs Computer science</a>
                              <a class="dropdown-item" href="./StudentList04.html">Master's degree 2 yrs Mathematic</a>
                          </div>
                  </div>
              </li>
                <li  class="nav-links student prof">
                  <a  href="./ProfList.html">
                    <i class="bi bi-people-fill icon"></i>
                    <span class="text nav-text">Prof List</span>
                  </a>
                </li>
                <li  class="nav-links student prof">
                <a  href="./ProjectGroup.html">
                  <i class="bi bi-person-workspace icon"></i>
                  <span class="text nav-text">Project Groups</span>
                </a>
                </li>
                 <li  class="nav-links prof">
                  <a  href="./Projects.html ">
                    <i class="bi bi-file-earmark-plus icon"></i>
                    <span class="text nav-text">Projects</span>
                  </a>
                </li>
                <li   class="nav-links student">
                  <a  href="./ProjectProf.html">
                    <i class="bi bi-file-earmark-plus icon"></i>
                    <span class="text nav-text">Projects Space</span>
                  </a>
                </li>
            <li class="nav-links">
              <a  href="./Setting.html">
                <i class="bi bi-gear icon"></i>
                <span class="text nav-text ">Settings</span>
              </a>
            </li>
      `;
}
$("#SideList").html(SidbarTemplate);

$("li.nav-links > a").on("click", function () {
  $("li.nav-links").removeClass("active");
  $(this).parent().addClass("active");
});

flatpickr("input[type=date]", {});

// ========================================== Group projects

function GroupTemplate() {
  return `
      <li  class="projectGroup d-flex  table-primary py-2  px-4 mb-2">
               <h2 class="col-2  ml-2 font-weight-bold  my-auto ">
                 01
               </h2>
               <span  class="col-5  offset-md-3  my-auto">
               <select required class="custom-select d-block mb-1"></select>
               <select class="custom-select d-block mb-1"></select>
               <select class="custom-select d-block"></select>
               </span>
             </li>
      `;
}

$("#SelectGrp").html(GroupTemplate);

export const addGroup = () => {
  const allGroups = $(".projectGroup").length;

  for (let index = 0; index < allGroups.length; index++) {
    const element = allGroups[index];

    const elements = $(".projectGroup")[index].childNodes[3].childNodes;
    window.groupElement = $(".projectGroup");

    const selectElements = [];

    for (let j = 0; j < elements.length; j++) {
      const el = elements[j];
      console.log("el ..... ", el);
      if (el.nodeName === "SELECT") selectElements.push(el);
    }

    const groupStudents = {
      std1: selectElements[0].value(),
      std2: selectElements[1].value(),
      std3: selectElements[2].value(),
    };

    axios
      .post(`${url1}/admin/group`, groupStudents)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // console.log("groupStudents ..... ", groupStudents);
  }
};

$("#addGroupButton").on("click", () => {
  addGroup();
});

// ===================================== submitProjects

$("#submitProjects").on("click", () => {
  console.log("clicked ");

  const graduationProjects = $(".graduationProjects")[0].childNodes;
  window.graduationProjects = graduationProjects;
  console.log("graduation projects ... ", graduationProjects);

  const selectedElements = [];

  for (let j = 0; j < graduationProjects.length; j++) {
    const el = graduationProjects[j];

    if (el.nodeName === "LI") {
    console.log("el ..... ", el);

      selectedElements.push(el.classList[1].split('_')[1])
    }
  }

  console.log(selectedElements)

  // axios(`${url1}/admin/submitProjects`, projects);
});
