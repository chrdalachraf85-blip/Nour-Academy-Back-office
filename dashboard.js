
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
  const alreadyExists = studentslist.some(
    student => String(student.dossier) === String(registration.id)
  );

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

//


let monthlyRevenue = 0;

for (const student of studentslist) {
  if (student.statut === "Payée"){
    monthlyRevenue += Number(student.total) || 0;
  }
}

document.querySelector("#payed-price").textContent =
  monthlyRevenue.toLocaleString("fr-FR") + " MAD";

