---
name: radsaber-release-checklist
description: Prepara e revisa a publicação do RadSaber, incluindo build, configuração, variáveis, roteamento, segurança, backup e rollback. Use antes de disponibilizar uma versão em produção.
---

# Checklist de release do RadSaber

## Objetivo
Preparar uma publicação segura e reversível, sem presumir que o produto está pronto.

## Antes do release
1. Confirmar branch, commit e estado de sincronização.
2. Verificar alterações pendentes e preservar um ponto de recuperação.
3. Confirmar critérios de aceitação e funcionalidades incluídas.
4. Executar os scripts de validação existentes.
5. Verificar variáveis de ambiente sem expor seus valores secretos.
6. Conferir roteamento, recarregamento de páginas e caminhos de assets.
7. Verificar responsividade e fluxos principais.
8. Revisar dependências e licenças relevantes.
9. Confirmar HTTPS e configuração do domínio, quando aplicável.
10. Definir backup e procedimento de rollback.

## Durante e depois
- Não publicar sem autorização explícita do proprietário.
- Não executar force push, migração destrutiva ou alteração irreversível.
- Testar a versão publicada em ambiente real.
- Registrar URL, commit, data, testes e limitações.
- Manter plano de reversão.

## Entrega
Checklist com APROVADO, REPROVADO ou NÃO VERIFICADO, evidências, bloqueios e decisão necessária.

## Regra
Build aprovado não significa release aprovado. Não declare publicação concluída sem evidência da versão publicada e testada.
