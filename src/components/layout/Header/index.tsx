import DropdownMenu from '@/components/base/DropdownMenu';
import AccountMenu from '@/components/layout/Header/AccountMenu';
import { AppBar, Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EastIcon from '@mui/icons-material/East';

interface IMenuItem {
  id: number;
  title: string;
  path?: string;
  leftIcon?: any;
  rightIcon?: any;
  subTitle?: string;
  subMenuItems?: IMenuItem[];
}

const Header: FC = () => {
  const menuItems: IMenuItem[] = [
    {
      id: 1,
      title: 'Trang chủ',
      path: '/'
    },
    {
      id: 2,
      title: 'Đăng ký tiêm',
      path: '/vaccine-registration'
    },
    {
      id: 3,
      title: 'Tra cứu',
      rightIcon: <Image src={'/svg/arrow_down.svg'} height={20} width={20} alt="arrowIcon" />,
      subMenuItems: [
        {
          id: 1,
          title: 'Tra cứu chứng nhận tiêm',
          subTitle: 'Cập nhật nhanh và chính xác nhất',
          path: '/vaccine-certificate',
          leftIcon: (
            <Image src={'/svg/user-group-cpurple.svg'} height={36} width={36} alt="userGroupIcon" />
          ),
          rightIcon: <EastIcon sx={{ color: 'blue' }} />
        },
        {
          id: 2,
          title: 'Tra cứu kết quả đăng ký',
          subTitle: 'Cập nhật nhanh và chính xác nhất',
          path: '/vaccine-registration-result',
          leftIcon: (
            <Image src={'/svg/user-group-cblue.svg'} height={36} width={36} alt="userGroupIcon" />
          ),
          rightIcon: <EastIcon sx={{ color: '#1E88E5' }} />
        }
      ]
    },
    {
      id: 4,
      title: 'Tài liệu'
    }
  ];
  return (
    <AppBar
      position="static"
      sx={{
        py: '16px',
        background:
          'linear-gradient(90deg, rgba(205,26,35,1) 0%, rgba(0,56,255,1) 100%, rgba(72,0,255,1) 100%)'
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Image src={'/svg/logo.svg'} alt="logo" width={42} height={50} />
            <Typography textTransform={'uppercase'}>Cổng thông tin tiêm chủng covid</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems={'center'} height={'50px'}>
            {menuItems &&
              menuItems.map((item) => {
                if (item.subMenuItems) {
                  return <DropdownMenu {...item} />;
                }
                return (
                  <Link href={item.path ? item.path : ''} style={{ textDecoration: 'none' }}>
                    <Stack direction={'row'} key={item.id} color={'#fff'}>
                      <Typography fontSize={'15px'}>{item.title}</Typography>
                      {item.rightIcon}
                    </Stack>
                  </Link>
                );
              })}
            <AccountMenu />
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
