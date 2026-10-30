import { demoRegistrations } from "../data";

document.addEventListener("DOMContentLoaded", () => {
    const student_table_body = document.getElementById("student_table_body");

    let page = 1;
    let parPage = 10;

    function afficher() {
        student_table_body.innerHTML = "";

        let debut = (page - 1) * parPage;
        let liste = demoRegistrations.slice(debut, debut + parPage);

        liste.forEach((etudiant) => {
            student_table_body.innerHTML += `
                <tr class="hover:bg-slate-50/50 transition-colors">
                    <td class="p-4 text-slate-600">${etudiant.dossier}</td>
                    <td class="p-4 font-semibold text-slate-800">${etudiant.nom}</td>
                    <td class="p-4 text-slate-600">${etudiant.niveau}</td>
                    <td class="p-4 text-slate-600">${etudiant.cours}</td>
                    <td class="p-4 text-slate-600">${etudiant.telephone}</td>
                    <td class="p-4">
                    <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                        ${etudiant.statut}
                    </span>
                    </td>
                    <td class="p-4 text-slate-600">${etudiant.date}</td>
                    <td class="p-4">
                    <div class="flex items-center justify-center space-x-2">
                        <button
                        class="p-1.5 text-slate-600 border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        </button>
                        <button
                        class="p-1.5 text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        </button>
                    </div>
                    </td>
                </tr>`
        });
    }

    function changerPage(numero) {
        page = numero;
        afficher();
    }

    document.getElementById("precedent").addEventListener("click", () => {
        if (page > 1) changerPage(page - 1);
    });

    document.getElementById("suivant").addEventListener("click", () => {
        if (page < Math.ceil(demoRegistrations.length / parPage)) {
            changerPage(page + 1);
        }
    });

    afficher();
})