# webbserver intro

## Linux Commandon

* pwd - visar aktiv mapp

* ls - listar alla filer i mappen

* ll visar även dolda filer, är ett alias för, ls -la

* cd - change directory

* nano - öppnar en text editor

* history - visar historiken av kommandon

## Node

För att initiera ett nytt node projekt kör jag "npm init -y" i en mapp.
Detta skapar en package.json fil.

```bash
mkdir serverprojekt
cd serverprojekt
npm init -y
```
---
För node installerade vi express och nodemon.
För att avsluta node som körs med nodemon tryck "ctrl + c".

Vi skapade även en gitignore fil med kommandot "echo node_modules > .gitignore" för att ignorera node_modules mappen när vi pushar till github.

---
## Express
Ve skapade en express server med lite kod och vi testade att skapa errors

Error Typer:
* 200 = Ok
* 400 = Bad Request
* 401 = Unauthorized
* 403 = Forbidden
* 404 = Not Found
* 500 = Internal Server Error

Vi testade också köra två stycken olika responses på en request. Det gav oss en error som sa att man inte kan ändra redan skickad data.
-
Efter rasten tog vi och skapade en layout som vi gjorde till två sidor på hemsidan. Vi uppdaterade också package.json genom att ändra nodemons uppdaterings-filer(Vi lade till så att alla filer autosparas).\
Det är viktigt att minnas att det är två {{curly brackeys}} när man refererar till layouten.
