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
