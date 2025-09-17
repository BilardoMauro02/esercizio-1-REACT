import Button from "../atoms/Button";

function FilterGroup() {

  const filter = ['all', 'completed', 'active'];

  return (
    filter.map((f) =>(
      <Button key={f}>{f === 'all' ? 'tutti' : f === 'completed' ? 'attive' : 'completate'}</Button>
    ))
  );
}
export default FilterGroup;
