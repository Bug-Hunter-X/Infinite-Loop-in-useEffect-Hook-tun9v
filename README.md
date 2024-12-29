# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that leads to an infinite loop. The bug arises from the fact that `setCount` within the `useEffect` function causes the component to re-render, triggering the `useEffect` again. This creates a continuous cycle that freezes the browser.

## Bug Description
The bug is located in the `MyComponent` function. Inside the `useEffect` hook, the state `count` is updated in an uncontrolled manner, resulting in a continuous re-rendering that never stops.

## Solution
The solution ensures that the `setCount` function is only called under controlled circumstances, preventing the infinite loop.