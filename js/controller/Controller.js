class Controller {
    constructor() {
        this.mijnQuiz = new Quiz(vragen);
        this.mijnView = new ViewBeheerder();

        // Koppel de handlers aan de buttons
        this.mijnView.bindVolgendeVraagButton(this.handleVolgendeVraag);
        this.mijnView.bindVorigeVraagButton(this.handleVorigeVraag);
        this.mijnView.bindKeuzeButton(this.handleKeuze);
        this.mijnView.bindInleverButton(this.handleInleveren);

        // Display eerste vraag
        this.mijnView.toonVraag(this.mijnQuiz.getHuidigeVraag());
        this.mijnView.toonNavigatie(this.mijnQuiz.getHuidigeVraag(),this.mijnQuiz.getMijnVragen());
    }

    handleVolgendeVraag = () => {
        let q=this.mijnQuiz.getVolgendeVraag();
        this.mijnView.toonVraag(q);
        this.mijnView.toonNavigatie(this.mijnQuiz.getHuidigeVraag(),this.mijnQuiz.getMijnVragen());
    };

    handleVorigeVraag = () => {
        let q=this.mijnQuiz.getVorigeVraag();
        this.mijnView.toonVraag(q);
        this.mijnView.toonNavigatie(this.mijnQuiz.getHuidigeVraag(),this.mijnQuiz.getMijnVragen());
    };

    handleKeuze = (id) => {
        this.mijnQuiz.getHuidigeVraag().setGegevenAntwoord(id);
        this.mijnView.toonVraag(this.mijnQuiz.getHuidigeVraag());
        this.mijnView.toonNavigatie(this.mijnQuiz.getHuidigeVraag(),this.mijnQuiz.getMijnVragen());
    };

    handleInleveren = () => {
       this.mijnView.toonResultaten(this.mijnQuiz);
    };
}
