const data = require('../../data/parts.json');
const { getRandomItem } = require('../helpers/random');

module.exports = {

    // On en peut pas générer les bout de phrase pour les stocker dans des propriétés, car celles-ci
    // sont assigné à la création de l'object exporté. C'est objet peut-être importé 1 ou 1000 fois,
    // il ne sera généré qu'une et une seule fois. car chaque nouvelle importation, ne fera que
    // récupérer la référence de l'objet déjà créer En l'occurance nous on ne l'importe dans notre
    // application qu'une seule fois pour le moment, dans le controller cadex.
    /*
    noun: getRandomItem(data.names),
    adjective: getRandomItem(data.adjectives),
    verb: getRandomItem(data.verbs),
    complement: getRandomItem(data.complements),
    */

    generate() {
        const noun = getRandomItem(data.names);
        const adjective = getRandomItem(data.adjectives);
        const verb = getRandomItem(data.verbs);
        const complement = getRandomItem(data.complements);
        return `${noun} ${adjective} ${verb} ${complement}`;
        // Le souci de cette méthode c'est qu'elle ne permet plus une fois le résultat récupérer de
        // l'autre côté, de vérifier la valeur de chaque partie de façon indépendante.
        // direction le controller pour la suite.
    },

};
