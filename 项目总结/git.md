在master上git fetch origin//
git checkout -b dev origin/dev 
從遠程拉取分支到本地并且在本地創建一個同名分支，這樣提交到遠程只要git add . git commit -m '' git push

git 撤回上一次提交到本地
git reset --soft HEAD^

git checkout 當前分支
git pull
git merge 要合并的分支
git add.
git commit -m
git push

git stash 把所有没有提交的修改暂存到stash里面  可用git stash pop回复。

刪除遠程分支  git push origin --delete new_a
刪除本地分支 git branch -D 分支
查看當前yarn源 yarn config get registry   https://registry.npmjs.org/ 
設置yarn 源 yarn config set registry xxxxxxx