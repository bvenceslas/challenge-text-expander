/* eslint-disable */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';
import { AgentSchema } from './schema/agent.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Agent', schema: AgentSchema }])],
  controllers: [AgentsController],
  providers: [AgentsService],
})
export class AgentsModule {}
