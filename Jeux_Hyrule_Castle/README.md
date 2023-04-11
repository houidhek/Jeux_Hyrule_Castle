
# Hyrule Castle
Premier projet réalisé dans le cadre de la piscine de l'ETNA, en solo. L'objectif était, dans un délai de 3 jours, de créer un RPG en tour par tour et d'yimplémenter autant de mods que possible.
## Jeu de base
Le jeu est un RPG en tour par tour. Vous incarnez un personnage qui défie le château d'Hyrule, une tour composée de 10 étages. A chaque étage, vous rencontrez un ennemi et au dernier étage, vous défiez le Boss.  
Pour l'instant, votre personnage sera Link. Il possède 60 points de vie (HP) et 15 points de force (STR).  
A chaque combat, vous affronterez un Bokoblin qui a 30 HP et 5 STR.  
Pour le boss du 10ème étage, vous devrez vaincre "Ganon" qui aura 150 HP et 20 STR.  
Pendant chaque combat, vous avez le choix entre "Attaquer" et "Soigner" :  
>"Attaque" inflige à l'adversaire des dégâts égaux à la valeur STR du personnage.  
"Guérison" soigne le personnage de la moitié de ses HP maximum.

Après le tour de votre personnage, l'adversaire attaque et inflige des dégâts égaux à sa STR.  
Lorsque les HP de l'adversaire tombent à 0, il est vaincu et le personnage monte d'un étage supplémentaire.  
Lorsque les HP du personnage tombent à 0, il meurt et le jeu s'arrête.  
Si le boss est vaincu, le jeu s'arrête avec un message de félicitations.  
## Mods
### Basic Characteristics
Ajouter une option "Character" dans les options de combat.  
Affiche un fichier de personnage avec son nom, ses statistiques, sa classe et sa race.  
Si le personnage attaque une classe ou une race contre laquelle il est fort, il inflige des dégâts de x2 (x4 si la classe et la race de l'ennemi sont faibles contre la classe et la race du personnage) (voir la section Modificateurs de dégâts).  
Si le personnage est attaqué par une classe ou une race contre laquelle il est faible, il reçoit x2 dommages (x4 si la classe et la race de l'ennemi sont fortes contre la classe et la race du personnage) (voir la section Modificateurs de dommages).  
Si le personnage attaque une classe ou une race contre laquelle il est faible, il reçoit /2 dommages (/4 si la classe et la race de l'ennemi sont fortes contre la classe et la race du personnage) (voir la section Modificateurs de dommages).  
Si le personnage est attaqué par une classe ou une race contre laquelle il est fort, il reçoit /2 points de dégâts (/4 si la classe et la race de l'ennemi sont faibles contre la classe et la race du personnage) (voir la section Modificateurs de dégâts).  
Une attaque "forte" sera écrite comme "Crushing hit".  
Une attaque "faible" s'écrit "Glancing Hit".
### Basic Game Custumization
Le jeu démarre sur un écran titre avec les options "New Game" qui démarre un nouveau jeu et "Quit" qui quitte le programme.  
Au début d'une nouvelle partie, le joueur peut régler la difficulté sur "Normal", "Hard" ou "Insane".  
En mode "Hard", les statistiques de chaque ennemi sont multipliées par 1,5.  
En mode "Insane", les statistiques de chaque ennemi sont multipliées par 2.  
Ensuite, le joueur peut régler le nombre de combats sur 10, 20, 50 ou 100. Tous les 10 combats, le joueur rencontre un boss.    
Le joueur commence avec 12 pièces. Il gagne 1 pièce après chaque victoire.
### Better Combat Options
Plus d'options de combat sont affichées à chaque tour.  
Chaque option peut être saisie avec le numéro correspondant ou le nom (insensible à la casse)  
L'option "Fuir" : Elle permet d'arrêter le combat.  
L'option "Protéger" : Elle divise par deux les dégâts reçus.  
### More Statistics
Le def est utilisé pour réduire les dégâts des attaques physiques.  
Le res est utilisé pour réduire les dégâts des attaques magiques.  
Le spd est utilisé pour décider de l'ordre du tour. Avoir plus de vitesse signifie jouer avant. Le plus rapide a également une chance d'esquiver égale à sa vitesse moins la vitesse de l'adversaire. Par exemple, si Link a 10 spd et son adversaire 6 spd, Link jouera en premier et aura 4% de chance d'esquiver les attaques de l'ennemi.  
La luck est utilisée pour calculer les chances d'un coup critique qui inflige des dégâts doubles.  
