# Pokeka-search-support-app-ver2.0

ポケモンカードゲームライフを補助してくれるアプリ。
出来ること
コンテンツ 1：
　手持ちのカードの一覧作成補助

コンテンツ 2：
　ポケモンカードの技のダメージと必要なエネルギーの数、種類でカードを検索、ソートが可能。
　ゲームトレーナーズウェブサイトで検索できない条件で検索を出来るようにするサポートアプリ。

参考：https://www.pokemon-card.com/card-search/index.php?keyword=&se_ta=&regulation_sidebar_form=XY&pg=&illust=&sm_and_keyword=true

## インストール

フロントエンド、バックエンド共に各フォルダへ移動し下記コマンドを実行。

```bash
$ git clone https://github.com/your-username/your-project.git
$ cd your-project
$ npm install
```

### migrate & seed

下記コマンドを実行

```bash
$ npm run migrate
$ npm run seed
```

#### 使い方

フロントエンド、バックエンド共にサーバーを起動。
フロントエンド：

```bash
$ npm start
```

バックエンド：

```bash
$ npm s-start
```

##### 機能

コンテンツ 1
１：フロントエンドのトップページへ移動。
２：画面上部のリンクの中から、「俺のカード」をクリック。
３：カード ID と枚数を入力。
４：自分のデータに対し実施したい処理ボタンを押す。追加、置換、削除。
５：手持ちカード表示ボタンを押すとカード一覧を表示。

コンテンツ 2
１：フロントエンドのトップページへ移動。
２：画面上部のリンクの中から、「技検」をクリック。
３：検索ボタンクリックで結果一覧を表示。

プロジェクト詳細(MIRO)
https://miro.com/app/board/uXjVMcZmjS4=/#tpicker-content

技術スタック
・Express
・React
・Knex
・PostgreSQL
・Render.com

テクノロジー

プログラミング言語:JavaScript

フレームワークとライブラリ:
フロントエンド: React
バックエンド: Express

データベース:PostgreSQL

バージョン管理システム:Git

テストフレームワークとツール:Mocha、Chai 　　仮

パッケージマネージャー:npm

統合開発環境（IDE）:Visual Studio Code

memo
クラウドプラットフォーム:Amazon Web Services (AWS)、Microsoft Azure、Google Cloud Platform など
プロジェクト管理ツール:Jira、Trello、Asana など
デプロイメントツール:Docker、Kubernetes、Jenkins、Travis CI など

ライセンス
利用許諾条件：関係者のみ使用可能。
免責事項：自己責任で使用する。

貢献
追加で期待する機能については slack で要望できる。
また、作成協力はいつでも可能。

問い合わせ先

クレジット
Presented by kida @ Wimbledon
