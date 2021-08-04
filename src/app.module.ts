import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentsController } from './agents/agents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
@Module({
  imports: [MongooseModule.forRoot(config.db_path)],
  controllers: [AppController, AgentsController],
  providers: [AppService],
})
export class AppModule {}
