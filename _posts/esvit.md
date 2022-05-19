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


# EsVit [Efficient Self-supervised Vision Transformers for Representation Learning](https://arxiv.org/pdf/2106.09785.pdf)j

The goal of this paper is to reduce the compute complexety of [Dino](https://arxiv.org/abs/2104.14294) by using mult-stage 
transformer architectures with sparse self-attentions.
Just using them without modification results in lost fine-grained correspondences between image regions, so
they propose a pre-train training task (for evaluaton the model is further trained with a linear layer or knn, hence "pre-train") to regain the ability. The resulting training procedure creates
a better model then Dino with a monolithic(not multi-staged) transformer. They claim to have a higher throuput, which is
certainly ment to be for inferencing.

The loss is comprised of the normal Dino loss, which means the cls token probability of global views from the teacher is matched with the cls token probabilites of also the global views but additinally to smaller local augmented cut out regions. The student has to predict the same output as the teacher, but only from the small local views. 
The teacher update is a "delayed" and more "averaged" version of the student.

The student has to find local features which tells him about the global picture (local-to-global correspondence). The teacher is updated from the student and hence also looks more on details on the global view to create the embedding.

With multi-stage transformers,


I guess, we make crops from either of the global views, create crop embeddings and compare the crop embeddings.
Region-To-Region, what does it exactly mean? Patch to Patch? Or rather do we try to infer which patch embedding 
