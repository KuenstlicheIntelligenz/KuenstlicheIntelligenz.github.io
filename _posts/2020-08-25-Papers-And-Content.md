---
layout:     post
title:      Papers and Content
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


# Paper
DELF:
[![Paper](http://img.shields.io/badge/paper-arXiv.1612.06321-B3181B.svg)](https://arxiv.org/abs/1612.06321)

DELG:
[![Paper](http://img.shields.io/badge/paper-arXiv.2001.05027-B3181B.svg)](https://arxiv.org/abs/2001.05027)


# GeM
[![Paper](http://img.shields.io/badge/paper-arXiv.1711.02512-B3181B.svg)](https://arxiv.org/pdf/1711.02512)

Generalized-mean (GeM) pooling.

# Mixed Pooling
[![Paper](http://img.shields.io/badge/paper-arXiv.1509.06033-B3181B.svg)](https://arxiv.org/pdf/1509.06033)


# Comparison of mean, max and hybrid(both) pooling
[![Paper](http://img.shields.io/badge/paper-arXiv.1509.06033-B3181B.svg)](https://arxiv.org/pdf/1509.06033.pdf)
Illustration of semantic information captured by each feature map of pool5 layer using CNN
-> Mean pooling is better then just concat mean and max (hybrid)

# Retrieving Similar E-Commerce Images Using Deep Learning

- Siamese architecture (2 images?), angular loss, combination of low and toplevel,
fractional distance matrix to calc distance between features

- Manhatten distance matrix provides the best discrimination in high dimensional data spaces.
L_k norm with k smaller then 1

# Combination of Multiple Global Descriptors for Image Retrieval
[![Paper](http://img.shields.io/badge/paper-arXiv.1903.10663-B3181B.svg)](https://arxiv.org/pdf/1903.10663.pdf)

# Graph Neural Networks:A Review of Methods and Applications
[![Paper](http://img.shields.io/badge/paper-arXiv.1812.08434-B3181B.svg)](https://arxiv.org/pdf/1812.08434.pdf)

# Self-Correction for Human Parsing
[![Paper](http://img.shields.io/badge/paper-arXiv.1910.09777-B3181B.svg)](https://arxiv.org/pdf/1910.09777v1.pdf)

# YOLOv4: Optimal Speed and Accuracy of Object Detection
[![Paper](http://img.shields.io/badge/paper-arXiv.2004.10934v1-B3181B.svg)](https://arxiv.org/pdf/2004.10934v1.pdf)

Yolo wants to reduce model size and inference speed while keeping accuracy high.

## Bag of freebies (only cost training time)
Augmentation, solving dataset bias (imbalance), better loss

## Bag of specials (small inference cost, significantly improvement in accuracy)
Enhance receptive field, attention - channelwise (squeeze-and-excitiation (SE)) - pointwise 
(Spatial Attention Module (SAM))
-> SE ist costly on gpu
-> SAM makes improvement and is efficient on gpu
Multi-scale prediction methods, Activationfunctions, Post-processing methods like nms (not needed in anchor-free
(without x1, x2, y1, y2) methods)




