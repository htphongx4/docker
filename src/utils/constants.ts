interface IGroupPriority {
  id: number;
  value: string;
}
export const groupPriorities: IGroupPriority[] = [
  {
    id: 1,
    value: 'Dưới 12 tuổi'
  },
  {
    id: 2,
    value: 'Từ 12 đến 18 tuổi'
  },
  {
    id: 3,
    value: 'Trên 18 tuổi'
  }
];

interface IJob {
  id: number;
  value: string;
}
const jobs: IJob[] = [
  { id: 1, value: 'Developer' },
  { id: 2, value: 'Designer' },
  { id: 3, value: 'Manager' }
];

interface ISession {
  id: number;
  value: string;
}
export const sessions: ISession[] = [
  { id: 1, value: 'Sáng' },
  { id: 2, value: 'Chiều' },
  { id: 3, value: 'Tối' }
];

interface IAttention {
  id: number;
  value: string;
}

export const attentions: IAttention[] = [
  {
    id: 1,
    value:
      'Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch tiêm chủng Vắc xin COVID - 19'
  },
  {
    id: 2,
    value:
      'Xin vui lòng kiểm tra kỹ các thông tin bắt buộc(VD: Họ và tên, Ngày tháng năm sinh, Số điện thoại, Số CMND/CCCD/Mã định danh công dân/HC ...)'
  },
  {
    id: 3,
    value:
      'Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các thông tin đã cung cấp.'
  },
  {
    id: 4,
    value:
      'Cá nhân/Tổ chức đăng ký thành công trên hệ thống sẽ được đưa vào danh sách đặt tiêm. Cơ sở y tế sẽ thông báo lịch tiêm khi có vắc xin và kế hoạch tiêm được phê duyệt. Trân trọng cảm ơn!'
  }
];
