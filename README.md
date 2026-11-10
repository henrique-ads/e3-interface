# UmaBusca

Sistema inteligente para profissionais de tecnologia encontrarem, em uma única busca e com a fonte à vista, a informação atual de que precisam para executar uma tarefa. Versão final (E3) do protótipo da E2, de Desenvolvimento de Interfaces (ADS/CEUB).

**Para quem:** desenvolvedoras e desenvolvedores como a persona Marina, que hoje procuram em 4 ou mais ferramentas (Git, tarefas, wiki, chat) e já tiveram erro por usar documentação desatualizada.

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
- Apoio de IA (Claude, da Anthropic) na geração inicial do código; o grupo revisou e adaptou. «Confirme a política da disciplina sobre uso de IA antes de entregar.»
