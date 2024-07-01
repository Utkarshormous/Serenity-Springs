import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No Discount' },
          { value: 'with-discount', label: 'With Discount' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort bY name(A-Z)' },
          { value: 'name-desc', label: 'Sort bY name(Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort bY price(Low First)' },
          { value: 'regularPrice-desc', label: 'Sort bY price(high First)' },
          { value: 'maxCapacity-asc', label: 'Sort By capacity(low first)' },
          { value: 'maxCapacity-desc', label: 'Sort By capacity(high first)' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
