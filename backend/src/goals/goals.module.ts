import { Module } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { GoalsController } from './goals.controller';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [CommonModule, AuthModule],
  controllers: [GoalsController],
  providers: [GoalsService]
})
export class GoalsModule {}
