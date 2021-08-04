/* eslint-disable */
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/create-agent.dto'
import { UpdateAgentDto } from './dto/update-agent.dto'
import { Agent } from './interface/agent.interface';

@Controller('agents')
export class AgentsController {

    // inject the agent service
    constructor(private readonly agentsService: AgentsService){}

    // endpoints
    
    @Get() // dependency Get
    findAll(): Promise<Agent[]>{
        return this.agentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.agentsService.findOne(id);
    }

    @Post()
    create(@Body() createAgentDto: CreateAgentDto){
        return this.agentsService.create(createAgentDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto){
        return `update agent with id: ${id} firstname: ${updateAgentDto.firstname} lastname: ${updateAgentDto.lastname}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.agentsService.remove(id);
    }
}
