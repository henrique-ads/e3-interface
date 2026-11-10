From 3ce3c19efd490b1a857813dff7979414cf11fb57 Mon Sep 17 00:00:00 2001
From: =?UTF-8?q?Kau=C3=AA=20Rodrigues=20de=20Oliveira=20Rocha?=
 <kaue.oliveira@sempreceub.com>
Date: Tue, 10 Nov 2026 11:35:49 +0000
Subject: [PATCH 1/2] Adiciona a interatividade em JavaScript

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01EUCJJ5TRQNNEBkqb5M4gc7
---
 assets/js/app.js | 117 +++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 117 insertions(+)
 create mode 100644 assets/js/app.js

diff --git a/assets/js/app.js b/assets/js/app.js
new file mode 100644
index 0000000..1e0df5d
--- /dev/null
+++ b/assets/js/app.js
@@ -0,0 +1,117 @@
+(() => {
+  // 1) Alternar tema claro/escuro (lembra a escolha)
+  const raiz = document.documentElement;
+  const salvo = localStorage.getItem("tema");
+  if (salvo) raiz.dataset.tema = salvo;
+  document.getElementById("tema").addEventListener("click", () => {
+    const novo = raiz.dataset.tema === "claro" ? "escuro" : "claro";
+    raiz.dataset.tema = novo;
+    localStorage.setItem("tema", novo);
+  });
+
+  // 2) Abrir/fechar o menu no celular
+  const btnMenu = document.querySelector(".btn-menu");
+  const menu = document.getElementById("menu");
+  btnMenu.addEventListener("click", () => {
+    const aberto = menu.classList.toggle("aberto");
+    btnMenu.setAttribute("aria-expanded", aberto);
+  });
+
+  // 3) Validação com mensagem própria (a validação nativa continua valendo)
+  const mensagens = {
+    q: "Digite pelo menos 2 letras para buscar.",
+    email: "Informe um e-mail válido, como nome@empresa.com.",
+    motivo: "Explique em pelo menos 10 caracteres.",
+    texto: "Escreva pelo menos 5 caracteres."
+  };
+  document.querySelectorAll("[data-msg]").forEach((campo) => {
+    campo.addEventListener("invalid", () => campo.setCustomValidity(mensagens[campo.dataset.msg]));
+    campo.addEventListener("input", () => campo.setCustomValidity(""));
+  });
+
+  // Busca: "deploy"/"homologação" leva à resposta; o resto, à tela sem resultado
+  const busca = document.getElementById("busca");
+  if (busca) {
+    busca.addEventListener("submit", (e) => {
+      e.preventDefault();
+      const q = busca.q.value.trim();
+      const achou = /deploy|homologa[cç][aã]o/i.test(q);
+      location.href = (achou ? "resposta.html" : "sem-resultado.html") + "?q=" + encodeURIComponent(q);
+    });
+  }
+  const termo = document.getElementById("termo");
+  if (termo) termo.textContent = new URLSearchParams(location.search).get("q") || "deploy";
+
+  // 4) Filtro e ordenação da lista de fontes (a página muda sem recarregar)
+  const lista = document.getElementById("fontes");
+  if (lista) {
+    const fontes = [
+      { nome: "README do repositório", tipo: "Git", idade: "2 dias", atu: "atualizado", dias: 2, estado: "usada na resposta" },
+      { nome: "Confluence: Deploy (antiga)", tipo: "Confluence", idade: "8 meses", atu: "atualizada", dias: 240, estado: "desatualizada" }
+    ];
+    const ordem = document.getElementById("ordem");
+    const chips = document.querySelectorAll(".chips button");
+    let filtro = "todas";
+    const desenhar = () => {
+      const itens = fontes
+        .filter((f) => filtro === "todas" || f.tipo === filtro)
+        .sort((a, b) => (ordem.value === "antigas" ? b.dias - a.dias : a.dias - b.dias));
+      lista.replaceChildren(...itens.map((f) => {
+        const li = document.createElement("li");
+        const a = document.createElement("a");
+        a.href = "fonte.html";
+        a.textContent = f.nome;
+        const info = document.createElement("span");
+        info.className = "meta";
+        info.textContent = ` · ${f.tipo} · ${f.atu} há ${f.idade} `;
+        const pilula = document.createElement("span");
+        pilula.className = "selo" + (f.dias > 30 ? " velha" : "");
+        pilula.textContent = f.estado;
+        li.append(a, info, pilula);
+        return li;
+      }));
+      document.getElementById("contagem").textContent = `Mostrando ${itens.length} de ${fontes.length} fontes`;
+    };
+    chips.forEach((b) => b.addEventListener("click", () => {
+      chips.forEach((x) => x.setAttribute("aria-pressed", x === b));
+      filtro = b.dataset.f;
+      desenhar();
+    }));
+    ordem.addEventListener("change", desenhar);
+    desenhar();
+  }
+
+  // 5) Copiar comando
+  const copiar = document.getElementById("copiar");
+  if (copiar) {
+    copiar.addEventListener("click", async () => {
+      try {
+        await navigator.clipboard.writeText(document.getElementById("cmd").textContent);
+        copiar.textContent = "Copiado!";
+      } catch {
+        copiar.textContent = "Copie com Ctrl+C";
+      }
+    });
+  }
+
+  // 6) Mostrar/ocultar o pedido de acesso
+  const pedir = document.getElementById("pedir");
+  if (pedir) {
+    const form = document.getElementById("form-acesso");
+    pedir.addEventListener("click", () => {
+      const abrir = form.hidden;
+      form.hidden = !abrir;
+      pedir.setAttribute("aria-expanded", abrir);
+      if (abrir) form.querySelector("select").focus();
+    });
+  }
+
+  // Formulários com confirmação na própria página
+  document.querySelectorAll("form[data-ok]").forEach((f) => f.addEventListener("submit", (e) => {
+    e.preventDefault();
+    const aviso = document.getElementById(f.dataset.ok);
+    aviso.hidden = false;
+    aviso.focus();
+    f.reset();
+  }));
+})();
-- 
2.43.0

