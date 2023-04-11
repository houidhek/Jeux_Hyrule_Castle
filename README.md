# Jeux_Hyrule_Castle
Il s'agit d'un exemple de jeu de rôle (RPG) dans lequel le joueur incarne un personnage qui doit vaincre une série d'ennemis pour atteindre le dernier étage et vaincre le boss final.
Les termes HP et STR sont des abréviations courantes dans les jeux de rôle pour Health Points (points de vie) et Strength (force). Les HP représentent la quantité de dégâts qu'un personnage peut encaisser avant de mourir, tandis que la STR représente la force d'attaque du personnage.
Dans cet exemple, le personnage Link a un maximum de 60 points de vie et une force de 15. Les ennemis rencontrés au cours des étages ont des HP et des STR plus faibles que celles de Link, mais le boss final, Ganon, a des HP et des STR plus élevés que ceux des ennemis précédents.
Lors des combats, le joueur a le choix entre "Attaquer" et "Soigner". Attaquer permet au personnage de faire des dégâts à l'ennemi, tandis que Soigner permet de récupérer des points de vie.
En ce qui concerne le concept de programmation en TypeScript, cela fait référence à un langage de programmation open-source développé par Microsoft qui est une extension du langage JavaScript. TypeScript offre une typage statique qui permet de détecter les erreurs de code plus tôt et d'améliorer la qualité du code. Cela peut rendre le processus de développement de jeux plus efficace et moins sujet aux erreurs.
      Base Game
      
Avant de passer aux mods, il est obligatoire d'avoir les bases du jeu.
Le jeu est un RPG tour par tour. Vous incarnez un personnage qui défie le château d'Hyrule, une tour composée de 10 étages. A chaque étage vous rencontrez un ennemi et au dernier étage, vous défiez le Boss.
Pour l'instant, votre personnage sera Link. Il a 60 points de vie maximum (HP) et 15 points de force (STR).
A chaque combat vous affronterez un Bokoblin qui a 30 HP et 5 STR.

Pour le boss du 10ème étage, vous devrez vaincre « Ganon » qui aura 150 HP et 20 STR.
Lors de chaque combat, vous avez le choix entre "Attaquer" et "Soigner" :

"Attack" inflige des dégâts à l'adversaire égaux à la statistique STR du personnage
"Guérir" soignera le personnage de la moitié de ses PV maximum
Après le tour de votre personnage, l'adversaire attaque et inflige des dégâts égaux à sa FOR.
Lorsque les PV de l'adversaire tombent à 0, il est vaincu et le personnage monte d'un étage de plus.
Lorsque les PV du personnage tombent à 0, il meurt et le jeu s'arrête.
Si le boss est vaincu, le jeu s'arrête avec un message de félicitations.

PLANNING MOHAMED

Tout d'abord, pour commencer à travailler sur le projet, il est recommandé de créer un plan détaillé en segments. Voici quelques étapes possibles pour développer le jeu :
1.	Création de la carte et des personnages :
•	Créer la carte du château d'Hyrule avec 10 étages et les ennemis à chaque étage.
•	Créer le personnage Link avec 60 HP maximum et 15 STR, et l'ennemi Bokoblin avec 30 HP et 5 STR.
2.	Mise en place des fonctionnalités de base du jeu :
•	Créer un système de combat tour par tour avec la possibilité d'attaquer et de guérir.
•	Ajouter des animations pour les attaques et les dégâts.
•	Définir les conditions de victoire et de défaite pour le joueur.
3.	Ajout de fonctionnalités supplémentaires :
•	Ajouter des éléments de progression du personnage, comme la possibilité de récupérer de l'équipement ou de nouvelles compétences.
•	Ajouter des ennemis plus puissants aux étages supérieurs.
•	Ajouter des événements aléatoires ou des quêtes secondaires pour diversifier l'expérience de jeu.
En ce qui concerne l'ajout de mods au jeu, il est recommandé de commencer par la création des fonctionnalités de base avant d'envisager l'ajout de fonctionnalités supplémentaires. Une fois que le jeu de base est terminé, il est possible d'ajouter des mods pour améliorer l'expérience de jeu, comme l'ajout de graphismes améliorés, de nouveaux personnages ou ennemis, ou des modes de jeu alternatifs. Il est important de discuter des mods à ajouter en groupe et de s'assurer que tout le monde a une quantité de travail égale.

