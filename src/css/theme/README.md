# Theme Styles

Themes are determined at a brand level. These are specifically color changes within
the products. Each brand will have it's own theme file. They will be filtered through
one theme stylesheet and compiled separately.

For example:
```
- _theme.scss
- brandname.scss
- brand2name.scss
```

### Theme file
Inside the main theme file are site specific styled elements.

```
t-button {
  color: $brand-color;
}
```

Inside the brand theme file.
```
@import 'global/colors';

// Name the brand colors
$brand-primary: $brand-name-primary;
$brand-secondary: $brand-name-secondary;
$brand-tertiary: $brand-name-tertiary;
$brand-link: $brand-name-link;
$brand-link-hover: $brand-name-link-hover;

@import 'theme';
```
