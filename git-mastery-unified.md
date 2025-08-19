# Git Mastery: The Complete Guide
## High-Level Commands for Real Developer Situations

> **Practice Repository**: https://github.com/josephrobertlopez/git-ops-demo  
> **Deep Scenarios**: See [DEMO-GUIDE.md](DEMO-GUIDE.md) for complete character stories

---

## Essential Git Operations by Developer Situation

### 🏗️ **Daily Foundation - Sarah's Exploration**

**Sarah joins a new team and needs to understand the project...**

```bash
git clone <repository-url>     # Get the project
git status                     # What's my current state?
git log --oneline --graph      # What's the project history?
git show <commit-hash>         # What changed in this commit?
```

**Situations:**
- 📋 **When:** Starting new job, exploring unfamiliar codebase, understanding project history
- 🚫 **Avoid:** Jumping into changes without understanding existing work  
- ✅ **Result:** Confidence with codebase, understanding team workflow

**Practice Branch:** `main` - Explore our demo project structure

---

### 🌳 **Feature Development - Alex's Clean Branch**

**Alex needs to add authentication without breaking existing work...**

```bash
git checkout -b feature/new-feature    # Create isolated workspace
git add <files>                        # Stage specific changes  
git commit -m "Clear description"      # Save logical chunks
git push -u origin feature/new-feature # Share with team
```

**Situations:**
- 📋 **When:** Adding new features, collaborating with team, maintaining clean history
- 🚫 **Avoid:** Working directly on main branch, mixing unrelated changes
- ✅ **Result:** Isolated development, easy code reviews, safe experimentation

**Practice Branch:** `feature/authentication` - Study Alex's clean development approach

---

### 🍒 **Emergency Cherry-Pick - Jordan's Crisis Fix**

**Jordan panics: "Production is down! I need JUST the fix, not 47 other commits!"**

```bash
git checkout main                # Switch to target branch
git cherry-pick <commit-hash>    # Apply specific fix only
git push --force-with-lease      # Safe deployment
```

**Situations:**
- 📋 **When:** Production emergencies, hotfixes, applying specific fixes across branches
- 🚫 **Avoid:** Merging entire feature branches for one fix, creating unnecessary complexity
- ✅ **Result:** Surgical precision, 30-second deployments, zero unrelated changes

**Practice Branch:** `hotfix/security-patch` - Apply Jordan's security fix with `git cherry-pick cdf2a97`

---

### 📝 **History Cleanup - Taylor's Embarrassing Commits**

**Taylor's shame: "My commit history is a disaster before code review!"**

```bash
git rebase -i HEAD~N              # Clean up last N commits
# In editor: squash, reword, reorder commits
git push --force-with-lease       # Update branch safely
```

**Situations:**
- 📋 **When:** Before code review, cleaning messy development history, professional presentation
- 🚫 **Avoid:** Submitting "WIP", "fix", "oops" commits to code review
- ✅ **Result:** Professional commit history, faster reviews, team respect

**Practice Branch:** `demo/messy-development` - Clean Taylor's 5 messy commits into 2 logical ones

---

### 🛡️ **Safe Force Push - Morgan's Professional Standards**

**Morgan insists: "Never use `--force`, always use `--force-with-lease`!"**

```bash
git push --force-with-lease origin <branch>    # Safe version
# vs
git push --force origin <branch>               # DANGEROUS!
```

