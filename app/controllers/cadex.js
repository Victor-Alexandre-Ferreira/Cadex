const cadexService = require('../services/cadex');

module.exports = {

    get(_, response) {
        const cadex = cadexService.generate();
        // J'aimerais pouvoir récupérer dans le controller, une seule ou plusieurs partie du cadex de
        // façon indépendante. Par exemple je voudrais n'afficher que le verbe du cadex généré
        // cadex.verb

        // Mais on veut tout de même garder la possibilté d'avoir un cadex complet sous
        // forme de chaîne de caractère.
        // Pourquoi pas une méthode qui permettrait de "coller" les différentes parties ensemble.
        // cadex.glue();
        //! cadex est un objet qui a été généré par la méthode generate()

        // BONUS : maintenant je ne veut plus avoir à appelé une méthode glue() pour
        // récupérer les parties collés ensemble
        // Le fait d'afficher l'objet cadex en tant que string doit m'afficher les résultat complet

        // Bien evidemment les test unitaires qui vont avec ;)
        response.send(cadex);
    },

};
