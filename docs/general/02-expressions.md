---
sidebar_label: Expressions
sidebar_class_name: green
---
  
# Expressions

Expression is a [general concept](../concepts) used in several places of the Influenzanet Survey System.
Expressions provide dynamic property evaluation for the survey logic and logic in study rules.

They are represented as a hierarchical data structure (an expression can contain and use the results of nested expressions as arguments) 
in 2 forms in the survey System : Expression and ExpressionArg.

## Expression

**Expression** is represents an operation (possibly nested) to be evaluated later by the system (in the Survey or Study engine) to produce a value (often boolean but not always) or a side effect (an action like sending a message or assigning a survey).

An **Expression** is a simple data structure containing a `name` field with the name of the function to call and a `data` field containing the list of parameters of the call using an `ExpressionArg` (each entry of the list must be an ExpressionArg).

## ExpressionArg

An **ExpressionArg** is a data structure used to represent an argument value of an Expression (each entry of the `data` field of an expression is an *ExpressionArg*). It can contain a expression or a literal value.
*ExpressionArg* are used when the expected value can be a fixed value (string or numeric) or an *Expression*.

ExpressionArg definition is (typescript notation is used, '?' after the name means it's an optional value)
```ts
{
    dtype?: 'exp' | 'num' | 'str'
    str?: string
    num?: number
    exp?: Expression
}

````

The `dtype` field indicate what kind of value the ExpressionArg contains, if `dtype` is missing then the ExpressionArg must have a string value in `str` field.

Examples:

A string :
```json
{
    "str":"This is a string based ExpressionArg"
}
```

Note: the `dtype` field is not necessary in case of string value.

A numeric value
```json
{
    "dtype":"num",
    "num":12345
}
```

An expression for the logical operation '1 AND 1', the numeric value 1 act for boolean value `true`.
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

To make it easier to read the expressions definition we will use a function signature representation 
`function_name( argument1, argument2, ?optional):return_type` equivalent of the Expression data structure:

 ```json
{
    name: 'function_name',
    data: [
        argument1,
        argument2
    ]
}

 ```

`return_type` can eventually inform about the kind of value returned by the expression 
An argument prefixed by '?' mark is optional


## Common Argument types

Several types of arguments can be provided

- `item_key`: the key path of the item of the survey (i.e. the fully qualified name of the item, from the survey root)
- `rg_key` : The response component path in the item from the root component (the full path of the response from the root). It always starts with the 'rg.' because the response Group component must have the 'rg' key.

For example,

If you have an Item named 'Q1', in a survey named 'intake' (without question group), item_key will be 'intake.Q1'
If this Q1 is a single choice question (only one response component), `rg_key` will be 'rg.scg', for a multiple Choice 'rg.mcg'

These path-like identifiers are described in the [Survey Structure](../survey-engine/structure) page.
