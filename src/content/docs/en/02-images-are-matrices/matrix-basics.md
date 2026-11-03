---
title: What is a matrix?
description: Definition of a matrix, size, entries, and a grayscale image as a matrix.
sidebar:
  order: 1
---

## Definition

A **matrix** is a rectangular table of numbers arranged in rows and columns. A matrix with $m$ rows and $n$ columns has **size** $m \times n$ ("m by n"). Rows are always counted first.

$$
A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \end{pmatrix}
$$

This matrix has 2 rows and 3 columns, so its size is $2 \times 3$. The number $a_{ij}$ is the **entry** in row $i$ and column $j$. We also write it $A(i,j)$. A matrix of size $m \times n$ has $m \cdot n$ entries, so this one has $6$.

## A grayscale image is a matrix

A grayscale image of height $H$ and width $W$ is a matrix $I$ of size $H \times W$. The entry $I(i,j)$ is the **intensity** of the pixel in row $i$ and column $j$. It is a whole number from $0$ (black) to $255$ (white). Row 1 is the top row and column 1 is the leftmost column.

A tiny example, a $3 \times 3$ image:

$$
I = \begin{pmatrix} 10 & 20 & 30 \\ 40 & 50 & 60 \\ 70 & 80 & 90 \end{pmatrix}
$$

- The size is $3 \times 3$, so there are $9$ entries.
- $I(2,3) = 60$: row 2, column 3.
- $I(3,1) = 70$: row 3, column 1.
- All values are small compared with 255, so this is a dark image that gets slightly brighter towards the bottom right.

## Two things that trip people up

1. **Height comes first.** The size of the matrix is rows $\times$ columns, which is $H \times W$. But photo sizes are usually written width $\times$ height. A photo that is 640 pixels wide and 480 pixels tall gives a matrix of size $480 \times 640$.
2. **Maths counts from 1, Python counts from 0.** In maths the top-left entry is $I(1,1)$. In Python it is `I[0, 0]`. On this site, formulas count from 1.

## Matrix operations the project uses

The project uses these operations. Each one is explained in stage 3, and used in stage 4:

- adding a constant matrix to a matrix,
- the product of a matrix and a vector,
- the product of two matrices,
- comparing every entry with a number.

## Check yourself

**Q1. How many entries does a $5 \times 7$ matrix have?**
$5 \cdot 7 = 35$.

**Q2. In the matrix $I$ above, where is the entry 80?**
In row 3, column 2, so $I(3,2) = 80$.

**Q3. A photo is 640 pixels wide and 480 pixels tall. What is the size of its matrix?**
$480 \times 640$: 480 rows (the height) and 640 columns (the width).

**Q4. Define a matrix in one sentence.**
A matrix is a rectangular array of numbers arranged in $m$ rows and $n$ columns; its size is $m \times n$.
