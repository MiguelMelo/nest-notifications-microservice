import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationsBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 140)
  content: string;

  @IsNotEmpty()
  category: string;
}
