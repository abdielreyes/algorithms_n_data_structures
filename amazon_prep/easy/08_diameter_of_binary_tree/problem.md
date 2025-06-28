# Diameter of binary tree

Given the **root** of a binary tree, return the _length_ of the longest path between any two nodes in a tree. \
This path may or may not pass though the _root_.

The length of a path between two nodes is represented by the number of edges between them. \

## Example 1

```mermaid
graph TD;
    1 --> 2
    1 --> 3
    2 --> 4
    2 --> 5

```

`Input: root = [1,2,3,4,5]`\
`Output: 3`\
`Explaination: 3 is the length of the path [4,2,1,3] or [5,2,1,3]`\

## Example 2

```mermaid
graph TD;
    A --> B
    A --> C
    B --> D
    B --> E
    D --> H
    H --> I
    H --> J
    E --> F
    F --> G

```

`Input: root = [A,B,C,D,E,F,G,I,J]`\
`Output: 7`\
`Explaination: 7 is the length of the path [(I or J),H,D,B,E,F,G]`\
