# VTEX IO

VTEX IO is a cloud-native low code development platform that helps you deliver business solutions faster. From smooth, PWA-ready web stores, to custom admin interfaces and back-end integrations, VTEX IO offers an opinionated set of frameworks that allow you to evolve fast and safely

## Docs

https://vtex.io/docs/

## Courses

https://lab.github.com/vtex-trainings/store-framework

https://lab.github.com/vtex-trainings

## Github

https://github.com/vtex-apps

## Prerequisites

- NodeJS (latest)
- Yarn

## Install

Instalar ou Atualizar o VTEX IO Toolbelt

```sh
npm i -g vtex
```

https://www.npmjs.com/package/vtex

## Editing the Manifest.json

Once in the repository directory, it is time to edit the Minimum Boilerplate manifest.json file.

Once in are in the file, you must replace the vendor and account values. vendor is the account name you are working on and account is anything you want to name your theme. For example:

```sh
{
  "vendor": "storename",
  "name": "my-test-theme"
}
```

## Start

#### 1.Log in to VTEX account

```sh
vtex login
```

#### 2.Create a workspace

```sh
vtex use <workspacename>
```

#### 3.Run

```sh
vtex link --verbose
```

#### 4.Access the store through the workspace

```sh
vtex browse
```

## Workspaces

The workspaces are nothing more than what the namesake suggests. In VTEX IO, accounts have three main types of workspace, namely master, production and development.

Protected work environments that represent a copy very close to the one assembled in production, allowing the evolution of themes without affecting anything in the store.

*** There are three different types of workspaces: ***

Development workspace: an environment where it is possible to link, develop, install and publish applications. It is a workspace where you have more freedom in the settings you are going to make. It does not deal with traffic from production customers, cannot be promoted to master and cannot be used for A / B testing;

Production workspace: handles store traffic in production, can be used for A / B testing and can be promoted to the master workspace. Linking applications is not allowed;

Workspace Master: a unique production workspace in which its content reflects what is presented to the end user of the store.

#### Accessing your workspace

After creating the workspace, you can access it at this link: https: // {workspace} - {account} .myvtex.com, replacing {workspace} and {account} with the name of the previously created workspace and account. For example, https://devworkspace-appliancetheme.myvtex.com

#### See all workspaces

```sh
vtex workspace -ls
```

#### Conflict problems because you did other training, try to run the following command

```sh
vtex workspace reset
```

#### Creating a development workspace

https://devworkspace--appliancetheme.myvtex.com

```sh
vtex use nome-do-workspace
```

#### Creating a production workspace

```sh
vtex use {WorkspaceName} --production
```

## Setting up a store

Instalar as seguintes dependências para a loja funcionar corretamente:

```sh
vtex use master

vtex install vtex.store-sitemap vtex.store vtex.rewriter --force vtex.admin-pages vtex.colossus-legacy-proxy@2.x
```

## Deploy in production

#### In the current workspace

```sh
vtex release minor stable
```

#### Master

```sh
vtex use master
vtex install corebiz.store-theme@4.1.0
vtex deploy corebiz.store-theme@4.1.0
```

## Important commands

Access the store through the workspace

```sh
vtex browse
```

Deploy

```sh
vtex deploy
```

Start new IO file environment

```sh
vtex init
```

Install new APP

```sh
vtex install

vtex install corebiz.sandbox@0.1.2

vtex install {vendor}.{appName}@{version}
```

Uninstall App

```sh
vtex uninstall

vtex uninstall corebiz.store@3.42.0
```

Link app in the development environment

```sh
vtex link
```

Unlink APP in the development environment

```sh
vtex unlink

vtex unlink --all
```

View installed apps

```sh
vtex list

vtex ls
```

Log in to VTEX account

```sh
vtex login
```

Log out of VTEX account

```sh
vtex logout
```

Make APP release

```sh
vtex release
```

View logged user information and workspace

```sh
vtex whoami
```

View active workspace

```sh
vtex workspace list
```

Create a workspace

```sh
vtex use <workspacename>
```

Get personal token

```sh
vtex local token
```

## Others

#### Disable Graphql of SSR

```sh
https://yourworkspace--youraccount.myvtex.com?___disableSSR=true
```

#### html-to-jsx

https://transform.tools/html-to-jsx

#### Inspect elements

```sh
https://yourworkspace--youraccount.myvtex.com?__inspect
```

#### Vtex styleguide

```sh
https://styleguide.vtex.com/
```

