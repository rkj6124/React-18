const ErrorExample = () => {
  let count = 0
  const handleClick = () => {
    count += 1
    console.log(count)
  }
  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>
        increment
      </button>
    </>
  )
}

export default ErrorExample
