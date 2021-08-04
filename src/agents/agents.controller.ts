/* eslint-disable */
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto'
import { UpdateAgentDto } from './dto/update-agent.dto'

@Controller('agents')
export class AgentsController {

    // endpoints
    
    @Get() // dependency Get
    findAll(){
        return 'get all agents';
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return `get agent with id: ${id}`
    }

    @Post()
    create(@Body() createAgentDto: CreateAgentDto){
        return `create agent - firstname:  ${createAgentDto.firstname}, lastname: ${createAgentDto.lastname}`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto){
        return `update agent with id: ${id} firstname: ${updateAgentDto.firstname} lastname: ${updateAgentDto.lastname}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return `delete agent with id: ${id}`;
    }
}
