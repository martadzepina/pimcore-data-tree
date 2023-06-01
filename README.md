# Data tree POC

## rc-tree

### Pros

- very popular ~1,156,933 weekly downloads
- maintained
- good performance with virtualization
- custom expand and item icons
- load data asynchronously when expanding a node
- touch ready

### Cons

- documentation is not good
- horizontal scroll not available with virtualization

## react-vtree

### Pros

- uses react-window under the hood (popular, lightweight and fast windowing lib)
- smallest bundle size (gizp: 50.41 kB)

### Cons

- complex usage (lot of boilerplate)
- documentation not good
- not maintained (last update 2 years ago)
- missing with type definitions
- possibly requires additional packages (react-virtualized-auto-sizer)

## react-arborist

### Pros

- 2.1k stars on github
- `overscanCount` - adds additional items that are not currently displayed, but are used to reduce the chance the user is scrolling faster than virtualized content can be rendered
- very good performance (especially if all items are not expanded)
- easy appearance customization
- touch ready

### Cons

- least number of weekly downloads ~5600 (lib is fairly new)

# Conclusion

- react-arborist
