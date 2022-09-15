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
## requete GET
### import du HttpClientModule
### injecter le HttpClient
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

## requete PUT
Pour le "snap"


```TypeScript 
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(upadtedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, upadtedFaceSnap))
    );
```
## requete POST
Pour la création d'un nouveau FaceSnap

```TypeScript 
return this.getAllFaceSnaps().pipe(
      // trie un clone de tableau de faceSnap par ordre croissant des ids
      map(facesnaps => [ ...facesnaps].sort((a,b) => a.id - b.id)),
      //map(facesnaps.sort((a,b) => a.id - b.id)),
      // renvoyer le dernier FaceSnap
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length -1]),
      // reconstruire le nouveau tableu des facesnaps
      map(previewsFaceSnaps => ({
        ...formValue,
        snaps:0,
        createdDate: new Date(),
        id: previewsFaceSnaps.id +1
      })),
      // operateur haut niveau app
      switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))

    );
```
Les méthodes  put()  et  post()  de HttpClient prennent l'URL de la requête comme premier argument, et le corps à envoyer comme deuxième argument ;

Vous créez une requête composée lorsque la réponse d'une requête est utilisée pour en créer une autre ;

Attention à l'asynchrone ! Si une action doit être effectuée après une requête, utilisez des opérateurs comme  tap()  dans le  pipe  de la requête ;

Quand une méthode de service génère une requête, le best practice est de retourner l'Observable et d'y souscrire depuis le component.



> [!NOTE]
> TAP : opérateur side effact.


