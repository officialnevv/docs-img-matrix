---
title: "Colour images: three matrices"
description: A colour image as R, G, B matrices, the H × W × 3 array, and whether it is strictly a matrix.
sidebar:
  order: 2
---

## A colour image is three matrices

A colour image has three matrices of the same size $H \times W$:

- $R$ (red),
- $G$ (green),
- $B$ (blue).

Each entry is a whole number from $0$ to $255$. The entry $R(i,j)$ says how much red the pixel in row $i$, column $j$ has. Each pixel is therefore a **vector** with three numbers:

$$
p(i,j) = \big(R(i,j),\ G(i,j),\ B(i,j)\big)
$$

Stacking the three matrices gives an array of size $H \times W \times 3$ ("H by W by 3").

| Pixel $(R, G, B)$ | Colour |
| --- | --- |
| $(0, 0, 0)$ | black |
| $(255, 255, 255)$ | white |
| $(255, 0, 0)$ | pure red |
| $(0, 255, 0)$ | pure green |
| $(0, 0, 255)$ | pure blue |
| $(128, 128, 128)$ | mid gray |

A pixel is gray exactly when $R = G = B$.

## Is a colour image strictly a matrix?

**No.** A matrix is two-dimensional (rows and columns). An $H \times W \times 3$ array has three dimensions. It is a *three-dimensional array* (a tensor of order 3), not a matrix.

We get back to matrices in two ways. Both hold exactly the same numbers:

1. **Channel view.** Three matrices $R$, $G$, $B$, each of size $H \times W$. Brightness and the flip work on each channel.
2. **Pixel view.** Reshape the image into one matrix $X$ of size $(H \cdot W) \times 3$ where **each row is one pixel** $(R, G, B)$. Grayscale works on this matrix.

## Worked example: a $2 \times 2$ colour image

$$
R = \begin{pmatrix} 255 & 0 \\ 0 & 128 \end{pmatrix}, \quad
G = \begin{pmatrix} 0 & 255 \\ 0 & 128 \end{pmatrix}, \quad
B = \begin{pmatrix} 0 & 0 \\ 255 & 128 \end{pmatrix}
$$

The four pixels, read row by row from the top, left to right, are:

- $(1,1)$: $(255, 0, 0)$, red
- $(1,2)$: $(0, 255, 0)$, green
- $(2,1)$: $(0, 0, 255)$, blue
- $(2,2)$: $(128, 128, 128)$, gray

In the pixel view this image becomes a $4 \times 3$ matrix, one row per pixel:

$$
X = \begin{pmatrix} 255 & 0 & 0 \\ 0 & 255 & 0 \\ 0 & 0 & 255 \\ 128 & 128 & 128 \end{pmatrix}
$$

## How many numbers does an image hold?

A colour image holds $H \cdot W \cdot 3$ numbers. For an image that is 1200 pixels wide and 800 pixels tall:

$$
1200 \cdot 800 \cdot 3 = 2{,}880{,}000
$$

Its gray version holds $1200 \cdot 800 = 960{,}000$ numbers, one third as many. A black and white image also has $960{,}000$ entries, but each entry is only $0$ or $255$.

## Shapes in the project

| Image | Shape | Matrices |
| --- | --- | --- |
| Colour | $(H, W, 3)$ | three matrices of size $H \times W$ |
| Grayscale | $(H, W)$ | one matrix of size $H \times W$ |
| Black and white | $(H, W)$ | one matrix of size $H \times W$, entries only $0$ or $255$ |

## Check yourself

**Q1. Is a colour image strictly a matrix?**
No. It is a three-dimensional array of size $H \times W \times 3$, which is three $H \times W$ matrices (the channels $R$, $G$, $B$). We can also reshape it into one $(H \cdot W) \times 3$ matrix whose rows are the pixels.

**Q2. What does a pixel with $R = G = B$ look like?**
It is a shade of gray.

**Q3. How many entries does a $4 \times 4$ colour image have?**
$4 \cdot 4 \cdot 3 = 48$.

**Q4. An image is 1200 wide and 800 tall. What is the size of the pixel-view matrix $X$?**
$(1200 \cdot 800) \times 3 = 960{,}000 \times 3$.
