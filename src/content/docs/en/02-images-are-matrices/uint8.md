---
title: Pixel values and uint8
description: Why pixels are 0 to 255, what wrap-around is, and what clip and rounding do.
sidebar:
  order: 3
---

## Why 0 to 255

Each colour value is stored in 8 bits. Eight bits can hold $2^8 = 256$ different values, which are the whole numbers $0, 1, \dots, 255$. The name of this type is `uint8`: an **u**nsigned (no negatives) **int**eger with **8** bits. The code stores every image as `uint8`.

- A gray pixel has $256$ possible values.
- A colour pixel has $256^3 = 16{,}777{,}216$ possible colours.
- A black and white pixel has only $2$ values, $0$ or $255$.

## The danger: wrap-around

Arithmetic in `uint8` is done modulo $256$. A result outside $0$ to $255$ **wraps around**:

$$
240 + 50 = 290 \equiv 34 \pmod{256}
$$

A bright pixel (240) would become a dark pixel (34). The same happens downwards:

$$
10 - 50 = -40 \equiv 216 \pmod{256}
$$

A dark pixel (10) would become a bright pixel (216). These are the errors the code is written to avoid.

## The fix

1. Convert to a bigger type before calculating. `int16` holds whole numbers from $-32768$ to $32767$ (used for brightness). `float64` holds decimals (used for grayscale, because the weights are decimals).
2. Calculate.
3. **Clip** the result into $[0, 255]$.
4. Round (if there are decimals) and convert back to `uint8`.

## What clip is, mathematically

For a number $x$:

$$
\operatorname{clip}(x, 0, 255) = \min\big(\max(x, 0),\ 255\big)
$$

which means:

$$
\operatorname{clip}(x, 0, 255) =
\begin{cases}
0 & \text{if } x < 0 \\
x & \text{if } 0 \le x \le 255 \\
255 & \text{if } x > 255
\end{cases}
$$

Examples: $\operatorname{clip}(290) = 255$, $\operatorname{clip}(-40) = 0$, $\operatorname{clip}(100) = 100$. On a matrix, clip is applied to every entry separately.

## Rounding

Grayscale gives decimals, for example $124.2$. The code rounds with `np.rint`, which rounds to the nearest whole number, so $124.2 \to 124$. For an exact half, `np.rint` rounds to the nearest **even** number: $0.5 \to 0$, $1.5 \to 2$, $2.5 \to 2$. This almost never matters, but it is the honest answer if you are asked what $124.5$ becomes: it becomes $124$.

## Check yourself

**Q1. Why are pixel values between 0 and 255?**
Each value is stored in 8 bits, and $2^8 = 256$, so there are 256 values: $0$ to $255$.

**Q2. What is $250 + 20$ in `uint8`?**
$270 \equiv 14 \pmod{256}$, so the result wraps around to $14$, not $270$.

**Q3. What does clip do to $300$ and to $-5$?**
$\operatorname{clip}(300) = 255$ and $\operatorname{clip}(-5) = 0$.

**Q4. Why does the grayscale code convert to `float64` first?**
The weights $0.299$, $0.587$, $0.114$ are decimals, and converting first means nothing is rounded too early. The result is rounded once at the end.

**Q5. How many different colours can a pixel have?**
$256^3 = 16{,}777{,}216$.
