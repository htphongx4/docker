import { FC, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import { IInjectionPoint } from '@/mockData/ InjectionPoints';
import { IDistrict, IProvince, IWard } from '@/types/address';

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'center';
}

interface ITableProp {
  columns: Column[];
  data: IInjectionPoint[];
}

const VaccinationPointTable: FC<ITableProp> = ({ columns, data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id as keyof typeof row];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {(value as IProvince)?.province_name && (
                          <span>{(value as IProvince).province_name}</span>
                        )}
                        {(value as IDistrict)?.district_name && (
                          <span>{(value as IDistrict).district_name}</span>
                        )}
                        {(value as IWard)?.ward_name && <span>{(value as IWard).ward_name}</span>}
                        {!(
                          (value as IProvince)?.province_name ||
                          (value as IDistrict)?.district_name ||
                          (value as IWard)?.ward_name
                        ) && <span>{value as string | number}</span>}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default VaccinationPointTable;
