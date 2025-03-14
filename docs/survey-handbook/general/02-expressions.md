---
sidebar_label: Expressions
sidebar_class_name: green
---
  
# Expressions

Expression is a [general concept](./concepts) used in several places of the Influenzanet Survey System.
Expressions provide dynamic property evaluation for the survey logic and logic in study rules (on the backend side inside the study service).

They are represented as a hierarchical data structure (an expression can contain and use the results of nested expressions as arguments) 
in two forms in the survey System : `Expression` and `ExpressionArg`.

## Expression

**Expression** represents an operation that will later be evaluated by the [Survey Engine](../survey-engine/) or [Study Service](../study-service/)) to produce a value (often boolean but not always) or a side effect (an action such as sending a message or assigning a survey).

An **Expression** is a simple data structure containing a `name` field with the name of the operation to be evaluated and a `data` field containing the list of parameters of the call using an `ExpressionArg` (each entry of the argument list must be an `ExpressionArg`).

## ExpressionArg

An **ExpressionArg** is a data structure used to define an argument value of an Expression (each entry of the `data` field of an expression is an *ExpressionArg*). It can contain an expression or a literal value.
*ExpressionArg* are used when the expected value can be a fixed value (string or numeric) or an *Expression* as in [Survey Item Components properties](../survey-engine/components/overview).

ExpressionArg definition is (typescript notation is used, '?' after the name means it's an optional value)
```ts
{
    dtype?: 'exp' | 'num' | 'str'
    str?: string
    num?: number
    exp?: Expression
}

````

The `dtype` field indicates what type of value the ExpressionArg contains, if `dtype` is missing then the ExpressionArg must have a string value in the `str` field.

Examples:

A string :
```json
{
    "str":"This is a string based ExpressionArg"
}
```

Note: The `dtype` field is required for a string value, when only the `str` field is provided.

A numeric value
```json
{
    "dtype":"num",
    "num":12345
}
```

An expression for the logical operation '1 AND 1', where the numeric value 1 acts as the boolean value `true`.
```json
{
    "dtype":"exp",
    "exp": {
        "name": "and",
        "data":[
            {"dtype":"num", "num": 1},
            {"dtype":"num", "num": 1}
        ]
    }
}
```

## Expression definition notation

To make the expressions definition easier to read we will use a function signature notation as :

```
`function_name( argument1, argument2, ?optional):return_type`
```

 which is equivalent of the Expression data structure:


 ```json
{
    name: 'function_name',
    data: [
        argument1,
        argument2
    ]
}

 ```

The `return_type` can also give information about the type of value returned by the expression.
An argument prefixed by '?' character is optional.

## Common argument types

Several types of arguments can be specified:

- `item_key`: The key path of the survey item (i.e. the fully qualified name of the item, from the survey root)
- `rg_key` : The path of the response component of a survey item from the root component (the full path of the response from the root). It always starts with the 'rg.' because, by convention, the response Group component must have the 'rg' key.

For example,

If you have an item named 'Q1', in a survey named 'intake' (with no question group), item_key will be 'intake.Q1'
If this Q1 is a single choice question (only one response component), `rg_key` will be 'rg.scg', and 'rg.mcg' for a multiple Choice question.

These path-like identifiers are described in the [Survey Structure](../survey-engine/structure) page.
