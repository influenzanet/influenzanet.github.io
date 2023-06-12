---
sidebar_label: Expressions
sidebar_class_name: green
---
# Survey Engine Expressions

**Expression** are tree structures to represent operation to be evaluated at runtime and can produce a value. They provides dynamic property evaluation for the survey logic.

An **Expression** is a simple structure that can be either:
- A typed literal value (numerical, string)
- A call, with a `name` and a field `data` set of parameters with a list of `Expression`
