#!/usr/bin/env python3
"""Draw the home-screen icons (icon-192.png, icon-512.png)."""
import pathlib
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
for size in (192, 512):
    im = Image.new('RGB', (size, size), '#2a45c4')
    d = ImageDraw.Draw(im)
    s = size / 192
    # a sine wave across the icon, the subject's own picture
    import math
    pts = [(x, size * 0.55 - size * 0.18 * math.sin((x / size) * 2 * math.pi)) for x in range(int(size * 0.12), int(size * 0.88))]
    d.line(pts, fill='#ffffff', width=max(3, int(10 * s)), joint='curve')
    d.line([(size * 0.12, size * 0.55), (size * 0.88, size * 0.55)], fill='#9fb0ff', width=max(1, int(3 * s)))
    im.save(ROOT / f'icon-{size}.png')
print('icons written')
