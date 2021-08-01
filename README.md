# AngularStudy

# NOTA
se modifichiamo un path al di fuori della cartella src, bisogna riavviare il webserver
# -----------------------------------------------------------
# Avviare il progetto
npm run start -> ng serve (webserver in node)

# Nuovo component
ng generate component <nome_componente> 
# -----------------------------------------------------------
# DECORATOR
@ -> decorator

# -----------------------------------------------------------
# Component
selector : ''       -> 'app-<nome_selettore>' nome del selettore nel file html
templateUrl : ''    -> path con il file html

template : ''       -> html inline
styleUrls: []       -> path del file scss

# -----------------------------------------------------------
# app.module
sono dichiarati tutti i componenti

@NgModule({
    declarations:[
        <!-- vengono inseriti tutti i componenti -->
    ],
    imports: [

    ],
    providers : [
    ],
    bootstrap:[
        <!-- componente che viene avviato all'inizio -->
    ]

})

# -----------------------------------------------------------
# Data Binding : al cambio del valore di una variabile nel component, cambia anche nel template e nel DOM
# Event: azione fatto dall'utente (in questo caso è il click del bottone)
<button (click)="getClick($event)">

# Databinding: a due vie
<input type="text" class="form-control" [(ngModel)]="testo2">

# Databinding: REFERENCE 
<input type="text" class="form-control" #pippo>

<button class="btn btn-primary"
    (click)="getData(pippo)"
>
Data
</button>

# -----------------------------------------------------------
# Direttive : cambiano le variabili (istruzione per cambiare il DOM)
1. asterisco -> *ngIf="nome ==='max' "
2.
3.

if(x>4){
}else{}

# DataBinding con Direttiva
<input type="text" class="form-control" [(ngModel)]="nome">
<p *ngIf="nome ==='max' "> Il tuo nome
    {{nome}}
</p>