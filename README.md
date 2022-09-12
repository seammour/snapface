# Snapface

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

# gestion des fuites mémoires générer par les observables.

## prendre que les emission utilisé.
A l'aide de l'opérateur take, nous sommes sur de prendre un nombre limité des emission et donc l'observable sera completer.


## utiliser le  pattern "Destroy Subject".

- utilisation d'un lifecycle hook et plus particulièrement la methode ngOnDestroy

### Subject :
Un Subject est un Observable que vous pouvez faire émettre à la demande.

utilisation d'un subject qui va émettre à la destruction du composant.

et grace à la methode takeUtil qui permet de comptete l'observable si le subject émettre 




