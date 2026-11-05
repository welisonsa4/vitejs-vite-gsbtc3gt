---
name: radsaber-test-and-verify
description: Define e executa verificações proporcionais para mudanças do RadSaber, distinguindo testes executados de testes planejados. Use antes de concluir uma implementação ou validar uma correção.
---

# Testes e validação do RadSaber

## Objetivo
Verificar que uma alteração atende ao objetivo e não introduz regressões conhecidas.

## Procedimento
1. Identifique os critérios de aceitação antes de testar.
2. Consulte scripts existentes em `package.json`; não presuma comandos.
3. Escolha verificações proporcionais ao escopo: TypeScript, build, testes automatizados, navegação, busca, responsividade, console e rede.
4. Teste também estados negativos e vazios quando relevantes.
5. Não instale ferramentas de teste sem avaliar necessidade e compatibilidade.
6. Registre comando, ambiente, resultado e limitações.
7. Separe:
   - executado e aprovado;
   - executado e falhou;
   - não executado;
   - verificação manual pendente.
8. Não confunda build bem-sucedido com funcionalidade validada.

## Entrega
Tabela com critério, método, resultado e evidência; falhas encontradas; riscos residuais; recomendação de aprovação ou bloqueio.

## Regra
Nunca afirme que executou comandos ou abriu o navegador se não teve acesso efetivo a esses recursos.
