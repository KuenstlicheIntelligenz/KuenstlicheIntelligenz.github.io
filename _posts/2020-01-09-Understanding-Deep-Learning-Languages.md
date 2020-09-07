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

# R-MAC 
Define multiple regions for feature maps and take the max.  




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