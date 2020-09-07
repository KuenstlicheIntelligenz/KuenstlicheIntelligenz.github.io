---
layout:     post
title:      Deep Learning Q&A
date:       2020-08-25 15:31:19
author:     Bab
summary:    Explain modules of Delf and Delg Algorithm
categories: jekyll
thumbnail:  heart
tags:
 - Delf
 - Delg
 - Deep Learning
 - Image Retrieval
---

**Work in progress**

# Why don't we use Mean and Max Pooling?
IDEA: Probably cause the feature vector would be to long. -> GeM
But what about using both and doing an autoencoder on it, the network could select and weight each
feature on its own.
Hybrid Pooling:
https://arxiv.org/pdf/1509.06033.pdf
-> Concat Mean and Max pooling performes worse then just mean. But still the idea with the autoencoder hangs in the air


# Why do we use 2d 3x3 convolutional filter on the first 3 rgb channels?

# Why don't we have color invariant features, or have to learn them?
Has humans we can recognize a wasp in a picture, no matter in what colors it is shown.

| Wasps | Wasps |
|:--:|:--:|
| ![wasp.jpg](/assets/images/wasp.jpg) | ![wasp_inv.jpg](/assets/images/wasp_inv.jpg) |
| Fir0002/Flagstaffotos | Fir0002/Flagstaffotos |

# CNN is not rotation invariant, how to deal with it?
Train it with slight rotation, then get features for 0, 90, 180, 270 degrees

# Can we somhow penalize sparsity in DNNs?





