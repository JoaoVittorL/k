interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onChange }: SearchProps) => {
  return (
    <div>
      <input
        className="text-black"
        type="text"
        placeholder="Buscar valores"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
