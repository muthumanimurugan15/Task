const Pagination = ({ total, perPage, current, onChange }) => {
  const totalPages = Math.ceil(total / perPage)

  return (
    <div>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          disabled={current === i + 1}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination
