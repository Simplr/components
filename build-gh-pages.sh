#!/bin/bash

# Merge needed if this is run locally
git merge origin main --no-edit
npm install
npm run storybook:build
mv storybook-static docs

