# Snapface

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

# Formulaires
## Formulaire Template 
### version simple
Le formulaire est simple et donc en utilisant le two-way binding sur un champ permet de mettre en place un formulaire.
 ### version avec un type pour information du formulaire.
 - reference local à la variable du formulaire : #emailForm="ngForm"
 - la valeur du formolaire : emailForm.value
 - la valeur d'un seul element du formolaire :  emailForm.controls['userEmail'].value
## Formulaire Reactive

# Communication  Backend avec HttpClient
## import du HttpClientModule
## injecter le HttpClient
- l'utilisation du get
    this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
- le resultat de retour est un observable de FaceSnap[]
- le template souscrit dans l'observable pour recuperer le resultat de l'appel
- L'architecture que vous venez d'implémenter est connue sous plusieurs noms : smart/dumb, container/presenter… peu importe le nom, le concept reste le même :

- un component parent interagit avec le service pour récupérer les données 
il s'agit du container, ou du component smart ;
- le parent consomme les Observables liés aux données (généralement avec le pipe  async  ) pour envoyer des données synchrones à ses enfants (généralement via des  Input()  ) 
les dumbs ou presenters qui n'interagissent pas avec les services ; 
ils se contentent d'afficher les données qu'on leur donne.

