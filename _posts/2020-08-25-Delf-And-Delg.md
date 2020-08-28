---
layout:     post
title:      Delf And Delg
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

I'll try to give a summary over the components of Delf and Delg

# Paper
DELF:
[![Paper](http://img.shields.io/badge/paper-arXiv.1612.06321-B3181B.svg)](https://arxiv.org/abs/1612.06321)

DELG:
[![Paper](http://img.shields.io/badge/paper-arXiv.2001.05027-B3181B.svg)](https://arxiv.org/abs/2001.05027)


# GeM
[![Paper](http://img.shields.io/badge/paper-arXiv.1711.02512-B3181B.svg)](https://arxiv.org/pdf/1711.02512)

Generalized-mean (GeM) pooling.

Let 
$$ \chi_k $$ 
be the set of $$ W \times H $$ activations for feature map $$ k \in{\{1...K\}} $$ . These are the feature maps
coming out of an Neural network. Each point on a feature map has a receptive field on the original image and if
its pixel is activated, its denoting a presence of that feature in that receptive field.

There is **global max pooling (MAC)** given by:
\begin{equation}
f^{m}=[f_1^{m} ... f_k^{m} .. f_K^{m}]^T, f_k^{m} = \max_{x \in \chi_k} x
\end{equation}
It creates a vector which denotes if a feature is present anywhere on the feature map. If you keep the location of the max in the
feature map, you can see that the resulting descriptorcomponent corresponds to an image patch equal to the receptive field. Or in 
other words, each component of the descriptor marks an image patch. So with MAC we implicitly compare image patches.

There is **average pooling (SPoC)** given by:
\begin{equation}
f^{a} = [ f_1^{a} ... f_k^{a} ... f_K^{a}]^T, f_k^{a}= \frac{1}{|\chi_k|} \sum_{x \in \chi_k} x
\end{equation}
Mean pooling describes how often and how strong a feature is present in the image overall.

**GeM** pooling is a parametrized mixture of max and average pooling and given by:
\begin{equation}
f^{g}=[f_1^{g}...f_k^{g}...f_K^{g}]^T, f_k^{g} = ( \frac{1}{|\chi_k|} \sum_{x \in \chi_k} x^{p_k})^{ \frac{1}{p_k}}
\end{equation}
where the pooling parameter $$ p_k $$ can be manually set or learned. The larger the $$ p $$ the more the 
operation resembles max pooling.
> It weights the contributions of each feature.

GeM pooling shows better results.

# Whitening of the aggregated representation vector
Basically PCA + normalize the PCA Data.
Results in that all dimensions get equal contributions. Noise gets attenuated!
Whitening is only done on the train set! The validation data gets preprocessed with
the from training inferred parameters.

# What means intra-class and inter-class
Intra-class means the variation of objects in the same class.
Inter-class means the variation between objects of different classes


# arcface margin
Softmax-cross-entropy loss does not optimize for high intra-class similarity of the feature vector and it 
does not optimize for diversity for inter-class samples.
ArcFace is easy to implement, has low computational overhad and good convergence properties.
It is about the last 2 layers in the DNN, layer i and following j. For example we have layer i 
with $$ d = 512 $$ outputs.
and subsequent layer with $$ n $$ output units. So we have $$ W \in R^{d \times n} $$ weights to compute
the output of the last layer. $$ x_i $$ is the output of the first layer.
Instead of directly computing the logits as $$ W_j^T x_i $$ we use the formula 
\begin{equation}
W_j^T x_i = |W_j| |x_i| \cos{\theta_j}
\end{equation} to get $$ cos(\theta) $$. So we need to caluclate $$ \frac{W_j}{|W_j|} $$ and
$$ \frac{x_i}{|x_i|} $$. Then we take the $$ \arccos $$ to get $$ \theta $$. Here we add the additative 
margin penalty m. There are also SphereFace which multiplacative angular margin and CosFace with additive cosine
margin. 
Ganz hab ich noch nicht verstanden. Man nutzt arcface nur wenn in bestimmten winkeln.

from the last layer in the network,
we normalize the weights and the feature beforehand

# Softplus activation
Softplus is always positive and ranges from 0 to infinity. Its a smooth function and its differntiable at x = 0.
ReLU is more efficient to calculate








