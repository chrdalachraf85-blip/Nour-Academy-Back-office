import { demoRegistrations } from "./data.js";

const studentsKey = "nourAcademystudents";
const registrationsKey = "nourAcademyRegistrations";

const savedStudents = localStorage.getItem(studentsKey);

let studentslist;

if (savedStudents === null) {
  studentslist = [...demoRegistrations];
} else {
  studentslist = JSON.parse(savedStudents);
}

const savedRegistrations = JSON.parse(
  localStorage.getItem(registrationsKey) || "[]"
);
//add if no
for (const registration of savedRegistrations) {
  const alreadyExists = studentslist.some(student => String(student.nom) === String(registration.id));

  if (!alreadyExists) {
    const courses = registration.courses || [];

      studentslist.push({
      id: registration.id,
      dossier: registration.id,
      nom: registration.studentName,
      niveau: registration.studentLevel,
      courseId: courses[0] ? courses[0].id : null,
      cours: courses.map(course => course.title).join(", "),
      total: registration.total,
      telephone: registration.phone,
      statut: registration.status,
      date: registration.createdAt.slice(0, 10),
      centre: registration.centre,
   });
  }
}
localStorage.setItem(
  studentsKey,
  JSON.stringify(studentslist)
);

// dashboard stats
const totalRegistrations = studentslist.length;

const pendingCount = studentslist.filter(
  student =>
    student.statut === "En attente" ||
    student.statut === "Nouvelle"
).length;

const validatedCount = studentslist.filter(
  student => student.statut === "Validée"
).length;

const paidCount = studentslist.filter(
  student => student.statut === "Payée"
).length;

//  html changing 
document.querySelector("#registrations-number").textContent =
  totalRegistrations;





document.querySelector("#en-atttent").textContent = pendingCount;
document.querySelector("#validés").textContent = validatedCount;

document.querySelector("#Validées-number").textContent = validatedCount;
document.querySelector("#enAttent-number").textContent = pendingCount;
document.querySelector("#Payée-number").textContent = paidCount;

//

let monthlyRevenue = 0;

for (const student of studentslist) {
  if (
    student.statut === "Payée") {
    monthlyRevenue += Number(student.total) || 0;
  }
}

document.querySelector("#payed-price").textContent =` 
${monthlyRevenue}  MAD`

let percentage;
// status bars update
function updateBar(id, count) {
  const bar = document.querySelector("#" + id);

    if (totalRegistrations > 0) {
       percentage = (count / totalRegistrations) * 100;
    }

    bar.style.width = percentage + "%";
}
updateBar("validés-bar", validatedCount);
updateBar("enAttent-bar", pendingCount);
updateBar("Payée-bar", paidCount);

let nadorcount = studentslist.filter(students => students.centre === "Nador").length
let matarcount = studentslist.filter(students => students.centre === "Hay Al Matar").length
let slwancount = studentslist.filter(students => students.centre === "Selouane").length

document.querySelector("#Nador-number").textContent = nadorcount;
document.querySelector("#almatar-number").textContent = matarcount;
document.querySelector("#Selouane-number").textContent = slwancount;


document.querySelector("#nador-bar").style.width = (nadorcount / 50) * 100 + "%";

document.querySelector("#almatar-bar").style.width = (matarcount / 50) * 100 + "%";

document.querySelector("#Selouane-bar").style.width = (slwancount / 50) * 100 + "%";





// latest registers
const tableBody = document.querySelector("#latestRegister");

const latestRegistrations = [...studentslist]
  .sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

tableBody.innerHTML = latestRegistrations.map(student => `
  <tr class="border-t border-border">
    <td class="px-6 py-4 font-medium">${student.dossier}</td>
    <td class="px-6 py-4">${student.nom}</td>
    <td class="px-6 py-4">${student.cours}</td>
    <td class="px-6 py-4">${student.statut}</td>
    <td class="px-6 py-4">${student.date.split("-").reverse().join("/")}</td>
  </tr>
`).join("");

