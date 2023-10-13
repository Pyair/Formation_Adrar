class Bank {
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }

    afficherCompte() {
        console.log(`
    ----------------------------
        compte : ${this.name}
        solde : ${this.count} dollars
    ----------------------------
        `);
    }

    versementCompte(montant) {
        try {
            if (montant < 0) {
                throw new Error(`Votre montant est négatif`);
            }
            this.count += montant;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.afficherCompte();
        }
    }

    retraitCompte(montant){
        try {
            if (montant > this.count ) {
                throw new Error(`Vous ne pouvez pas faire de 
                        retrait, vous n'avez pas assez d'argent`);
            }
            this.count -= montant;
        }
        catch (error) {
            console.error(error);
            document.body.append(error)
        }
        finally {
            this.afficherCompte();
        }
    }
}


    


const elon = new Bank("Elon Musk", 10000);
elon.afficherCompte();

elon.versementCompte(-150);
elon.retraitCompte(20000000);
