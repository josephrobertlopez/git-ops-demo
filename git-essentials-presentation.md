# Git Essentials for New Coders
## High-Level Overview & Scenario Guide

> **Complete Learning System**: This presentation + hands-on repository with 7 realistic scenarios

---

## The Git Learning Philosophy 🎭

**The Great Debate Result**: Context-driven, progressive learning wins!

**Three Key Insights**:
- 🛡️ **Foundation First**: Master daily workflows before advanced features
- ⚡ **Real Problems**: Learn tools when you encounter actual scenarios
- 🎯 **Progressive Mastery**: Build from basics → recovery → professional → crisis

**Our Approach**: Learn Git through **developer stories** with real consequences

---

## Your Learning Toolkit 📱

**Repository**: https://github.com/josephrobertlopez/git-ops-demo

**Three Essential Documents**:
- 📋 **MANIFEST.md** - Quick branch & commit inventory
- 📖 **This presentation** - High-level tools & scenarios  
- 📚 **DEMO-GUIDE.md** - Detailed practice companion

**Seven Developer Stories**:
- `main` - Sarah's foundation journey
- `feature/authentication` - Alex's clean development  
- `feature/ui-improvements` - Sam's parallel work
- `hotfix/security-patch` - Jordan's emergency fix
- `demo/messy-development` - Taylor's commit cleanup
- `feature/user-validation-clean` - Morgan's professional PR
- `experimental/new-api` - Casey's large file disaster

---

## Essential Git Tools by Scenario

### 🛡️ Level 1: Daily Survival (Sarah's Foundation)
**Commands**: `clone`, `status`, `add`, `commit`, `push`, `pull`  
**Scenario**: New developer contributing to existing project  
**Practice Branch**: `main`
```bash
git clone <repo-url>           # Get the code
git status                     # Where am I?
git log --oneline              # What's been done?
```

### 🌳 Level 2: Team Collaboration (Alex & Sam's Branches)
**Commands**: `branch`, `checkout`, `merge`, `diff`  
**Scenario**: Parallel feature development  
**Practice Branches**: `feature/authentication`, `feature/ui-improvements`
```bash
git checkout -b feature-name   # Create new branch
git diff main..feature-branch  # Compare changes
```

### 🍒 Level 3: Emergency Response (Jordan's Cherry-Pick)
**Commands**: `cherry-pick`, `reset`, `revert`  
**Scenario**: Apply specific fixes without full merge  
**Practice Branch**: `hotfix/security-patch`
```bash
git cherry-pick <commit-hash>  # Apply specific commit
```

### 📝 Level 4: Professional Polish (Taylor & Morgan)
**Commands**: `rebase -i`, `push --force-with-lease`  
**Scenario**: Clean history before code review  
**Practice Branches**: `demo/messy-development`, `feature/user-validation-clean`
```bash
git rebase -i HEAD~5           # Clean up commits
git push --force-with-lease    # Safe force push
```

### 💣 Level 5: Crisis Recovery (Casey's BFG)
**Commands**: BFG, `reflog`, `gc`  
**Scenario**: Remove large files or sensitive data from history  
**Practice Branch**: `experimental/new-api`
```bash
bfg --strip-blobs-bigger-than 10M .git  # Remove large files
```

---

## Complete Scenario List

### Scenario 1: Sarah's First Day (Foundation)
**What happens**: New developer needs to explore and understand existing project  
**Git skills**: `clone`, `status`, `log`, `show`, `diff`  
**Practice**: Explore `main` branch, understand project structure  
**Outcome**: Confidence with basic Git navigation

### Scenario 2: Alex's Authentication Feature (Clean Development)  
**What happens**: Developer adds login functionality on dedicated branch  
**Git skills**: `branch`, `checkout`, `add`, `commit`, clean commit messages  
**Practice**: Review `feature/authentication` branch  
**Outcome**: Understanding of feature branch workflow

### Scenario 3: Sam's UI Improvements (Parallel Development)
**What happens**: Designer works on styling while Alex codes authentication  
**Git skills**: Parallel branching, `diff` between branches, visual history  
**Practice**: Compare `feature/ui-improvements` with other branches  
**Outcome**: Appreciation for non-conflicting parallel work

### Scenario 4: Jordan's Security Crisis (Cherry-Pick)
**What happens**: Production has security vulnerability, need surgical fix  
**Git skills**: `cherry-pick`, selective commit application, hotfix workflow  
**Practice**: Apply `hotfix/security-patch` commit to main  
**Outcome**: Mastery of targeted fixes without full merges

