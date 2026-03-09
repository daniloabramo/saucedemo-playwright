# Playwright Test Automation

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)


Suite de testes automatizados para o site [SauceDemo](https://www.saucedemo.com/), cobrindo fluxos de integração e E2E com Playwright e TypeScript, seguindo o padrão Page Object Model.


## 📋 Sobre o Projeto

Automação de testes de integração e end-to-end WEB para SauceDemo utilizando Playwright e TypeScript, seguindo o padrão Page Object Model.

## 📊 Metodologia Aplicada nos Testes

Os testes foram organizados em duas camadas:

- **Integração** — valida a comunicação entre módulos da aplicação, como o fluxo de autenticação e carregamento do inventário de produtos
- **E2E (End-to-End)** — simula o comportamento real de um usuário, do login até a confirmação do pedido

Todos os testes seguem o padrão **AAA (Arrange, Act, Assert)**, garantindo clareza e manutenibilidade.

## ✅ Cobertura de Testes

| Tipo | Cenário | Status |
|---|---|---|
| Integração | Login com credenciais válidas → listagem de produtos | ✅ |
| Integração | Login com credenciais inválidas → exibição de erro | ✅ |
| E2E | Login → adicionar produto → checkout → confirmação do pedido | ✅ |

## 📈 Relatório

O relatório HTML é gerado automaticamente pelo Playwright após cada execução e publicado via GitHub Pages.

🔗 **[Acessar relatório completo](https://daniloabramo.github.io/saucedemo-playwright/)**

## 🔄 CI/CD Pipeline
O pipeline é executado automaticamente via GitHub Actions a cada push ou pull request na branch main.

### Etapas do pipeline:
- Checkout do repositório
- Configuração do Node.js 20
- Instalação das dependências (npm ci)
- Instalação dos browsers Chromium e Firefox
- Execução dos testes de integração
- Execução dos testes E2E
- Upload do relatório HTML como artefato

## Padrão Page Object Model
Cada página possui uma classe dedicada com métodos para interação, promovendo:

- ☑️ Reusabilidade de código
- ☑️ Manutenibilidade facilitada
- ☑️ Separação entre lógica de teste e interação com elementos
- ☑️ Redução de código duplicado

## 🛠️ Tecnologias Utilizadas
| Tecnologia     | Versão         | Finalidade                             |
| -------------- | -------------- | -------------------------------------- |
| Playwright     | ^1.42.0        | Framework de automação de testes       |
| TypeScript     | via Playwright | Tipagem estática e segurança de código |
| Node.js        | 20+            | Ambiente de execução                   |
| GitHub Actions | —              | Pipeline de CI/CD                      |
| GitHub Pages   | —              | Publicação do relatório de testes      |

## 📁 Estrutura do Projeto
```
saucedemo-playwright/
├── .github/
│   └── workflows/
│       └── ci.yml
├── tests/
│   ├── integration/
│   │   └── login.spec.ts
│   └── e2e/
│       └── checkout.spec.ts
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── playwright.config.ts
├── package.json
└── README.md
```

### Pré-requisitos
- Node.js 18+
- npm 9+

## Instalação
```bash
git clone https://github.com/daniloabramo/saucedemo-test-automation.git
cd saucedemo-test-automation
npm install
npx playwright install chromium firefox
```
## Executando os testes
```bAsh
# todos os testes
npm test                  

# apenas integração
npm run test:integration

# apenas E2E
npm run test:e2e     

# abrir relatório HTML
npm run report            
```

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

