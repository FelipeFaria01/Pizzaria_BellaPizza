# 🍕 BellaPizza — Cardápio Digital

### Aplicação Front-End | React + JavaScript + Tailwind CSS

Aplicação web responsiva desenvolvida para simular a presença digital de uma pizzaria artesanal, oferecendo uma interface moderna, navegação intuitiva, apresentação de produtos e integração direta com o WhatsApp.

O projeto foi desenvolvido com foco em **experiência do usuário (UX), design de interfaces (UI), componentização e boas práticas de desenvolvimento Front-End**.

## 🌐 Demonstração

🚀 **[Acessar aplicação online](https://pizzaria-bella-pizza.vercel.app/)**

## 📸 Preview

<img width="1585" height="772" alt="Pizzaria" src="https://github.com/user-attachments/assets/6fc78722-3cba-4e7f-ad12-a43ec43bcf3d" />


## 🎯 Sobre o projeto

A BellaPizza é um projeto demonstrativo desenvolvido para apresentar uma solução digital voltada ao setor gastronômico.

A aplicação reúne informações institucionais, cardápio de produtos, avaliações ilustrativas e canais de contato em uma única interface.

A proposta foi desenvolver uma experiência simples e acessível, permitindo que o visitante conheça os produtos e seja direcionado ao WhatsApp para realizar seu pedido.

## 🚀 Funcionalidades

- 🍕 **Cardápio digital:** apresentação dos produtos da pizzaria.
- 📱 **Design responsivo:** adaptação da interface para diferentes tamanhos de tela.
- 💬 **Integração com WhatsApp:** direcionamento para atendimento e pedidos.
- 🧭 **Navegação por seções:** acesso rápido às principais informações.
- ⭐ **Avaliações:** seção demonstrativa de depoimentos.
- 📍 **Localização e contato:** apresentação das informações de atendimento.
- 🧩 **Componentização:** organização da interface em componentes React reutilizáveis.

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| React | Construção da interface |
| JavaScript (JSX) | Lógica e interatividade |
| Tailwind CSS | Estilização e responsividade |
| Vite | Ambiente de desenvolvimento e build |
| WhatsApp | Integração externa para pedidos |
| Vercel | Deploy e hospedagem |
| Git e GitHub | Versionamento do código |

## 🏗️ Estrutura do projeto

```text
pizzaria/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LocationContact.jsx
│   │   ├── Menu.jsx
│   │   ├── MenuCard.jsx
│   │   └── Testimonials.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

A estrutura foi organizada de maneira modular, separando as diferentes seções da interface em componentes independentes, facilitando a manutenção e a reutilização de código.

## 💬 Integração com WhatsApp

A aplicação utiliza integração direta com o WhatsApp para facilitar a comunicação entre o cliente e a pizzaria.

O direcionamento é realizado pelo Front-End, sem necessidade de uma API própria ou banco de dados.

**Fluxo de interação:**

```text
Visitante acessa o site
          ↓
Explora o cardápio digital
          ↓
Seleciona a opção de pedido
          ↓
É direcionado ao WhatsApp
          ↓
Continua o atendimento pelo aplicativo
```

### Decisão técnica

A utilização de uma arquitetura exclusivamente Front-End foi uma escolha alinhada ao escopo do projeto.

Como a comunicação comercial ocorre diretamente pelo WhatsApp, não foi necessário implementar um servidor para processar pedidos.

Essa abordagem simplifica a arquitetura, reduz a necessidade de infraestrutura e facilita a manutenção.

## 💻 Executando localmente

**1. Clone o repositório**

```bash
git clone https://github.com/FelipeFaria01/Pizzaria_BellaPizza.git
```

**2. Acesse a pasta**

```bash
cd Pizzaria_BellaPizza
```

**3. Instale as dependências**

```bash
npm install
```

**4. Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

**5. Abra a aplicação**

Acesse o endereço local informado pelo Vite no terminal.

## 🧠 Conhecimentos aplicados

O desenvolvimento da BellaPizza permitiu aplicar conceitos como:

- Desenvolvimento de interfaces com React.
- Componentização e reutilização de código.
- Manipulação de dados e renderização de componentes.
- Estilização com classes utilitárias do Tailwind CSS.
- Construção de layouts responsivos.
- Organização e manutenção de código.
- Integração com aplicações externas.
- Experiência do usuário e hierarquia visual.
- Versionamento com Git e GitHub.
- Publicação de aplicações na Vercel.

## 📈 Possíveis evoluções

- Implementação de carrinho de compras.
- Personalização dos pedidos.
- Filtros de produtos por categoria.
- Melhorias de acessibilidade.
- Otimização de imagens e desempenho.
- Testes automatizados de componentes.

## 👨‍💻 Desenvolvedor

**Felipe Rodrigo de Faria Mendes**

Desenvolvedor Front-End | React • JavaScript • Tailwind CSS

🔗 [GitHub](https://github.com/FelipeFaria01)

---

**Projeto demonstrativo desenvolvido para fins de portfólio e aprimoramento de habilidades em desenvolvimento Front-End.**
