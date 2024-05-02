'use client';
import { FC } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks';
import Link from 'next/link';
import { Box, Stack, Typography } from '@mui/material';
interface IMenuItem {
  id: number;
  title: string;
  path?: string;
  leftIcon?: any;
  rightIcon?: any;
  subTitle?: string;
  subMenuItems?: IMenuItem[];
}

const DropdownMenu: FC<IMenuItem> = ({
  id,
  title,
  path,
  leftIcon,
  subTitle,
  rightIcon,
  subMenuItems
}) => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
  return (
    <Box sx={{ height: '100%' }}>
      <Button {...bindTrigger(popupState)} sx={{ height: '100%' }}>
        <Stack direction={'row'} key={id} color={'#fff'}>
          <Typography textTransform={'none'} fontSize={'15px'}>
            {title}
          </Typography>
          {rightIcon}
        </Stack>
      </Button>
      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '12px'
          }
        }}
      >
        {subMenuItems?.map((item, index) => {
          return (
            <MenuItem onClick={popupState.close} key={index}>
              <Link href={item.path ? item.path : ''} style={{ textDecoration: 'none' }}>
                <Stack
                  direction={'row'}
                  key={item.id}
                  color={'#000'}
                  alignItems={'center'}
                  spacing={2}
                  padding={2}
                >
                  {item.leftIcon}
                  <Stack direction={'column'}>
                    <Typography fontSize={'16px'}>{item.title}</Typography>
                    <Typography fontSize={'12px'}>{item.subTitle}</Typography>
                  </Stack>
                  {item.rightIcon}
                </Stack>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default DropdownMenu;
