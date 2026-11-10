# UmaBusca

Sistema inteligente para profissionais de tecnologia encontrarem, em uma única busca e com a fonte à vista, a informação atual de que precisam para executar uma tarefa. Versão final (E3) do protótipo da E2, de Desenvolvimento de Interfaces (ADS/CEUB).

**Para quem:** desenvolvedoras e desenvolvedores como a persona Marina, que hoje procuram em 4 ou mais ferramentas (Git, tarefas, wiki, chat) e já tiveram erro por usar documentação desatualizada.

**Repositório:** https://github.com/henrique-ads/e3-interface · **Site publicado:** https://henrique-ads.github.io/e3-interface/

**Protótipo da E2:** https://henrique-ads.github.io/prototipo-E2/

## Como rodar

Abra `index.html` no navegador. Se preferir um servidor local: `python -m http.server 8000` e acesse http://localhost:8000.
Para testar: busque `deploy` (vai à resposta) e qualquer outro termo (vai à tela sem resultado).

## O que cada arquivo faz

| Arquivo | Função |
| --- | --- |
| `index.html` | Tela 1: busca |
| `resposta.html` | Tela 2: resposta com fonte e selo de atualidade, filtro de fontes e feedback |
| `sobre.html` | Quinta página: problema, princípio e grupo |
| `fonte.html` | Tela 3: fonte aberta |
| `sem-resultado.html` | Tela 4: sem resultado ou sem acesso, com pedido de acesso |
| `assets/css/style.css` | Estilos (Flexbox e Grid, tema claro/escuro, 360/768/1280 px) |
| `assets/js/app.js` | Interatividade: tema, menu, validação com mensagem própria, filtro e ordenação de fontes, copiar comando, pedido de acesso |
| `assets/img/` | Logotipo e ilustração |
| `MUDANCAS.md` | O que mudou em relação ao protótipo e por quê |

## Créditos

- Henrique Bernardes Machado e Kauê Rodrigues de Oliveira Rocha (grupo).
- Bootstrap 5.3 (https://getbootstrap.com), usado em um componente (o aviso da tela de resposta).
- Apoio de IA (Claude, da Anthropic) na geração inicial do código; o grupo revisou e adaptou.

## Divisão do trabalho

- **Henrique Bernardes Machado:** páginas HTML, CSS e imagens.
- **Kauê Rodrigues de Oliveira Rocha:** interatividade em JavaScript, README e MUDANCAS.

## Exigências da E3 e onde estão

| Exigência | Onde |
| --- | --- |
| 3 a 5 páginas navegáveis | 5 páginas ligadas pelo menu do topo |
| HTML semântico, títulos em ordem | `header`, `nav`, `main`, `section`, `footer`; um `h1` por página |
| Formulário com `label`, `type` e validação nativa | Busca (`index.html`), pedido de acesso (`sem-resultado.html`) e feedback (`resposta.html`) |
| CSS externo, sem `style=` | `assets/css/style.css` |
| Responsivo (360, 768 e 1280 px) | Grid e Flexbox; o menu vira botão abaixo de 768 px |
| Teclado, foco visível | Link "Pular para o conteúdo" e `:focus-visible` |
| Imagens com `alt` | Logotipo com texto; ilustração decorativa com `alt=""` |
| 3 interações em JS e manipulação do DOM | Tema, menu, validação própria, filtro e ordenação das fontes, copiar comando, pedido de acesso |
| Componente com framework CSS | Selo "Atenção" com o badge do Bootstrap; CSS puro equivalente comentado em `style.css` |
| `MUDANCAS.md` | O que divergiu do protótipo e por quê |
