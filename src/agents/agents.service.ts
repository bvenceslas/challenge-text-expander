
/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAgentDto } from './dto/create-agent.dto';
import { Agent } from './interface/agent.interface';

@Injectable()
export class AgentsService {
    // inject Agent Model into the AgentsService
    constructor(@InjectModel('Agent') private agentModel: Model<Agent>) {}

    // CRUD methods

    // save an agent
    async create(createAgentDto: CreateAgentDto): Promise<Agent>{
        const newAgent = new this.agentModel(createAgentDto);
        return await newAgent.save();
    }

    // find all agents
    async findAll(): Promise<Agent[]> {
        return await this.agentModel.find().exec();
    }

    // find one agent by id
    async findOne(id: String): Promise<Agent> {
        return await this.agentModel.findOne({ _id:id }).exec();
    }

    // find one agent by name
    async finAgent(name: string):Promise<Agent>{
        return await this.agentModel.findOne({ name }).exec();
    }

    // update an agent
    // async update(id: string, updateAgentDto: UpdateAgentDto): Promise<Agent> {
    //     return this.agentModel
    //         .updateOne({ id }, ...updateAgentDto, { new: true })
    //         .exec();
    // }

    // delete an agent
    async remove (id: string): Promise<Agent>{
        return this.agentModel.remove({ _id:id }).exec();
    }
}