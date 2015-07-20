# inputRange
A display only input range polyfill

Tested successfully on:
- [x] IE9 (including Document Mode: Quirks and all modes in between) 

To use, the input needs to:
- [ ] Be of type range: for obvious reasons ;)
- [ ] Not be hidden: If I hide an input range, I want the polyfill to ignore it.
- [ ] Be disabled: This is a display only polyfill, I have no logic to handle value changes.
- [ ] Have defined min, value, and max attributes: Otherwise it will ignore it.
- [ ] Have a span element to the right of it: This is where the polyfill is drawn.
