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

<p>&nbsp;</p>

## DINO: Emerging Properties in Self-Supervised Vision Transformers 

[![Paper](http://img.shields.io/badge/paper-arXiv.2104.14294-B3181B.svg)](https://arxiv.org/pdf/2104.14294.pdf)

DINO comes from self-**di**stillation with **no** labels. The authors use a teacher and a student model. A given
image is augmented to two "global-views" (e.g. original image coverage >50%) and several (e.g. 6) "local-views"
with [multi-crop](https://arxiv.org/pdf/2006.09882.pdf) and additional augmentation?

The teacher gets
a "global-views" of an image (actually 2 global views) and the student gets "local-views". Global means



---


## Meta Pseudo Labels

[![Paper](http://img.shields.io/badge/paper-arXiv.2003.10580-B3181B.svg)](https://arxiv.org/pdf/2003.10580.pdf)

Teacher and student network.  
Normally  the student is capped by the teacher -> confirmation bias  
Teacher learns on how well the student does, student learns on pseudolabelled data, annotated by teacher

---


## Emerging Properties in Self-Supervised Vision Transformers 

[![Paper](http://img.shields.io/badge/paper-arXiv.2104.14294-B3181B.svg)](https://arxiv.org/pdf/2104.14294.pdf)

Looks good.

[Example Code](https://github.com/facebookresearch/dino)

---

## End-to-End Object Detection with Transformers

[![Paper](http://img.shields.io/badge/paper-arXiv.2005.12872-B3181B.svg)](https://arxiv.org/pdf/2005.12872.pdf)

Learnable object detection without post processing.

[Example Code](https://colab.research.google.com/github/facebookresearch/detr/blob/colab/notebooks/detr_demo.ipynb)

---

## Unsupervised Learning of Visual Features by Contrasting Cluster Assignments

[![Paper](http://img.shields.io/badge/paper-arXiv.2006.09882-B3181B.svg)](https://arxiv.org/pdf/2006.09882.pdf)

Unsupervised pretraining, may gives a strong baseline for finetuning.

[Code](https://github.com/facebookresearch/swav)

---

## Self-Challenging Improves Cross-Domain Generalization

[![Paper](http://img.shields.io/badge/paper-arXiv.2007.02454-B3181B.svg)](https://arxiv.org/pdf/2007.02454.pdf)


---
>>>>>>> 5db151f5b7dcb1ad69bf9aef97b127bc7772dd13

## Destruction and Construction Learning for Fine-grained Image Recognition

[Paper Link](https://openaccess.thecvf.com/content_CVPR_2019/papers/Chen_Destruction_and_Construction_Learning_for_Fine-Grained_Image_Recognition_CVPR_2019_paper.pdf)

First places on some fine grained product retrieval tasks

---



## MagFace: A Universal Representation forFace Recognition and Quality Assessment

[![Paper](http://img.shields.io/badge/paper-arXiv.2103.06627v1-B3181B.svg)](https://arxiv.org/pdf/2103.06627v1.pdf)

So far: About quality assessment and pushing low quality examples away.
Improved Arcface loss

---



## Towards Open World Object Detection

[![Paper](http://img.shields.io/badge/paper-arXiv.2103.02603v1-B3181B.svg)](https://arxiv.org/pdf/2103.02603v1.pdf)

Incremental learning. Energy based and memory replay based.

---


## Shop The Look: Building a Large Scale Visual Shopping Systemat Pinterest

[![Paper](http://img.shields.io/badge/paper-arXiv.2006.10866-B3181B.svg)](https://arxiv.org/pdf/2006.10866.pdf)

---

## Hard-Aware Point-to-Set Deep Metric forPerson Re-identification

[![Paper](http://img.shields.io/badge/paper-arXiv.1807.11206-B3181B.svg)](https://arxiv.org/pdf/1807.11206.pdf)

---

## In Defense of the Triplet Loss Again: Learning Robust Person Re-Identificationwith Fast Approximated Triplet Loss and Label Distillation

[![Paper](http://img.shields.io/badge/paper-arXiv.1912.07863-B3181B.svg)](https://arxiv.org/pdf/1912.07863.pdf)

---


## In Defense of the Triplet Loss for Person Re-Identification

[![Paper](http://img.shields.io/badge/paper-arXiv.1703.07737-B3181B.svg)](https://arxiv.org/pdf/1703.07737.pdf)

---

## Combination of Multiple Global Descriptors for Image Retrieval

[![Paper](http://img.shields.io/badge/paper-arXiv.1903.10663-B3181B.svg)](https://arxiv.org/pdf/1903.10663.pdf)

Image similarity. Use SPoc Mac and GeM for pooling features and combines them.

[Code](https://github.com/PuchatekwSzortach/combination_of_multiple_global_descriptors_for_image_retrieval) with additional ideas (Keras Tensorflow)

---

## High-Performance Large-Scale Image Recognition Without Normalization

[![Paper](http://img.shields.io/badge/paper-arXiv.2102.06171v1-B3181B.svg)](https://arxiv.org/pdf/2102.06171v1.pdf)

Getting rid of Batchnormalization.
Better results then efficientnet while beeing faster.

---


## SoftPool: Refining activation downsampling with SoftPool

[![Paper](http://img.shields.io/badge/paper-arXiv.2101.00440v2-B3181B.svg)](https://arxiv.org/pdf/2101.00440v2.pdf)

"Better" pooling (instead of Max, Mean, GeM)

---

## SAM: Sharpness-Aware Minimization for Efficiently ImprovingGeneralization

[![Paper](http://img.shields.io/badge/paper-arXiv.2010.01412v2-B3181B.svg)](https://arxiv.org/pdf/2010.01412v2.pdf)

Optimize the network for a flat (unsharp) minima. Improves generalization and robustness to label noise.

---

## DELG: Unifying Deep Local and Global Features for Image Search

[![Paper](http://img.shields.io/badge/paper-arXiv.2001.05027-B3181B.svg)](https://arxiv.org/abs/2001.05027)

Image similarity and retrieval. Uses an image pyramid and GeM.

---

## DELF: Large-Scale Image Retrieval with Attentive Deep Local Features

[![Paper](http://img.shields.io/badge/paper-arXiv.1612.06321-B3181B.svg)](https://arxiv.org/abs/1612.06321)

Predecessor of DELG 
Image similarity based on learned local feature extraction

---



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





