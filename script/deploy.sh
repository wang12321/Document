
# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
npm run docs:build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'

# 部署到 https://<username>.github.io/<repo>
git push -f https://github.com/wang12321/Document.git master:gb-pages

# 提交所有代码到github
cd ../../../
git add .
git commit -m 'update'
git push origin master
