---
title: What is the project?
description: The assignment, what we built, and the four operations in one table.
sidebar:
  order: 1
---

## The assignment

Build a program that reads a real image and processes it with matrices. The program must do:

- read the image,
- convert it to grayscale,
- adjust the brightness,
- flip it horizontally,
- convert it to black and white,
- display the images before and after,
- save the results.

Groups have up to 6 students. We hand in a report (idea, formulas, code, results with pictures). **Each student must be able to explain the idea, the code and the maths.** Any student can be asked about any part.

## The idea in one sentence

Every digital image is a matrix of numbers, so editing an image means doing matrix operations.

## What we built

- A **Python** program that uses the **NumPy** library to hold the image as matrices.
- A local mode that applies all the operations, shows the original next to each result, and saves them as PNG files.
- A website version, with the code on **GitHub** and the site hosted on **Vercel**.

You will not be asked to write Python. You will be asked what each operation does mathematically.

## The four operations

| Operation | What it does | Matrix idea | Formula |
| --- | --- | --- | --- |
| Grayscale | Colour image to gray image | Weighted sum of R, G, B (a dot product) | $\text{Gray} = 0.299R + 0.587G + 0.114B$ |
| Brightness | Lighter or darker image | Add a constant matrix, then clip | $I' = \operatorname{clip}(I + \beta E,\, 0,\, 255)$ |
| Horizontal flip | Mirror image | Multiply by the exchange matrix | $I' = IJ$ |
| Black and white | Only black or white pixels | Compare each entry with a threshold | $B(i,j) = 255$ if $\text{Gray}(i,j) \ge T$, otherwise $0$ |

Do not worry if the symbols are new. Stage by stage, the site explains every one of them.

## What the professor will care about

The project is discussed with a Linear Algebra professor. Expect questions about:

- matrices and vectors, and what size and shape mean,
- products: dot product, matrix–vector, matrix–matrix,
- linearity: which operations are linear and which are not,
- rank, kernel, inverses, determinants and eigenvalues of the matrices we use,
- what each operation does mathematically, and whether the order of operations matters.

Programming questions will be few. That is why this site puts the maths first.

## The project in four sentences

You can say this to the professor as an opening:

> We read the image as a matrix using Python and NumPy. Each operation is a matrix operation: grayscale is a weighted sum of the R, G, B matrices, brightness is adding a constant matrix with clipping, the flip is multiplication by the exchange matrix, and black and white is comparing each entry with a threshold. We then display and save the original and the result, and we also published it as a website.

## What you will be able to do after this site

- Explain how an image becomes a matrix and why the values are 0 to 255.
- Write the formula of each operation and compute a small example by hand.
- State which operations are linear, which are invertible, and why.
- Prove short facts, for example that flipping twice gives the original image.
- Answer the professor's likely questions, and the "what if" traps.
