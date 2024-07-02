# Baralho21App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.
Angular material used for components

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Documentacao para tratamento de erros e melhor experiencia do usuario

Os botoes "Pedir Carta" e "Reiniciar Jogo" foram tratados com validacao para que ao final do jogo. Eles ficam desativados para que o usuario nao possa clicar e trazer mais cartas gerando uma ma experiencia do jogo

O campo nome, é automaticamente preenchido quando o jogo se inicia, forcando o jogador a entrar com o nome e armazenando omesmo dinamicamente no input

O botao "Parar", ao entrar com o mouse, apresenta uma mensagem concatenando o nome do usuario e lhe proporcionando uma melhor experiencia. Ao deixar o botao, a mensagem desaparece.

A pontuacao é capturada dinamicamente quando o usuario recebe uma carta, e retirada automaticamente quando o usuario realiza o drag end drop para a lixeira

Um dialog é utilizado para a captura do valor do "AS" antes do jogo comecar

Outro Dialog é utilizado para a captura do valor do nome antes do jogo comecar

Foi utilizado o Angular Material para uma experiencia fluida, amigavel e mais compativel pois faz parte do bundle do Angular


