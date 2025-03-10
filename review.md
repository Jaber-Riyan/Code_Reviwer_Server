❌ Bad Code:

```javascript
function sum() {
  return a + 1;
}
```

🔍 Issues:

- ❌ `a` is not defined within the scope of the function. This will likely result in an error (ReferenceError in strict
  mode, or NaN if `a` is hoisted and undefined in non-strict mode).
- ❌ The function `sum` doesn't accept any arguments, limiting its reusability. It should ideally accept an argument to
  sum with 1.

✅ Recommended Fix:

```javascript
function sum(a) {
  return a + 1;
}
```

💡 Improvements:

- ✔ The function now accepts a parameter `a`, making it more versatile.
- ✔ The function will now correctly add 1 to the input `a`.
- ✔ Consider adding a default value for the `a` parameter, like `function sum(a = 0)`, if you want the function to still
  work when called without an argument. This depends on the desired behavior when no argument is provided.
