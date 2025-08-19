# Git Operations Demo Repository Guide

## 🎯 Complete Demo Scenarios & Sample Commits

This repository contains **7 branches** with **realistic scenarios** for teaching Git operations. Each branch demonstrates specific Git concepts with actual commits you can practice on.

---

## 📊 Repository Structure

```
git-ops-demo/
├── main                           # 📄 Presentation + baseline
├── feature/authentication        # 🔐 Clean feature development
├── feature/ui-improvements        # 🎨 Parallel development
├── hotfix/security-patch         # 🚨 Emergency fixes  
├── experimental/new-api          # ⚠️  Large files + mistakes
├── demo/messy-development        # 🗑️  Commits needing squash
└── feature/user-validation-clean # ✨ Professional PR example
```

---

## 🎮 Demo 1: Basic Git Operations

**Branch**: `main`
**Sample Commits**:
```bash
7440a5a Add comprehensive Git essentials presentation
69cf4b6 Initial commit: Basic app structure
```

**Practice Commands**:
```bash
git clone <repo-url>
git status
git log --oneline
git show 7440a5a
```

**Teaches**: Clone, status, log, show

---

## 🎮 Demo 2: Clean Feature Development

**Branch**: `feature/authentication`
**Sample Commits**:
```bash
e91bc43 Add basic authentication system

- Implement authenticateUser function
- Add login prompts to startApp  
- Hardcoded credentials for demo purposes
```

**Practice Commands**:
```bash
git checkout feature/authentication
git log --oneline
git diff main..feature/authentication
```

**Teaches**: Branching, clean commits, diff between branches

---

## 🎮 Demo 3: Parallel Development

**Branch**: `feature/ui-improvements`
**Sample Commits**:
```bash
bb351e0 Add modern UI with CSS and HTML

- Create responsive HTML layout
- Add gradient background and glass morphism effects
- Style buttons with hover animations
- Integrate with existing JavaScript functionality
```

**Practice Commands**:
```bash
git checkout feature/ui-improvements
git log --graph --oneline --all
git show bb351e0 --stat
```

**Teaches**: Parallel development, visual commit history

---

## 🎮 Demo 4: Emergency Hotfixes & Cherry-Pick

**Branch**: `hotfix/security-patch`
**Sample Commits**:
```bash
cdf2a97 SECURITY: Remove hardcoded credentials

- Replace hardcoded API keys with environment variables
- Add additional security patterns to .gitignore
- Prevent future accidental credential commits

CRITICAL: This fixes a major security vulnerability
```

**Cherry-Pick Scenario**:
```bash
# Apply security fix to main without other experimental changes
git checkout main
git cherry-pick cdf2a97
```

**Teaches**: Hotfixes, cherry-picking, security practices

---

## 🎮 Demo 5: Large Files & BFG Cleanup

**Branch**: `experimental/new-api`
**Sample Commits**:
```bash
ce6d317 Add experimental GraphQL API

WARNING: Experimental features
- New GraphQL schema for user management
- Mock data and resolvers
- Large test dataset included (accidentally)

This commit demonstrates common mistakes:
- Large binary/data files in git
- Experimental code on wrong branch  
- Mixed concerns in single commit
```

**Files**: Contains `large-dataset.json` (28KB+ of test data)

**BFG Demo Commands**:
```bash
# Remove large files from history
bfg --strip-blobs-bigger-than 10M .git
bfg --delete-files large-dataset.json .git
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

**Teaches**: Large file problems, BFG cleanup, repository maintenance

---

## 🎮 Demo 6: Messy Commits & Interactive Rebase

**Branch**: `demo/messy-development`
**Sample Commits** (ready for squashing):
```bash
fdf9608 add basic tests (should be separate PR)
0c3ee51 fix startup flow to use validation result  
b71419f actually implement validation properly
2dc34d1 oops forgot return statement
001ec0d WIP: starting validation work
```

**Interactive Rebase Demo**:
```bash
git checkout demo/messy-development
git rebase -i HEAD~5

