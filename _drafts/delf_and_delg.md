---
layout:     post
title:      Welcome to Carte Noire
date:       2015-03-23 15:31:19
author:     Jacob Tomlinson
summary:    Carte Noire is a dark blog theme for Jekyll focusing on a clear reading experience.
categories: jekyll
thumbnail:  heart
tags:
 - welcome
 - to
 - carte
 - noire
---

I'll try to give a summary over the components of Delf and Delg

DELF:
[![Paper](http://img.shields.io/badge/paper-arXiv.1612.06321-B3181B.svg)](https://arxiv.org/abs/1612.06321)

DELG:
[![Paper](http://img.shields.io/badge/paper-arXiv.2001.05027-B3181B.svg)](https://arxiv.org/abs/2001.05027)


# GeM
[![Paper](http://img.shields.io/badge/paper-arXiv.1711.02512-B3181B.svg)](https://arxiv.org/pdf/1711.02512)

Generalized-mean (GeM) pooling.

Let $$ \xi_k $$ be the set of W x H activations for feature map $$ k \elem {1...K}. These are the feature maps
coming out of an Neural network. Each point on a feature map has a receptive field on the original image and if
its pixel is activated, its denoting a presence of that feature in that receptive field.

There is global max pooling (MAC) given by   
$$f^(m)=[f_1^(m) ... f_k^(m) .. f_K^(m)]^T, f_k^(m) = max_{x \elem \xi_k} x$$
It creates a vector which denotes if a feature is present anywhere on the feature map. If you keep the location of the max in the
feature map, you can see that the resulting descriptorcomponent corresponds to an image patch equal to the receptive field. Or in 
other words, each component of the descriptor marks an image patch. So with MAC we implicitly compare image patches.

There is average pooling (SPoC) given by
$$ f^(a) = [ f_1^(a) ... f_k^(a) ... f_K^(a)]^T, f_k^(a)= 1/(|\xi_k|) \sum_(x \elem \xi_k) x $$
? Mean pooling describes how often and how strong a feature is present in the image overall.

GeM pooling is a parametrized mixture of max and average pooling and given by:
$$ f^(g)=[f_1^(g)...f_k^(g)...f_K^(g)]^T, f_k^(g)= ( 1/(|\xi_k|) \sum_(x \elem \xi_k) x^(p_k))^(1/p_k) $$
where the pooling parameter $$ p_k $$ can be manually set or learned. The larger the p the more the 
operation resembles max pooling. It "weights the contributions of each feature".
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
with $$$ d = 512 $$$ outputs.
and subsequent layer with $$$ n $$$ output units. So we have $$$ W \elem R^(dxn) $$$ weights to compute
the output of the last layer. $$$ x_i $$$ is the output of the first layer.
Instead of directly computing the logits as $$$ W_j^T x_i $$$ we use the formula $$$ W_j^T x_i = \norm(W_j)
 \norm(x_i) \cos(\theta_j)$$$ to get $$$ cos(\theta) $$$. So we need to caluclate $$$ W_j / \norm(W_j) $$$ and
$$$ x_i / \norm(x_i) $$$. Then we take the $$$ \arccos $$$ to get $$$ \theta $$$. Here we add the additative 
margin penalty m. There are also SphereFace which multiplacative angular margin and CosFace with additive cosine
margin. 
Ganz hab ich noch nicht verstanden. Man nutzt arcface nur wenn in bestimmten winkeln.

from the last layer in the network,
we normalize the weights and the feature beforehand

# Softplus activation
Softplus is always positive and ranges from 0 to infinity. Its a smooth function and its differntiable at x = 0.
ReLU is more efficient to calculate








