import { demoRegistrations } from "./data.js";
document.querySelector("#dashboard").innerHTML = `
      <!-- Page heading -->
      <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 class="text-2xl font-bold text-primary sm:text-3xl">
            Tableau de bord
          </h1>

          <p class="mt-1 text-sm text-text-secondary sm:text-base">
            Vue d'ensemble des inscriptions et des paiements
          </p>
        </div>

      </div>


      <!-- Statistics cards -->
      <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <article class="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm font-medium text-text-secondary">Inscriptions</p>
           
          </div>

          <h2 class="mt-4 text-3xl font-bold text-primary" id="registrations-number">128</h2>

          <p class="mt-2 text-xs text-success " id="par-rapport">
            
          </p>
        </article>


        <article class="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm font-medium text-text-secondary" >En attente</p>
           
          </div>

          <h2 class="mt-4 text-3xl font-bold text-primary" id="en-atttent">32</h2>

          <p class="mt-2 text-xs text-text-secondary">
            Inscriptions à traiter
          </p>
        </article>


        <article class="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm font-medium text-text-secondary">Validées</p>
          </div>

          <h2 class="mt-4 text-3xl font-bold text-primary" id="validés">78</h2>

          <p class="mt-2 text-xs text-success">
            Dossiers validés
          </p>
        </article>


        <article class="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm font-medium text-text-secondary" >Recettes encaissées</p>
          </div>

          <h2 class="mt-4 text-2xl font-bold text-primary sm:text-3xl" id="payed-price">12 600 MAD</h2>

          <p class="mt-2 text-xs text-text-secondary">
            Total encaissé ce mois
          </p>
        </article>

      </section>


      <!-- Status and centers -->
      <section class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

        <!-- Status distribution -->
        <article class="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">

          <div class="mb-6">
            <h2 class="font-bold text-primary">Répartition par statut</h2>
            <p class="mt-1 text-sm text-text-secondary">État des dossiers d'inscription</p>
          </div>

          <div class="space-y-6">

            <div>
              <div class="mb-2 flex items-center justify-between gap-3 text-sm">
                <span>Validée</span>
                <span class="font-semibold" id="Validées-number">78</span>
              </div>

              <div class="h-3 overflow-hidden rounded-full bg-gray-100">
                <div class="h-full w-[75%] rounded-full bg-green-500" id="validés-bar"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between gap-3 text-sm">
                <span>En attente</span>
                <span class="font-semibold" id="enAttent-number">32</span>
              </div>

              <div class="h-3 overflow-hidden rounded-full bg-gray-100">
                <div class="h-full w-[40%] rounded-full bg-yellow-400" id="enAttent-bar"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between gap-3 text-sm">
                <span>Payée</span>
                <span class="font-semibold" id="Payée-number">18</span>
              </div>

              <div class="h-3 overflow-hidden rounded-full bg-gray-100">
                <div class="h-full w-[25%] rounded-full bg-blue-400" id="Payée-bar"></div>
              </div>
            </div>

          </div>

        </article>


        <!-- Registrations by center -->
        <article class="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">

          <div class="mb-6">
            <h2 class="font-bold text-primary">Inscriptions par centre</h2>
            <p class="mt-1 text-sm text-text-secondary">Répartition des élèves</p>
          </div>

          <div class="space-y-6">

            <div>
              <div class="mb-2 flex items-center justify-between gap-3 text-sm">
                <span>Nador</span>
                <span class="font-semibold" id="Nador-number">56</span>
              </div>

              <div class="h-3 overflow-hidden rounded-full bg-gray-100">
                <div class="h-full w-full rounded-full bg-teal-700" id="nador-bar"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between gap-3 text-sm">
                <span>Hay Al Matar</span>
                <span class="font-semibold" id="almatar-number">42</span>
              </div>

              <div class="h-3 overflow-hidden rounded-full bg-gray-100">
                <div class="h-full w-[75%] rounded-full bg-teal-500" id="almatar-bar"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between gap-3 text-sm">
                <span>Selouane</span>
                <span class="font-semibold" id="Selouane-number">30</span>
              </div>

              <div class="h-3 overflow-hidden rounded-full bg-gray-100">
                <div class="h-full w-[55%] rounded-full bg-teal-300" id="Selouane-bar"></div>
              </div>
            </div>

          </div>

        </article>

      </section>


      <!-- Course capacity -->
      <section class="mt-6 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">

        <div class="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div>
            <h2 class="font-bold text-primary">Taux de remplissage par cours</h2>
            <p class="mt-1 text-sm text-text-secondary">
              Suivi des places disponibles
            </p>
          </div>


        </div>

        <div class="overflow-x-auto">

          <table class="w-full min-w-[600px] text-left text-sm">

            <thead class="bg-surface-soft text-text-secondary">
              <tr>
                <th class="px-6 py-4 font-medium">Cours</th>
                <th class="px-6 py-4 font-medium">Inscrits</th>
                <th class="px-6 py-4 font-medium">Capacité</th>
                <th class="px-6 py-4 font-medium">Remplissage</th>
              </tr>
            </thead>

            <tbody id="courseStats">

              

              

            </tbody>

          </table>

        </div>

      </section>


      <!-- Latest registrations -->
      <section id="inscriptions" class="mt-6 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">

        <div class="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div>
            <h2 class="font-bold text-primary">Dernières inscriptions</h2>
            <p class="mt-1 text-sm text-text-secondary">
              Les derniers dossiers reçus
            </p>
          </div>

          <button id="secondToincriptionbtn" class="self-start rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-hover sm:self-auto">
            Voir toutes les inscriptions
          </button>

        </div>

        <div class="overflow-x-auto">

          <table class="w-full min-w-[650px] text-left text-sm">

            <thead class="bg-surface-soft text-text-secondary">
              <tr>
                <th class="px-6 py-4 font-medium">Référence</th>
                <th class="px-6 py-4 font-medium">Élève</th>
                <th class="px-6 py-4 font-medium">Cours</th>
                <th class="px-6 py-4 font-medium">Statut</th>
                <th class="px-6 py-4 font-medium">Date</th>
              </tr>
            </thead>

            <tbody id="latestRegister">

              <tr class="border-t border-border">
                <td class="px-6 py-4 font-medium">NA-2026-021</td>
                <td class="px-6 py-4">Youssef Khan</td>
                <td class="px-6 py-4">Physique-Chimie</td>
                <td class="px-6 py-4">
                  <span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">Payée</span>
                </td>
                <td class="px-6 py-4">28/10/2026</td>
              </tr>

              <tr class="border-t border-border">
                <td class="px-6 py-4 font-medium">NA-2026-022</td>
                <td class="px-6 py-4">Lina Mouad</td>
                <td class="px-6 py-4">Français</td>
                <td class="px-6 py-4">
                  <span class="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">Validée</span>
                </td>
                <td class="px-6 py-4">28/10/2026</td>
              </tr>

              <tr class="border-t border-border">
                <td class="px-6 py-4 font-medium">NA-2026-023</td>
                <td class="px-6 py-4">Karim Saidi</td>
                <td class="px-6 py-4">Informatique</td>
                <td class="px-6 py-4">
                  <span class="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">En attente</span>
                </td>
                <td class="px-6 py-4">27/10/2026</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>`
      function gotoregestritionpage(){
        document.querySelector("#dashboard").innerHTML = ""
      }
      document.querySelector("#inscriptionbtn").addEventListener("click" , gotoregestritionpage)
      document.querySelector("#secondToincriptionbtn").addEventListener("click" , gotoregestritionpage)


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
  const alreadyExists = studentslist.some(student => String(student.nom) === String(registration.studentName));
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
document.querySelector("#registrations-number").textContent = totalRegistrations;





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

///

const courseStats = document.querySelector("#courseStats");

const courses = [
  "Mathématiques — 2e Bac",
  "Physique-Chimie — 2e Bac",
  "SVT — 1re Bac",
  "Français — Collège",
  "Arabe — Primaire",
  "Comptabilité — Lycée",
  "Anglais — Initiation",
  "Mathématiques — Collège",
  "Espagnol — Débutant",
  "Préparation aux examens",
  "Informatique — Initiation",
  "Renforcement scolaire"
];
const max_places = 15;

courses.forEach(course => {

  const totalStudents = studentslist.filter(student => {
    return student.cours === course;
  }).length;

  const percentage = Math.min(100, Math.round((totalStudents / max_places) * 100));

  let color = "text-teal-600";

  if (percentage >= 90) {
    color = "text-red-500";
  } else if (percentage >= 75) {
    color = "text-yellow-500";
  }

  courseStats.innerHTML += `
    <tr class="border-t border-border">
      <td class="px-6 py-4 font-medium">${course}</td>
      <td class="px-6 py-4">${totalStudents}</td>
      <td class="px-6 py-4">${max_places}</td>
      <td class="px-6 py-4 font-bold ${color}">
        ${percentage}%
      </td>
    </tr>
  `;
});


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


