# viz-runner

Run [mdaines/viz.js](https://github.com/mdaines/viz.js/) in your html and render graph.

## Usage

1. Add script into your html.

```html
<script src="https://cdn.rawgit.com/syoya/viz-runner/master/viz-runner.js"></script>
```

2. Write [DOT](http://en.wikipedia.org/wiki/DOT_(graph_description_language)) language into `<script type="text/viz"></script>`.

```html
<script type="text/viz">
digraph { a -> b; }
</script>
```

## Options

### Format

Set `data-format` attribute, `svg` in default.

```html
<script type="text/viz" data-format="dot">
digraph { a -> b; }
</script>
```

### Engine

Set `data-engine` attribute, `dot` in default.

```html
<script type="text/viz" data-engine="neato">
digraph { a -> b; }
</script>
```

More information about options, see [mdaines/viz.js](https://github.com/mdaines/viz.js/#usage).
