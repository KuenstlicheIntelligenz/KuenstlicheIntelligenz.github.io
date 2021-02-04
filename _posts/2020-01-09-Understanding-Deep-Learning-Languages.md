---
layout:     post
title:      Understanding Deep Learning Language Draft
date:       2020-01-09 09:53:19
author:     Bab
summary:    Understanding Deep Learning Language
categories: Deep Learning, technical terms
thumbnail: beer
tags:
 - Technical Terms
 - Deep Learning
---


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
 

# NLP
- Tokenization: Split text into individual text building blocks ( words, punctation, ...) after specialized rules.
- Tagging: Like in school, tag the words as nouns or verbs and it dependencies ( what is doing something in a sentence 
with subject object and verb)
- Lemmatization: Get the base form of a word
- Named Entities: Understanding that a name might be referring to a company ( e.g. Apple can mean the fruit or the company )
- Word vectors and similarity: Generate a multidimensional vector for a word which allows the word to be compared to another word.

# SOD - Salient object detection
> Salient object detection is a task based on a visual attention mechanism, 
> in which algorithms aim to explore objects or regions more attentive than the surrounding areas on the scene or images.
"paperswithcode.com"


# Pooling
Using mean or max pooling to gain translational invariance over the pooled reagion.
For image retrieval max < mean < gem

## Max Pooling - MAC
More invariant to scale change because the max will not change with scale. But more affected by distractors ( a car which
is not needed for scene reconstruction )

## Mean pooling
Not so sensitive to distractors but suffers from scale change

## R-MAC 
Define multiple regions for feature maps and take the max.  

# Dealing with data imbalance

## Focal loss



# So far this is just for me

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