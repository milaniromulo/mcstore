# App Shared

Responsible for managing all configuration files, methods, classes, general store helpers, to be used in extended components (apps), which can inherit this designer system in a centralized place

## Using

- Husky
- Eslint
- Prettier
- Commit MSG Linter
- Styled Components

## Use Git

- Master: Production environment
- Homolog: Homologation environment

## Editing the Manifest.json

Once in the repository directory, it is time to edit the Minimum Boilerplate manifest.json file.

Once in are in the file, you must replace the vendor and account values. vendor is the account name you are working on and account is anything you want to name your theme. For example:

```sh
{
  "vendor": "storename",
  "name": "my-test-theme"
}
```

## Installing required apps

In order to use Store Framework and work on your store theme, it is needed to have both vtex.store-sitemap and vtex.store installed.

Run vtex list and check whether those apps are already installed.

If they aren't, run the following command to install them:

```sh
vtex install vtex.store-sitemap vtex.store -f
```

## Uninstalling any existing theme

By running `vtex list`,  you can verify if any theme is installed.

It is common to already have a `vtex.store-theme`  installed when you start the store's front development process.

Therefore, if you find it in the app's list, copy its name and use it together with the command `vtex uninstall`. For example:

```json
vtex uninstall vtex.store-theme
```

## Create Workspace

```json
vtex use {workspaceName} --production
``

## Run and preview your store

Then time has come to upload all the changes you made in your local files to the platform. For that, use the vtex link command.

```sh
vtex link --verbose

vtex browse
```

#### Releasing your project (Github or Bitbucket)

To release your project, run ``yarn release {patch/minor/major}``.\
\
This command will update the version in ``package.json`` and release branch ``develop`` merging with ``master`` running ``git flow release``.

##### Examples:
**MAJOR:** when you make incompatible changes with backwards versions.\
**MINOR:** when you add functionality in a backwards compatible manner.\
**PATCH:** when you make some changes or fixes in existence functionalities.

``yarn release patch`` update version from ``1.2.1`` to ``1.2.2``\
``yarn release minor`` update version from ``1.2.1`` to ``1.3.0``\
``yarn release major`` update version from ``1.2.1`` to ``2.0.0``

##### Opitionals:
You can also run the build command together. Just add in your `.release.json`:
```
"pre_commit_commands": [
    "npm run build"
]
```
> **Warning**: Before release, make sure your code is up to date, in ``develop`` branch.


## Deploy

#### Homologation (workspace homolog)

```sh
vtex use homolog

vtex release pre

vtex install

vtex deploy --force
```

ou quando nao tiver versão beta nas dependências do manifest, use
voce da vtex release patch beta.

```sh
vtex use homolog

vtex release patch beta

vtex install

vtex deploy --force
```

#### Production (workspace master)

```sh
vtex use master

vtex release patch stable

vtex install

vtex deploy --force
```

## See URL

```sh
vtex browse
```

## See env

```sh
vtex whoami
```

## References

#### Minimum Boilerplate Theme

https://github.com/vtex-apps/minimum-boilerplate-theme

#### Store theme

https://github.com/vtex-apps/store-theme

#### Icons

https://styleguide.vtex.com/#!/Icons


#### Store Block course template

https://github.com/vtex-trainings/store-block-template



