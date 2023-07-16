import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoalsModule } from './goals/goals.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [GoalsModule, CategoriesModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