# In editor:
pick 001ec0d WIP: starting validation work
squash 2dc34d1 oops forgot return statement  
squash b71419f actually implement validation properly
squash 0c3ee51 fix startup flow to use validation result
pick fdf9608 add basic tests (should be separate PR)
```

**Result**: Clean history with logical commits

**Teaches**: Interactive rebase, squashing, commit organization

---

## 🎮 Demo 7: Professional PR Workflow

**Branch**: `feature/user-validation-clean`
**Sample Commits**:
```bash
0926b81 feat: Add comprehensive user validation system

- Implement validateInput with proper error handling
- Add getUserInput with retry logic and user cancellation  
- Create validateUser with detailed logging and validation flow
- Include comprehensive JSDoc documentation
- Add full test suite with edge case coverage

Closes #123 - User validation requirements
Addresses security concerns from previous code review
```

**Files Added**:
- Enhanced `app.js` with full validation system
- `validation.test.js` with comprehensive test suite

**PR Best Practices Demonstrated**:
- ✅ Single, focused feature
- ✅ Comprehensive documentation
- ✅ Full test coverage
- ✅ Professional commit message
- ✅ References to issues
- ✅ Addresses code review feedback

**Teaches**: PR creation, code review preparation, professional development

---

## 🛠️ Practice Scenarios

### Scenario 1: Squashing Messy Commits
```bash
git checkout demo/messy-development
git log --oneline  # See the mess
git rebase -i HEAD~4  # Clean it up
```

### Scenario 2: Cherry-Pick Security Fix
```bash
git checkout main
git cherry-pick cdf2a97  # Apply just the security fix
```

### Scenario 3: Force-with-Lease After Rebase
```bash
git checkout demo/messy-development
git rebase -i HEAD~3  # Squash some commits
git push --force-with-lease origin demo/messy-development
```

### Scenario 4: Large File Cleanup
```bash
git checkout experimental/new-api
ls -lah large-dataset.json  # See the large file
# Use BFG to remove it from history
```

### Scenario 5: Professional PR Preparation
```bash
git checkout feature/user-validation-clean
git log --stat  # Review changes
git push --force-with-lease origin feature/user-validation-clean
# Create PR on GitHub
```

---

## 📚 Learning Progression

### Beginner (Start Here)
1. **Basic Operations** - Use `main` branch
2. **Branching** - Practice with `feature/authentication`
3. **Merging** - Merge feature branches to main

### Intermediate  
4. **Cherry-Pick** - Use `hotfix/security-patch` → `main`
5. **Conflict Resolution** - Try merging conflicting branches
6. **Reset & Revert** - Practice mistake recovery

### Advanced
7. **Interactive Rebase** - Clean up `demo/messy-development`
8. **Force-with-Lease** - After rebasing branches
9. **BFG Cleanup** - Remove `large-dataset.json` from history

### Professional
10. **PR Workflow** - Study `feature/user-validation-clean`
11. **Code Review** - Compare clean vs messy commits
12. **Release Management** - Practice with hotfix workflows

---

## 🎯 Quick Command Reference

```bash
# View all branches and their purposes
git branch -a --format='%(refname:short) %(subject)'

# See commit history across all branches  
git log --oneline --all --graph --decorate

# Compare any two branches
git diff branch1..branch2

# Practice cherry-picking
git cherry-pick <commit-hash>

# Interactive rebase (last 5 commits)
git rebase -i HEAD~5

# Safe force push after rebase
git push --force-with-lease origin <branch-name>

# Remove large files with BFG
bfg --strip-blobs-bigger-than 10M .git
```

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/josephrobertlopez/git-ops-demo.git
   cd git-ops-demo
   ```

2. **Explore the branches**:
   ```bash
   git branch -a
   ```

3. **Start with the presentation**:
   ```bash
   cat git-essentials-presentation.md
   ```

4. **Pick a scenario and practice**!

---

## 💡 Pro Tips

- **Always check** `git status` before and after operations
- **Use** `git log --graph --oneline --all` to visualize branch history  
- **Practice** interactive rebase on the messy development branch
- **Try** force-with-lease instead of regular force push
- **Experiment** with BFG on the experimental branch (it's safe to mess up!)

Happy Git learning! 🎉