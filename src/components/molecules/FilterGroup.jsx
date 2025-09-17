import Button from "../atoms/Button";

function FilterGroup({currentFilter, setFilter}) {

  const filter = ['all', 'completed', 'active'];

  return (
    filter.map((f) =>(
      <Button 
      key={f}
      variant={currentFilter === f ? "primary" : "secondary"}
      onClick={() => setFilter(f)}

      >{f == 'all' ? 'tutti' : f == 'active' ? 'attive' : 'completate'}</Button>
    ))
  );
}
export default FilterGroup;
