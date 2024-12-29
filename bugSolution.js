```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here
    if (count < 5) {
      setCount(count + 1);
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```