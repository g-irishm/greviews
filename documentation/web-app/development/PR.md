# PR Format
When creating a PR, ensure that the following criterias are fulfilled.

## Title
The title of the PR should be of the format:  
`[type]:[Issue number]: [short description]`

Example:  

- FEAT:34: Added option to update profile  
- BUG:12: Fixed name not visible in profile post login

You can find the list of issue types in the document: [Issues](./Issue.md)

## Description
The description of the PR should contain the following format

```
#[Issue Number]

**Description**
[Explain in detail here the problems addressed in this PR]
```

Example

```
Issue #34

#Description
Added option to update profile

```

## Commit
- Ensure all the commits are squashed to one commit.
- Ensure the commit pattern as mentioned in the document is followed: [Commit Pattern](./Commit.md)
