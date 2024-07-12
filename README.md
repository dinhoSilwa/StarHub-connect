# Starthub

Starthub é uma aplicação web desenvolvida com React, Tailwind CSS e Axios que permite buscar usuários do GitHub, favoritar e categorizar esses usuários por stacks, como frontends, backends, entre outros.

## Funcionalidades

-   **Busca de Usuários:** Pesquise usuários do GitHub pelo nome de usuário.
-   **Favoritar Usuários:** Adicione usuários aos seus favoritos para acessá-los rapidamente.
-   **Categorias por Stack:** Organize seus usuários favoritos em categorias como frontends, backends, etc.
-   **Interface Intuitiva:** Navegação fácil e design responsivo utilizando Tailwind CSS.

## Tecnologias Utilizadas

-   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
-   **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
-   **Axios:** Cliente HTTP baseado em Promises para realizar requisições à API do GitHub.
-   **MongoDB:** Banco de dados NoSQL utilizado para armazenamento de dados.

## Como Rodar o Projeto

1.  Clone o repositório:
    
    bash
    
    Copiar código
    
    `git clone https://github.com/seu-usuario/starthub.git
    cd starthub` 
    
2.  Instale as dependências:
    
    bash
    
    Copiar código
    
    `npm install` 
    
3.  Configuração do MongoDB:
    
    -   Certifique-se de ter um servidor MongoDB configurado. Você pode utilizar serviços como MongoDB Atlas para hospedar seu banco de dados na nuvem.
4.  Configure as variáveis de ambiente:
    
    -   Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias para a conexão com o MongoDB, por exemplo:
        
        makefile
        
        Copiar código
        
        `MONGODB_URI=sua-uri-de-conexao` 
        
5.  Inicie a aplicação:
    
    bash
    
    Copiar código
    
    `npm run dev` 
    
6.  Acesse a aplicação no seu navegador:
    
    arduino
    
    Copiar código
    
    `http://localhost:3000` 
    

## Estrutura do Projeto

-   `src/`: Contém os arquivos fonte do projeto.
    -   `components/`: Componentes reutilizáveis da aplicação.
    -   `pages/`: Páginas da aplicação.
    -   `services/`: Configuração do Axios para requisições à API do GitHub e serviço de conexão com o MongoDB.
    -   `styles/`: Arquivos de estilo utilizando Tailwind CSS.
    -   `utils/`: Funções utilitárias.

## Contribuição

1.  Faça um fork do projeto.
2.  Crie uma nova branch com a sua feature: `git checkout -b minha-feature`.
3.  Faça commit das suas alterações: `git commit -m 'Minha nova feature'`.
4.  Faça push para a branch: `git push origin minha-feature`.
5.  Envie um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.