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
The aim of few-shot learning is to teach a classifier base knowledge and then make it able to learn 
new categories fast and with few training examples. Like a human who understands
a concept of an object and can recognize it under various circumstances like different lightning
and angle, from only one or a few 2d-images.

To do so, he is able to seperate the object from the Background of the 2D image, build a 3D Model of the 
2D Object in his head and vizualise it under different lightening and positions. He infers the single
elemnts that define and differentiates that object, like shape or color. He also makes assumptions
about the material, the weight, the physical properties and the behavior if moved or touched or the
sound it makes.

Conventional classifiers can't be trained with only few examples. They tend to overfit and do 
not generalize well.
So far the focus is to work solely with the 2D image knowledge and get the best out of it.

There are two approaches to solving this problem:
1. Metric based, where the classifiers embedded space (e.g. the output of a deeper layer) is used
to find anchors for classes. To classify an example we look at the nearest anchor.
	- Normaly poor generalization
	- If retrained, prone to overfitting
	+ Discriminative features
2. Meta learning based, where a model is trained in a way that makes it quickly adapt to new
training task through fine-tuning. This is done by finding a versatile parameter space where the parameters lie for example
in the center of needed changes for new tasks (MAML Based). Therefore the amount of change to generalize to new examples would be the
same for every new tasks, only the direction in the parameter space changes. Ideal would be only one gradient step. 
Another approach is to find a subset of parameters that needs to be updated. (MTL) This paper tries to find a space
where its easy to switch on the manifold of parameter solutions from the differnt tasks.
	- Found parameter space can be biased and therefore the generalization ability suffers. (They not lie in the center,
therefore we would need e.g. one gradient step for task a but two for task b. If we do only one step, class a would be recognized
while task b suffers accuracy.)

They divide a network into two parts. The feature descriptor and the classifier (usually the last layer in the DNN)

This paper presents the solution:
1. Train a network with a cosine similarity loss and theire Meta learning algorithm to get a good feature desrcriptor.
2. Swap out the classifier with the adaptable cosine classifier. Which has a close form solution to new classes without retraining.


The paper presents a two stage solution:
1. Prepare: Train a metric based classifier to attain discriminative features, the **Adaptable Cosine Classifier**. 
Also use the proposed meta learning method **Amphibian**.
2. Adapt to new examples. 


Use mean-vectors of labled exmaples to parmetrize the cosine classifier?!
No retraining of the classifier to avoid overfitting.

The paper differentiates between the feature extractor and the classifier. The classifier is usually the last layer of the Neural Network
and a fully connected layer. Each class gets a set of weights which combine the extracted features to build the class probability. 
This is expressed through the dot product: $$s_k = z^Tw_k^*$$, where $$s_k$$ is the raw classification score and k elem [1,K^*] the categories to
classify. w_k is the weight vector for class k. * Means everything combined. To get the probability of
class k, we have to use the *softmax* operator.  
If we add a new class, we add a new weight vector. This vector will predicted and differently learned then the base categories,
because we have to learn it faster.  
The problem is, that the raw classification scores can differ in their magnitude between the base classes and the newly learned class.
Therefore its not that easy to combine the classification for new and base classes. To deal with that problem, the paper introduces
the cosine similarity operator, which computes the raw classification score instead of the dot product.


+ The cosine classifier preserves the class neighborhood structure in the embedding space. Means that classes which are neighboors will have a lower distance then none neighbors. TODO: why is that so?

!Though: This is just scaling the weights and fitting them to the mean 

# Cosine similarity coefficient


So every
feature has one weight per class. A new class means that every feature gets a new weight.


# Adapt the ACC with Gradient descent?
What is the Adaptable Cosine Classifier (ACC)?
-> only the classifier,
But at inference stage the feature extractor gets also adapted. With backpropagation. I guess its only on 
the feature extrocator parameters and not on the ACC.


Actually there are three learning phases. The first is to train the feature extractor and the classifier with the cosine loss on the baseset. The goal is to minimize the negative log-likelihood. The next step is to swap out the weights of the classifier and replace them with calculated weights. The calculation is done by minimizing the distance of the weights to the feature vectors. As the distance metric the $$ -cos( \cdot , \cdot ) $$ is used to adapt to the first training session. (Wouldnt that change the classification?) 
At the inference stage (third phase) the new weights vector for the new class is computed by directly solving the minimazation of the negative log-likelihood with the support set. The true underlying distribution (is never known?) of the training set will be estimated by the given samples. (1 or 5)  

To finetune you would have to swap the weights of the classifier back to the ones learned before.

# Amphibian - the meta learning method

What is the difference to maml or reptile?
I think for MetaLearning algos you have to think in tasks instead of dataset with label. Each task is an own Dataset and
we want the algo to be able to quickly adapt to known dataset/task and get good results there. To quickly adapt to a dateset
you provide the algo with examples of the task you want the algo to accomplish. That set is called the support set.
After the algo has seen the support set, it can recognize examples from the query set. It is allowed to do one gradient
descent step. To be versatile, the initialization parameters of the algo should be "in the middle" of the parameters
needed for each task. So we compute the loss over all tasks that would appear for a task if we updated the paramters
with one gradient step. And to compute the derivative over the gradient step means we do a second order gradient.

## Make the feature extractor Amphibian:
We have to calculate parameters $\phi$ (our goal) such that if we change $\phi$ with one gradient step (becomming $\phi'$), the
expected loss over the query set of a task is minimized. Or with other words, we want our parameters to be adaptable to a
task with only one gradient step and get good results. Of course this shall work for all tasks we have. How do we do that?
The parameters must be well adaptable by a gradient descent step for different tasks and be well within a task.
The parameters must be well within the tasks and well adaptable with a gradient descent for different tasks.


We minimize the expected loss over all task adaptions and minimize the loss of a single task classification.
The calculation is divided into two loops: The *inner* and the *outer* loop. 
1. Inner loop:
	Calcualte paramter update, such that the parameter would be good within a task
2. Outer loop:
	Calculate parameter update, such that the sum of the losses

	! Das hier muss ich noch mehr checken...
	


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
