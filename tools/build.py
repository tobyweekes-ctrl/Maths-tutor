#!/usr/bin/env python3
"""Build the site from src/.

Writes index.html (the GitHub Pages website) and build/artifact.html (the copy
published inside Claude). Run tools/check.mjs first to validate the content.
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
ORDER = ['7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7', '5.1', '5.2', '5.3']

app = (ROOT / 'src/app.html').read_text()
fig = (ROOT / 'src/fig.js').read_text()
content = '\n'.join((ROOT / f'src/content/{k}.js').read_text() for k in ORDER)
for token in ('/*@FIG@*/', '/*@CONTENT@*/'):
    assert app.count(token) == 1, token
page = app.replace('/*@FIG@*/', fig).replace('/*@CONTENT@*/', content)

(ROOT / 'build').mkdir(exist_ok=True)
(ROOT / 'build/artifact.html').write_text(page)

head = '''<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="AI maths tutor for Pearson Edexcel A level: Pure 2 Chapter 7 and Applied 2 Chapter 5.">
<meta name="theme-color" content="#2a45c4">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Maths Tutor">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icon-192.png">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
'''
split = page.index('<link rel="preconnect"')
sw = '''<script>
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
</script>
'''
web = head + page[:split] + '</head>\n<body>\n' + page[split:] + '\n' + sw + '</body>\n</html>\n'
(ROOT / 'index.html').write_text(web)
print(f'index.html {len(web):,} bytes, build/artifact.html {len(page):,} bytes')
