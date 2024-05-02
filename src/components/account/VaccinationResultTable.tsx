import { IVaccinationResultData } from '@/app/(mainPage)/(account)/vaccine-registration-result/page';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { FC } from 'react';

interface IProp {
  data: IVaccinationResultData[];
}

const VaccinationResultTable: FC<IProp> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, fontSize: '16px !impor' }} aria-label="vaccine_table">
        <TableHead sx={{ backgroundColor: '#EEEEEE' }}>
          <TableRow sx={{ fontWeight: 500 }}>
            <TableCell size="small" align="center">
              STT
            </TableCell>
            <TableCell align="center">Họ và tên</TableCell>
            <TableCell align="center">Ngày sinh </TableCell>
            <TableCell align="center">Giới tính</TableCell>
            <TableCell align="center">Số CMND/CCCD/Mã định danh công dân</TableCell>
            <TableCell align="center">Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell size="small" align="center">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.fullName}</TableCell>
              <TableCell align="center">{row.dob}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.citizenID}</TableCell>
              <TableCell align="center">
                <Typography
                  sx={{
                    backgroundColor: '#E8EAF6',
                    borderRadius: '30px',
                    border: '1px solid #3F51B5'
                  }}
                >
                  {row.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VaccinationResultTable;
