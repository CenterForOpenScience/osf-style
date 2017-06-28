# Releasing osf-style

* Make sure stylesheet is built.

```
npm run build
```

* On `master`, update `package.json` with new version number. Follow [semver](http://semver.org/).

```json
  "version": "63.12.0",
```

* Commit with message "Bump version".

```
git commit -m "Bump version"
```

* Add git tag.

```
git tag 63.12.0
```


* Push to GitHub.

```
git push
git push --tags
```

* Publish to npm.

```
npm publish --access=public
```
