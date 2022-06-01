## Commit

#### Create a new branch

Use the number of task to create a new branch

**Type task to branch**

- feature (To new features)
- bugfix (To bug fix)
- chore (To updated feature)

```sh
git checkout <type-task>/<number_task>_description-of-task
```

Exemple:

```sh
git checkout -b feature/icd-2056_description-of-task
```

#### Make Push

Follow the same pattern as the task type to describe the commit

**Type task to commit**

- feat (To new features)
- fix (To bug fix)
- refactor (To updated feature)
- See more here: https://www.npmjs.com/package/git-commit-msg-linter

Exemple:

```sh
git add .
git commit -m "feat: adicionado o botao veja mais"
git push origin feature/icd-2056_description-of-task
```

#### Pull Request (PR)

Create a PR of your branch with target branch homolog

#### Merge in homolog branch

After approved your pull request

```sh
git checkout homolog

git merge feature/icd-2056_description-of-task
```

**Obs: Don't delete your branch after merge (This is very important)**

Case don't have conflict

```sh
git push origin homolog
```

After make deploy on workspace **homolog** of Vtex
