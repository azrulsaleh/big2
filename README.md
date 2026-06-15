# big2 ui

## setup
### initializing project
```
# create vite project with react and standard typescript template (no react compiler)
# -- = tells npm to stop listening. anything after are options for vite
# --template = skips interactive menus and build react + typescript project
# select 'no' when prompted
npm create vite@latest ui -- --template react-ts

# move into the project directory
cd ui

# download node_modules and create package-lock.json
npm install

# install three.js, react three fiber and drei
npm install three @react-three/fiber @react-three/drei

# install types for three.js (three.js is written in javascript)
# --save-dev = include for development, but don't include in production version
npm install --save-dev @types/three

# install tailwind css
# @tailwindcss/vite = package for vite plugin (for v4.0 onwards)
npm install tailwindcss @tailwindcss/vite
```

### github pages
terminal
```
#install gh-pages package
npm install gh-pages --save-dev
```

package.json
```
#at top level
"homepage": "http://azrulsaleh.github.io/big2",

#in "scripts"
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

terminal
```
npm run deploy
```

vite.config.ts
```
#add below plugins
base: '/big2/',
```

## git
### commit conventions
- feat: new feature for the end-user
- fix: bug fix across the application
- refactor: rewriting code without changing its external behavior
- chore: maintenance, build configs, or dependency updates
- docs: changes restricted strictly to documentation
- test: adding missing tests or refactoring existing ones
- perf: a performance-focused code optimization

### branch naming conventions
- feat/ -> feat/oauth-login
- fix/ -> fix/navbar-overflow
- hotfix/ -> hotfix/input-segfault
- docs/ -> docs/readme