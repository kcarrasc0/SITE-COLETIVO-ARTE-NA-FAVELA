```markdown
# 🎨 Coletivo Arte na Favela

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-green)

Este é o repositório do site institucional do **Coletivo Arte na Favela**, uma iniciativa sociocultural dedicada a fortalecer jovens periféricos através da arte, cultura e tecnologia.

A plataforma foi desenvolvida para apresentar a missão, as atividades e o impacto do coletivo, servindo como um ponto de encontro digital para a comunidade, parceiros e apoiadores.

---

### 📖 Índice

- [📌 Sobre o Projeto](#-sobre-o-projeto)
- [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📂 Estrutura de Pastas](#-estrutura-de-pastas)
- [🎨 Figma](#-figma)
- [🖼️ Imagem do Projeto](#-imagem-do-projeto)
- [🚀 Como Executar](#-como-executar)

---

### 📌 Sobre o Projeto

O **Coletivo Arte na Favela** é uma iniciativa dedicada a fortalecer jovens periféricos, na faixa etária de 13 a 29 anos, por meio de encontros e atividades que integram cultura, educação, tecnologia, saúde e desenvolvimento social.

Fundado em 6 de novembro de 2024, o coletivo tem como missão formar novas lideranças e disseminar conhecimento sobre temas urgentes como mudanças climáticas, vivências dos povos tradicionais e originários, saúde, combate ao preconceito e inovação. Utilizamos a arte em suas diversas formas — poesia, batalhas de rima, cinema, dança e comunicação — como principal ferramenta de transformação social.

Este site tem como objetivo ser a vitrine digital do projeto, apresentando:
-   **Página Inicial:** Um resumo do impacto e das principais frentes de atuação.
-   **Sobre Nós:** Detalhes sobre a história, missão e valores do coletivo.
-   **Atividades:** Uma galeria ou portfólio com os projetos já realizados.
-   **Notícias:** Uma seção para divulgação de novidades e comunicados.

#### Realização
Este projeto é uma realização conjunta de:
-   **Coletivo Arte na Favela**
-   **KCarrasco**
-   **Jovens no Clima RECIFE**
-   **RFEC**

---

### 💻 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas de desenvolvimento web:

-   **Front-end:**
    -   `HTML5`
    -   `CSS3`
    -   `JavaScript`
-   **Biblioteca Principal:**
    -   `React`
-   **Ambiente de Desenvolvimento:**
    -   `Vite`: Um build tool moderno e extremamente rápido.
    -   `npm`: Gerenciador de pacotes.
    -   `ESLint`: Para garantir a qualidade e padronização do código.

---

### 📂 Estrutura de Pastas

O projeto está organizado da seguinte forma para facilitar a manutenção e escalabilidade:


SITE-COLETIVO-ARTE-NA-FAVELA/
│
├── dist/                   \# Pasta de build, com os arquivos finais para produção
├── public/                 \# Arquivos estáticos (imagens, fontes)
│   └── assets/
│       └── images/         \# Imagens utilizadas no projeto
│
├── src/                    \# Código fonte da aplicação
│   ├── components/         \# Componentes React reutilizáveis (Header, Footer, etc.)
│   │   ├── Atividades/
│   │   ├── Carousel/
│   │   ├── Coletivo/
│   │   ├── Footer/
│   │   └── Header/
│   │
│   ├── pages/              \# Páginas principais da aplicação (Home, Sobre, etc.)
│   │   ├── Atividades/
│   │   ├── Comunicacao/
│   │   ├── Home/
│   │   ├── Noticias/
│   │   └── Sobre/
│   │
│   ├── App.css             \# Estilos globais do componente principal
│   ├── App.jsx             \# Componente raiz da aplicação
│   ├── index.css           \# Estilos globais (reset, variáveis, etc.)
│   └── main.jsx            \# Ponto de entrada da aplicação React
│
├── .gitignore              \# Arquivos e pastas a serem ignorados pelo Git
├── eslint.config.js        \# Arquivo de configuração do ESLint
├── index.html              \# Template HTML principal
├── package.json            \# Metadados e dependências do projeto
└── README.md               \# Este arquivo :)

---

### 🎨 Figma

O design do projeto e o protótipo de interface foram desenvolvidos no Figma e podem ser acessados através do link abaixo:

**[Link para o protótipo no Figma]** *(<-- Substitua este texto pelo seu link)*

---

### 🖼️ Imagem do Projeto

*Substitua a imagem abaixo por um print da sua aplicação. Coloque o print na pasta `public/assets/images/` e ajuste o caminho se necessário.*

![Demonstração do Projeto](public/assets/images/screenshot_do_projeto.png)

---

### 🚀 Como Executar

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd SITE-COLETIVO-ARTE-NA-FAVELA
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).
````
