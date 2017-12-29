#! /bin/bash

rm -rf dist
npm run build
touch ~/.ssh/id_rsa
echo $sshkey > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
cd dist
git init
git remote add origin git@github.com:nsts-metronome/nsts-metronome.github.io.git
git add .
git commit -m "deploy"
git push -f --set-upstream origin master --verbose
