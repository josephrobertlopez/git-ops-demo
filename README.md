# Git Operations Demo Repository
## Learn Git Through Real Developer Stories

🎯 **Complete Git Learning System** with 7 hands-on scenarios, realistic commits, and progressive skill building.

---

## 🎯 **STREAMLINED**: Git Mastery System

🚀 **[Git Mastery Unified](git-mastery-unified.md)** - **MAIN PRESENTATION**
- **High-level commands** for real developer situations
- **Micro-narratives** + immediate context + practice branches
- **Perfect for presentations**, quick reference, and situation mapping

## 📚 Complete Learning System

| Document | Purpose | Best For |
|----------|---------|----------|
| 🎯 [**git-mastery-unified.md**](git-mastery-unified.md) | **Streamlined commands + situations** | **Presentations, quick decisions, overview** |
| 📚 [**DEMO-GUIDE.md**](DEMO-GUIDE.md) | **Deep scenario walkthroughs** | **Immersive practice, complete context** |
| ⚡ [**git-productivity-masterclass.md**](git-productivity-masterclass.md) | Immediate productivity gains | Instant results, copy-paste templates |
| 📖 [**git-essentials-presentation.md**](git-essentials-presentation.md) | Academic-style with appendices | Complete reference, detailed learning |

## 🚀 Quick Start

### Want Command + Situation Overview?
```bash
git clone https://github.com/josephrobertlopez/git-ops-demo.git
cd git-ops-demo
cat git-mastery-unified.md  # Perfect presentation format!
```

### Want Deep Hands-On Practice?
```bash
# After reading unified guide, dive deep:
cat DEMO-GUIDE.md  # Complete character stories with walkthroughs
# Then practice on the actual branches mentioned
```

### Emergency Git Situations?
```bash
# Quick decision tree in unified guide:
# "Production broken?" → git cherry-pick
# "History embarrassing?" → git rebase -i  
# "Need safe push?" → git push --force-with-lease
```

### Teaching Git to Others?
```bash
# Unified guide = perfect presentation slides
# Demo guide = hands-on workshop material  
# Branch inventory below = instructor reference
```

---

## 🎭 Seven Developer Stories

| Character | Branch | Scenario | Git Skills |
|-----------|--------|----------|-----------|
| **Sarah** | `main` | First day exploration | `clone`, `status`, `log`, `show` |
| **Alex** | `feature/authentication` | Clean feature development | `branch`, `checkout`, `commit` |
| **Sam** | `feature/ui-improvements` | Parallel development | Branching, `diff`, visual history |
| **Jordan** | `hotfix/security-patch` | Emergency cherry-pick | `cherry-pick`, hotfix workflow |
| **Taylor** | `demo/messy-development` | History cleanup | `rebase -i`, squashing commits |
| **Morgan** | `feature/user-validation-clean` | Professional PR | `push --force-with-lease`, quality standards |
| **Casey** | `experimental/new-api` | Large file disaster | BFG cleanup, repository maintenance |

---

## 🎯 Learning Philosophy

**Context-driven, progressive learning** based on real developer scenarios:

1. **🛡️ Foundation** - Master daily workflows first
2. **🌳 Collaboration** - Learn branching when working with others  
3. **🍒 Emergency** - Cherry-pick for crisis response
4. **📝 Professional** - Interactive rebase for code review prep
5. **💣 Crisis** - BFG for historical cleanup disasters

**No abstract command memorization** - every Git operation has a story and real consequence.

---

## 🛠️ What You'll Practice

✅ **Cherry-picking** commits for surgical fixes  
✅ **Interactive rebase** to clean messy commit history  
✅ **Force-with-lease** for safe rebasing  
✅ **BFG repo-cleaner** for large file removal  
✅ **Professional PR workflow** with proper standards  
✅ **Realistic mistake recovery** scenarios  
✅ **Parallel development** without conflicts

---

## 📊 Repository Stats

- **7 branches** with different scenarios
- **11 total commits** across all branches  
- **8 demo files** including realistic web application
- **Real mistakes** like large files, hardcoded secrets, messy commits
- **Professional examples** with proper documentation and testing

---

## 🎓 Perfect For

- **Bootcamp instructors** teaching Git workflows
- **New developers** learning Git through stories  
- **Experienced developers** wanting cherry-pick/rebase practice
- **Teams** establishing Git workflow standards
- **Anyone** who prefers learning through realistic scenarios

---

## 📋 Branch & Commit Quick Reference

**Repository Stats**: 7 branches | 11 commits | 8 demo files  
**Practice URL**: https://github.com/josephrobertlopez/git-ops-demo

### Complete Branch Inventory

| Branch | Purpose | Key Commits | Demo Focus |
|--------|---------|-------------|------------|
| `main` | **Documentation & Baseline** | `69cf4b6` Basic app structure<br>`7440a5a` Git essentials presentation | Basic operations, exploration |
| `feature/authentication` | **Clean Development** | `e91bc43` Add authentication system | Branching, clean commits |
| `feature/ui-improvements` | **Parallel Development** | `bb351e0` Add modern UI with CSS | Concurrent work, visual changes |
| `hotfix/security-patch` | **Emergency Fixes** | `cdf2a97` SECURITY: Remove hardcoded credentials | **Cherry-pick practice** |
| `demo/messy-development` | **History Cleanup** | `001ec0d` WIP: starting validation<br>`2dc34d1` oops forgot return<br>`b71419f` actually implement properly<br>`0c3ee51` fix startup flow<br>`fdf9608` add basic tests | **Interactive rebase practice** |
| `feature/user-validation-clean` | **Professional PR** | `0926b81` feat: Add comprehensive validation | Professional standards |
| `experimental/new-api` | **Large File Disaster** | `ce6d317` Add experimental GraphQL API<br>⚠️ Contains `large-dataset.json` (28KB+) | **BFG cleanup practice** |

### Quick Workshop Commands

```bash
# Clone and explore
git clone https://github.com/josephrobertlopez/git-ops-demo.git
cd git-ops-demo
git log --oneline --all --graph    # See all 11 commits
git branch -a                      # See all 7 branches

# Practice cherry-pick (Jordan's crisis)
git checkout main
git cherry-pick cdf2a97            # Apply security fix

# Practice interactive rebase (Taylor's cleanup)
git checkout demo/messy-development
git rebase -i HEAD~5               # Clean up 5 messy commits

# Practice BFG cleanup (Casey's disaster)
git checkout experimental/new-api
ls -lah large-dataset.json         # See the 28KB mistake
bfg --delete-files large-dataset.json .git
```

### File Structure by Branch

**All Branches**: `README.md`, presentation files  
**Main**: `app.js`, `config.js` (⚠️ has secrets), `.gitignore`  
**UI Branch**: + `styles.css`, `index.html`  
**API Branch**: + `api.js`, `large-dataset.json` (⚠️ 28KB problem)  
**Messy Branch**: + `tests.js` (across 5 commits)  
**Clean Branch**: + `validation.test.js` (professional quality)

---

**Start your Git learning adventure**: Read the [unified guide](git-mastery-unified.md), then practice on the [character stories](DEMO-GUIDE.md)! 🎉