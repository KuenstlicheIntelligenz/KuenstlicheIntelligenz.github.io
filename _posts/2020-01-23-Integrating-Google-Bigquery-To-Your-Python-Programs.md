---
layout:     post
title:      2020-01-23-Integrating-Google-Bigquery-To-Your-Python-Programs
date:       2020-01-23 09:53:19
author:     Bab
summary:    Pyton Bigquery Integration
categories: Google Cloud, Bigquery, SQL, Python
thumbnail: beer
tags:
 - Google Cloud
 - Bigquery, 
 - SQL, 
 - Python
---

# Draft

# Summary
I wanted to integrate Google Cloud Bigquery in my python programs. Usually i need the following functions:
'table_exists(table)
table_create(table)
table_insert(row) # What about costs?
'

# What about costs?

dry_run -> Estimate the queried mb to determine the costs.

# Easiest way to get a table as a pandas df
```python

