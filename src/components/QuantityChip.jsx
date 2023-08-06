const QuantityChip = ({ quantity }) => {
  const lowStock = quantity <= 50

  return (
    <div className={`rounded-2xl text-sm px-2 py-1 ${lowStock ? 'bg-warning' : 'bg-success'}`}>
      <span>Left: {quantity}</span>
    </div>
  )
}

export default QuantityChip
