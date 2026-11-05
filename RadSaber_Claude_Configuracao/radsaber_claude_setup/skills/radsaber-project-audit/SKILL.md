---
name: radsaber-project-audit
description: Audita o estado real do RadSaber antes de mudanças, examinando estrutura, arquivos, dependências, Git e funcionalidades. Use no início de uma tarefa técnica ou quando houver dúvida sobre o estado atual.
---

# Auditoria do projeto RadSaber

## Objetivo
Produzir um diagnóstico baseado em evidências, sem modificar arquivos.

## Procedimento
1. Confirme quais fontes estão disponíveis: arquivos anexados, GitHub, documentos do projeto ou apenas descrição do usuário.
2. Identifique branch, commit e data da referência quando essas informações estiverem acessíveis.
3. Inspecione primeiro os arquivos diretamente relacionados à tarefa.
4. Examine `package.json`, scripts, estrutura de pastas e arquivos relevantes quando disponíveis.
5. Diferencie explicitamente:
   - fato observado;
   - informação relatada pelo proprietário;
   - hipótese;
   - informação não verificada.
6. Identifique riscos de regressão e dependências.
7. Não execute alterações, comandos destrutivos, publicação ou migração.
8. Não afirme que testes foram executados se apenas foram sugeridos.

## Entrega
- Escopo e fontes examinadas.
- Estado observado.
- Evidências e limitações.
- Problemas classificados por gravidade.
- O que deve ser preservado.
- Recomendações priorizadas.
- Testes necessários.
- Próximo passo que depende de aprovação.

## Regra
Se não houver acesso ao código, solicite os arquivos ou trechos necessários. Nunca invente o conteúdo do repositório.
