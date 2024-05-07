# Sistema de Gerenciamento de Pessoas

Um simples sistema de gerenciamento de pessoas, construído com Spring Boot, que permite realizar operações básicas de CRUD (Create, Read, Update, Delete) em uma entidade Person.

## Tecnologias Utilizadas

- Java 17
- Spring Boot 3.2.4
- Spring Data JPA
- H2 Database
- Spring Web
- Lombok

## Como Usar

1. Clone este repositório:

    ```bash
    git clone https://github.com/Psiyllo/Estudo-java.git
    ```

2. Importe o projeto em sua IDE preferida.

3. Certifique-se de ter o Java 17 e o Maven instalados em sua máquina.

4. Execute o aplicativo Spring Boot. Isso pode ser feito executando a classe `PeopleApplication.java` como uma aplicação Java.

5. O aplicativo estará disponível em `http://localhost:8080/h2-ui`.

## Endpoints Disponíveis

- **GET /people**: Retorna todas as pessoas cadastradas.
- **GET /people/{id}**: Retorna uma pessoa com o ID especificado.
- **POST /people**: Registra uma nova pessoa.
- **PUT /people/{id}**: Atualiza os dados de uma pessoa existente.
- **DELETE /people/{id}**: Remove uma pessoa existente.

![image](https://github.com/Psiyllo/Estudo-java/assets/166714883/87b95357-132c-4ab9-a17e-07e87b0b43a3)