### Scenario 5: Taylor's Messy Development (Interactive Rebase)
**What happens**: Developer has embarrassing commit history before review  
**Git skills**: `rebase -i`, squashing, commit reorganization  
**Practice**: Clean up `demo/messy-development` branch commits  
**Outcome**: Professional commit history preparation

### Scenario 6: Morgan's Professional PR (Force-with-Lease)
**What happens**: Senior developer demonstrates perfect pull request standards  
**Git skills**: `push --force-with-lease`, professional commit messages, testing  
**Practice**: Study `feature/user-validation-clean` branch quality  
**Outcome**: Understanding of professional development standards  

### Scenario 7: Casey's Large File Disaster (BFG Cleanup)
**What happens**: Accidentally committed large dataset, repository bloated  
**Git skills**: BFG repo-cleaner, repository maintenance, history cleanup  
**Practice**: Remove `large-dataset.json` from `experimental/new-api`  
**Outcome**: Crisis recovery and repository optimization skills

---

## Quick Start Guide 🚀

### For New Developers
1. **Clone repository**: `git clone https://github.com/josephrobertlopez/git-ops-demo.git`
2. **Start with Sarah**: Explore `main` branch with basic commands
3. **Read DEMO-GUIDE.md**: Get detailed character stories and practice steps
4. **Progress through levels**: Foundation → Collaboration → Emergency → Professional → Crisis

### For Instructors  
1. **Check MANIFEST.md**: Complete branch and commit inventory for quick reference
2. **Use scenario list**: Pick appropriate scenarios for skill level
3. **Demo commands**: Each level has specific commands to demonstrate
4. **Practice scenarios**: Students can work through real Git problems

### For Self-Learners
1. **Read this overview**: Understand the philosophy and approach
2. **Pick your scenario**: Start where you feel comfortable  
3. **Use DEMO-GUIDE.md**: Follow detailed character stories for context
4. **Practice safely**: Repository is designed for experimentation

---

## Command Reference by Level

### Level 1 (Daily Workflow)
```bash
git status                     # Check current state
git log --oneline             # View commit history  
git add <files>               # Stage changes
git commit -m "message"       # Save changes
git push                      # Share with team
git pull                      # Get team updates
```

### Level 2 (Branching)
```bash
git branch <name>             # Create branch
git checkout <branch>         # Switch branches
git checkout -b <name>        # Create and switch
git merge <branch>            # Merge branches
git diff <branch1>..<branch2> # Compare branches
```

### Level 3 (Recovery)
```bash
git cherry-pick <hash>        # Apply specific commit
git reset --soft HEAD~1       # Undo last commit, keep changes
git reset --hard HEAD~1       # Undo last commit, lose changes
git revert <hash>             # Create commit that undoes changes
```

### Level 4 (Professional)
```bash
git rebase -i HEAD~N          # Interactive rebase last N commits
git push --force-with-lease   # Safe force push after rebase
git log --graph --oneline --all # Visual branch history
```

### Level 5 (Crisis Management)
```bash
bfg --strip-blobs-bigger-than 50M    # Remove large files
bfg --delete-files filename          # Remove specific files
git reflog expire --expire=now --all # Clean reflog
git gc --prune=now --aggressive      # Garbage collection
```

---

## Learning Philosophy Recap

**Anti-Patterns** (Avoid these):
- ❌ Learning all commands at once (cognitive overload)
- ❌ Memorizing without context (no retention)
- ❌ Using `git push --force` (dangerous to teammates)
- ❌ Skipping the stories (missing emotional context)

**Pro-Patterns** (Do these):
- ✅ Learn through realistic developer scenarios
- ✅ Progress from basics to advanced based on need
- ✅ Practice on safe demo repository  
- ✅ Understand WHY before memorizing HOW
- ✅ Use `--force-with-lease` for safe rebasing

---

## Next Steps

**Choose Your Adventure**:
- **New to Git?** Start with Sarah's story (`main` branch)
- **Need cherry-pick skills?** Jump to Jordan's crisis (`hotfix/security-patch`)
- **Messy commits?** Learn from Taylor's cleanup (`demo/messy-development`)
- **Want professional standards?** Study Morgan's PR (`feature/user-validation-clean`)

**Remember**: Great developers aren't born knowing Git. They learn it by solving real problems, one story at a time.

**Your Git adventure starts now!** 🎉

---

# Appendices - Detailed Reference Material

> **For Curious Learners**: Deep technical details and advanced scenarios

---

## Appendix A: Complete Command Reference

### Basic Operations (Level 1)

