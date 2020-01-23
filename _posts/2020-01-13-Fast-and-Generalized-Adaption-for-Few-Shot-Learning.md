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
2. Adapt to new examples. 


Use mean-vectors of labled exmaples to parmetrize the cosine classifier?!
No retraining of the classifier to avoid overfitting.

The paper differentiates between the feature extractor and the classifier. The classifier is usually the last layer of the Neural Network
and a fully connected layer. Each class gets a set of weights which combine the extracted features to build the class probability. 
This is expressed through the dot product: s_k = z^Tw_k^*, where s_k is the raw classification score and k elem [1,K^*] the categories to
classify. w_k is the weight vector for class k. * Means everything combined. To get the probability of
class k, we have to use the *softmax* operator.  
If we add a new class, we add a new weight vector. This vector will predicted and differently learned then the base categories,
because we have to learn it faster.  
The problem is, that the raw classification scores can differ in their magnitude between the base classes and the newly learned class.
Therefore its not that easy to combine the classification for new and base classes. To deal with that problem, the paper introduces
the cosine similarity operator, which computes the raw classification score instead of the dot product.

!Though: This is just scaling the weights and fitting them to the mean 

# Cosine similarity coefficient


So every
feature has one weight per class. A new class means that every feature gets a new weight.




# Amphibian - the meta learning method

What is the difference to maml or reptile?
I think for MetaLearning algos you have to think in tasks instead of dataset with label. Each task is an own Dataset and
we want the algo to be able to quickly adapt to known dataset/task and get good results there. To quickly adapt to a dateset
you provide the algo with examples of the task you want the algo to accomplish. That set is called the support set.
After the algo has seen the support set, it can recognize examples from the query set. It is allowed to do one gradient
descent step. To be versatile, the initialization parameters of the algo should be "in the middle" of the parameters
needed for each task. So we compute the loss over all tasks that would appear for a task if we updated the paramters
with one gradient step. And to compute the derivative over the gradient step means we do a second order gradient.



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
