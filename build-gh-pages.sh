#!/bin/bash

git merge origin main --no-edit
npm install
npm run storybook:build
mv storybook-static docs