#### Repository Setup
```bash
git clone <url>                    # Clone remote repository
git clone <url> <directory>        # Clone to specific directory
git init                           # Initialize new repository
git remote -v                      # Show remote repositories
git remote add origin <url>        # Add remote repository
```

#### Daily Workflow
```bash
git status                         # Show working tree status
git status --short                 # Compact status output
git add <file>                     # Stage specific file
git add .                          # Stage all changes
git add -A                         # Stage all changes including deletions
git commit -m "message"            # Commit with message
git commit -am "message"           # Stage and commit tracked files
git push                           # Push to remote
git push -u origin <branch>        # Push and set upstream
git pull                           # Fetch and merge
git fetch                          # Fetch without merging
```

#### History and Information
```bash
git log                            # Show commit history
git log --oneline                  # Compact history
git log --graph                    # Visual branch history
git log --stat                     # Show file statistics
git show <commit>                  # Show commit details
git diff                           # Show unstaged changes
git diff --staged                  # Show staged changes
git diff <commit1>..<commit2>      # Compare commits
```

### Branching (Level 2)

#### Branch Management
```bash
git branch                         # List local branches
git branch -a                      # List all branches
git branch -r                      # List remote branches
git branch <name>                  # Create branch
git branch -d <name>               # Delete branch (safe)
git branch -D <name>               # Force delete branch
git checkout <branch>              # Switch to branch
git checkout -b <name>             # Create and switch
git switch <branch>                # Modern branch switching
git switch -c <name>               # Create and switch (modern)
```

#### Merging
```bash
git merge <branch>                 # Merge branch
git merge --no-ff <branch>         # Force merge commit
git merge --squash <branch>        # Squash merge
```

### Recovery Operations (Level 3)

#### Undoing Changes
```bash
git reset HEAD <file>              # Unstage file
git reset --soft HEAD~1            # Undo commit, keep staged
git reset --mixed HEAD~1           # Undo commit and staging
git reset --hard HEAD~1            # Undo commit, staging, and changes
git checkout -- <file>             # Discard file changes
git restore <file>                 # Modern file restoration
git restore --staged <file>        # Modern unstaging
```

#### Cherry-picking and Reverting
```bash
git cherry-pick <commit>           # Apply specific commit
git cherry-pick -n <commit>        # Apply without committing
git revert <commit>                # Create commit that undoes changes
git revert -n <commit>             # Revert without committing
```

### Professional Operations (Level 4)

#### Interactive Rebase
```bash
git rebase -i HEAD~N               # Interactive rebase last N commits
git rebase -i <commit>             # Rebase from specific commit
git rebase --continue              # Continue after resolving conflicts
git rebase --abort                 # Abort rebase
git rebase --skip                  # Skip current commit
```

#### Advanced Pushing
```bash
git push --force-with-lease        # Safe force push
git push --force-with-lease origin <branch>  # Force push specific branch
git push -f                        # Dangerous force push (avoid!)
```

### Crisis Management (Level 5)

#### Repository Maintenance
```bash
git reflog                         # Show reference history
git reflog expire --expire=now --all  # Clean reflog
git gc                             # Garbage collection
git gc --prune=now --aggressive    # Aggressive cleanup
git fsck                           # Check repository integrity
```

#### Advanced Recovery
```bash
git reset --hard <commit>          # Reset to specific commit
git cherry-pick <commit1>..<commit2>  # Cherry-pick range
git blame <file>                   # Show line-by-line history
git bisect start                   # Start binary search for bugs
git bisect bad                     # Mark commit as bad
git bisect good <commit>           # Mark commit as good
```

---

## Appendix B: Troubleshooting Guide

### Common Error Messages and Solutions

#### "fatal: not a git repository"
```bash
# Problem: Not in a Git repository
# Solution: Navigate to repository or initialize
cd /path/to/repository
# OR
git init
```

#### "fatal: remote origin already exists"
```bash
# Problem: Remote already configured
# Solution: Remove and re-add or update URL
git remote remove origin
git remote add origin <new-url>
# OR
git remote set-url origin <new-url>
```

#### "error: failed to push some refs"
```bash
# Problem: Remote has changes you don't have locally
# Solution: Pull first, then push
git pull origin <branch>
git push origin <branch>
```

#### "CONFLICT (content): Merge conflict"
```bash
# Problem: Merge conflicts
# Solution: Resolve conflicts manually
# 1. Edit files to resolve conflicts
# 2. Remove conflict markers (<<<<<<<, =======, >>>>>>>)
# 3. Stage resolved files
git add <resolved-file>
git commit
```

