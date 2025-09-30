# 🔄 Guia de Sincronização com o Projeto Original

Este guia explica como manter seu fork sincronizado com o projeto original Stash Icons.

## 📋 **Métodos de Sincronização**

### **1. Sincronização Automática (Recomendado)**

```bash
# Executar o script de sincronização automática
npm run sync:upstream
```

Este script faz tudo automaticamente:
- ✅ Busca atualizações do repositório original
- ✅ Faz merge das mudanças
- ✅ Converte novos ícones para Angular
- ✅ Faz build dos pacotes Angular
- ✅ Atualiza versões automaticamente
- ✅ Publica no GitHub Packages
- ✅ Faz commit e push das mudanças

### **2. Sincronização Manual**

#### **Passo 1: Buscar Atualizações**
```bash
git fetch upstream
```

#### **Passo 2: Verificar Mudanças**
```bash
git log HEAD..upstream/master --oneline
```

#### **Passo 3: Fazer Merge**
```bash
git merge upstream/master
```

#### **Passo 4: Converter Novos Ícones**
```bash
npm run convert:angular
```

#### **Passo 5: Build e Publicação**
```bash
npm run build:angular
npm run publish:github
```

#### **Passo 6: Commit e Push**
```bash
git add .
git commit -m "feat: sync with upstream and update Angular packages"
git push origin master
```

## 🔍 **Como Verificar Novos Ícones**

### **Verificar Ícones Regulares:**
```bash
find packages/regular/src -name "*.tsx" | wc -l
```

### **Verificar Ícones Sólidos:**
```bash
find packages/solid/src -name "*.tsx" | wc -l
```

### **Verificar Ícones Angular:**
```bash
find packages/angular-regular/src -name "*.component.ts" | wc -l
find packages/angular-solid/src -name "*.component.ts" | wc -l
```

## 📊 **Monitoramento de Mudanças**

### **Verificar Últimas Atualizações:**
```bash
git log upstream/master --oneline -10
```

### **Verificar Diferenças:**
```bash
git diff HEAD upstream/master
```

### **Verificar Arquivos Modificados:**
```bash
git diff --name-only HEAD upstream/master
```

## 🚨 **Resolução de Conflitos**

Se houver conflitos durante o merge:

### **1. Verificar Conflitos:**
```bash
git status
```

### **2. Resolver Conflitos:**
```bash
# Editar arquivos com conflitos
# Depois adicionar ao stage
git add .
```

### **3. Finalizar Merge:**
```bash
git commit
```

## 🔄 **Configuração Inicial (Uma Vez)**

Se você ainda não configurou o upstream:

```bash
# Adicionar repositório original como upstream
git remote add upstream https://github.com/stash-ui/icons.git

# Verificar configuração
git remote -v
```

## 📅 **Frequência Recomendada**

- **Semanal**: Execute `npm run sync:upstream` para manter atualizado
- **Antes de trabalhar**: Sempre sincronize antes de fazer mudanças
- **Após releases**: Sincronize quando o projeto original lançar nova versão

## 🎯 **Workflow Recomendado**

1. **Sincronizar**: `npm run sync:upstream`
2. **Desenvolver**: Fazer suas mudanças
3. **Testar**: Verificar se tudo funciona
4. **Commitar**: `git add . && git commit -m "sua mensagem"`
5. **Publicar**: `npm run publish:github`
6. **Push**: `git push origin master`

## 🔧 **Troubleshooting**

### **Erro: "upstream não encontrado"**
```bash
git remote add upstream https://github.com/stash-ui/icons.git
```

### **Erro: "Conflitos de merge"**
```bash
git status
# Resolver conflitos manualmente
git add .
git commit
```

### **Erro: "Falha no build"**
```bash
npm run convert:angular
npm run build:angular
```

## 📝 **Notas Importantes**

- ✅ Sempre teste após sincronizar
- ✅ Mantenha backup das suas mudanças
- ✅ Use branches para mudanças experimentais
- ✅ Documente mudanças importantes
- ✅ Mantenha o histórico de commits limpo
