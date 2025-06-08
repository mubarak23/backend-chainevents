// src/events/dto/create-event.dto.ts
import { IsBoolean, IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() eventOnchainId?: string;
  @IsOptional() @IsString() location?: string;
  @IsOptional() @IsString() eventOwner?: string;

  @IsEmail()
  eventEmail: string;

  @IsOptional() @IsBoolean() requireApproval?: boolean = true;
  @IsOptional() @IsBoolean() openForRegistration?: boolean = true;

  @IsOptional() @IsInt() eventCapacity?: number;
  @IsOptional() @IsString() ticket?: string;

  @IsString()
  eventType: string;

  @IsString()
  eventMode: string;

  @IsOptional() @IsInt() ticketAmount?: number;
  @IsOptional() @IsString() eventStartDate?: string;
  @IsOptional() @IsString() eventEndDate?: string;
  @IsOptional() @IsString() eventImageUrl?: string;
}