#### "error: Your local changes would be overwritten"
```bash
# Problem: Local changes conflict with checkout/merge
# Solutions:
git stash                          # Temporarily save changes
git checkout <branch>
git stash pop                      # Restore changes
# OR
git commit -am "WIP: save changes" # Commit changes first
```

### Performance Issues

#### Large Repository
```bash
git config core.preloadindex true        # Speed up status
git config core.fscache true             # Windows file system cache
git config gc.auto 256                   # Adjust garbage collection
```

#### Slow Operations
```bash
git config --global core.editor "code --wait"  # Faster editor
git config --global merge.tool "code"           # Visual merge tool
git config --global diff.tool "code"            # Visual diff tool
```

---

## Appendix C: Advanced Scenarios

### Scenario A: Multiple Remotes
```bash
# Add additional remote (e.g., fork)
git remote add upstream <original-repo-url>
git remote add fork <your-fork-url>

# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### Scenario B: Collaborative Workflow
```bash
# Feature branch workflow
git checkout main
git pull origin main
git checkout -b feature/new-feature
# ... work on feature ...
git push -u origin feature/new-feature
# Create pull request
# After approval:
git checkout main
git pull origin main
git branch -d feature/new-feature
```

### Scenario C: Hotfix Workflow
```bash
# Emergency fix
git checkout main
git checkout -b hotfix/critical-fix
# ... make fix ...
git commit -am "Fix critical bug"
git push -u origin hotfix/critical-fix

# Apply to other branches
git checkout develop
git cherry-pick hotfix/critical-fix
```

### Scenario D: Release Management
```bash
# Create release branch
git checkout develop
git checkout -b release/v1.2.0
# ... final testing and bug fixes ...
git checkout main
git merge --no-ff release/v1.2.0
git tag -a v1.2.0 -m "Version 1.2.0"
git push origin main --tags

# Merge back to develop
git checkout develop
git merge --no-ff release/v1.2.0
```

---

## Appendix D: Configuration and Customization

### Global Configuration
```bash
# User identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Editor and tools
git config --global core.editor "code --wait"
git config --global merge.tool vimdiff
git config --global diff.tool vimdiff

# Aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lg "log --oneline --graph --decorate --all"
```

### Repository-specific Configuration
```bash
# Set different email for work repository
git config user.email "work.email@company.com"

# Set different push behavior
git config push.default simple
```

### Useful Aliases
```bash
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD"
git config --global alias.visual "!gitk"
git config --global alias.history "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

---

## Appendix E: BFG Repo-Cleaner Guide

### Installation
```bash
# macOS
brew install bfg

# Manual download
wget https://rtyley.github.io/bfg-repo-cleaner/releases/download/v1.14.0/bfg-1.14.0.jar
```

### Common Use Cases

#### Remove Large Files
```bash
# Remove files larger than 100MB from history
bfg --strip-blobs-bigger-than 100M .git

# Remove specific large files
bfg --delete-files large-file.zip .git
```

#### Remove Sensitive Data
```bash
# Remove passwords from history
bfg --replace-text passwords.txt .git

# Delete files with secrets
bfg --delete-files id_rsa .git
bfg --delete-files "*.key" .git
```

#### Complete Cleanup Process
```bash
# 1. Clone fresh copy
git clone --mirror <repo-url>

# 2. Run BFG
bfg --strip-blobs-bigger-than 50M repo.git

# 3. Cleanup
cd repo.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# 4. Push cleaned history
git push
```

---

## Appendix F: Git Internals (For the Very Curious)

### Repository Structure
```bash
.git/
├── HEAD                    # Current branch reference
├── config                  # Repository configuration
├── description             # Repository description
├── hooks/                  # Git hooks
├── info/                   # Additional info
├── objects/                # Git object database
│   ├── info/
│   └── pack/
└── refs/                   # References
    ├── heads/              # Branch references
    ├── remotes/            # Remote references
    └── tags/               # Tag references
```

### Object Types
```bash
# Blob - File contents
git cat-file -p <hash>

# Tree - Directory structure  
git ls-tree <hash>

# Commit - Commit object
git show <hash>

# Tag - Tagged object
git show <tag>
```

### Low-level Commands
```bash
git hash-object -w <file>         # Create blob object
git update-index --add <file>     # Add to index
git write-tree                    # Write tree object
git commit-tree <tree> -m "msg"   # Create commit object
```

---

This completes the comprehensive Git learning system. Use the main presentation for overview and scenarios, then dive into these appendices for detailed technical knowledge!