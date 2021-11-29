# SIGAA AUTH API 🎓
API para autenticação remota no SIGAA (Sistema Integrado de Gestão de Atividades Acadêmicas).

## Rotas
### /auth

**Requisição**
```
POST ${baseUrl}/auth
```
Parâmetros | Descrição
------------ | -------------
username | Nome de usuário cadastrado no SIGAA
password | senha cadastrada no SIGAA

**OK**
```javascript
{
  "error": false,
  "login": "login",
  "nome": "Lorem Ipsum",
  "foto": "https://si3.ufc.br/sigaa/img/no_picture.png",
  "matricula": "000000",
  "curso": "CIÊNCIA DA COMPUTAÇÃO",
  "nivel": "GRADUAÇÃO",
  "status": "ATIVO",
  "entrada": "2018.1",
  "semestre": "2019.2",
  "cadeiras": [
    {
      "codigo": "CK0000",
      "componente": "NOME DA CADEIRA",
      "carga_horaria": 96,
      "local": "915",
      "dias": "TER/QUI",
      "horario": "10:00-12:00"
    },
    /* ... */
  ]
}
```

**Error (Provavelmente nome de usuário ou senha errados)**
```javascript
{
  "error": true
}
```

## Desenvolvimento
Você precisa ter [Node.js](https://nodejs.org/) instalado na sua máquina.

Instale as dependências e inicie o servidor.

```sh
$ yarn
$ yarn dev
```
