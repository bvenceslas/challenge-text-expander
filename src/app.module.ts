/* eslint-disable */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AgentsController } from './agents/agents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { AgentsModule } from './agents/agents.module';
@Module({
  imports: [AgentsModule, MongooseModule.forRoot(config.db_path)],
  controllers: [AppController/*, AgentsController*/],
  providers: [AppService],
})
export class AppModule {}
