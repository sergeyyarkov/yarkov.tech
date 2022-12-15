#!/bin/bash

cd content/
git add .
git commit -m "Update content."
git push origin main
cd ../
git add content/
git commit -m "Update content"
git checkout main
git merge develop
git checkout develop
git push origin --all
