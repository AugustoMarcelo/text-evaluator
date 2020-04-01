# :boom: Text Evaluator
A ferramenta é um buscador de textos cadastrados previamente no banco e permite que o público possa avaliar-los. A aplicação foi hospedada no **Netlify (frontend)** e no **Heroku (backend)**.

# :star: Funcionalidades
- Cadastro de textos a partir da importação de arquivos .csv
- Exportação dos dados para .csv
- Avaliação dos textos buscados aleatoriamente
- Filtro na listagem dos textos de acordo com as formas de avaliação

# :gear: Tecnologias
 - ReactJS
 - Node.js
 - Sequelize
 - Postgres
 - Heroku (via CLI)

# :computer: Instruções para execução
> Para executar a aplicação localmente, você precisará ter instalado em sua máquina o node, yarn e o postgres (banco de dados). Utilizei o docker para criar um container contendo o banco de dados.

 - Após clonar o repositório, você deve entrar em cada uma das pastas (frontend e backend) e executar o comando `yarn` para que o mesmo faça o download de todas as dependências necessárias;

 - Caso esteja utilizando docker, você pode fazer o download da imagem do postgres através do comando `docker run --name nome-da-instancia -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres` ou `docker start nome-da-instancia` caso já tenha instalado;

 - Após efetuar o download das dependências, execute `yarn dev` na pasta backend para rodar o projeto localmente. Em seguida, na pasta frontend, execute `yarn start` para executar a aplicação localmente;

# :cloud: Instruções para hospedagem
> As instruções abaixo serão direcionadas para hospedar as aplicações no **Netlify (frontend)** e **Heroku (backend)**

 - A hospedagem do frontend é mais simples, você pode fazer login com sua conta do github e permitir o deploy no repositório desejado. Na estrutura de pastas atual do projeto, você precisará configurar algumas opções no menu **Settings > Build & Deploy**: 

  <div style="display: flex; align-items: center; justify-content: center;">
    <table>
      <thead>
        <tr>
          <th>Configuração</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Base directory</strong>
          </td>
          <td>frontend</td>
        </tr>
        <tr>
          <td>
            <strong>Build command</strong>
          </td>
          <td>yarn build</td>
        </tr>
        <tr>
          <td>
            <strong>Publish directory</strong>
          </td>
          <td>frontend/build/</td>
        </tr>
      </tbody>
    </table>
  </div>

 - Será necessário adicionar na pasta **public** um arquivo *_redirects* para que o roteamento de páginas possa funcionar. Dentro do arquivo adicione a seguinte linha:
  `/*    /index.html   200`;

 - Para o backend, será necessário instalar a cli do heroku. Você pode fazer via chocolatey com o comando `choco install heroku` ou pelo comando `npm install -g heroku`;

 - Com a cli do heroku instalado, execute o comando `heroku login` para realizar a autenticação;

 - Será necessário adicionar uma ferramenta (addons) para que o heroku consiga gerenciar o postgres. Você pode fazer isso pela própria dashboard do heroku ou via comando `heroku addons:create heroku-postgresql:hobby-dev`. A instalação pode levar alguns minutos; para checar se a ferramenta foi instalada, execute `heroku addons`;

 - Dada a estrutura atual de pastas, na raiz do projeto, execute `git subtree push --prefix backend heroku master` para repassar todo o backend para o repositório criado pelo heroku;

 - Na dashboard do heroku, crie as variáveis ambiente conforme o arquivo .env.example sugere;

 - Para criar as tabelas no banco remoto, execute o comando `heroku run sequelize db:migrate`;

 - O próprio heroku se encarregará de fazer o deploy automático da aplicação sempre que novos commits forem registrados.

# :bookmark_tabs: Referências
 - https://medium.com/@aem_iro/deploying-a-node-js-postgressql-app-to-heroku-hosting-platform-cc611287ae76
 - https://www.taniarascia.com/node-express-postgresql-heroku/