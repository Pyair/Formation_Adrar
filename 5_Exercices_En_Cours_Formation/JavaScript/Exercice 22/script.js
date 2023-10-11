

class Imc {
    constructor (name, poids, taille) {
        this.nameUser = name;
        this.poidsUser = poids;
        this.tailleUser = taille;
    }
    getImcCalcul() {
        let imc = this.poidsUser / (this.tailleUser*this.tailleUser);
        return imc.toFixed(2);
    }
    display() {
        let string = `
        La personne s'appelle ${this.nameUser}
        elle pèse ${this.poidsUser} kg
        elle mesure ${this.tailleUser} m
        elle a un imc de ${this.getImcCalcul()} `;
        console.log(string);
    }
}

function displayTab(tab){
    for (let i = 0; i<tab.length; i++) {
        tab[i].display();
    }
}
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
    ];

displayTab(list);

class Employee {
    constructor(nom, prenom, age, salaireMensuel, mois, charges) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
        this.mois = mois;
        this.charges = charges;
    }

    calculerSalaireAnnuel() {
        return this.salaireMensuel * this.mois + this.charges;
    }
}

class Pme {
    constructor(nom, equipe) {
        this.nom = nom;
        this.equipe = equipe;
    }

    calculerVentesAnnuelles(revenus) {
        return revenus;
    }

    calculerBilanAnnuel(fraisFixes, fraisAchats) {
        const coutInitial = fraisFixes + fraisAchats;
        const coutTotalEquipe = this.equipe.reduce((total, emp) => total + emp.calculerSalaireAnnuel(), 0);
        const ventes = this.calculerVentesAnnuelles(R);
        const bilan = ventes - coutInitial - coutTotalEquipe;
        return bilan;
    }
}

// Définition des données
const R = 300000;
const FF = 20000;
const FA = 50000;

// Création des employés
const employe1 = new Employee("Nom1", "Prenom1", 30, 2000, 12, 9096);
const employe2 = new Employee("Nom2", "Prenom2", 35, 3000, 12, 9096);
const employe3 = new Employee("Nom3", "Prenom3", 40, 4000, 12, 9096);

const equipe = [employe1, employe2, employe3];

// Création de la PME
const maPme = new Pme("Petite Entreprise", equipe);

// Calcul du bilan annuel et affichage en console

const bilanAnnuel = maPme.calculerBilanAnnuel(FF, FA);
console.log(`Petite Entreprise : Cout Initial : ${FF + FA}`);
console.log(`Petite Entreprise : Cout Total Equipe : ${equipe.reduce((total, emp) => total + emp.calculerSalaireAnnuel(), 0)}`);
console.log(`Petite Entreprise : VENTES : ${R}`);
console.log(`Petite Entreprise : BILAN : ${bilanAnnuel}`);