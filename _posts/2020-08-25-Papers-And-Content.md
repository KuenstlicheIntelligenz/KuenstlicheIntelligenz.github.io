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
   [Large-Scale Image Retrieval with Attentive Deep Local Features](https://arxiv.org/abs/1612.06321)
   Image similarity based on learned local feature extraction

---
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

Instead of using multiple models for image retrival, which has shown to improve performance, this
paper aims to get multiple outputs of a single model and combine them to have a similar ensemble effect.
Basically they combine SPoC, Mac and GeM as pooling methods before the final layers in the network.
Rember SPoC deals with larger regions, Mac focuses on smaller details in the image.

Additionally used is label smoothing and temperature scaling. What is this?

"The temperature scaling with low-temperature parameterτin the Equation 4,  assigns a larger gradient
 to more chal-lenging  examples  and  is  helpful  for  intra-class  compact,and inter-class spread-out embedding."
What does that mean?

"The label smooth-ing enhances a model, thereby improves generalization by
estimating the marginalized effect of a label-dropout duringtraining. Therefore, to prevent over-fitting,
 and learn betterembedding, we add label smoothing and temperature scal-ing in the auxiliary classification loss"


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

# [Color quantization using modified median cut](http://leptonica.org/papers/mediancut.pdf)

# Coherent Semantic Attention for Image Inpainting
[![Paper](http://img.shields.io/badge/paper-arXiv.1905.12384v3-B3181B.svg)](https://arxiv.org/pdf/1905.12384v3.pdf)

# Parallel Multiscale Autoregressive Density Estimation
[![Paper](http://img.shields.io/badge/paper-arXiv.1703.03664-B3181B.svg)](https://arxiv.org/pdf/1703.03664.pdf)

# [EIDETIC3D LSTM:A MODEL FORVIDEOPREDICTION ANDBEYOND](https://openreview.net/pdf?id=B1lKS2AqtX)

For perceiving and memorizin both short-term and long-term representations in videos.
This paper uses RNNs and 3D-CNNs as part of their architecture. These are both mechanisms for modeling spatio (image) temporal
data.
They found out that they have to somehow integrate the 3D-Convs inside the LSTM


# HEATED-UPSOFTMAXEMBEDDING
[![Paper](http://img.shields.io/badge/paper-arXiv.1809.04157-B3181B.svg)](https://arxiv.org/pdf/1809.04157.pdf)

# GarmentGAN: Photo-realistic Adversarial Fashion Transfer
[![Paper](http://img.shields.io/badge/paper-arXiv.2003.01894v1-B3181B.svg)](https://arxiv.org/pdf/2003.01894v1.pdf)

Main Idea:
Cutting out the to be seperated part, transfrom the new garment onto that part.

Directly seen shortcomings:
A dress will be shortened onto a t-shirt part.

Ideas to be better:
Keep the aspect ratio and place the garment over other parts too.

The Problem of normal GANs is still blurred images and unrealistic


Garment transfer can be broken down into two components. First seperate the human body(pose, shape, color) from 
his clothes
then transfer the garment onto that body. This is done in a segmentation map space. So we first try to get
a realistic segmentatin map from the person in arbitrary pose wearing the desired cloth. This
phase is coarse.
As the first step they train a shape transfer network to produce a segmantic map, given an already segmented but masked map,
which is produced by a foreign masking network. 
They want the network to learn only to segment arms, upper torso and top clothes regions, therefore mask these regions. To
retain the hands, they use keypoints from a human body pose network. The create a line from the elbow to the wrist and append
a box at the end of the line over the hands, so that the side of the box is perpendicular to the line. All pixels, belonging
to the hand region and inside the box are retained. The Segmentation network does not have to learn them and complext
poses and gestures of the hand are retained. Everything that the network is not supposed to predict (everything not
masked) is overwritten by the input segmentation map. The identity of the person is preserved.

The Second stage comprises the transformation of the garment

# Semantic Image Synthesis with Spatially-Adaptive Normalization

- Where the SPADE Layer comes from. Its a Layer for creating an image from a segmentation map. 

Semantic image synthesis is about creating a photorealistic image from a segmentation map.

The Problem:

The Solution