**Situations:**
- 📋 **When:** After rebasing, amending commits, any history rewriting
- 🚫 **Avoid:** Regular `--force` (destroys teammates' work), pushing without checking
- ✅ **Result:** Protects teammates, prevents disasters, enables confident rebasing

**Practice Branch:** Any branch after rebase - Always practice safe pushing

---

### 💣 **Large File Cleanup - Casey's Disaster Recovery**

**Casey's panic: "I accidentally committed 50MB of test data!"**

```bash
# Install BFG first: brew install bfg (macOS)
bfg --strip-blobs-bigger-than 10M .git    # Remove large files
bfg --delete-files filename .git           # Remove specific files
git reflog expire --expire=now --all       # Clean references  
git gc --prune=now --aggressive            # Garbage collection
```

**Situations:**
- 📋 **When:** Accidentally committed large files, sensitive data, repository bloat
- 🚫 **Avoid:** Leaving large files in history, trying to fix with regular Git commands
- ✅ **Result:** Lean repository, removed sensitive data, fast clones

**Practice Branch:** `experimental/new-api` - Remove Casey's `large-dataset.json` file from history

---

### ⚡ **Parallel Development - Sam's UI Work**

**Sam works on design while Alex codes features...**

```bash
git checkout -b feature/ui-changes     # Parallel development branch
git diff main..other-branch            # Compare with teammate's work
git log --graph --oneline --all        # Visualize all work
```

**Situations:**
- 📋 **When:** Multiple developers, parallel features, non-conflicting changes
- 🚫 **Avoid:** Waiting for others to finish, working in same files simultaneously
- ✅ **Result:** Team productivity, parallel workflows, reduced conflicts

**Practice Branch:** `feature/ui-improvements` - See Sam's parallel styling work

---

## Quick Decision Tree

### 🤔 "What Git command should I use?"

**Need to deploy a fix RIGHT NOW?** → `git cherry-pick <hash>`

**Commit history looks embarrassing?** → `git rebase -i HEAD~N`

**Want to push after rebasing?** → `git push --force-with-lease`

**Repository is too big?** → `bfg --strip-blobs-bigger-than 50M .git`

**Starting new feature?** → `git checkout -b feature/name`

**Not sure what changed?** → `git diff` or `git log --oneline`

**Made a mistake?** → `git reset --soft HEAD~1` (keeps your work)

---

## Situation-Command Quick Reference

### Emergency Scenarios
```bash
# Production is broken, need immediate fix:
git cherry-pick <fix-commit-hash>

# Accidentally committed secrets:  
bfg --replace-text passwords.txt .git

# Need to undo last commit:
git reset --soft HEAD~1

# Teammate overwrote my work:
git reflog  # Find your lost commits
```

### Daily Development  
```bash
# Start new feature:
git checkout -b feature/name

# Clean up commits before review:
git rebase -i HEAD~N

# Safe push after rebase:  
git push --force-with-lease

# Apply teammate's fix to my branch:
git cherry-pick <their-commit>
```

### Team Collaboration
```bash
# See what everyone's working on:
git log --graph --oneline --all

# Get latest changes:
git pull --rebase origin main

# Compare branches:
git diff main..feature-branch

# Clean up merged branches:
git branch --merged | xargs git branch -d
```

---

## Common Developer Situations

### **"I'm new to this codebase"**
**Commands:** `git clone`, `git log --oneline`, `git show <hash>`, `git status`  
**Branch Practice:** `main` - Explore project structure and history

### **"I need to add a feature"** 
**Commands:** `git checkout -b`, `git add`, `git commit`, `git push -u`  
**Branch Practice:** `feature/authentication` - Study clean feature development

### **"Production is broken!"**
**Commands:** `git cherry-pick`, `git push --force-with-lease`  
**Branch Practice:** `hotfix/security-patch` - Practice emergency deployments

### **"My commits are messy"**
**Commands:** `git rebase -i`, `git push --force-with-lease`  
**Branch Practice:** `demo/messy-development` - Clean up Taylor's mess

### **"I want professional standards"**
**Commands:** All above + proper commit messages  
**Branch Practice:** `feature/user-validation-clean` - Study Morgan's quality

### **"I made a huge mistake"**
**Commands:** BFG, `git reflog`, `git reset`  
**Branch Practice:** `experimental/new-api` - Fix Casey's large file disaster

---

## Next Steps

### Quick Start (5 minutes)
1. **Clone our practice repo:** `git clone https://github.com/josephrobertlopez/git-ops-demo.git`
2. **Pick your situation** from the list above
3. **Practice the commands** on the relevant branch
4. **Read the deep story** in [DEMO-GUIDE.md](DEMO-GUIDE.md)

### Deep Learning (30 minutes)  
- **Follow character stories** in the demo guide
- **Practice each scenario** multiple times
- **Try combinations** of commands
- **Experiment safely** - it's designed for learning

### Mastery (Ongoing)
- **Use these patterns daily** in your real work
- **Teach teammates** the techniques you learn
- **Create templates** for your common workflows
- **Measure improvement** in deployment speed and confidence

---

## Remember

**Every Git command solves a real developer problem.** The key is knowing WHEN to use each tool, not just HOW.

**Practice on our demo repository first** - it's designed with realistic mistakes and scenarios you'll encounter in real development.

**When in doubt, start with the character story** - our brains remember narrative context better than abstract commands.

**Your Git journey: Understand the situation → Learn the command → Practice safely → Apply confidently** 🚀