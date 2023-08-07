import { useForm } from 'react-hook-form'

const SearchForm = ({ onSearch, onClear }) => {
  // utilizing the react hook form library as it's a great lib for very easily handling form state & errors. It's super lightweight too!
  const { register, handleSubmit, formState, reset } = useForm()
  const searchRegex = /^[a-zA-Z0-9\s]+$/

  const onSubmit = (data) => {
    const query = data.search
    // call callback with our query string
    onSearch(query)
  }

  const handleClear = () => {
    // on clear, reset the form and call our clear callback
    reset()
    onClear()
  }

  return (
    <form className="pt-5 pb-10 flex flex-col items-end" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end gap-2">
        <label htmlFor="search" className="sr-only">
          Search for a product
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            placeholder="Search for a product"
            className="flex-1 md: grow-0 md:min-w-[340px]"
            aria-invalid={formState.errors.search ? 'true' : 'false'}
            {...register('search', {
              required: 'Please enter a search query',
              pattern: {
                value: searchRegex, // only allows letters, numbers and spaces
                message: 'No special characters please!',
              },
            })}
          />
          {formState.isDirty && ( // show clear button when the input field has a value
            <button className="absolute top-2 right-3 reset" type="button" onClick={handleClear}>
              <span className="sr-only">Clear input</span>x
            </button>
          )}
        </div>
        <button className="primary">Search</button>
      </div>
      {/* error */}
      {formState.errors.search && (
        <span role="alert" className="text-sm text-error mt-1">
          {formState.errors.search.message}
        </span>
      )}
    </form>
  )
}

export default SearchForm
