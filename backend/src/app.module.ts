import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoalsModule } from './goals/goals.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';
import { FirebaseService } from './auth/firebase/firebase.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GoalsModule, CategoriesModule, CommonModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
