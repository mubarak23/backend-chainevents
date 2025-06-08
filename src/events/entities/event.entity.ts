// src/events/entities/event.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ name: 'event_onchain_id', nullable: true })
  eventOnchainId: string;

  @Column({ nullable: true })
  location: string;

  @Column({ name: 'event_owner', nullable: true })
  eventOwner: string;

  @Column({ name: 'event_email' })
  eventEmail: string;

  @Column({ name: 'require_approval', default: true })
  requireApproval: boolean;

  @Column({ name: 'open_for_registration', default: true })
  openForRegistration: boolean;

  @Column({ name: 'event_capacity', type: 'int', nullable: true })
  eventCapacity: number;

  @Column({ nullable: true })
  ticket: string;

  @Column({ name: 'event_type' })
  eventType: string;

  @Column({ name: 'event_mode' })
  eventMode: string;

  @Column({ name: 'ticket_amount', type: 'int', nullable: true })
  ticketAmount: number;

  @Column({ name: 'event_start_date', nullable: true })
  eventStartDate: string;

  @Column({ name: 'event_end_date', nullable: true })
  eventEndDate: string;

  @Column({ name: 'event_image_url', nullable: true })
  eventImageUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
