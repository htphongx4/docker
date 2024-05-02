import { FC, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  styled,
  tableCellClasses
} from '@mui/material';
import { IDistrict, IProvince, IWard } from '@/types/address';
import { IInjectionPoint, IInjectionPointColumn } from '@/types/injection-point';

interface ITableProp {
  columns: IInjectionPointColumn[];
  data: IInjectionPoint[];
  onEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const InjectionPointTable: FC<ITableProp> = ({ columns, data, onEdit }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }));
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
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => onEdit(true)}
                >
                  {columns.map((column) => {
                    const value = row[column.id as keyof typeof row];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {(value as IProvince)?.province_name && (
                          <Typography>{(value as IProvince).province_name}</Typography>
                        )}
                        {(value as IDistrict)?.district_name && (
                          <Typography>{(value as IDistrict).district_name}</Typography>
                        )}
                        {(value as IWard)?.ward_name && (
                          <Typography>{(value as IWard).ward_name}</Typography>
                        )}
                        {!(
                          (value as IProvince)?.province_name ||
                          (value as IDistrict)?.district_name ||
                          (value as IWard)?.ward_name
                        ) && <Typography>{value as string | number}</Typography>}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
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

export default InjectionPointTable;
