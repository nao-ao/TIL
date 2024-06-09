# github コマンド
# リモートリポジトリ関連

## リモートリポジトリの確認

```bash
git remote -v
```

## リモートリポジトリの追加

```bash
git remote add [name] [URL]
```

## リモートリポジトリの削除

```bash
git remote rm [name]
```

## リモートリポジトリの URL の変更

```bash
git remote set-url origin [URL]
```

## リモートリポジトリの名前を変更 name1 → name2

```bash
git remote rename [name1] [name2]
```

## デフォルトのリモートを確認する方法

```bash
git branch -vv
```

すべてのローカルブランチについて一括で確認したい場合は `--all` オプションを使用すれば可能です．

```bash
git branch -vv --all

# git branch -vv -a でも可能 
```

## デフォルトのリモートを変更する方法

```bash
git push -u origin main
```

`-u` をつけて実行すると該当ブランチのデフォルトリモートが変更されます．

あるいは以下の方法でも可能です．

```bash
git branch -u github main
```

# sub module 関連

## sub module の pull 初回

```bash
git submodule update --init --recursive
```

## sub module の pull 2 回目

```bash
git pull --recurse-submodules
```

# git ignore のキャッシュを削除する方法

## ファイル全体を削除する場合

```bash
git rm -r --cached . 
```

## ファイルを指定して削除する場合

```bash
git rm -r --cached [ファイル名]
```

# 編集内容を取り消す方法 (add する前)

```bash
git checkout [ファイル名]
```

# チーム開発フロー

```mermaid
sequenceDiagram
  main ->> feature/A : git checkout -b fearure/A
  Note over feature/A : 編集
  Note over feature/A : add
  Note over feature/A : commit
  Note over feature/A : push origin feature/A
  feature/A ->> main : PR
  actor reviewer
  actor new_reviewer
  actor server
  alt 既にクローンしている場合
    main ->> reviewer : Review
    Note over reviewer : git stash -u (未コミットの場合)
    Note over reviewer : git fetch
    Note over reviewer : (git branch -a)
    Note over reviewer : git checkout feature/A
  else 初めて触る場合
    main ->> new_reviewer : Review
    Note over new_reviewer : git clone
    Note over new_reviewer : git checkout feature/A
  end
  Note over reviewer, new_reviewer : 動作確認
  Note over reviewer, new_reviewer : 問題があればコメント & 修正
  new_reviewer ->> main : 問題なければ GitHub 上で merge
  reviewer ->> main : 
  main ->> server : 本番サーバーでソースコードを更新
  Note over server : make stop
  Note over server : pull (pull origin main)
  Note over server : make build
  Note over server : make run
  Note over reviewer : 元々いた自分のブランチに戻る (feature/B など)
  Note over reviewer : git checkout feature/B
  Note over reviewer : 未コミット場合, 内容を戻す
  Note over reviewer : git stash list (退避作業IDの一覧確認)
  Note over reviewer : git stash apply stash@{0}  
  Note over reviewer : 再度作業を開始
  Note over new_reviewer : git pul;
  Note over new_reviewer : git checkout main
```