# rollup-sourcemap

> Small repo to show a bug in rollup sourcemap generation

## Install
Install the dependencies with

```shell
npm install
```

Start a HTTP server with

```shell
python -m SimpleHTTPServer 2000
```

Steps to reproduce the bug
* Open your browser at http://localhost:2000/
* Open the DevTools
* Click on the Sources tab
* Put a breakpoint on line 3
* Refresh the browser

When the breakpoint hits, the message is already printed to the console, while the line hasn't been executed yet (offset by one).
