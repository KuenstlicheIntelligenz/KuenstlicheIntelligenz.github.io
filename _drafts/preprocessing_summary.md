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

# Summary over methods
- Standardize
- scaling (log, exponential) (np.log(1+x), rasing to the power < 1 -> np.sqrt(x + 2/3))
- Bucketize
- Nans can have meaning, think about it!
- Scale to [0, 1] (sklearn.preprocessing.MinMaxScaler)
- Scale to mean=0, std=1 (sklearn.preprocessing.StandardScaler)
- Clip away outliers (np.percentile(x, [1, 99]) through cutting away the lower 1perc and 1 higher percent
- Rank transformation -> numeric values will have same distance between all of them, but keeps the rank in between them (scipy.stats.rankdata)

Categorical features:
- Label encoding(features to numbers for Tree-Based) :
sklearn.preprocessing.LabelEncoder (Sorted)
pd.factorize (in order of appearance)
- Frequency encoding -> mapping values to their percentage in the dataset (or value distribution) -> helps linear and tree models -> problem with same occurances
- Feature generation -> mix features (multiplication, addition, ...)

Feature generation:
- Just try to generate new values out of the existing one with math

- Bag of words with count vectorizer
- BOF with Frequency (probabilities for Neural Networks) (columwise) TF
- BOF inverted idf = np.log(x.shape[0] / (x>0).sum(0) iDF
- Used Together TF+iDF
- N-grams we combine N-Words and make a BOF, we do that for every combination

- Text preprocessing:
	- lowercase
	- lemmetaziation -> words that are near follow a common word
	- Stemming -> find common denominator string
	- stopwords
	
- Stopwords -> remove not needed words