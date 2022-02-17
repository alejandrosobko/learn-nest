import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoffeesModule, TypeOrmModule.forRoot({
    type: 'postgres', // type of our database
    host: 'localhost', // database host
    port: 5432, // database host
    username: 'postgres', // username
    password: 'pass123', // user password
    database: 'postgres', // name of our database,
    autoLoadEntities: true, // models will be loaded automatically 
    synchronize: true, // your entities will be synced with the database(recommended: disable in prod) - cada tabla o col nueva se crea en la DB al prender el server.
  })],
  controllers: [AppController],
  providers: [AppService],  // la idea de un "provider" es injectar dependencia
})
export class AppModule {}
