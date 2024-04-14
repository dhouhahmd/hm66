// Import de la bibliothèque patch
const patch = require('patch');

// Définition de la fonction mock pour simuler fetch
function fetchMock(url) {
    return Promise.resolve({
        json: () => Promise.resolve([{ nom: "Mock Data", prix: 10, image: "mockimage" }])
    });
}

// Patch de la fonction fetch avec la fonction mock
beforeEach(() => {
    patch('fetch', fetchMock);
});

// Restauration de la fonction fetch originale après utilisation
afterEach(() => {
    patch.unpatch('fetch');
});

// Import des fonctions à tester
const { ajouterAuPanier } = require('./siteweb.html'); 
// Définition du test Jest pour la fonction ajouterAuPanier
function testAjoutAuPanier() {
    // Ajout d'un article pour hommes
    ajouterAuPanier("hommes", 0);
    // Vérifie si l'article pour hommes a été ajouté au panier
    expect(panier).toContain("hommes");

    // Ajout d'un article pour femmes
    ajouterAuPanier("femmes", 1);
    // Vérifie si l'article pour femmes a été ajouté au panier
    expect(panier).toContain("femmes");

    // Ajout d'un article pour enfants
    ajouterAuPanier("enfants", 2);
    // Vérifie si l'article pour enfants a été ajouté au panier
    expect(panier).toContain("enfants");
}

// Exécution du test
test('Ajout au panier', testAjoutAuPanier);
