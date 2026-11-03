---
title: How to use this site
description: The study path, the golden rule, and the notation used on every page.
sidebar:
  order: 2
---

## The study path

Follow the stages in the sidebar, in this order:

| Stage | What you learn |
| --- | --- |
| 1. Start here | What the project is and how to use the site |
| 2. Images are matrices | Matrix, pixel, colour channels, `uint8` |
| 3. The linear algebra we use | Vectors, dot product, matrix–vector and matrix–matrix product, identity, transpose, inverse, the matrices $E$ and $J$ |
| 4. The four operations | For each operation: formula, worked example, properties, likely questions |
| 5. Putting it together | Order of operations, which operations commute, other transformations |
| 6. Reading the code as maths | Only the NumPy you need |
| 7. How it is built | GitHub and Vercel, briefly |
| 8. Defend it | Question bank with answers, one-minute scripts, "what if" traps, quizzes, glossary |

## The golden rule

**Explain the maths first, then show the line of code that does it.** The code is the same maths written in a language the computer understands.

## How to study one page

1. Read the page slowly once.
2. Redo each worked example by hand with a pencil, without looking at the answer.
3. Close the page and say the idea aloud in your own words.
4. Answer the "Check yourself" questions at the end.

If you can do step 3 in about one minute, you are ready for that topic.

## Notation used everywhere

| Symbol | Meaning |
| --- | --- |
| $H$, $W$ | Height and width of the image in pixels. These are the number of rows and the number of columns. |
| $I$ | The image matrix, as in our report. $I(i,j)$ is the entry in row $i$, column $j$. |
| $R$, $G$, $B$ | The red, green and blue matrices of a colour image. |
| $p$ | One pixel of a colour image, the vector $(R, G, B)$. |
| $w$ | The weight vector $(0.299,\ 0.587,\ 0.114)$ used for grayscale. |
| $\beta$ | The brightness shift (a number, positive or negative). |
| $T$ | The threshold for black and white (default 128). |
| $E$ | The matrix of all ones. |
| $J$ | The exchange matrix (ones on the anti-diagonal). |
| $\mathrm{Id}$ | The identity matrix. |
| $A^T$ | The transpose of $A$. |

:::note
In our report the letter $I$ is used both for the image and for the identity matrix. On this site the **image is $I$** and the **identity matrix is $\mathrm{Id}$**, so the two never get mixed up.
:::

## English and Arabic

Use the language menu at the top of the page. It opens the same page in the other language.

- Both languages have the same pages in the same order.
- In Arabic, formulas and code are still written left to right, and numbers use the digits 0 to 9, exactly as in the code and the report.
- The Arabic text uses simple Egyptian wording, with the standard maths term first and the English term in brackets.
