import { ApiProperty } from '@nestjs/swagger';

export class ApiResult<T> {
  @ApiProperty({ description: 'resultCode', default: 200 })
  resultCode: number;
  @ApiProperty({ description: 'resultData' })
  resultData: T;
  @ApiProperty({ description: 'resultMsg', default: 'success' })
  resultMsg: 'success';
}