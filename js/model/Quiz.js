class Quiz {
    constructor(vragen) {
        this.vragen=vragen;
        this.reset();
    }

    getVolgendeVraag() {
        this.huidigePlek++;
        return this.mijnVragen[this.huidigePlek];
    }

    getHuidigeVraag() {
        return this.mijnVragen[this.huidigePlek];
    }

    getVorigeVraag() {
        this.huidigePlek--;
        return this.mijnVragen[this.huidigePlek];
    }

    getMijnVragen() {
        return this.mijnVragen;
    }

    reset() {
        let vraagNummer=1;
        this.mijnVragen=[];
        this.vragen.forEach(
            vraag =>this.mijnVragen.push(new Vraag(vraagNummer++,vraag))
        );
        this.huidigePlek=0;
    }
}