/* eslint-disable */
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

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
    create(){
        return 'create agent';
    }

    @Put(':id')
    update(@Param('id') id: string){
        return `update agent with id: ${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return `delete agent with id: ${id}`;
    }
}
