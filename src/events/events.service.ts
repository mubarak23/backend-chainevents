// src/events/events.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  create(createEventDto: CreateEventDto) {
    const event = this.eventsRepository.create(createEventDto);
    return this.eventsRepository.save(event);
  }

  findAll() {
    return this.eventsRepository.find();
  }

  async findOne(id: number) {
    const event = await this.eventsRepository.findOneBy({ id });
    if (!event) throw new NotFoundException(`Event #${id} not found`);
    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    await this.findOne(id);
    await this.eventsRepository.update(id, updateEventDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const event = await this.findOne(id);
    return this.eventsRepository.remove(event);
  }
}
