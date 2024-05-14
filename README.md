# Sistema de Gerenciamento de Pessoas

Um simples sistema de gerenciamento de pessoas, construído com React no frontend e Spring Boot no backend, que permite realizar operações básicas de CRUD (Create, Read, Update, Delete) em uma entidade Person.

## Tecnologias Utilizadas

### Frontend (React)
- React 17
- Axios para comunicação com o backend
- CSS para estilização

### Backend (Spring Boot)
- Java 17
- Spring Boot 3.2.4
- Spring Data JPA
- H2 Database (para simplificar o desenvolvimento)
- Spring Web
- Lombok para reduzir a verbosidade do código

## Como Usar

1. Clone este repositório:

    ```bash
    git clone https://github.com/Psiyllo/Estudo-java.git
    ```

2. Importe o projeto backend (`PeopleApplication.java`) e o projeto frontend (a partir de `src/index.js`) em suas respectivas IDEs.

3. Certifique-se de ter o Java 17 e o Maven instalados em sua máquina para executar o backend.

4. No frontend, instale as dependências usando o npm:

    ```bash
    npm install
    ```

5. Execute o aplicativo Spring Boot. Isso pode ser feito executando a classe `PeopleApplication.java` como uma aplicação Java.

6. Inicie o servidor React para o frontend:

    ```bash
    npm start
    ```

7. O aplicativo estará disponível em `http://localhost:3000`.

## Endpoints Disponíveis

- **GET /people**: Retorna todas as pessoas cadastradas.
- **GET /people/{id}**: Retorna uma pessoa com o ID especificado.
- **POST /people**: Registra uma nova pessoa.
- **PUT /people/{id}**: Atualiza os dados de uma pessoa existente.
- **DELETE /people/{id}**: Remove uma pessoa existente.

## Capturas de Tela

![Tela de Adição de Pessoa](screenshots/add_person.png)
*Adicione uma nova pessoa fornecendo o nome, CPF e idade.*

![Tela de Lista de Pessoas](screenshots/people_list.png)
*Visualize todas as pessoas cadastradas, com opções para editar ou excluir.*

## Estrutura do Projeto

- **`/src`**: Contém o código-fonte do frontend React.
- **`/src/App`**: Contém os componentes principais da aplicação React.
- **`/src/services/api.js`**: Configuração do Axios para comunicação com o backend.
- **`/src/styles.css`**: Arquivo de estilos CSS personalizado para o frontend.

- **`/src/main/java/com/example/demo`**: Contém o código-fonte do backend Spring Boot.
- **`/src/main/resources`**: Contém os recursos de configuração do backend, como arquivos .properties e scripts SQL.

## Próximos Passos

- Melhorar a interface do usuário com animações e feedback visual mais intuitivo.
- Implementar autenticação de usuário e controle de acesso.
- Adicionar funcionalidades adicionais, como ordenação e filtragem na lista de pessoas.
