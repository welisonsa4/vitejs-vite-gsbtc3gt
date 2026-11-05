---
name: radsaber-security-review
description: Revisa riscos de segurança e privacidade no RadSaber, incluindo segredos, dependências, permissões, dados pessoais e publicação. Use antes de integrações, autenticação, administração ou release.
---

# Revisão de segurança do RadSaber

## Objetivo
Identificar riscos reais e recomendações proporcionais à arquitetura existente.

## Checklist
- Segredos, tokens e chaves fora do frontend e do repositório público.
- Arquivos `.env` e regras do `.gitignore`.
- Dependências, versões e vulnerabilidades conhecidas quando verificáveis.
- Validação de entradas e tratamento de erros.
- Autenticação, autorização e acesso administrativo, se existirem.
- Exposição de dados em logs, URLs e respostas.
- HTTPS e configuração da hospedagem.
- Backup e recuperação.
- Licenças de fontes, ícones, bibliotecas e imagens.
- LGPD e minimização de dados pessoais, quando aplicável.
- Ausência de dados identificáveis de pacientes em exemplos e testes.

## Método
1. Descreva o escopo e as evidências disponíveis.
2. Não presuma que recursos inexistentes já estejam implementados.
3. Classifique riscos por severidade e probabilidade.
4. Recomende a menor correção eficaz.
5. Não altere configurações críticas, credenciais ou infraestrutura sem aprovação explícita.
6. Nunca solicite que o usuário cole senhas, tokens ou chaves privadas no chat.

## Entrega
Achado, evidência, impacto, gravidade, recomendação e forma segura de validar.

## Limite
Não declare o sistema seguro ou em conformidade apenas com base em uma revisão estática ou build.
