---
layout:     post
title:      Fast and Generalized Adaptation for Few-Shot Learning
date:       2020-01-13 09:53:19
author:     Bab
summary:    Summary of a paper
categories: Deep Learning, technical terms
thumbnail: beer
tags:
 - Technical Terms
 - Deep Learning
---

# Draft

[Fast and Generalized Adaptation for Few-Shot Learning](https://arxiv.org/pdf/1911.10807v1.pdf)

Few-Shot learning aimes to generalize to novel categories fast and with few training examples.
Problems of conventional classifiers are weak generalization and overfitting.

There are two approaches to solving this problem:
1. Metric based, where the classifiers embedded space (e.g. the output of a deeper layer) is used
to find anchors for classes. To classify an example we look at the nearest anchor.
	- Normaly poor generalization
	- If retrained, prone to overfitting
	+ Discriminative features
2. Meta learning based, where a model is trained in a way that makes it quickly adapt to new
training task through fine-tuning. This is done by finding a versatile parameter space where the parameters ideally lie
in the center of needed changes for new tasks (MAML Based). Therefore the amount of change to generalize to new examples would be the
same for every new tasks, only the direction in the parameter space changes. Ideal would be only one gradient step. Another approach is
to find a subset of parameters that needs to be updated. (MTL)
	- Found parameter space can be biased and therefore the generalization ability suffers. (They not lie in the center,
therefore we would need e.g. one gradient step for task a but two for task b. If we do only one step, class a would be recognized
while task b suffers accuracy.)


The paper presents a two stage solution:
1. Prepare: Train a metric based classifier to attain discriminative features, the **Adaptable Cosine Classifier**. 
Also use the proposed meta learning method **Amphibian**.
2. Fine-Tune two new examples.


Use mean-vectors of labled exmaples to parmetrize the cosine classifier?!



- Leveraging an intermediate level of representation:  
___
    Usually means to cut of the network at some layer and get the features
  
- Semantic information about the categories to classify:  
    Descriptive information about the category e.g. as an numeric vector. The values of the vector describe an image.

Kann ich mal testen wie das hier funktioniert. Wir rücke ich denn ein?  

    Just with tab
```python
import os
test = 1
```